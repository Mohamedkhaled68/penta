import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Penta Studio",
  description:
    "Get in touch with Penta Studio for your software development needs. Contact our expert team for web development, mobile apps, and cloud solutions.",
  keywords: [
    "contact penta studio",
    "software development consultation",
    "web development services",
    "mobile app development contact",
    "cloud solutions inquiry",
  ],
  openGraph: {
    title: "Contact Us - Penta Studio",
    description:
      "Get in touch with Penta Studio for your software development needs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Penta Studio",
    description:
      "Get in touch with Penta Studio for your software development needs.",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Contact Penta Studio
      </h1>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#8F9BB7] text-lg mb-8">
          Ready to transform your ideas into secure digital products? Get in
          touch with our expert development team.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-[#0F1A33] border border-[#282D45] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#29E68C]">Phone</h3>
            <a
              href="tel:+0201551850855"
              className="text-white hover:text-[#29E68C] transition-colors"
            >
              +02 015 51850855
            </a>
          </div>

          <div className="bg-[#0F1A33] border border-[#282D45] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#29E68C]">Email</h3>
            <a
              href="mailto:contact@penta.studio"
              className="text-white hover:text-[#29E68C] transition-colors"
            >
              contact@penta.studio
            </a>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/0201551850855"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#29E68C] hover:bg-[#4FF0A3] text-[#070707] px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Start a WhatsApp Chat
          </a>
        </div>
      </div>
    </div>
  );
}
