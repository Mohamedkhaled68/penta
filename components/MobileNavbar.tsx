"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import Penta from "@/public/Penta.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
    const [open, setOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#our-work", label: "Our Work" },
        { href: "#our-partners", label: "Our Partners" },
        { href: "/about", label: "About" },
        // { href: "/blog", label: "Blog" },
    ];

    // Hover effect handlers (same as main navbar)
    const handleMouseEnter = (
        event: React.MouseEvent<HTMLElement>,
        isActive: boolean
    ) => {
        if (isActive) return;

        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const mouseX = event.clientX;
        const elementCenterX = rect.left + rect.width / 2;

        const direction = mouseX < elementCenterX ? 'left' : 'right';

        const gradient = direction === 'left'
            ? `linear-gradient(90deg, #29E68C 0%, #8F9BB7 100%)`
            : `linear-gradient(270deg, #29E68C 0%, #8F9BB7 100%)`;

        target.style.background = gradient;
        target.style.webkitBackgroundClip = 'text';
        target.style.backgroundClip = 'text';
        target.style.webkitTextFillColor = 'transparent';
        target.style.transition = 'all 0.3s ease-in-out';
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.currentTarget;
        target.style.background = 'none';
        target.style.webkitTextFillColor = '';
        target.style.backgroundClip = '';
        target.style.webkitBackgroundClip = '';
    };

    const getLinkClass = (href: string): string => {
        const isActive = href.startsWith("#") 
            ? pathname === "/" && window.location.hash === href
            : pathname === href;
        return `text-xl font-medium transition-all duration-300 ease-in-out cursor-pointer relative ${
            isActive
                ? 'text-[#29E68C]'
                : 'text-[#8F9BB7]'
        }`;
    };

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleOpenMenu = () => {
        setOpen(true);
        // Small delay to ensure DOM is ready, then trigger animation
        setTimeout(() => setIsAnimating(true), 10);
    };

    const handleCloseMenu = () => {
        setIsAnimating(false);
        setTimeout(() => setOpen(false), 300); // Match animation duration
    };

    return (
        <div className="lg:hidden">
            {/* Top Bar */}
            <div className="mt-5 flex justify-between items-center fixed top-0 left-0 right-0 z-50 h-[60px] px-6 w-11/12 mx-auto rounded-4xl transition-all duration-500 bg-[#0E2334]/30 backdrop-blur-3xl mb-10">
                <div className="flex items-center gap-3">
                    <Image src={logo} alt="penta logo" className="h-9 w-9" />
                    <Image src={Penta} alt="penta" className="h-[82px] w-[80px]" />
                </div>
                <button
                    onClick={handleOpenMenu}
                    className="text-[#29E68C] text-xl focus:outline-none cursor-pointer transform transition-transform duration-200 hover:scale-110"
                    aria-label="Open menu"
                >
                    &#9776;
                </button>
            </div>

            {/* Overlay Menu */}
            {open && (
                <div className={`fixed inset-0 z-50 bg-[#0E2334]/20 backdrop-blur-3xl flex flex-col items-center justify-start pt-16 transition-all duration-300 ease-in-out ${
                    isAnimating ? 'opacity-100' : 'opacity-0'
                }`}>
                    <button
                        onClick={handleCloseMenu}
                        className={`absolute top-8 right-[38px] text-3xl text-[#29E68C] focus:outline-none cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-90 ${
                            isAnimating ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                        }`}
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                    <nav className={`flex flex-col gap-5 items-center transform transition-all duration-500 ease-out ${
                        isAnimating ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-5 opacity-0 scale-95'
                    }`}>
                        {links.map((link, index) => {
                            const isActive = link.href.startsWith("#") 
                                ? pathname === "/" && window.location.hash === link.href
                                : pathname === link.href;

                            return link.href.startsWith("#") ? (
                                <button
                                    key={link.href}
                                    onClick={() => {
                                        scrollToSection(link.href);
                                        handleCloseMenu();
                                    }}
                                    onMouseEnter={e => handleMouseEnter(e, isActive)}
                                    onMouseLeave={handleMouseLeave}
                                    className={`${getLinkClass(link.href)} transform transition-all duration-300 hover:scale-105 ${
                                        isAnimating 
                                            ? 'translate-x-0 opacity-100' 
                                            : index % 2 === 0 
                                                ? '-translate-x-8 opacity-0' 
                                                : 'translate-x-8 opacity-0'
                                    }`}
                                    style={{ 
                                        transitionDelay: isAnimating ? `${index * 50}ms` : `${(links.length - index) * 30}ms` 
                                    }}
                                >
                                    {link.label}
                                </button>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleCloseMenu}
                                    onMouseEnter={e => handleMouseEnter(e, isActive)}
                                    onMouseLeave={handleMouseLeave}
                                    className={`${getLinkClass(link.href)} transform transition-all duration-300 hover:scale-105 ${
                                        isAnimating 
                                            ? 'translate-x-0 opacity-100' 
                                            : index % 2 === 0 
                                                ? '-translate-x-8 opacity-0' 
                                                : 'translate-x-8 opacity-0'
                                    }`}
                                    style={{ 
                                        transitionDelay: isAnimating ? `${index * 50}ms` : `${(links.length - index) * 30}ms` 
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </div>
    );
}