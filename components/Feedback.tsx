"use client";
import React from 'react';
import { motion } from 'framer-motion';
import FeedbackCards from './Feedback/FeedbackCards';
import Image from 'next/image';
import middle from "@/public/Ellipse 15.svg"

export default function Feedback() {
    return (
        <div className="w-full h-max relative flex flex-col gap-6 items-center justify-between pb-16 px-20 max-md:px-6">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
            >
                <h1 className="text-center bg-gradient-to-t from-[#29E68C] via-[#29E68C] to-[#F6F6F7] bg-clip-text text-transparent text-5xl max-md:text-3xl font-bold transition-colors duration-700">What our clients say</h1>
            </motion.div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="w-full pb-7 relative"
            >
                <Image src={middle} alt='' className="z-0 absolute inset-0 m-auto" />
                <p className="text-center text-[#8F9BB7]"> Real feedback from businesses that trusted Penta Studio to build and scale <br /> their digital products.</p>
            </motion.div>

            <FeedbackCards />
        </div>
    )
}
