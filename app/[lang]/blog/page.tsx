import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Penta Studio",
  description:
    "Read the latest insights on software development, web technologies, mobile app development, and digital transformation from Penta Studio's expert team.",
  keywords: [
    "software development blog",
    "web development insights",
    "mobile app development tips",
    "digital transformation",
    "technology trends",
    "programming tutorials",
  ],
  openGraph: {
    title: "Blog - Penta Studio",
    description:
      "Read the latest insights on software development, web technologies, and digital transformation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Penta Studio",
    description:
      "Read the latest insights on software development, web technologies, and digital transformation.",
  },
};

export default function BlogPage() {
  return (
    <div className="mx-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Penta Studio Blog</h1>
      <p className="text-center text-[#8F9BB7] text-lg max-w-2xl mx-auto">
        Stay updated with the latest insights on software development, web
        technologies, mobile app development, and digital transformation from
        our expert team.
      </p>
      <div className="mt-12 text-center">
        <p className="text-[#8F9BB7]">Blog posts coming soon...</p>
      </div>
    </div>
  );
}
