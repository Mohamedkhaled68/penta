"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";

export function useDictionary() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [dictionary, setDictionary] = useState<any>(null);
    const { lang } = useParams<{ lang: "en" | "ar" }>();

    useEffect(() => {
        const fetchDictionary = async () => {
            const dictionary = await getDictionary(lang);
            setDictionary(dictionary);
        };
        fetchDictionary();
    }, [lang]);

    return dictionary;
}
