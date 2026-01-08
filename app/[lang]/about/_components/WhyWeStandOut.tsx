"use client";
import React from "react";
import svg1 from "@/public/About/Frame3.svg";
import svg2 from "@/public/About/Frame2.svg";
import svg3 from "@/public/About/Frame1.svg";
import Image from "next/image";
import { AnimateOnView } from "@/components/global components/AnimateOnView";
import { useDictionary } from "@/hooks/useDictionary";

const featuresData = [
    {
        id: 1,
        title: "Outcome-Driven Development",
        bgColor: "bg-[#0E1330] shadow-[0_0_20px_2px_rgba(46,230,188,0.3)]",
        svg: svg1,
        desc: "We focus on results, not just delivery.",
    },
    {
        id: 2,
        title: "Human-Centric Design",
        bgColor: "bg-transparent",
        svg: svg2,
        desc: "Experiences designed for customers and employees alike.",
    },
    {
        id: 3,
        title: "Future-Ready Solutions",
        bgColor: "bg-[#0E1330] shadow-[0_0_20px_2px_rgba(46,230,188,0.3)]",
        svg: svg3,
        desc: "Scalable products built to adapt and grow",
    },
];

export default function WhyWeStandOut() {
    const dictionary = useDictionary();

    return (
        <section className="w-full h-max relative flex flex-col gap-8 items-start justify-between max-sm:pt-6 py-16 px-20 max-md:px-6">
            <AnimateOnView animation="up">
                <h1 className="text-2xl w-max font-bold text-start border-b-2 border-b-[#29E68B]">
                    {dictionary?.about_page?.section2?.title}
                </h1>
            </AnimateOnView>
            <AnimateOnView
                animation="up"
                delay={200}
                className="w-5/6 max-md:w-full"
            >
                <p>{dictionary?.about_page?.section2?.description}</p>
            </AnimateOnView>
            <div className="w-full grid grid-cols-3 max-md:grid-cols-1 justify-between gap-8">
                {featuresData.map((feature, idx) => (
                    <AnimateOnView
                        animation="up"
                        key={feature.id}
                        className={`col-span-1 max-w-[390px] mx-auto h-[322px] flex flex-col justify-center gap-6 px-14 max-sm:px-10 py-24 rounded-4xl ${feature.bgColor}`}
                    >
                        <Image
                            src={feature.svg}
                            alt={`${feature.title} icon`}
                            className="w-16 h-16"
                        />

                        <h3 className="text-white text-3xl font-bold">
                            {
                                dictionary?.about_page?.section2?.cards[idx]
                                    ?.title
                            }
                        </h3>

                        <p className="text-[#F6F6F7] text-lg leading-relaxed w-5/6">
                            {
                                dictionary?.about_page?.section2?.cards[idx]
                                    ?.description
                            }
                        </p>
                    </AnimateOnView>
                ))}
            </div>

            {/* Added stats or achievements section for better SEO
      <AnimateOnView animation="up" className="w-full mt-12 grid grid-cols-4 max-md:grid-cols-2 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-[#29E68B]">150+</div>
          <div className="text-white">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[#29E68B]">98%</div>
          <div className="text-white">Client Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[#29E68B]">50+</div>
          <div className="text-white">Expert Team Members</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[#29E68B]">12+</div>
          <div className="text-white">Years Experience</div>
        </div>
      </AnimateOnView> */}
        </section>
    );
}
