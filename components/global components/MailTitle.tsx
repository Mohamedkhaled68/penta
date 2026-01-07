"use client";
import React, { useEffect, useRef, useState } from "react";

interface MailTitleProps {
  title: string;
  subtitle: string;
  descr: string;
  titleTag?: "h1" | "h2" | "h3";
  subtitleTag?: "h2" | "h3" | "h4";
}

export default function MailTitle({
  title,
  subtitle,
  descr,
  titleTag = "h2",
  subtitleTag = "h3",
}: MailTitleProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // animate only once
          }
        });
      },
      { threshold: 0.3 } // start animating when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const TitleTag = titleTag;
  const SubtitleTag = subtitleTag;

  return (
    <section
      ref={sectionRef}
      className="flex justify-between items-center gap-10 max-md:flex-col mb-10"
      aria-labelledby="section-title"
    >
      <header className="w-1/2 max-md:w-11/12 flex flex-col justify-between item-center gap-4">
        {/* Title */}
        <div
          className={`hidden-before-view ${
            isVisible ? "animate-slide-left" : ""
          }`}
        >
          <TitleTag
            id="section-title"
            className="text-6xl max-md:text-3xl font-bold"
          >
            <span className="block bg-gradient-to-b from-[#F6F6F7] via-[#F6F6F7] to-[#29E68C] bg-clip-text text-transparent">
              {title}
            </span>
          </TitleTag>
        </div>

        {/* Subtitle */}
        <div
          className={`hidden-before-view ${
            isVisible ? "animate-slide-left" : ""
          }`}
        >
          <SubtitleTag className="font-bold text-3xl max-md:text-xl">
            <span className="block bg-gradient-to-t from-[#29E68C] via-[#29E68C] to-[#F6F6F7] bg-clip-text text-transparent">
              {subtitle}
            </span>
          </SubtitleTag>
        </div>
      </header>

      {/* Description */}
      <div
        className={`hidden-before-view ${
          isVisible ? "animate-slide-right" : ""
        } w-1/2 max-md:w-11/12`}
      >
        <p className="text-[#8F9BB7] text-base">{descr}</p>
      </div>
    </section>
  );
}
