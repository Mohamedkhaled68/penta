"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import client1 from "@/public/feedbackClient/client1.svg"

// Testimonials data array
const Feedback = [
    {
        id: 1,
        numberOfStars: 4,
        description: "Working with Penta Studio was a game-changer for our business. Their team not only delivered a flawless product on time but also guided us through every stage with clear communication and genuine care.",
        name: "Dr. Omar Elshinawy",
        title: "CEO of Amen Platform",
        img: client1
    },
    {
        id: 2,
        numberOfStars: 5,
        description: "Outstanding service and exceptional results. The team's expertise and dedication made our project a huge success. Highly recommended for anyone looking for professional development services.",
        name: "Sarah Ahmed",
        title: "CTO of TechFlow Solutions",
        img: client1
    },
    {
        id: 3,
        numberOfStars: 5,
        description: "Incredible attention to detail and innovative solutions. Penta Studio transformed our vision into reality with seamless execution and ongoing support that exceeded our expectations.",
        name: "Michael Johnson",
        title: "Founder of InnovateLab",
        img: client1
    },
    {
        id: 4,
        numberOfStars: 5,
        description: "Professional, reliable, and creative. The entire development process was smooth and efficient. They truly understand what it takes to build successful digital products.",
        name: "Layla Hassan",
        title: "Product Manager at CloudSys",
        img: client1
    },
];

interface StarRatingProps {
    numberOfStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ numberOfStars }) => {
    return (
        <div className="flex gap-1 mb-6 max-sm:mb-2 px-12 max-sm:px-6">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={index < numberOfStars ? "fill-[#29E68C]" : ""}
                >
                    <path d="M10 1L12.09 6.26L18 7.27L14 11.14L15.18 17.02L10 14.77L4.82 17.02L6 11.14L2 7.27L7.91 6.26L10 1Z" />
                </svg>
            ))}
        </div>
    );
};
export default function FeedbackCards() {
    return (
        <div className="w-full">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="w-full h-max"
            >
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={25}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={4000}
                    freeMode={true}
                    breakpoints={{
                        800: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                    className="testimonials-swiper w-full h-[450px] relative"
                >
                    {/* Left shadow gradient */}
                    <div
                        className="absolute -left-10 top-0 bottom-0 w-40 max-md:w-24 z-20 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to right, #060B27 0%, rgba(6, 11, 39, 0.8) 50%, rgba(6, 11, 39, 0) 100%)'
                        }}
                    ></div>

                    {/* Right shadow gradient */}
                    <div
                        className="absolute -right-10 top-0 bottom-0 w-40 max-md:w-20 z-20 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to left, #060B27 0%, rgba(6, 11, 39, 0.8) 50%, rgba(6, 11, 39, 0) 100%)'
                        }}
                    ></div>

                    {Feedback.map((Feedback) => (
                        <SwiperSlide key={Feedback.id}>
                            <motion.div
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-[450px] mx-auto max-sm:w-[280px] mx-auto h-auto min-h-[386px] bg-[#0E2334] flex flex-col justify-between rounded-3xl py-10 border-2 border-transparent hover:border-[#29E68B] duration-300 hover:transform hover:shadow-[0_10px_30px_5px_#0D2834] cursor-pointer"
                            >
                                <StarRating numberOfStars={Feedback.numberOfStars} />

                                <p className="text-[#F6F6F7] text-[18px] max-md:text-sm leading-relaxed mb-5 max-md:mb-6 font-medium px-7">
                                    &quot;{Feedback.description}&quot;
                                </p>

                                <div className="flex items-center gap-3 px-12 max-sm:px-6">
                                    <div className="w-14 h-14 max-md:w-12 max-md:h-12 rounded-full overflow-hidden">
                                        <Image className="w-14 h-14 max-md:w-12 max-md:h-12 rounded-full overflow-hidden hover:scale-125 duration-700" src={Feedback.img} alt={Feedback.title} />

                                    </div>
                                    <div>
                                        <h4 className="text-[#F6F6F7] text-[19px] max-md:text-base">
                                            {Feedback.name}
                                        </h4>
                                        <p className="text-[#29E68B] text-sm max-md:text-xs font-medium">
                                            {Feedback.title}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            <style jsx global>{`
                .testimonials-swiper .swiper-wrapper {
                    transition-timing-function: ease-in-out !important;
                }
                
                .testimonials-swiper:hover .swiper-wrapper {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}