import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Penta Studio",
  description:
    "Learn about Penta Studio's privacy policy and how we protect your personal information when using our software development services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-8 py-16 max-w-4xl lg:mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-[#8F9BB7] text-lg mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#29E68C]">
            Information We Collect
          </h2>
          <p className="text-[#8F9BB7] mb-4">
            We collect information you provide directly to us, such as when you
            contact us for our services, subscribe to our newsletter, or
            communicate with us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#29E68C]">
            How We Use Your Information
          </h2>
          <p className="text-[#8F9BB7] mb-4">
            We use the information we collect to provide, maintain, and improve
            our services, communicate with you, and process transactions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#29E68C]">
            Contact Us
          </h2>
          <p className="text-[#8F9BB7] mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-[#8F9BB7]">
            Email:{" "}
            <a
              href="mailto:contact@penta.studio"
              className="text-[#29E68C] hover:underline"
            >
              contact@penta.studio
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
