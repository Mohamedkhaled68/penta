import React from "react";
import { Metadata } from "next";
import { AnimateOnView } from "@/components/global components/AnimateOnView";

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
  metadataBase: new URL('https://pentastudio.tech'),
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    title: "Terms of Service - Penta Studio",
    description: "Read Penta Studio's terms of service and conditions for using our software development services.",
    type: "website",
    locale: "en_US",
    siteName: "Penta Studio",
    url: "https://pentastudio.tech/terms-of-service",
    images: [
      {
        url: '/og-terms-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Penta Studio Terms of Service',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Penta Studio",
    description: "Read Penta Studio's terms of service and conditions for using our software development services.",
    creator: "@pentastudio",
    images: ['/twitter-terms-image.jpg'],
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
  name: 'Terms of Service',
  description: 'Penta Studio terms of service explaining service conditions, intellectual property rights, and client agreements.',
  url: 'https://pentastudio.tech/terms-of-service',
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

export default function TermsOfServicePage() {
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
              Terms of Service
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
                Welcome to Penta Studio. By accessing or using our website, products, and services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully before proceeding.
              </p>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.3}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By using our services, you agree to these Terms of Service and our Privacy Policy. If you do not agree, you should not use our website or services.
                </p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.4}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">2. Services Provided</h2>
                <p className="leading-relaxed">Penta Studio offers the following services:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">Web development and design</li>
                  <li className="leading-relaxed">Mobile applications (iOS & Android)</li>
                  <li className="leading-relaxed">AI-powered tools and solutions</li>
                  <li className="leading-relaxed">Cloud infrastructure and DevOps support</li>
                  <li className="leading-relaxed">Custom software development (SaaS, CRM, etc.)</li>
                  <li className="leading-relaxed">API integrations, dashboards, and analytics platforms</li>
                </ul>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.5}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">3. Use of Our Website & Content</h2>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">You may freely use our website to explore our services and publicly available content for personal or business use.</li>
                  <li className="leading-relaxed">You may not copy, reproduce, distribute, modify, or create derivative works of our content, brand assets, or software without written consent.</li>
                  <li className="leading-relaxed">Unauthorized use of our website may result in legal action.</li>
                </ul>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.6}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">4. Client Responsibilities</h2>
                <p className="leading-relaxed">When working with Penta Studio:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">You agree to provide accurate project details, requirements, and communication.</li>
                  <li className="leading-relaxed">You are responsible for ensuring that any data or content you provide does not infringe third-party rights.</li>
                  <li className="leading-relaxed">You agree to meet agreed payment terms, as outlined in individual contracts.</li>
                </ul>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.7}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">5. Intellectual Property</h2>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">All software, designs, and solutions developed by Penta Studio remain our intellectual property until full payment is received.</li>
                  <li className="leading-relaxed">After delivery and payment, ownership rights are transferred as per contract agreements.</li>
                  <li className="leading-relaxed">Penta Studio retains the right to showcase non-confidential parts of projects in its portfolio.</li>
                </ul>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.8}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">6. Payments & Billing</h2>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">Payment terms are defined in project agreements.</li>
                  <li className="leading-relaxed">Late payments may incur additional fees or suspension of services.</li>
                  <li className="leading-relaxed">All payments are non-refundable unless otherwise agreed in writing.</li>
                </ul>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={0.9}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">7. Confidentiality</h2>
                <p className="leading-relaxed">
                  Both parties agree to maintain the confidentiality of sensitive information exchanged during projects. This obligation continues even after the termination of services.                </p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={1.0}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">8. Warranties & Limitations</h2>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">Penta Studio guarantees professional services delivered with best practices in software engineering.</li>
                  <li className="leading-relaxed">However, we do not warrant that our services will be error-free, uninterrupted, or suitable for every purpose.</li>
                  <li className="leading-relaxed">Penta Studio is not liable for indirect damages, loss of business, or data issues resulting from client misuse.</li>
                </ul>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={1.1}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">9. Termination</h2>
                <p className="leading-relaxed">
                  The client breaches these Terms:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">The client breaches these Terms.</li>
                  <li className="leading-relaxed">Payments are not made as agreed.</li>
                  <li className="leading-relaxed">The project involves unlawful or unethical activities.</li>
                </ul>
                <p className="leading-relaxed">Clients may also terminate contracts with written notice, as per agreement terms.</p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={1.2}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">10. Updates to Terms</h2>
                <p className="leading-relaxed">
                  We may revise these Terms of Service periodically. Updates will be posted on this page with the effective date. Your continued use of our services constitutes acceptance of changes.
                </p>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={1.3}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">11. Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms of Service shall be governed and construed in accordance with the applicable international business laws and relevant national laws. Depending on the client’s location, disputes may be subject to the jurisdiction of:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="leading-relaxed">European Union Law and Finnish Law for clients in the EU region.</li>
                  <li className="leading-relaxed">United States Federal and State Law for clients in North America.</li>
                  <li className="leading-relaxed">Saudi Arabian Law for clients in the Kingdom of Saudi Arabia.</li>
                  <li className="leading-relaxed">United Arab Emirates Law for clients in the UAE.</li>
                  <li className="leading-relaxed">Egyptian Law for clients in Egypt and MENA.</li>
                  <li className="leading-relaxed">International Business Law for global transactions.</li>
                </ul>
              </section>
            </AnimateOnView>

            <AnimateOnView animation="up" delay={1.4}>
              <section className="space-y-2">
                <h2 className="text-3xl max-md:text-2xl mb-4 font-bold text-white">12. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about these Terms, please contact us at:
                </p>
                <div className="space-y-0 ml-4">
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