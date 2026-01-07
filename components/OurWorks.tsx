"use client";
import React from "react";
import MailTitle from "./global components/MailTitle";
import OurWorksCards from "./OurWorks/OurWorksCards";
import Image from "next/image";
import shaddow from "@/public/Ellipse 13.svg";
import shaddow2 from "@/public/Ellipse 14.svg";

export default function OurWorks() {
  return (
    <>
      <section
        className="w-full h-max relative flex flex-col gap-2 items-center justify-between py-16 px-20 max-md:px-6"
        role="main"
        aria-labelledby="portfolio-heading"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        {/* Background decoration images with better performance */}
        <Image
          src={shaddow}
          alt=""
          className="z-0 absolute -right-16 -bottom-52"
          aria-hidden="true"
          loading="lazy"
          priority={false}
          quality={75}
        />
        <Image
          src={shaddow2}
          alt=""
          className="z-0 absolute -left-16 top-0"
          aria-hidden="true"
          loading="lazy"
          priority={false}
          quality={75}
        />

        {/* Enhanced Portfolio Header Section */}
        <header className="z-10 relative w-full" role="banner">
          <MailTitle
            title="Our Portfolio"
            subtitle="Custom Software Development Success Stories"
            descr="Discover how Penta Studio has transformed businesses through innovative software solutions. From Fortune 500 enterprises to innovative startups, explore our portfolio of 50+ successful projects including web applications, mobile apps, e-commerce platforms, and enterprise systems that deliver measurable ROI and competitive advantages."
            titleTag="h1"
            subtitleTag="h2"
          />

          {/* Clean SEO content */}
          <div className="text-center text-[#8F9BB7] max-w-4xl mx-auto opacity-0">
            <p>
              Discover our portfolio of custom software solutions including
              enterprise web applications, mobile apps, e-commerce platforms,
              and cloud-native systems that drive business growth.
            </p>
          </div>
        </header>

        {/* Enhanced Portfolio Content */}
        <article
          className="z-10 relative w-full"
          role="main"
          aria-label="Interactive portfolio showcase featuring detailed case studies of completed software development projects"
          itemProp="mainContentOfPage"
          itemScope
          itemType="https://schema.org/WebPageElement"
        >
          <OurWorksCards />
        </article>
      </section>
    </>
  );
}
