"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Management from "@/public/OurServices/MANG.webp";
import Devops from "@/public/OurServices/Devops.webp";
import AI from "@/public/OurServices/ai.webp";
import Mobile from "@/public/OurServices/mob.webp";
import WebDevelopment from "@/public/OurServices/web.webp";
import shaddow from "@/public/OurServices/shaddddow.svg";
import shaddow2 from "@/public/Ellipse 2.svg";
import rightshadoow from "@/public/OurServices/rightshadoow.svg";
import { AnimateOnView } from "../global components/AnimateOnView"; // import the wrapper
import { useDictionary } from "@/hooks/useDictionary";
import { useLanguage } from "@/contexts/LanguageContext";

export default function OurServicesComponents() {
    const dictionary = useDictionary();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { lang } = useLanguage();
    return (
        <div className="grid grid-cols-2 max-sm:gap-8 max-lg:gap-6 gap-5 mx-auto px-0">
            {/* Management Systems */}
            <AnimateOnView
                animation="up"
                className="col-span-2 min-h-[400px] sm:min-h-[450px] lg:h-[450px] rounded-xl flex flex-col-reverse lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-20 bg-[#0E1330]/95 border-2 border-[#282D45] p-4 sm:p-8 lg:p-16 relative overflow-hidden"
            >
                <Image
                    src={shaddow}
                    alt=""
                    className="absolute left-0 bottom-0 z-0 opacity-60"
                    aria-hidden="true"
                    loading="lazy"
                />
                <Image
                    src={shaddow2}
                    alt=""
                    className="absolute left-0 top-0 z-0 opacity-60"
                    aria-hidden="true"
                    loading="lazy"
                />

                <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 text-center lg:text-left">
                    <h3
                        className="text-white max-sm:text-xl max-md:text-2xl text-3xl font-bold mb-3 sm:mb-4"
                        itemProp="name"
                    >
                        {dictionary?.ourServices?.services[0]?.title}
                    </h3>

                    <p
                        className="text-[#8F9BB7] mb-4 sm:mb-6 lg:mb-7 leading-relaxed max-sm:text-sm text-base"
                        itemProp="description"
                    >
                        {dictionary?.ourServices?.services[0]?.description}
                    </p>

                    <div className="sr-only">
                        <span itemProp="category">
                            Enterprise Software Development
                        </span>
                        <span itemProp="serviceType">
                            Custom Management Systems
                        </span>
                        <span itemProp="audience">Business Management</span>
                    </div>

                    {/* <Link
                        href="/services/management-systems"
                        className="w-full sm:w-[200px] mx-auto lg:mx-0 h-[45px] sm:h-[50px] bg-[#15193485] hover:backdrop-blur-3xl border-[1px] border-[#282D45] text-[#F6F6F7] text-sm sm:text-base font-medium cursor-pointer rounded-[36px] transition-all duration-300 ease-in-out hover:shadow-lg flex justify-center items-center gap-[10px] hover:border-[#29E68C] focus:outline-none focus:ring-2 focus:ring-[#29E68C]"
                        aria-label="Learn more about management systems development services"
                    >
                        {dictionary?.global?.learn_more}
                    </Link> */}
                </div>

                <figure className="relative w-full lg:w-1/2 h-[250px] sm:h-[300px] lg:h-[373px] max-w-[400px] lg:max-w-[518px] mx-auto rounded-2xl lg:rounded-3xl overflow-hidden">
                    <Image
                        src={Management}
                        alt="Custom ERP and CRM dashboard interface showing business analytics, workflow automation, and real-time reporting features"
                        fill
                        priority
                        quality={90}
                        placeholder="blur"
                        className="object-cover rounded-2xl lg:rounded-3xl hover:scale-120 duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 518px"
                    />
                </figure>
            </AnimateOnView>
            {/* Web Development */}
            <AnimateOnView
                animation="up"
                className="col-span-2 h-[400px] max-lg:h-[560px] max-md:h-[425px] rounded-xl flex flex-col-reverse lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-20 bg-[#0E1330]/95 border-2 border-[#282D45] p-4 sm:p-8 lg:p-16 relative overflow-hidden"
            >
                <figure className="relative w-1/2 max-lg:w-full h-[300px] max-lg:h-[390px] rounded-3xl overflow-hidden">
                    <Image
                        src={WebDevelopment}
                        alt="Modern web development portfolio featuring responsive websites, e-commerce platforms, and progressive web applications with SEO optimization"
                        fill
                        loading="lazy"
                        quality={85}
                        placeholder="blur"
                        className="object-cover rounded-3xl hover:scale-120 duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                </figure>

                <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 relative text-center lg:text-left">
                    <Image
                        src={rightshadoow}
                        alt=""
                        className="absolute right-0 bottom-0 z-0 opacity-60"
                        aria-hidden="true"
                        loading="lazy"
                    />
                    <Image
                        src={rightshadoow}
                        alt=""
                        className="absolute right-0 top-0 z-0 opacity-60"
                        aria-hidden="true"
                        loading="lazy"
                    />

                    <h3
                        className="text-white max-sm:text-xl max-md:text-2xl text-3xl font-bold mb-3 sm:mb-4 z-10"
                        itemProp="name"
                    >
                        {dictionary?.ourServices?.services[4]?.title}
                    </h3>

                    <p
                        className="text-[#8F9BB7] mb-4 sm:mb-6 lg:mb-7 leading-relaxed max-sm:text-sm text-base z-10"
                        itemProp="description"
                    >
                        {dictionary?.ourServices?.services[4]?.description}
                    </p>

                    <div className="sr-only">
                        <span itemProp="category">Web Development</span>
                        <span itemProp="serviceType">
                            Custom Website Development
                        </span>
                        <span itemProp="audience">Business Websites</span>
                    </div>
                </div>
            </AnimateOnView>

            {/* Mobile Applications */}
            <AnimateOnView
                animation="up"
                className="col-span-2 h-[400px] max-lg:h-[560px] max-md:h-[425px] rounded-xl flex max-lg:flex-col flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-20 bg-[#0E1330]/95 border-2 border-[#282D45] p-4 sm:p-8 lg:p-16 relative overflow-hidden"
            >
                <Image
                    src={shaddow}
                    alt=""
                    className="absolute left-0 bottom-0 z-0 opacity-60"
                    aria-hidden="true"
                    loading="lazy"
                />
                <Image
                    src={shaddow2}
                    alt=""
                    className="absolute left-0 top-0 z-0 opacity-60 max-sm:hidden"
                    aria-hidden="true"
                    loading="lazy"
                />

                <div className="max-lg:w-full h-max w-1/2 flex flex-col justify-center z-10 text-center lg:text-left order-2 lg:order-1">
                    <h3
                        className="text-white max-sm:text-xl max-md:text-2xl text-3xl font-bold mb-3 sm:mb-4"
                        itemProp="name"
                    >
                        {dictionary?.ourServices?.services[3]?.title}
                    </h3>

                    <p
                        className="text-[#8F9BB7] max-lg:mb-5 mb-7 leading-relaxed max-sm:text-sm text-base"
                        itemProp="description"
                    >
                        {dictionary?.ourServices?.services[3]?.description}
                    </p>

                    <div className="sr-only">
                        <span itemProp="category">Mobile Development</span>
                        <span itemProp="serviceType">
                            iOS and Android App Development
                        </span>
                        <span itemProp="audience">Mobile Users</span>
                    </div>
                </div>

                <figure className="relative w-1/2 max-lg:w-full max-sm:w-[513px] h-[300px] max-lg:h-[390px] order-1 lg:order-2 rounded-3xl overflow-hidden">
                    <Image
                        src={Mobile}
                        alt="Mobile app development portfolio showing iOS and Android applications with modern UI design and cross-platform compatibility"
                        fill
                        loading="lazy"
                        quality={85}
                        placeholder="blur"
                        className="object-cover max-md:object-contain rounded-3xl hover:scale-120 duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                </figure>
            </AnimateOnView>

            {/* Cloud & DevOps */}
            <AnimateOnView
                animation="left"
                className="col-span-1 max-lg:col-span-2 h-[602px] max-lg:h-[540px] max-sm:h-max rounded-xl flex flex-col justify-center items-center border-2 border-[#282D45] relative overflow-hidden bg-gradient-to-br from-[#133F43] via-[#0E1330] to-[#0E1330]"
            >
                <figure className="relative w-full h-[350px] max-sm:h-[250px] overflow-hidden">
                    <Image
                        src={Devops}
                        alt="Cloud infrastructure and DevOps dashboard showing CI/CD pipelines, container orchestration, and monitoring systems"
                        fill
                        loading="lazy"
                        quality={85}
                        placeholder="blur"
                        className="w-full h-full object-cover hover:scale-120 duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                </figure>

                <div className="w-full h-[252px] max-sm:h-max relative overflow-hidden flex flex-col justify-center max-sm:p-6 pt-8 p-12">
                    <Image
                        src={shaddow2}
                        alt=""
                        className="absolute left-0 bottom-0 z-0 opacity-60"
                        aria-hidden="true"
                        loading="lazy"
                    />
                    <Image
                        src={rightshadoow}
                        alt=""
                        className="absolute -right-20 z-0 opacity-60"
                        aria-hidden="true"
                        loading="lazy"
                    />

                    <h3
                        className="text-white max-sm:text-xl max-md:text-2xl text-3xl font-bold mb-3 sm:mb-4 z-10 text-center lg:text-left"
                        itemProp="name"
                    >
                        {dictionary?.ourServices?.services[2]?.title}
                    </h3>

                    <p
                        className="text-[#8F9BB7] leading-relaxed z-10 max-sm:text-sm text-base text-center lg:text-left mb-4"
                        itemProp="description"
                    >
                        {dictionary?.ourServices?.services[2]?.description}
                    </p>

                    <div className="sr-only">
                        <span itemProp="category">Cloud Services</span>
                        <span itemProp="serviceType">
                            DevOps and Infrastructure
                        </span>
                        <span itemProp="audience">Enterprise Technology</span>
                    </div>
                </div>
            </AnimateOnView>

            {/* AI Tools & Automation */}
            <AnimateOnView
                animation="right"
                className="col-span-1 max-lg:col-span-2 h-[602px] max-lg:h-[540px] max-sm:h-[560px] rounded-xl flex flex-col justify-between items-center border-2 border-[#282D45] relative overflow-hidden bg-gradient-to-r from-[#0E1330] to-[#16584E]"
            >
                <div className="w-full h-[252px] max-sm:h-max relative overflow-hidden flex flex-col justify-center max-lg:p-6 max-sm:pt-8 p-12">
                    <Image
                        src={shaddow2}
                        alt=""
                        className="absolute left-0 bottom-0 z-0 opacity-60"
                        aria-hidden="true"
                        loading="lazy"
                    />
                    <Image
                        src={rightshadoow}
                        alt=""
                        className="absolute -right-20 z-0 opacity-60"
                        aria-hidden="true"
                        loading="lazy"
                    />

                    <h3
                        className="text-white max-sm:text-xl max-md:text-2xl text-3xl font-bold max-md:mb-2 mb-4 z-10 text-center lg:text-left"
                        itemProp="name"
                    >
                        {dictionary?.ourServices?.services[1]?.title}
                    </h3>

                    <p
                        className="text-[#8F9BB7] leading-relaxed z-10 max-sm:text-sm text-base text-center lg:text-left mb-4"
                        itemProp="description"
                    >
                        {dictionary?.ourServices?.services[1]?.description}
                    </p>

                    <div className="sr-only">
                        <span itemProp="category">Artificial Intelligence</span>
                        <span itemProp="serviceType">
                            AI Integration and Automation
                        </span>
                        <span itemProp="audience">Business Automation</span>
                    </div>
                </div>

                <figure className="relative w-full h-[350px] overflow-hidden">
                    <Image
                        src={AI}
                        alt="AI automation tools interface showing machine learning models, chatbot development, and predictive analytics dashboard"
                        fill
                        loading="lazy"
                        quality={85}
                        placeholder="blur"
                        className="w-full h-full object-cover hover:scale-120 duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                </figure>
            </AnimateOnView>

            <AnimateOnView animation="up" className="mt-5 col-span-2 py-4 sm:py-6 px-4 bg-[#0E1330]/85 border-2 border-[#282D45] rounded-xl flex flex-col sm:flex-row justify-center sm:justify-evenly items-center gap-4 sm:gap-6 lg:gap-8"
                aria-label="Call to action section"
            >
                <h4 className="bg-gradient-to-t from-[#29E68C] via-[#29E68C] to-[#F6F6F7] bg-clip-text text-transparent font-bold text-lg sm:text-xl xl:text-3xl text-center sm:text-left">
                    {dictionary?.ourServices?.substitleforButton}
                </h4>
                <Link
                    href="/about/#contact"
                    className="w-1/3 sm:w-[120px] lg:w-[140px] h-[42px] lg:h-[48px] bg-[#29E68C] hover:bg-[#4FF0A3] text-[#070707] text-sm sm:text-base font-medium cursor-pointer rounded-[36px] transition-colors duration-300 ease-in-out hover:shadow-lg flex justify-center items-center gap-[10px] flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#29E68C]"
                    aria-label="Contact Penta Studio to start your development project"
                >
                    {dictionary?.hero.startBtn}
                </Link>
            </AnimateOnView>
        </div>
    );
}
