import type { Metadata } from "next";
import Script from "next/script";
import ClientLayout from "@/components/ClientLayout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

type Params = Promise<{ lang: string }>;

export const metadata: Metadata = {
    title: {
        default: "Penta Studio - Transform Ideas Into Secure Digital Products",
        template: "%s",
    },
    description:
        "Professional software development company specializing in modern web applications, mobile apps, and cloud solutions for businesses worldwide.",
    keywords: [
        "web development",
        "mobile app development",
        "cloud solutions",
        "digital transformation",
        "custom software",
        "React development",
        "enterprise software",
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
        canonical: "/",
        languages: {
            "en-US": "/en-US",
            en: "/en",
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://pentastudio.tech",
        siteName: "Penta Studio",
        title: "Penta Studio - Transform Ideas Into Secure Digital Products",
        description:
            "Professional software development company specializing in modern web applications, mobile apps, and cloud solutions for businesses worldwide.",
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
            "Professional software development company specializing in modern web applications, mobile apps, and cloud solutions.",
        images: ["/main2.webp"],
        creator: "@PentaStd",
        site: "@PentaStd",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [{ url: "/Logo.svg", sizes: "any", type: "image/svg+xml" }],
        apple: [{ url: "/Logo.svg", sizes: "180x180", type: "image/svg+xml" }],
        other: [
            {
                rel: "mask-icon",
                url: "/Logo.svg",
                color: "#29E68C",
            },
        ],
    },
    // manifest: '/site.webmanifest',
    other: {
        "theme-color": "#060B27",
        "color-scheme": "dark",
        "msapplication-TileColor": "#060B27",
        "msapplication-config": "/browserconfig.xml",
    },
    category: "Software Development",
    classification: "Business Services",
    referrer: "origin-when-cross-origin",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Params;
}>) {
    // Structured Data for Organization
    const organizationStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Penta Studio",
        alternateName: ["Penta Studio Development", "Penta Software Studio"],
        description:
            "Professional software development company specializing in web applications, mobile apps, cloud solutions, and AI automation services for businesses worldwide.",
        // "url": "https://your-domain.com",
        logo: {
            "@type": "ImageObject",
            // "url": "https://your-domain.com/Logo.svg",
            width: 200,
            height: 60,
        },
        // "image": "https://your-domain.com/og-image.jpg",
        sameAs: [
            "https://www.linkedin.com/company/penta-std/",
            "https://x.com/PentaStd",
            "https://www.instagram.com/pentastd/",
        ],
        contactPoint: [
            {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English"],
                areaServed: "Worldwide",
            },
            {
                "@type": "ContactPoint",
                contactType: "sales",
                availableLanguage: ["English"],
                areaServed: "Worldwide",
            },
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress: "Virkakatu 8J",
            postalCode: "90570",
            addressLocality: "Oulu",
            addressRegion: "Oulu",
            addressCountry: "Finland",
        },
        foundingDate: "2025", // Update with actual founding date
        numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: "10-50", // Update with actual range
        },
        slogan: "Transform Ideas Into Secure Digital Products",
        knowsAbout: [
            "Web Development",
            "Mobile App Development",
            "Cloud Computing",
            "DevOps",
            "Artificial Intelligence",
            "Enterprise Resource Planning",
            "Customer Relationship Management",
            "Digital Transformation",
            "Software Architecture",
            "UI/UX Design",
        ],
        makesOffer: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Web Development Services",
                    description:
                        "Custom web application development using modern technologies",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Mobile App Development",
                    description:
                        "iOS and Android mobile application development",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Cloud & DevOps Services",
                    description:
                        "Cloud infrastructure and DevOps implementation",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "AI & Automation Solutions",
                    description:
                        "Artificial intelligence integration and process automation",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Management Systems Development",
                    description:
                        "Custom ERP, CRM, and business management platforms",
                },
            },
        ],
    };

    // Website structured data
    const websiteStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Penta Studio",
        alternateName: "Penta Studio - Software Development",
        // "url": "https://your-domain.com",
        description:
            "Professional software development services including web development, mobile apps, cloud solutions, and AI automation.",
        publisher: {
            "@type": "Organization",
            name: "Penta Studio",
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                // "urlTemplate": "https://your-domain.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string",
        },
        mainEntity: {
            "@type": "Organization",
            name: "Penta Studio",
        },
    };

    const { lang } = (await params) as { lang: "en" | "ar" };

    return (
        <html
            lang={lang}
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="!bg-[#060B27] text-white overflow-x-hidden"
        >
            <head>
                {/* Preconnect to external domains for performance */}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
                {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
                {/* <link rel="preconnect" href="https://www.google-analytics.com" /> */}

                {/* DNS Prefetch for external resources */}
                {/* <link rel="dns-prefetch" href="//www.google-analytics.com" /> */}
                {/* <link rel="dns-prefetch" href="//fonts.googleapis.com" /> */}

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationStructuredData),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteStructuredData),
                    }}
                />

                {/* Additional meta tags for enhanced SEO */}
                <meta name="application-name" content="Penta Studio" />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Penta Studio"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* Geo targeting - update with your actual location */}
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="latitude;longitude" />
                <meta name="ICBM" content="latitude, longitude" />

                {/* Content language */}
                <meta httpEquiv="content-language" content="en-US" />

                {/* Security headers */}
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta httpEquiv="X-Frame-Options" content="DENY" />
                <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

                {/* Cache control */}
                <meta
                    httpEquiv="Cache-Control"
                    content="public, max-age=31536000"
                />

                {/* Verification meta tags - Add your actual verification codes */}
                {/* <meta name="google-site-verification" content="your-google-verification-code" /> */}
                {/* <meta name="msvalidate.01" content="your-bing-verification-code" /> */}
                {/* <meta name="yandex-verification" content="your-yandex-verification-code" /> */}
            </head>

            <body
                className="!bg-[#060B27] text-white"
                cz-shortcut-listen="true"
                style={{
                    fontFamily:
                        lang === "ar"
                            ? "plex-regular"
                            : "Satoshi-VariableItalic",
                }}
            >
                {/* Google Analytics */}
                {process.env.NEXT_PUBLIC_GA_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script
                            id="google-analytics"
                            strategy="afterInteractive"
                        >
                            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
                        </Script>
                    </>
                )}

                {/* Google Tag Manager */}
                {process.env.NEXT_PUBLIC_GTM_ID && (
                    <>
                        <Script
                            id="google-tag-manager"
                            strategy="afterInteractive"
                        >
                            {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `}
                        </Script>
                        <noscript>
                            <iframe
                                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                                height="0"
                                width="0"
                                style={{
                                    display: "none",
                                    visibility: "hidden",
                                }}
                            ></iframe>
                        </noscript>
                    </>
                )}

                <LanguageProvider lang={lang}>
                    <ClientLayout>{children}</ClientLayout>
                </LanguageProvider>

                {/* Schema.org breadcrumb script will be injected by page components */}
                {/* Additional tracking scripts can be added here */}
            </body>
        </html>
    );
}
