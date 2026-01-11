import React from "react";
import { Metadata } from "next";
import { AnimateOnView } from "@/components/global components/AnimateOnView";
import { getDictionary } from "../dictionaries";

export const metadata: Metadata = {
    title: "Privacy Policy - Penta Studio | Data Protection & Security",
    description:
        "Penta Studio's privacy policy outlines how we collect, use, and protect your personal information. Learn about your rights, data security measures, and our commitment to your privacy.",
    keywords: [
        "privacy policy",
        "data protection",
        "GDPR compliance",
        "personal information security",
        "data privacy",
        "software development privacy",
        "client data protection",
        "information security policy",
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
        canonical: "/privacy-policy",
    },
    openGraph: {
        title: "Privacy Policy - Penta Studio",
        description:
            "Learn how Penta Studio protects your personal information and ensures data security.",
        type: "website",
        locale: "en_US",
        siteName: "Penta Studio",
        url: "https://pentastudio.tech/privacy-policy",
        images: [
            {
                url: "/og-privacy-image.jpg",
                width: 1200,
                height: 630,
                alt: "Penta Studio Privacy Policy",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy - Penta Studio",
        description:
            "Learn how Penta Studio protects your personal information and ensures data security.",
        creator: "@pentastudio",
        images: ["/twitter-privacy-image.jpg"],
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
    name: "Privacy Policy",
    description:
        "Penta Studio privacy policy explaining data collection, usage, and protection practices.",
    url: "https://pentastudio.tech/privacy-policy",
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

export default async function PrivacyPolicyPage({
    params,
}: {
    params: Promise<{ lang: "en" | "ar" }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
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
                            {dict.privacy_page.title}
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
                                    ? "At Penta Studio, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our services."
                                    : "في Penta Studio، نحن نولي أهمية قصوى لخصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع بياناتك واستخدامها وحمايتها عند تفاعلك مع خدماتنا."}
                            </p>
                        </AnimateOnView>

                        {dict.privacy_page.sections.map((section, index) => (
                            <AnimateOnView
                                key={section.id}
                                animation="up"
                                delay={0.3 + index * 0.1}
                            >
                                <section className="space-y-2">
                                    <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">
                                        {section.id}. {section.title}
                                    </h2>

                                    {/* Section 1: Information We Collect */}
                                    {section.id === 1 &&
                                        typeof section.content === "object" &&
                                        "personalInformation" in
                                            section.content && (
                                            <>
                                                <p className="leading-relaxed">
                                                    {lang === "en"
                                                        ? "We collect various types of information to provide and improve our services, including:"
                                                        : "نقوم بجمع أنواع مختلفة من المعلومات لتقديم خدماتنا وتحسينها، بما في ذلك:"}
                                                </p>
                                                <ul className="space-y-2 ml-6 list-disc">
                                                    <li className="leading-relaxed">
                                                        <span className="text-[#29E68C] font-semibold">
                                                            {lang === "en"
                                                                ? "Personal Information :"
                                                                : "المعلومات الشخصية :"}{" "}
                                                        </span>{" "}
                                                        {
                                                            section.content
                                                                .personalInformation
                                                        }
                                                    </li>
                                                    <li className="leading-relaxed">
                                                        <span className="text-[#29E68C] font-semibold">
                                                            {lang === "en"
                                                                ? "Project Information :"
                                                                : "معلومات المشروع :"}
                                                        </span>{" "}
                                                        {
                                                            section.content
                                                                .projectInformation
                                                        }
                                                    </li>
                                                    <li className="leading-relaxed">
                                                        <span className="text-[#29E68C] font-semibold">
                                                            {lang === "en"
                                                                ? "Technical Information :"
                                                                : "المعلومات التقنية :"}
                                                        </span>{" "}
                                                        {
                                                            section.content
                                                                .technicalInformation
                                                        }
                                                    </li>
                                                    <li className="leading-relaxed">
                                                        <span className="text-[#29E68C] font-semibold">
                                                            {lang === "en"
                                                                ? "Payment Information :"
                                                                : "معلومات الدفع :"}
                                                        </span>{" "}
                                                        {
                                                            section.content
                                                                .paymentInformation
                                                        }
                                                    </li>
                                                </ul>
                                            </>
                                        )}

                                    {/* Section 2: How We Use Your Information */}
                                    {section.id === 2 &&
                                        Array.isArray(section.content) && (
                                            <>
                                                <p className="leading-relaxed">
                                                    {lang === "en"
                                                        ? "We use the collected information for various purposes, including:"
                                                        : "نستخدم المعلومات التي تم جمعها لأغراض مختلفة، بما في ذلك:"}
                                                </p>
                                                <ul className="space-y-2 ml-6 list-disc">
                                                    {section.content.map(
                                                        (item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="leading-relaxed"
                                                            >
                                                                {item}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </>
                                        )}

                                    {/* Section 3: Data Sharing & Disclosure */}
                                    {section.id === 3 &&
                                        typeof section.content === "object" &&
                                        "policy" in section.content && (
                                            <>
                                                <p className="leading-relaxed">
                                                    {section.content.policy}{" "}
                                                    {lang === "en"
                                                        ? "We may share your information with:"
                                                        : "قد نشارك معلوماتك مع:"}
                                                </p>
                                                <ul className="space-y-2 ml-6 list-disc">
                                                    {section.content.sharedWith?.map(
                                                        (item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="leading-relaxed"
                                                            >
                                                                {item}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                                <p className="leading-relaxed">
                                                    {section.content.note}
                                                </p>
                                            </>
                                        )}

                                    {/* Section 4: Data Security */}
                                    {section.id === 4 &&
                                        Array.isArray(section.content) && (
                                            <>
                                                <p className="leading-relaxed">
                                                    {lang === "en"
                                                        ? "We implement robust security measures to protect your data, including:"
                                                        : "نقوم بتنفيذ تدابير أمنية قوية لحماية بياناتك، بما في ذلك:"}
                                                </p>
                                                <ul className="space-y-2 ml-6 list-disc">
                                                    {section.content
                                                        .slice(0, -1)
                                                        .map((item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="leading-relaxed"
                                                            >
                                                                {item}
                                                            </li>
                                                        ))}
                                                </ul>
                                                <p className="leading-relaxed">
                                                    {lang === "en"
                                                        ? "Despite our efforts, "
                                                        : "على الرغم من جهودنا، "}
                                                    {
                                                        section.content[
                                                            section.content
                                                                .length - 1
                                                        ]
                                                    }{" "}
                                                    {lang === "en"
                                                        ? "We cannot guarantee absolute security."
                                                        : "لا يمكننا ضمان الأمان المطلق."}
                                                </p>
                                            </>
                                        )}

                                    {/* Section 5: Your Rights */}
                                    {section.id === 5 &&
                                        typeof section.content === "object" &&
                                        "rights" in section.content && (
                                            <>
                                                <p className="leading-relaxed">
                                                    {lang === "en"
                                                        ? "You have certain rights regarding your personal data, including:"
                                                        : "لديك حقوق معينة فيما يتعلق ببياناتك الشخصية، بما في ذلك:"}
                                                </p>
                                                <ul className="space-y-2 ml-6 list-disc">
                                                    {section.content.rights?.map(
                                                        (right, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="leading-relaxed"
                                                            >
                                                                {right}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                                <p className="leading-relaxed">
                                                    {lang === "en"
                                                        ? "To exercise your rights, please contact us at "
                                                        : "لمعرفة حقوقك، يرجى الاتصال بنا على "}
                                                    <a
                                                        href={`mailto:${section.content.contactEmail}`}
                                                        className="text-[#29E68C] hover:underline"
                                                    >
                                                        {
                                                            section.content
                                                                .contactEmail
                                                        }
                                                    </a>
                                                </p>
                                            </>
                                        )}

                                    {/* Section 6: Data Retention */}
                                    {section.id === 6 &&
                                        typeof section.content === "string" && (
                                            <p className="leading-relaxed">
                                                {section.content}{" "}
                                                {lang === "en"
                                                    ? "We retain personal data only as long as necessary to fulfill the purposes outlined in this policy."
                                                    : "نحتفظ بالبيانات الشخصية فقط طالما كان ذلك ضروريًا لتحقيق الأغراض الموضحة في هذه السياسة."}
                                            </p>
                                        )}

                                    {/* Section 7: Cookies & Tracking */}
                                    {section.id === 7 &&
                                        Array.isArray(section.content) && (
                                            <>
                                                <p className="leading-relaxed">
                                                    {lang === "en"
                                                        ? "We use cookies and similar tracking technologies to enhance your experience, including:"
                                                        : "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربتك، بما في ذلك:"}
                                                </p>
                                                <ul className="space-y-2 ml-6 list-disc">
                                                    {section.content.map(
                                                        (item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="leading-relaxed"
                                                            >
                                                                {item}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                                <p className="leading-relaxed">
                                                    {lang === "en"
                                                        ? "You can manage your cookie preferences through your browser settings."
                                                        : "يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك."}
                                                </p>
                                            </>
                                        )}

                                    {/* Section 8: International Data Transfers */}
                                    {section.id === 8 &&
                                        typeof section.content === "string" && (
                                            <p className="leading-relaxed">
                                                {lang === "en"
                                                    ? "As a company serving global clients, "
                                                    : "بصفتنا شركة تخدم عملاء عالميين، "}
                                                {section.content.toLowerCase()}
                                            </p>
                                        )}

                                    {/* Section 9: Updates to This Policy */}
                                    {section.id === 9 &&
                                        typeof section.content === "string" && (
                                            <p className="leading-relaxed">
                                                {section.content}
                                            </p>
                                        )}

                                    {/* Section 10: Contact Us */}
                                    {section.id === 10 &&
                                        typeof section.content === "object" &&
                                        "email" in section.content && (
                                            <>
                                                <p className="leading-relaxed">
                                                    {lang === "en"
                                                        ? "If you have any questions or concerns about this Privacy Policy, please contact us at:"
                                                        : "إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه، يرجى الاتصال بنا على:"}
                                                </p>
                                                <div className="space-y-0 ml-4">
                                                    <p className="leading-relaxed mb-2">
                                                        <a
                                                            href={`mailto:${section.content.email}`}
                                                            className="text-[#29E68C] hover:underline"
                                                        >
                                                            {
                                                                section.content
                                                                    .email
                                                            }
                                                        </a>
                                                    </p>
                                                    <a
                                                        href={`tel:${section.content.phone?.replace(
                                                            /\s/g,
                                                            ""
                                                        )}`}
                                                        className="leading-relaxed text-[#29E68C] hover:underline mb-2"
                                                    >
                                                        {section.content.phone}
                                                    </a>
                                                    <p className="leading-relaxed text-[#29E68C]">
                                                        {
                                                            section.content
                                                                .location
                                                        }
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                </section>
                            </AnimateOnView>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
