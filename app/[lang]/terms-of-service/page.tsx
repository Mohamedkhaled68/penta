import React from "react";
import { Metadata } from "next";
import { AnimateOnView } from "@/components/global components/AnimateOnView";
import { getDictionary } from "../dictionaries";

export const metadata: Metadata = {
    title: "Terms of Service - Penta Studio | Service Agreement",
    description:
        "Read Penta Studio's terms of service outlining the conditions for using our software development services, intellectual property rights, and service agreements.",
    keywords: [
        "terms of service",
        "service agreement",
        "terms and conditions",
        "software development terms",
        "service conditions",
        "legal terms",
        "client agreement",
        "service policy",
    ],
    authors: [{ name: "Penta Studio" }],
    creator: "Penta Studio",
    publisher: "Penta Studio",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://pentastudio.tech"),
    alternates: {
        canonical: "/terms-of-service",
    },
    openGraph: {
        title: "Terms of Service - Penta Studio",
        description:
            "Read Penta Studio's terms of service and conditions for using our software development services.",
        type: "website",
        locale: "en_US",
        siteName: "Penta Studio",
        url: "https://pentastudio.tech/terms-of-service",
        images: [
            {
                url: "/og-terms-image.jpg",
                width: 1200,
                height: 630,
                alt: "Penta Studio Terms of Service",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service - Penta Studio",
        description:
            "Read Penta Studio's terms of service and conditions for using our software development services.",
        creator: "@PentaStd",
        images: ["/twitter-terms-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

// Add JSON-LD structured data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    description:
        "Penta Studio terms of service explaining service conditions, intellectual property rights, and client agreements.",
    url: "https://pentastudio.tech/terms-of-service",
    publisher: {
        "@type": "Organization",
        name: "Penta Studio",
        url: "https://pentastudio.tech",
        logo: "https://pentastudio.tech/logo.png",
        contactPoint: {
            "@type": "ContactPoint",
            email: "penta.studioo@gmail.com",
            telephone: "+358 50 5300004",
            contactType: "customer service",
        },
    },
    datePublished: "2025-05-10",
    dateModified: "2025-05-10",
};

export default async function TermsOfServicePage({
    params,
}: {
    params: Promise<{ lang: "en" | "ar" }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const termsEntries = Object.entries(dict.terms_page);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="relative w-full min-h-screen overflow-x-hidden">
                <div className="w-full flex flex-col pt-40 max-md:pt-24 px-20 max-md:px-6 pb-20">
                    <AnimateOnView animation="up">
                        <h1 className="text-5xl max-md:text-4xl w-max font-bold text-start block bg-gradient-to-t from-[#29E68C] via-[#29E68C] to-[#F6F6F7] bg-clip-text text-transparent mb-4">
                            {lang === "en" ? "Terms of Service" : "شروط الخدمة"}
                        </h1>
                    </AnimateOnView>

                    <AnimateOnView animation="up" delay={0.1}>
                        <p className="text-lg my-4">
                            {lang === "en" ? "Effective Date" : "تاريخ السريان"}
                            : <span className="text-[#29E68C]">10/05/2025</span>
                        </p>
                    </AnimateOnView>

                    <div className="w-5/6 max-md:w-full space-y-7 max-md:space-y-8">
                        <AnimateOnView animation="up" delay={0.2}>
                            <p className="text-lg leading-relaxed">
                                {lang === "en"
                                    ? "Welcome to Penta Studio. By accessing or using our website, products, and services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully before proceeding."
                                    : "مرحباً بك في Penta Studio. باستخدام موقعنا الإلكتروني ومنتجاتنا وخدماتنا، فإنك توافق على الالتزام بشروط الخدمة التالية. يرجى قراءتها بعناية قبل المتابعة."}
                            </p>
                        </AnimateOnView>

                        {termsEntries.map(([title, content], index) => {
                            const paragraphs = content.split("\n");

                            return (
                                <AnimateOnView
                                    key={title}
                                    animation="up"
                                    delay={0.3 + index * 0.1}
                                >
                                    <section className="space-y-2">
                                        <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">
                                            {title}
                                        </h2>
                                        {paragraphs.map((paragraph, pIndex) => {
                                            // Check if paragraph is a bullet point
                                            if (
                                                paragraph.trim().startsWith("-")
                                            ) {
                                                // If this is the first bullet in a series, create a ul
                                                const bullets =
                                                    paragraphs.filter((p) =>
                                                        p.trim().startsWith("-")
                                                    );
                                                if (
                                                    pIndex ===
                                                    paragraphs.findIndex((p) =>
                                                        p.trim().startsWith("-")
                                                    )
                                                ) {
                                                    return (
                                                        <ul
                                                            key={pIndex}
                                                            className="space-y-2 ml-6 list-disc"
                                                        >
                                                            {bullets.map(
                                                                (
                                                                    bullet,
                                                                    bIndex
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            bIndex
                                                                        }
                                                                        className="leading-relaxed"
                                                                    >
                                                                        {bullet
                                                                            .trim()
                                                                            .substring(
                                                                                1
                                                                            )
                                                                            .trim()}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    );
                                                }
                                                return null; // Skip subsequent bullets as they're handled above
                                            } else if (paragraph.trim()) {
                                                // Regular paragraph
                                                return (
                                                    <p
                                                        key={pIndex}
                                                        className="leading-relaxed whitespace-pre-line"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                );
                                            }
                                            return null;
                                        })}
                                    </section>
                                </AnimateOnView>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
