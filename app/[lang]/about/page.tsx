import React from "react";
import { Metadata } from "next";
import AboutPenta from "./_components/AboutPenta";
import WhyWeStandOut from "./_components/WhyWeStandOut";
import BringIdeastoLife from "./_components/BringIdeastoLife";

export const metadata: Metadata = {
    title: "About Penta Studio - Software Development Company | Expert Team",
    description:
        "Learn about Penta Studio's mission, expert team, and software development expertise. We specialize in web applications, mobile apps, AI solutions, and cloud services for businesses worldwide.",
    keywords: [
        "software development company",
        "web application development",
        "mobile app developers",
        "AI solutions provider",
        "cloud computing services",
        "digital transformation agency",
        "custom software development",
        "enterprise software solutions",
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
        canonical: "/about",
    },
    openGraph: {
        title: "About Penta Studio - Software Development Experts",
        description:
            "Learn about Penta Studio's mission, team, and expertise in software development.",
        type: "website",
        locale: "en_US",
        siteName: "Penta Studio",
        url: "https://pentastudio.tech/about",
        images: [
            {
                url: "/og-about-image.jpg",
                width: 1200,
                height: 630,
                alt: "Penta Studio - Software Development Team",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Penta Studio - Software Development Experts",
        description:
            "Learn about Penta Studio's mission, team, and expertise in software development.",
        creator: "@PentaStd", // Replace with your actual Twitter handle
        images: ["/twitter-about-image.jpg"], // Create an optimized Twitter image
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
    "@type": "Organization",
    name: "Penta Studio",
    url: "https://pentastudio.tech",
    description:
        "Software development company specializing in web applications, mobile apps, and cloud solutions.",
    address: {
        "@type": "PostalAddress",
        // Add your actual address here
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+201551850855",
        contactType: "customer service",
    },
    sameAs: [
        "https://www.linkedin.com/company/penta-std/",
        "https://x.com/PentaStd",
        "https://github.com/Penta-Studio",
    ],
};

export default function page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="relative w-full min-h-screen overflow-hidden">
                <AboutPenta />
                <WhyWeStandOut />
                <section id="contact" className="scroll-mt-16">
                    <BringIdeastoLife />
                </section>
            </div>
        </>
    );
}
