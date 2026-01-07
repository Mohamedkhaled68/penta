"use client";
import { useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";

export function useLanguagePersistence() {
    const { lang } = useParams<{ lang: string }>();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Save current language to localStorage and cookie whenever it changes
        if (lang && typeof window !== "undefined") {
            localStorage.setItem("preferredLanguage", lang);
            document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`; // 1 year
        }

        // Check if we need to redirect to preferred language
        const preferredLang =
            typeof window !== "undefined"
                ? localStorage.getItem("preferredLanguage")
                : null;

        if (
            preferredLang &&
            preferredLang !== lang &&
            (preferredLang === "en" || preferredLang === "ar")
        ) {
            const newPath = pathname.replace(`/${lang}`, `/${preferredLang}`);
            router.replace(newPath);
        }
    }, [lang, router, pathname]);
}
