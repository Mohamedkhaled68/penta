"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Loading from "./global components/Loading";

const LanguagesSelector = () => {
    const { lang } = useLanguage();
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);

    const switchLanguage = () => {
        setIsLoading(true);
        const newLang = lang === "en" ? "ar" : "en";

        // Save to localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem("preferredLanguage", newLang);
        }

        // Save to cookie for middleware
        document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`; // 1 year

        // Replace the language in the current path
        const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
        router.replace(newPath);
    };

    return (
        <>
            {isLoading ? (
                <>
                    <Loading width="20" height="20" />
                </>
            ) : (
                <>
                    <span
                        className="text-[#8F9BB7] cursor-pointer hover:text-[#b4c1df] transition-colors duration-300 ease-in-out"
                        onClick={switchLanguage}
                        style={{
                            fontFamily:
                                lang === "en"
                                    ? "plex-regular"
                                    : "Satoshi-VariableItalic",
                        }}
                    >
                        {lang === "en" ? "عربي" : "EN"}
                    </span>
                </>
            )}
        </>
    );
};

export default LanguagesSelector;
