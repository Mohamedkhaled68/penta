import Feedback from "@/components/Feedback";
import HomePage from "@/components/HomePage";
import LoadingFallback from "@/components/LoadingFallback";
import OurPartners from "@/components/Our Partners";
import OurProcess from "@/components/OurProcess";
import OurServices from "@/components/OurServices";
import OurWorks from "@/components/OurWorks";
import { Metadata } from "next";
import { Suspense } from "react";

const DOMAIN = "https://pentastudio.tech";

export const metadata: Metadata = {
    title: {
        default: "Penta Studio - Transform Ideas Into Secure Digital Products",
        template: "%s | Penta Studio",
    },
    description:
        "Penta Studio helps businesses worldwide design, build, and scale modern web, mobile, and cloud-native solutions. Expert development services for digital transformation including ERP systems, mobile apps, AI automation, and DevOps infrastructure.",
    keywords: [
        "web development",
        "mobile app development",
        "cloud solutions",
        "digital transformation",
        "ERP systems",
        "CRM development",
        "DevOps services",
        "AI automation",
        "software development",
        "management systems",
    ],
    authors: [{ name: "Penta Studio" }],
    creator: "Penta Studio",
    publisher: "Penta Studio",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(DOMAIN),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        title: "Penta Studio - Transform Ideas Into Secure Digital Products",
        description:
            "Expert development services for web, mobile, and cloud-native solutions. Custom ERP systems, mobile apps, AI automation, and DevOps infrastructure.",
        siteName: "Penta Studio",
        images: [
            {
                url: "/main2.webp",
                width: 1200,
                height: 630,
                alt: "Penta Studio - Modern web development and digital solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Penta Studio - Transform Ideas Into Secure Digital Products",
        description:
            "Expert development services for web, mobile, and cloud-native solutions.",
        images: ["/main2.webp"],
        creator: "@PentaStd",
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
    verification: {
        google: "your-google-verification-code",
    },
};

// Clean Structured Data - Organization and Website only
const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${DOMAIN}/#organization`,
            name: "Penta Studio",
            description:
                "Professional software development company specializing in web, mobile, and enterprise solutions.",
            url: DOMAIN,
            logo: {
                "@type": "ImageObject",
                url: `${DOMAIN}/logo.svg`,
                width: 300,
                height: 100,
            },
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
            },
            areaServed: "Worldwide",
            foundingDate: "2020",
        },
        {
            "@type": "WebSite",
            "@id": `${DOMAIN}/#website`,
            url: DOMAIN,
            name: "Penta Studio",
            description:
                "Transform ideas into secure digital products with expert development services",
            publisher: {
                "@id": `${DOMAIN}/#organization`,
            },
        },
    ],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <div className="relative w-full min-h-screen overflow-hidden">
                <div className="relative z-10">
                    <section id="home" className="scroll-mt-16">
                        <HomePage />
                    </section>

                    <Suspense fallback={<LoadingFallback />}>
                        <section id="services" className="scroll-mt-16">
                            <OurServices />
                        </section>
                    </Suspense>

                    <Suspense fallback={<LoadingFallback />}>
                        <section id="our-work" className="scroll-mt-16">
                            <OurWorks />
                        </section>
                    </Suspense>

                    <Suspense fallback={<LoadingFallback />}>
                        <section id="our-process" className="scroll-mt-16">
                            <OurProcess />
                        </section>
                    </Suspense>

                    <Suspense fallback={<LoadingFallback />}>
                        <section id="our-partners" className="scroll-mt-16">
                            <OurPartners />
                        </section>
                    </Suspense>

                    <Feedback />
                </div>
            </div>
        </>
    );
}
