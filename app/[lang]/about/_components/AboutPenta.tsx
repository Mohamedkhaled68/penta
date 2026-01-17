"use client";

import React from "react";
import Image from "next/image";
import { AnimateOnView } from "@/components/global components/AnimateOnView";
import { useDictionary } from "@/hooks/useDictionary";
import "../style.css";

export default function AboutPenta() {
    const dictionary = useDictionary();
    return (
        <section className="w-full h-screen max-sm:min-h-[750px] flex justify-between items-center pt-7 max-md:pt-0 gradient-About-penta-b px-20 max-md:px-6 overflow-hidden relative">
            <div className="w-1/2 max-md:w-full flex flex-col justify-center gap-8">
                <AnimateOnView animation="up">
                    <h1 className="text-2xl w-max font-bold text-start border-b-2 pb-1 border-b-[#29E68B]">
                        {/* About{" "}
                        <span className="text-[#29E68B]">Penta Studio</span> */}
                        {dictionary?.about_page?.section1?.title}
                    </h1>
                </AnimateOnView>
                <AnimateOnView animation="up" delay={400}>
                    {" "}
                    <p className="text-lg">
                        {/* <span className="text-2xl font-bold text-[#29E68B]">
                            At Penta Studio
                        </span>
                        , we believe that great software is more than lines of
                        code; it&apos;s the foundation of digital growth. We
                        help businesses of all sizes reimagine the way they
                        work, engage, and scale by delivering secure, modern,
                        and high-impact solutions. */}
                        {dictionary?.about_page?.section1?.description}
                    </p>
                </AnimateOnView>
                <AnimateOnView animation="up" delay={500}>
                    <p className="text-lg">
                        {/* Our expertise encompasses every layer of digital
                        transformation, from customer experience platforms that
                        delight users to enterprise management systems that
                        streamline operations and
                        <span className="text-[#29E68B] text-2xl">
                            {" "}
                            AI-powered tools
                        </span>{" "}
                        that enable smarter decisions. */}

                        {dictionary?.about_page?.section1?.points.title}
                    </p>
                    <ul>
                        {dictionary?.about_page?.section1?.points?.list?.map(
                            (point: string, index: number) => (
                                <li
                                    key={index}
                                    className="text-lg list-disc ml-5 my-2"
                                >
                                    {point}
                                </li>
                            )
                        )}
                    </ul>
                </AnimateOnView>
            </div>
            <div className="w-max max-md:hidden mr-10">
                <AnimateOnView animation="up">
                    <div className="relative w-[365px] h-[400px] rounded-xl shadow-[0_0_74px_0_rgba(46,230,188,0.3)]">
                        <div className="w-[171px] h-[171px] absolute -top-[75px] -right-[75px] z-0">
                            <Image
                                src={"/About/Vector-1.svg"}
                                alt="Decorative top shadow element"
                                // className="w-[171px] h-[171px] absolute -top-[75px] -right-[75px] z-0"
                                priority
                                fill
                            />
                        </div>
                        <div className="w-[171px] h-[171px] absolute -bottom-[75px] -left-[75px] z-50">
                            <Image
                                src={"/About/Vector.svg"}
                                alt="Decorative bottom shadow element"
                                fill
                                // className="w-[171px] h-[171px] absolute -bottom-[75px] -left-[75px] z-50"
                            />
                        </div>

                        <Image
                            src={"/About/mainbg.webp"}
                            fill
                            alt="Penta Studio development team collaborating on a project"
                            className="w-[365px] h-[400px] object-cover rounded-xl relative z-10"
                            priority
                        />
                    </div>
                </AnimateOnView>
            </div>
        </section>
    );
}
