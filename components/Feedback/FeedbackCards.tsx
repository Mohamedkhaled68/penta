"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import client1 from "@/public/feedbackClient/client1.svg"
import client2 from "@/public/feedbackClient/Ayman.webp"

const Feedback = [
    {
        id: 1,
        description: "Working with Penta Studio was a game-changer for our business. Their team not only delivered a flawless product on time but also guided us through every stage with clear communication and genuine care.",
        name: "Dr. Omar Elshinawy",
        title: "CEO of Amen Platform",
        img: client1
    },
    {
        id: 2,
        description: "Outstanding service and exceptional results. The team's expertise and dedication made our project a huge success. Highly recommended for anyone looking for professional development services.",
        name: "Eng. Ayman Hamdallah",
        title: "CTO of Amen Platform",
        img: client2
    },
    {
        id: 3,
        description: "Penta Studio understood our vision from day one. They translated complex ideas into a clean, scalable product that exceeded our expectations.",
        name: "Ahmed Salah",
        title: "Founder & Product Owner",
        img: null
    },
    {
        id: 4,
        description: "What impressed us most was their commitment to quality and details. Every feature was thoughtfully built with the end user in mind.",
        name: "Sara Mostafa",
        title: "Operations Manager",
        img: null
    },
    {
        id: 5,
        description: "The collaboration was smooth, transparent, and highly professional. Penta Studio felt more like a strategic partner than just a service provider.",
        name: "Mohamed Adel",
        title: "Business Development Lead",
        img: null
    },
    {
        id: 6,
        description: "From planning to execution, the team showed deep technical knowledge and strong problem-solving skills. The final result speaks for itself.",
        name: "Eng. Karim Nabil",
        title: "Technical Consultant",
        img: null
    },
    {
        id: 7,
        description: "They delivered exactly what we needed, on time and within scope. Communication was clear, and every update made us confident in the progress.",
        name: "Nour El-Din Hassan",
        title: "Startup Co-Founder",
        img: null
    },
    {
        id: 8,
        description: "Penta Studio helped us turn an early-stage idea into a real, market-ready product. Their guidance was invaluable throughout the journey.",
        name: "Maha Youssef",
        title: "Entrepreneur",
        img: null
    },
    {
        id: 9,
        description: "Professional, reliable, and highly skilled. The team consistently went above and beyond to ensure the best possible outcome.",
        name: "Eng. Hossam Fathy",
        title: "Senior Software Engineer",
        img: null
    },
    {
        id: 10,
        description: "Choosing Penta Studio was one of our best decisions. Their structured approach and technical excellence gave us confidence at every step.",
        name: "Youssef Ibrahim",
        title: "Project Manager",
        img: null
    },
    {
        id: 11,
        description: "The level of dedication and ownership the team showed was remarkable. They truly cared about the success of our product.",
        name: "Laila Abdelrahman",
        title: "Product Manager",
        img: null
    },
    {
        id: 12,
        description: "Penta Studio delivered a high-quality solution that aligned perfectly with our business goals. We look forward to working together again.",
        name: "Eng. Tarek Mahmoud",
        title: "Technology Director",
        img: null
    },
];

// Function to get initials from name
const getInitials = (name: string) => {
    // Remove titles like "Dr.", "Eng.", etc.
    const cleanName = name.replace(/^(Dr\.|Eng\.)\s+/i, '');
    const nameParts = cleanName.trim().split(' ');

    if (nameParts.length >= 2) {
        return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
    }
    return nameParts[0][0].toUpperCase();
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
                    className="testimonials-swiper w-full h-[400px] relative"
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

                    {Feedback.map((feedback) => (
                        <SwiperSlide key={feedback.id}>
                            <motion.div
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-[450px] mx-auto max-sm:w-[280px] mx-auto h-auto min-h-[300px] max-md:min-h-[350px] bg-[#0E2334] flex flex-col justify-between rounded-3xl py-6 border-2 border-transparent hover:border-[#29E68B] duration-300 hover:transform hover:shadow-[0_10px_30px_5px_#0D2834] cursor-pointer"
                            >
                                <p className="text-[#F6F6F7] text-[18px] max-md:text-sm leading-relaxed mb-4 max-md:mb-6 font-medium px-5">
                                    &quot;{feedback.description}&quot;
                                </p>

                                <div className="flex items-center gap-3 px-12 max-sm:px-6">
                                    <div className="w-14 h-14 max-md:w-12 max-md:h-12 rounded-full overflow-hidden flex-shrink-0">
                                        {feedback.img ? (
                                            <Image
                                                className="w-14 h-14 max-md:w-12 max-md:h-12 rounded-full overflow-hidden hover:scale-125 duration-700"
                                                src={feedback.img}
                                                alt={feedback.title}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#0E2334] border-2 border-[#29E68B] rounded-full flex items-center justify-center">
                                                <span className="text-[#29E68B] text-xl max-md:text-lg font-bold">
                                                    {getInitials(feedback.name)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-[#F6F6F7] text-[19px] max-md:text-base">
                                            {feedback.name}
                                        </h4>
                                        <p className="text-[#29E68B] text-sm max-md:text-xs font-medium">
                                            {feedback.title}
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