"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import svg1 from "@/public/Icons/Our Process/Frame.svg"
import Image from 'next/image';
import middle from "@/public/Ellipse 15.svg"

const partnersData = [
    {
        id: 1,
        svg: svg1,
        name: "aaa"
    },
    {
        id: 2,
        svg: svg1,
        name: "aaa"
    },
    {
        id: 3,
        svg: svg1,
        name: "aaa"
    },
    {
        id: 4,
        svg: svg1,
        name: "aaa"
    },
    {
        id: 5,
        svg: svg1,
        name: "aaa"
    },
    {
        id: 6,
        svg: svg1,
        name: "aaa"
    },
    {
        id: 7,
        svg: svg1,
        name: "aaa"
    },
    {
        id: 8,
        svg: svg1,
        name: "aaa"
    },
    {
        id: 9,
        svg: svg1,
        name: "aaa"
    },
    {
        id: 10,
        svg: svg1,
        name: "aaa"
    },
]

export default function OurPartners() {
    return (
        <div className="w-full h-max relative flex flex-col gap-2 items-center justify-between max-sm:pt-6 py-16 px-20 max-md:px-6">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full pb-10 relative"
            >
                <Image src={middle} alt='' className="z-0 absolute inset-0 m-auto" />
                <h1 className="text-center bg-gradient-to-t from-[#29E68C] via-[#29E68C] to-[#F6F6F7] bg-clip-text text-transparent text-5xl max-md:text-3xl font-bold transition-colors duration-700">Our Partners & Clients</h1>
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="w-full"
            >
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={25}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={3000}
                    freeMode={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 25,
                        },
                    }}
                    className="partners-swiper w-full h-40 overflow-hidden relative"
                >
                    <div
                        className="absolute -left-7 top-0 bottom-0 max-sm:w-20 w-40 z-20 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to right, #060B27 0%, rgba(6, 11, 39, 0.8) 50%, rgba(6, 11, 39, 0) 100%)'
                        }}
                    ></div>

                    {/* Right shadow gradient */}
                    <div
                        className="absolute -right-7 top-0 bottom-0 max-sm:w-20 w-40 z-20 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to left, #060B27 0%, rgba(6, 11, 39, 0.8) 50%, rgba(6, 11, 39, 0) 100%)'
                        }}
                    ></div>

                    {/* Duplicate the array to ensure smooth infinite scroll */}
                    {[...partnersData, ...partnersData].map((partner, index) => (
                        <SwiperSlide key={`${partner.id}-${index}`}>
                            <motion.div
                                transition={{ duration: 0.3 }}
                                className="w-full max-md:w-[200px] max-sm:w-[165px] h-32 max-sm:h-24 bg-[#0E1330] backdrop-blur-sm rounded-xl border border-[#282D45] hover:border-[#29E68B] transition-all duration-200 hover:transform hover:shadow-[0_10px_30px_-5px_#0D2834] flex items-center justify-center p-4 mx-auto"
                            >
                                <Image src={partner.svg} alt={partner.name} className="h-16 max-sm:h-12 w-2/3 mx-auto" />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            <style jsx global>{`
                .partners-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
                
                .partners-swiper:hover .swiper-wrapper {
                    animation-play-state: paused;
                }
            `}</style>

        </div>
    )
}