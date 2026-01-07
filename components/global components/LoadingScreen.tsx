"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/public/Logo.svg"
import leftBlur from "@/public/Ellipse 2.svg"

export default function LoadingScreen() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 1000); // 3 seconds
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="h-screen w-full bg-[#060B27] relative overflow-hidden">
            <Image
                src={leftBlur}
                alt=""
                className="left-0 z-0 absolute w-full"
                priority
                aria-hidden="true"
            />
            <div className="w-full h-screen flex justify-center items-center gap-4">

                <Image src={logo} alt="penta logo" className="animate-spin rounded-full h-16 w-16" />
            </div>
        </div>
    );
}