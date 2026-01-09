import React from "react";
import { Metadata } from "next";
import { AnimateOnView } from "@/components/global components/AnimateOnView";

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
  metadataBase: new URL('https://pentastudio.tech'),
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: "Privacy Policy - Penta Studio",
    description: "Learn how Penta Studio protects your personal information and ensures data security.",
    type: "website",
    locale: "en_US",
    siteName: "Penta Studio",
    url: "https://pentastudio.tech/privacy-policy",
    images: [
      {
        url: '/og-privacy-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Penta Studio Privacy Policy',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Penta Studio",
    description: "Learn how Penta Studio protects your personal information and ensures data security.",
    creator: "@pentastudio",
    images: ['/twitter-privacy-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description: 'Penta Studio privacy policy explaining data collection, usage, and protection practices.',
  url: 'https://pentastudio.tech/privacy-policy',
  publisher: {
    '@type': 'Organization',
    name: 'Penta Studio',
    url: 'https://pentastudio.tech',
    logo: 'https://pentastudio.tech/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'penta.studioo@gmail.com',
      telephone: '+20 10 1247 3532',
      contactType: 'customer service',
    },
  },
  datePublished: '2025-05-10',
  dateModified: '2025-05-10',
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
          </AnimateOnView>

          <AnimateOnView animation="up" delay={0.1}>
            <p className="text-lg my-4">
              Effective Date: <span className="text-[#29E68C]">10/05/2025</span>
            </p>
          </AnimateOnView>

          <div className="w-5/6 max-md:w-full space-y-7 max-md:space-y-8">
            <AnimateOnView animation="up" delay={0.2}>
              <p className="text-lg leading-relaxed">
                At Penta Studio, your privacy is our priority. We are committed to protecting the personal information of our clients, partners, and website visitors. This Privacy Policy explains what information we collect, how we use it, and the rights you have regarding your data.
              </p>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.3}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">1. Information We Collect</h2>
                <p className="leading-relaxed">We may collect the following types of information:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed"><span className="text-[#29E68C] font-semibold">Personal Information:</span> Name, email address, phone number, company details, and any information you provide when contacting us or filling out forms.</li>
                  <li className="leading-relaxed"><span className="text-[#29E68C] font-semibold">Project Information:</span> Details you share about your business needs, project scope, or requirements when working with us.</li>
                  <li className="leading-relaxed"><span className="text-[#29E68C] font-semibold">Technical Information:</span> IP address, browser type, device information, cookies, and usage data collected automatically when you visit our website.</li>
                  <li className="leading-relaxed"><span className="text-[#29E68C] font-semibold">Payment Information:</span> When applicable, billing details and payment-related data processed securely by third-party providers.</li>
                </ul>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.4}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">2. How We Use Your Information</h2>
                <p className="leading-relaxed">We use the collected information to:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">Deliver and improve our services (web, mobile, dashboards, AI tools, etc.).</li>
                  <li className="leading-relaxed">Respond to inquiries, provide project estimates, and communicate updates.</li>
                  <li className="leading-relaxed">Process transactions and manage client accounts.</li>
                  <li className="leading-relaxed">Enhance website performance, security, and user experience.</li>
                  <li className="leading-relaxed">Send updates, newsletters, or promotional content (only if you opt-in).</li>
                  <li className="leading-relaxed">Comply with legal obligations and resolve disputes.</li>
                </ul>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.5}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">3. Data Sharing & Disclosure</h2>
                <p className="leading-relaxed">We do not sell or rent your personal information. However, we may share your data with:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed"><span className="text-[#29E68C] font-semibold">Trusted Service Providers:</span> For hosting, analytics, payment processing, and cloud infrastructure.</li>
                  <li className="leading-relaxed"><span className="text-[#29E68C] font-semibold">Business Partners:</span> In cases where collaboration is required for project delivery.</li>
                  <li className="leading-relaxed"><span className="text-[#29E68C] font-semibold">Legal Authorities:</span> If required by law or to protect our rights, safety, or property.</li>
                </ul>
                <p className="leading-relaxed">All third parties are obligated to maintain confidentiality and use your data only for agreed purposes.</p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.6}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">4. Data Security</h2>
                <p className="leading-relaxed">We implement industry-standard security practices to safeguard your information, including:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">Encryption for data transmission and storage.</li>
                  <li className="leading-relaxed">Access controls and authentication for sensitive systems.</li>
                  <li className="leading-relaxed">Regular monitoring, vulnerability testing, and updates.</li>
                </ul>
                <p className="leading-relaxed">Despite our efforts, no method of transmission over the internet is 100% secure. We encourage clients to also take precautions on their end.</p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.7}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">5. Your Rights</h2>
                <p className="leading-relaxed">Depending on your jurisdiction (e.g., GDPR in the EU, CCPA in California), you have the right to:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">Access, update, or delete your personal data.</li>
                  <li className="leading-relaxed">Request a copy of the data we hold about you.</li>
                  <li className="leading-relaxed">Withdraw consent for marketing communications.</li>
                  <li className="leading-relaxed">Restrict or object to certain types of data processing.</li>
                </ul>
                <p className="leading-relaxed">
                  To exercise your rights, please contact us at{" "}
                  <a href="mailto:penta.studioo@gmail.com" className="text-[#29E68C] hover:underline">
                    penta.studioo@gmail.com
                  </a>
                </p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.8}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">6. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain personal data only as long as necessary for the purposes outlined in this policy or as required by law. Once no longer needed, we securely delete or anonymize your information.
                </p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.9}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">7. Cookies & Tracking</h2>
                <p className="leading-relaxed">Our website uses cookies and similar technologies to:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">Improve site performance.</li>
                  <li className="leading-relaxed">Analyze traffic and user behavior.</li>
                  <li className="leading-relaxed">Personalize content and ads (if applicable).</li>
                </ul>
                <p className="leading-relaxed">You can manage or disable cookies through your browser settings.</p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={1.0}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">8. International Data Transfers</h2>
                <p className="leading-relaxed">
                  As a company serving global clients, your information may be transferred and stored outside your country of residence. We ensure appropriate safeguards are in place when transferring data internationally.
                </p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={1.1}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">9. Updates to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. Updates will be posted on this page with the effective date.
                </p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={1.2}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">10. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions or concerns about this Privacy Policy, please reach out to us at:
                </p>
                <div className="space-y-0 ml-6">
                  <p className="leading-relaxed mb-2">
                    <a href="mailto:penta.studioo@gmail.com" className="text-[#29E68C] hover:underline">
                      penta.studioo@gmail.com
                    </a>
                  </p>
                  <a href="tel:+0201551850855" className="leading-relaxed text-[#29E68C] hover:underline mb-2">+02 015 51850855</a>
                  <p className="leading-relaxed text-[#29E68C]">Virkakatu 8J, 90570, Oulu, Finland</p>
                  <p className="leading-relaxed text-[#29E68C]">Cairo, Egypt</p>
                </div>
              </section>
            </AnimateOnView>
          </div>
        </div>
      </div>
    </>
  );
}