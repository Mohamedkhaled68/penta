"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/public/Logo.svg";
import Penta from "@/public/Penta.svg";
import Contact from "@/public/Icons/Contact.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguagesSelector from "./LanguagesSelector";
import { useDictionary } from "@/hooks/useDictionary";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("home");
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const pathname = usePathname();
    const dictionary = useDictionary();

    //   const scrollToSection = (sectionId: string): void => {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //       element.scrollIntoView({
    //         behavior: "smooth",
    //         block: "start",
    //       });
    //       setActiveSection(sectionId);
    //     }
    //   };

    // Track scroll to update navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Intersection Observer for sections
    useEffect(() => {
        const sections = ["home", "services", "our-work", "our-partners"];
        const observers: IntersectionObserver[] = [];

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.isIntersecting &&
                                entry.intersectionRatio > 0.5
                            ) {
                                setActiveSection(sectionId);
                            }
                        });
                    },
                    { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" }
                );
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    // Hover effect handlers
    const handleMouseEnter = (
        event: React.MouseEvent<HTMLElement>,
        isActive: boolean
    ) => {
        if (isActive) return;

        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const mouseX = event.clientX;
        const elementCenterX = rect.left + rect.width / 2;

        const direction = mouseX < elementCenterX ? "left" : "right";

        const gradient =
            direction === "left"
                ? `linear-gradient(90deg, #29E68C 20%, #F6F6F7 100%)`
                : `linear-gradient(270deg, #29E68C 20%, #F6F6F7 100%)`;

        target.style.background = gradient;
        target.style.webkitBackgroundClip = "text";
        target.style.backgroundClip = "text";
        target.style.webkitTextFillColor = "transparent";
        target.style.transition = "all 0.3s ease-in-out";
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.currentTarget;
        target.style.background = "none";
        target.style.webkitTextFillColor = "";
        target.style.backgroundClip = "";
        target.style.webkitBackgroundClip = "";
    };

    const getNavButtonClass = (sectionId: string): string => {
        const isActive = activeSection === sectionId && pathname === "/";
        return `text-base transition-all duration-300 ease-in-out cursor-pointer relative ${
            isActive
                ? "text-[#29E68C] font-medium"
                : "text-[#8F9BB7] font-medium"
        }`;
    };

    const getLinkClass = (href: string): string => {
        const isActive = pathname === href;
        return `text-base transition-all duration-300 ease-in-out relative ${
            isActive
                ? "text-[#29E68C] font-medium"
                : "text-[#8F9BB7] font-medium"
        }`;
    };

    return (
        <nav
            className={`font-plex-regular max-lg:hidden mt-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 h-[70px] px-8 w-11/12 mx-auto rounded-4xl transition-all duration-500 ${
                isScrolled
                    ? "bg-[#0E2334]/30 backdrop-blur-3xl"
                    : "bg-transparent"
            } mb-10`}
        >
            {/* Logo */}
            <div className="flex gap-2 items-center">
                <Image src={logo} alt="penta logo" />
                <Image src={Penta} alt="penta" />
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center gap-[40px]">
                <Link
                    href="/"
                    onMouseEnter={(e) => handleMouseEnter(e, pathname === "/")}
                    onMouseLeave={handleMouseLeave}
                    className={getLinkClass("/")}
                >
                    {dictionary?.navbar.home}
                </Link>
                <Link
                    href="/#services"
                    className={getNavButtonClass("services")}
                    onMouseEnter={(e) =>
                        handleMouseEnter(
                            e,
                            activeSection === "services" && pathname === "/"
                        )
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    {dictionary?.navbar.services}
                </Link>
                <Link
                    href="/#our-work"
                    className={getNavButtonClass("our-work")}
                    onMouseEnter={(e) =>
                        handleMouseEnter(
                            e,
                            activeSection === "our-work" && pathname === "/"
                        )
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    {dictionary?.navbar.works}
                </Link>
                <Link
                    href="/#our-partners"
                    className={getNavButtonClass("our-partners")}
                    onMouseEnter={(e) =>
                        handleMouseEnter(
                            e,
                            activeSection === "our-partners" && pathname === "/"
                        )
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    {dictionary?.navbar.partners}
                </Link>
                <Link
                    href="/about"
                    onMouseEnter={(e) =>
                        handleMouseEnter(e, pathname === "/about")
                    }
                    onMouseLeave={handleMouseLeave}
                    className={getLinkClass("/about")}
                >
                    {dictionary?.navbar.about}
                </Link>
                {/* <Link
                    href="/blog"
                    onMouseEnter={(e) =>
                        handleMouseEnter(e, pathname === "/blog")
                    }
                    onMouseLeave={handleMouseLeave}
                    className={getLinkClass("/blog")}
                >
                    {dictionary?.navbar.blog}
                </Link> */}
            </div>

            <div className="flex items-center gap-2">
                <LanguagesSelector />
                {/* Contact Button */}
                <div className="h-[50px] w-[136px] flex justify-center items-center">
                    <a
                        href="https://wa.me/0201551850855"
                        target="_blank"
                        className="w-[120px] h-[40px] bg-[#29E68C] hover:bg-[#4FF0A3] text-[#070707] text-base font-medium cursor-pointer rounded-[36px] transition-all duration-300 ease-in-out hover:shadow-lg flex justify-center items-center gap-[10px]"
                    >
                        {dictionary?.navbar.contact}
                        <Image
                            src={Contact}
                            alt="Contact with penta team"
                            className="h-4 w-4"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}
