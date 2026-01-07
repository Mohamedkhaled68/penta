"use client";
import React from "react";
import svg1 from "@/public/Icons/Our Process/Frame.svg";
import svg2 from "@/public/Icons/Our Process/Frame-1.svg";
import svg3 from "@/public/Icons/Our Process/Frame-2.svg";
import svg4 from "@/public/Icons/Our Process/Frame-5.svg";
import svg5 from "@/public/Icons/Our Process/Frame-4.svg";
import svg6 from "@/public/Icons/Our Process/Frame-3.svg";
import Image from "next/image";
import { AnimateOnView } from "../global components/AnimateOnView";
import { useDictionary } from "@/hooks/useDictionary";

const productProcessPhases = [
    {
        id: 1,
        svg: svg1,
    },
    {
        id: 2,
        svg: svg2,
    },
    {
        id: 3,
        svg: svg3,
    },
    {
        id: 4,
        svg: svg4,
    },
    {
        id: 5,
        svg: svg5,
    },
    {
        id: 6,
        svg: svg6,
    },
];

export default function OurProcessCards() {
    const dictionary = useDictionary();

    if (!dictionary) return null;

    return (
        <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 justify-evenly mx-auto">
            {productProcessPhases.map((product) => (
                <AnimateOnView
                    key={product.id}
                    animation="up"
                    className="w-full"
                >
                    <div className="col-span-1 w-full h-[270px] max-md:h-[220px] bg-[#0E1330] backdrop-blur-sm rounded-xl border border-[#282D45] hover:border-[#29E68B] transition-all duration-200 hover:transform hover:shadow-[0_10px_30px_-5px_#0D2834] flex flex-col py-7 px-10 max-md:p-5 mx-auto">
                        <Image
                            src={product.svg}
                            className="w-10 h-10 mb-7 max-md:mb-5"
                            alt="Process Step Icon"
                        />
                        <h3 className="text-[#F6F6F7] text-2xl font-bold mb-3 max-md:gap-2">
                            {
                                dictionary?.ourProcess?.steps[product.id - 1]
                                    ?.title
                            }
                        </h3>
                        <p className="text-[#8F9BB7]">
                            {
                                dictionary?.ourProcess?.steps[product.id - 1]
                                    ?.description
                            }
                        </p>
                    </div>
                </AnimateOnView>
            ))}
        </div>
    );
}
