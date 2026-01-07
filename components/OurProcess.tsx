"use client";
import React from "react";
import MailTitle from "./global components/MailTitle";
import OurProcessCards from "./OurProcess/OurProcessCards";
import { useDictionary } from "@/hooks/useDictionary";

export default function OurProcess() {
    const dictionary = useDictionary();

    return (
        <div className="w-full h-max relative flex flex-col gap-2 items-center justify-between overflow-hidden pb-16 px-20 max-md:px-6">
            <MailTitle
                title={dictionary?.ourProcess?.title || "Our Process"}
                subtitle={
                    dictionary?.ourProcess?.subtitle ||
                    "From vision to launch, built for results"
                }
                descr={
                    dictionary?.ourProcess?.description ||
                    "At Penta Studio, our process is designed to transform your ideas into secure, scalable, and user-centric digital solutions. We follow a structured approach that ensures quality, transparency, and collaboration at every stage."
                }
            />
            <OurProcessCards />
        </div>
    );
}
