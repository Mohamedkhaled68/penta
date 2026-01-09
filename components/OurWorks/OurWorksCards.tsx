"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imm from "@/public/OurServices/MANG.webp";
import { motion } from 'framer-motion';

// Define types for TypeScript
interface WorkItem {
    id: number;
    title: string;
    slug: string;
    image: string;
    imageAlt: string;
    description: string;
    shortDescription: string;
    type: string;
    category: string;
    link: string;
    tools: string[];
    completionDate: string;
    industry: string;
    clientType: string;
}
// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const worksData: WorkItem[] = [
    {
        id: 1,
        title: "RetailX E-Commerce Platform Development",
        slug: "retailx-ecommerce-platform",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        imageAlt: "RetailX E-Commerce Platform dashboard showing improved checkout process and sales analytics",
        description: "Built a scalable online retail platform that reduced checkout time by 40% and boosted sales conversion rates. Our expert development team created a user-friendly interface with advanced features including inventory management, payment processing, and real-time analytics.",
        shortDescription: "Scalable e-commerce platform with 40% faster checkout and improved conversion rates",
        type: "E-Commerce Development",
        category: "ecommerce",
        link: "/case-studies/retailx-ecommerce-platform",
        tools: ["React", "Node.js", "MongoDB", "Stripe API"],
        completionDate: "2024-03-15",
        industry: "Retail",
        clientType: "Enterprise"
    },
    {
        id: 2,
        title: "FinEdge Banking Dashboard Solution",
        slug: "finedge-banking-dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        imageAlt: "FinEdge Banking Dashboard with real-time financial analytics and secure transaction monitoring",
        description: "Designed and developed a secure fintech dashboard with real-time analytics, lowering user drop-offs by 30%. Features include comprehensive financial reporting, transaction monitoring, and advanced security protocols.",
        shortDescription: "Secure fintech dashboard with real-time analytics reducing user drop-offs by 30%",
        type: "FinTech Development",
        category: "fintech",
        link: "/case-studies/finedge-banking-dashboard",
        tools: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
        completionDate: "2024-02-20",
        industry: "Financial Services",
        clientType: "Enterprise"
    },
    {
        id: 3,
        title: "EduNext Mobile Learning Application",
        slug: "edunext-learning-app",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
        imageAlt: "EduNext mobile learning app interface showing gamified educational content and progress tracking",
        description: "Created a cross-platform mobile app with gamified learning features, achieving 50k downloads in the first 3 months. The app includes interactive lessons, progress tracking, and personalized learning paths.",
        shortDescription: "Cross-platform educational app with 50k downloads featuring gamified learning",
        type: "EdTech Development",
        category: "education",
        link: "/case-studies/edunext-learning-app",
        tools: ["React Native", "Firebase", "Redux", "Expo"],
        completionDate: "2024-01-10",
        industry: "Education Technology",
        clientType: "Startup"
    },
    {
        id: 4,
        title: "HealthSync Telemedicine Platform",
        slug: "healthsync-telemedicine-platform",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
        imageAlt: "HealthSync telemedicine platform connecting doctors and patients through secure video consultations",
        description: "Developed a comprehensive telemedicine solution connecting patients with healthcare providers seamlessly. Features include video consultations, prescription management, and secure patient data handling.",
        shortDescription: "Comprehensive telemedicine platform for seamless patient-provider connections",
        type: "HealthTech Development",
        category: "healthcare",
        link: "/case-studies/healthsync-telemedicine",
        tools: ["Angular", "Express.js", "MySQL", "WebRTC"],
        completionDate: "2023-12-05",
        industry: "Healthcare Technology",
        clientType: "Healthcare Provider"
    },
    {
        id: 5,
        title: "SmartHome IoT Control Dashboard",
        slug: "smarthome-iot-dashboard",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        imageAlt: "SmartHome IoT dashboard displaying connected devices, energy consumption, and automation controls",
        description: "Built an intelligent home automation dashboard with real-time device monitoring and energy optimization. The system provides centralized control for smart devices and advanced energy management features.",
        shortDescription: "Intelligent IoT dashboard with real-time monitoring and energy optimization",
        type: "IoT Development",
        category: "iot",
        link: "/case-studies/smarthome-iot-dashboard",
        tools: ["React", "MQTT", "InfluxDB", "Docker"],
        completionDate: "2023-11-18",
        industry: "Smart Home Technology",
        clientType: "Technology Startup"
    },
    {
        id: 6,
        title: "CryptoTrader Analytics Platform",
        slug: "cryptotrader-analytics",
        image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop",
        imageAlt: "CryptoTrader platform showing cryptocurrency market analysis, trading charts, and portfolio management",
        description: "Created a sophisticated cryptocurrency trading platform with advanced analytics and portfolio management tools. Features real-time market data, technical analysis indicators, and risk management systems.",
        shortDescription: "Advanced cryptocurrency trading platform with analytics and portfolio management",
        type: "FinTech Development",
        category: "cryptocurrency",
        link: "/case-studies/cryptotrader-analytics",
        tools: ["Next.js", "WebSocket", "Redis", "TradingView"],
        completionDate: "2023-10-22",
        industry: "Cryptocurrency",
        clientType: "Financial Technology"
    }
];

// JSON-LD structured data for SEO
const generateStructuredData = (works: WorkItem[]): string => {
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Our Software Development Portfolio",
        "description": "Showcase of our latest software development projects including e-commerce, fintech, healthcare, and IoT solutions",
        "numberOfItems": works.length,
        "itemListElement": works.map((work: WorkItem, index: number) => ({
            "@type": "CreativeWork",
            "position": index + 1,
            "name": work.title,
            "description": work.shortDescription,
            "url": work.link,
            "image": work.image,
            "creator": {
                "@type": "Organization",
                "name": "Your Company Name"
            },
            "dateCreated": work.completionDate,
            "genre": work.category,
            "keywords": work.tools.join(", "),
            "about": {
                "@type": "Thing",
                "name": work.industry
            }
        }))
    };

    return JSON.stringify(portfolioSchema);
};

export default function OurWorksCards() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Add structured data to head
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = generateStructuredData(worksData);
        document.head.appendChild(script);

        // Cleanup function
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    if (!isMounted) {
        return (
            <div className="h-[500px] flex items-center justify-center" role="status" aria-label="Loading portfolio">
                <span className="sr-only"></span>
            </div>
        );
    }

    return (
        <section
            className="w-full"
            aria-label="Our Software Development Portfolio"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            {/* Hidden SEO content */}
            <div className="sr-only">
                <h2 itemProp="name">Our Software Development Portfolio</h2>
                <p itemProp="description">
                    Explore our latest software development projects including custom e-commerce platforms,
                    fintech solutions, healthcare applications, IoT dashboards, and mobile apps.
                    Each project showcases our expertise in modern web technologies and user-centered design.
                </p>
                <meta itemProp="numberOfItems" content={worksData.length.toString()} />
            </div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
            >
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    speed={800}
                    effect={'slide'}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            centeredSlides: true,
                            speed: 800,
                        },
                        768: {
                            slidesPerView: 2,
                            centeredSlides: true,
                            speed: 800,
                        },
                        1024: {
                            slidesPerView: 3,
                            centeredSlides: true,
                            speed: 800,
                        },
                    }}
                    autoplay={{
                        delay: 4000, // Increased for better accessibility
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                        renderBullet: (index, className) => {
                            return `<button class="${className}" aria-label="Go to slide ${index + 1} - ${worksData[index]?.title}"></button>`;
                        }
                    }}
                    loop={true}
                    className="w-full h-[540px]"
                    role="region"
                    aria-label="Portfolio carousel"
                    keyboard={{
                        enabled: true,
                    }}
                    a11y={{
                        prevSlideMessage: 'Previous portfolio item',
                        nextSlideMessage: 'Next portfolio item',
                        firstSlideMessage: 'This is the first portfolio item',
                        lastSlideMessage: 'This is the last portfolio item',
                    }}
                >
                    {worksData.map((work, index) => (
                        <SwiperSlide key={work.id} role="group" aria-label={`${index + 1} of ${worksData.length}`}>
                            <article
                                className="group bg-[#0E1330] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#282D45] hover:border-[#29E68B] transition-all duration-200 hover:transform hover:shadow-[0_10px_30px_-5px_#0D2834] h-[500px] p-6 flex flex-col mx-auto max-w-[450px] cursor-pointer"
                                itemScope
                                itemType="https://schema.org/CreativeWork"
                                itemProp="itemListElement"
                            >
                                {/* Hidden structured data */}
                                <meta itemProp="position" content={(index + 1).toString()} />
                                <meta itemProp="url" content={work.link} />
                                <meta itemProp="dateCreated" content={work.completionDate} />
                                <meta itemProp="genre" content={work.category} />
                                <meta itemProp="keywords" content={work.tools.join(", ")} />

                                {/* Image */}
                                <div className="relative overflow-hidden h-56 rounded-2xl mb-[19px]">
                                    <Image
                                        src={imm}
                                        alt={work.imageAlt}
                                        quality={100}
                                        className="w-full h-56 object-center transition-transform duration-700 group-hover:scale-105"
                                        itemProp="image"
                                        loading={index < 3 ? "eager" : "lazy"} // Prioritize first 3 images
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-4 mb-[10px]">
                                    <h3
                                        className="text-2xl max-sm:text-xl font-bold bg-gradient-to-b from-[#F6F6F7] via-[#F6F6F7] to-[#29E68C] bg-clip-text text-transparent line-clamp-1"
                                        itemProp="name"
                                    >
                                        {work.title}
                                    </h3>

                                    <p
                                        className="text-[#8F9BB7] text-sm w-11/12 max-sm:w-full mx-auto leading-relaxed overflow-auto h-[108px]"
                                        itemProp="description"
                                    >
                                        {work.description}
                                    </p>
                                </div>

                                <div className="w-full gradient-border-b !h-[1px] my-2" role="separator"></div>

                                <footer className="flex justify-between gap-4 px-2 mt-0.5">
                                    <p className="text-[#8F9BB7] text-sm" itemProp="about">
                                        {work.type}
                                    </p>

                                    {/* <a
                                        href={work.link}
                                        className="inline-flex items-center gap-2 font-medium transition-all duration-500 group-hover:gap-3 bg-gradient-to-b from-[#F6F6F7] via-[#F6F6F7] to-[#29E68C] bg-clip-text text-transparent hover:scale-105"
                                        aria-label={`Read more about ${work.title} project`}
                                        itemProp="url"
                                    >
                                        Read more
                                    </a> */}
                                </footer>

                                {/* Hidden tools for SEO */}
                                {/* <div className="sr-only">
                                    Technologies used: {work.tools.map(tool => (
                                        <span key={tool} itemProp="keywords">{tool}</span>
                                    ))}
                                </div> */}
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation and pagination */}
                <div className="flex items-center justify-center gap-6" role="group" aria-label="Carousel controls">
                    <div className="swiper-pagination !relative !w-auto custom-pagination" role="tablist" aria-label="Portfolio slides"></div>
                </div>

                {/* Add custom styles */}
                <style jsx global>{`
                    .custom-pagination .swiper-pagination-bullet {
                        background-color: #8F9BB7;
                        opacity: 0.6;
                        width: 10px;
                        height: 10px;
                        margin: 0 2px;
                        transition: all 0.3s ease;
                        border: none;
                        cursor: pointer;
                    }
                    .custom-pagination .swiper-pagination-bullet-active {
                        background-color: #29E68B !important;
                        opacity: 1;
                        transform: scale(1.05);
                    }
                    .custom-pagination .swiper-pagination-bullet:hover {
                        background-color: #29E68B;
                        opacity: 0.8;
                        box-shadow: 0 0 8px #29E68B;
                        transform: scale(1.1);
                    }
                    .custom-pagination .swiper-pagination-bullet:focus {
                        outline: 2px solid #29E68B;
                        outline-offset: 2px;
                    }
                    .sr-only {
                        position: absolute;
                        width: 1px;
                        height: 1px;
                        padding: 0;
                        margin: -1px;
                        overflow: hidden;
                        clip: rect(0, 0, 0, 0);
                        white-space: nowrap;
                        border: 0;
                    }
                `}</style>
            </motion.div>
        </section>
    );
}