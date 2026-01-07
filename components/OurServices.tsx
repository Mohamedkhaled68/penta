"use client";
import React from "react";
import MailTitle from "./global components/MailTitle";
import OurServicesComponents from "./OurServices/OurServicesComponents";
import { useDictionary } from "@/hooks/useDictionary";

export default function OurServices() {
    const dictionary = useDictionary();

    return (
        <section
            className="w-full min-h-screen relative flex flex-col gap-2 items-center justify-between overflow-hidden py-16 px-20 max-md:px-6"
            aria-labelledby="services-title"
        >
            <MailTitle
                title={dictionary?.ourServices?.title || "Our Services"}
                subtitle={dictionary?.ourServices?.subtitle || "Building Future-Ready Digital Solutions"}
                descr={dictionary?.ourServices?.description || "At Penta Studio, we don't just code; we craft comprehensive digital products that drive innovation and help businesses grow. Whether you're a startup or an established enterprise, we deliver secure, scalable, and future-proof software solutions."}
                titleTag="h2"
                subtitleTag="h3"
            />

            <div role="region" aria-label="Development services portfolio">
                <OurServicesComponents />
            </div>
        </section>
    );
}
