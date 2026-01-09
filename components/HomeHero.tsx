"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import leftBlur from "@/public/Ellipse 2.svg";
import mainBg from "@/public/main.webp";
import { useDictionary } from "@/hooks/useDictionary";

export default function HomeHero() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const dictionary = useDictionary();

    return (
        <main className="w-full h-screen relative flex justify-center overflow-hidden gradient-border-b">
            {/* Main background */}
            <div className="main-bg-img z-10 absolute w-full">
                <Image
                    src={mainBg}
                    alt="Penta Studio - Modern web development services"
                    className="w-full h-full object-cover"
                    priority
                    quality={85}
                    sizes="100vw"
                    onLoad={() => setIsImageLoaded(true)}
                />
            </div>

            {/* Left blur */}
            <Image
                src={leftBlur}
                alt=""
                className="left-0 z-0 absolute w-full h-full object-cover"
                priority={false}
                quality={60}
                sizes="100vw"
                aria-hidden="true"
            />

            {/* Hero Content */}
            <section
                className="mx-8 flex flex-col gap-4 mt-[200px] max-md:mt-[150px] items-center z-50 max-md:mx-4"
                role="banner"
                aria-labelledby="hero-title"
            >
                <div>
                    <h1
                        id="hero-title"
                        className={`text-[64px] max-md:text-[36px] max-sm:text-[28px] font-bold text-center leading-tight transition-all duration-1200 ease-out
              ${
                  isImageLoaded
                      ? "animate-slide-fade-in-delayed opacity-0"
                      : "opacity-0"
              }`}
                    >
                        <span
                            className="block  bg-gradient-to-b from-[#F6F6F7] via-[#F6F6F7] to-[#29E68C] bg-clip-text text-transparent"
                            style={{
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {dictionary?.hero.heading.line1}
                        </span>
                        <span
                            className="block bg-gradient-to-t from-[#29E68C] via-[#29E68C] to-[#F6F6F7] bg-clip-text text-transparent"
                            style={{
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {dictionary?.hero.heading.line2}
                        </span>
                    </h1>
                </div>

                <p
                    className={`text-[#8F9BB7] text-lg max-md:text-base text-center max-md:px-2 transition-all duration-800 delay-1200 ease-out
            ${
                isImageLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
            }`}
                >
                    {dictionary?.hero.description}
                </p>

                <nav
                    className={`flex justify-center gap-5 max-md:gap-3 items-center max-md:flex-col max-md:w-full transition-all duration-600 delay-2000 ease-out
            ${
                isImageLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
            }`}
                    aria-label="Main call-to-action buttons"
                >
                    <Link
                        href="#services"
                        className="w-[120px] max-md:w-full h-[46px] bg-[#29E68C] hover:bg-[#4FF0A3] text-[#070707] text-base font-medium cursor-pointer rounded-[36px] transition-colors duration-300 ease-in-out hover:shadow-lg flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-[#29E68C] focus:ring-offset-2 focus:ring-offset-transparent"
                        aria-label="Start your project with Penta Studio"
                    >
                        {dictionary?.hero.startBtn}
                    </Link>
                    <Link
                        href="/about"
                        className="w-[171px] max-md:w-full h-[46px] bg-[#15193485] hover:bg-[#1f2441] border border-[#282D45] hover:border-[#3a4061] text-[#F6F6F7] text-base font-medium cursor-pointer rounded-[36px] transition-colors duration-300 ease-in-out hover:shadow-lg flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-[#282D45] focus:ring-offset-2 focus:ring-offset-transparent"
                        aria-label="Learn more about Penta Studio company profile"
                    >
                        {dictionary?.hero.companyProfileBtn}
                    </Link>
                </nav>
            </section>
        </main>
    );
}
