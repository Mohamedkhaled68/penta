import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Penta Studio",
  description:
    "Read Penta Studio's terms of service and conditions for using our software development services and website.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-8 py-16 max-w-4xl lg:mx-auto">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-[#8F9BB7] text-lg mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#29E68C]">
            Acceptance of Terms
          </h2>
          <p className="text-[#8F9BB7] mb-4">
            By accessing and using Penta Studio&apos;s services, you accept and agree
            to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#29E68C]">
            Services
          </h2>
          <p className="text-[#8F9BB7] mb-4">
            Penta Studio provides software development services including web
            development, mobile app development, and cloud solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#29E68C]">
            Contact Information
          </h2>
          <p className="text-[#8F9BB7] mb-4">
            If you have any questions about these Terms of Service, please
            contact us at:
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
