"use client";
import Image from "next/image";
import React, { useState, FormEvent } from "react";
import logo from "@/public/Logo.svg";
import Penta from "@/public/Penta.svg";
import {
    Facebook,
    Instagram,
    Linkedin,
    MailIcon,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/hooks/useDictionary";
import { HoverButton } from "@/components/global components/HoverButton";
import { useParams, usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const dictionary = useDictionary();
    const { lang } = useParams<{ lang: string }>();
    const pathname = usePathname();

    // Add state for newsletter form
    const [newsletterEmail, setNewsletterEmail] = useState<string>("");
    const [isSubmittingNewsletter, setIsSubmittingNewsletter] =
        useState<boolean>(false);

    // Handle newsletter form submission
    const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setIsSubmittingNewsletter(true);

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: newsletterEmail }),
            });

            if (!response.ok) throw new Error("Failed to subscribe");

            toast.success(
                dictionary?.footer?.newsletter?.toast?.success ||
                "Thank you for subscribing! We'll keep you updated."
            );
            setNewsletterEmail("");
        } catch (error) {
            console.error("Error subscribing to newsletter:", error);
            toast.error(
                dictionary?.footer?.newsletter?.toast?.error ||
                "Failed to subscribe. Please try again."
            );
        } finally {
            setIsSubmittingNewsletter(false);
        }
    };

    // Helper function to check if a link is active
    const isLinkActive = (href: string): boolean => {
        // Remove language prefix from pathname for comparison
        const cleanPathname = pathname.replace(/^\/(en|ar)/, '') || '/';
        const cleanHref = href.replace(/^\/(en|ar)/, '') || '/';
        
        // For home page
        if (cleanHref === '/' || cleanHref === '') {
            return cleanPathname === '/' || cleanPathname === '';
        }
        
        // For about page
        if (cleanHref === '/about') {
            return cleanPathname === '/about';
        }
        
        // For section links (services, partners)
        if (cleanHref.startsWith('/#')) {
            return cleanPathname === '/' || cleanPathname === '';
        }
        
        return cleanPathname === cleanHref;
    };

    // Helper function to get link class based on active state
    const getLinkClass = (href: string): string => {
        const isActive = isLinkActive(href);
        return `transition-colors ${
            isActive 
                ? "text-[#29E68B]" 
                : "text-white hover:text-[#29E68B]"
        }`;
    };

    return (
        <footer
            className=" font-plex-regular bg-[#0F202E] w-full min-h-[500px] max-md:min-h-auto flex flex-col max-md:gap-5 justify-between p-16 max-md:p-6 max-md:py-12 pb-5"
            role="contentinfo"
            aria-label="Site footer with contact information and navigation"
        >
            {/* Main Footer Content */}
            <div className="flex justify-between max-md:flex-col gap-2 max-md:gap-12 h-[300px] max-md:h-max">
                <div className="h-full w-1/2 max-md:w-full flex flex-col max-md:flex-col-reverse justify-between max-md:gap-8">
                    {/* Newsletter Signup */}
                    <section aria-labelledby="newsletter-title">
                        <h2 id="newsletter-title" className="sr-only">
                            Subscribe to our newsletter
                        </h2>
                        <form
                            onSubmit={handleNewsletterSubmit}
                            className="flex gap-4 max-md:flex-col max-md:gap-4 items-center max-md:items-stretch"
                            role="search"
                            aria-label="Newsletter subscription"
                        >
                            <label htmlFor="email-input" className="sr-only">
                                Enter your email address to subscribe to our
                                newsletter
                            </label>
                            <input
                                id="email-input"
                                type="email"
                                name="email"
                                value={newsletterEmail}
                                onChange={(e) =>
                                    setNewsletterEmail(e.target.value)
                                }
                                placeholder={
                                    dictionary?.footer?.input_placeholder ||
                                    "Enter your email"
                                }
                                className="bg-[#052E1A] border-[0.5px] border-[#29E68B] rounded-[36px] px-4 py-3 text-white focus:outline-none focus:ring-[0.5px] focus:ring-[#29E68B] w-80 max-md:w-11/12 max-md:mx-auto"
                                aria-describedby="email-description"
                                required
                            />
                            <p id="email-description" className="sr-only">
                                Subscribe to receive updates about Penta
                                Studio&apos;s web design and development
                                services
                            </p>
                            <HoverButton
                                type="submit"
                                disabled={isSubmittingNewsletter}
                                className="w-[120px] max-md:w-[40%] max-md:mx-auto h-[46px] bg-[#29E68C] text-[#060B27] border-[0.5px] border-[#29E68B] text-base font-medium cursor-pointer rounded-[36px] transition-all duration-300 ease-in-out hover:shadow-lg flex justify-center items-center gap-[10px] max-sm:mt-3"
                                aria-label="Subscribe to Penta Studio newsletter"
                            >
                                {isSubmittingNewsletter
                                    ? dictionary?.footer?.subscribing ||
                                    "Subscribing..."
                                    : dictionary?.footer?.subscribe_button ||
                                    "Subscribe"}
                            </HoverButton>
                        </form>
                    </section>

                    {/* Company Logo and Branding */}
                    <div className="flex gap-2 items-center max-md:justify-center">
                        <Image
                            src={logo}
                            alt="Penta Studio logo - Web design and development agency in Oulu, Finland"
                            width={51}
                            height={40}
                            priority={false}
                            loading="lazy"
                        />
                        <Image
                            src={Penta}
                            alt="Penta Studio - Digital agency specializing in web development"
                            width={120}
                            height={40}
                            priority={false}
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="h-full w-1/2 max-md:w-full flex flex-col justify-between max-md:gap-8 pt-5 max-md:pt-0">
                    {/* Main Navigation */}
                    <nav
                        className="flex justify-between max-md:justify-center"
                        role="navigation"
                        aria-label="Footer navigation"
                    >
                        <ul className="flex flex-wrap justify-center text-lg gap-8 max-md:gap-6 md:gap-12 list-none max-md:text-center">
                            <li>
                                <Link
                                    href={`/${lang}`}
                                    className={getLinkClass(`/${lang}`)}
                                    aria-label="Go to Penta Studio homepage"
                                    title="Penta Studio - Web Design & Development Services"
                                >
                                    {dictionary?.footer?.home || "Home"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${lang}#services`}
                                    className={getLinkClass(`/${lang}#services`)}
                                    aria-label="View our web development and design services"
                                    title="Web Development, UI/UX Design, and Digital Marketing Services"
                                >
                                    {dictionary?.footer?.services || "Services"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${lang}#our-partners`}
                                    className={getLinkClass(`/${lang}#our-partners`)}
                                    aria-label="Learn about our development process"
                                    title="Our Web Development Process - From Concept to Launch"
                                >
                                    {dictionary?.footer?.partners ||
                                        "Our Partners"}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${lang}/about`}
                                    className={getLinkClass(`/${lang}/about`)}
                                    aria-label="Learn about Penta Studio team"
                                    title="About Penta Studio - Our Team and Mission"
                                >
                                    {dictionary?.navbar.about}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Contact Information */}
                    <section
                        className="flex flex-col md:flex-row gap-12 max-md:gap-8 max-md:text-center"
                        aria-labelledby="contact-info"
                    >
                        <h2 id="contact-info" className="sr-only">
                            Contact Information
                        </h2>

                        {/* Contact Details */}
                        <address className="flex flex-col gap-4 not-italic max-md:items-center max-sm:items-start max-sm:ml-2">
                            <h3 className="text-white text-lg">
                                {dictionary?.footer?.contact || "Contact Us"}
                            </h3>
                            <div className="flex items-center gap-3 max-md:justify-center max-sm:ml-4">
                                <Phone
                                    className="w-5 h-5 text-[#29E68B]"
                                    aria-hidden="true"
                                />
                                <a
                                    href="https://wa.me/+358505300004"
                                    className="hover:text-[#29E68B] transition-colors text-white"
                                    aria-label="Contact with Penta Studio at +358 50 5300004"
                                    title="Phone: +358 50 5300004"
                                >
                                    +358 50 5300004
                                </a>
                            </div>
                            <div className="flex items-center gap-3 max-md:justify-center max-sm:ml-4">
                                <MailIcon
                                    className="w-5 h-5 text-[#29E68B]"
                                    aria-hidden="true"
                                />
                                <a
                                    href="mailto:penta.studioo@gmail.com"
                                    className="hover:text-[#29E68B] transition-colors text-white"
                                    aria-label="Email Penta Studio at penta.studioo@gmail.com"
                                    title="Email: penta.studioo@gmail.com"
                                >
                                    penta.studioo@gmail.com
                                </a>
                            </div>
                        </address>

                        {/* Location */}
                        <div className="flex flex-col gap-4 max-md:items-center max-sm:items-start max-sm:ml-2">
                            <h3 className="text-white text-lg">
                                {dictionary?.footer?.location}
                            </h3>
                            <div className="flex items-center gap-3 max-md:justify-center max-sm:ml-4">
                                <MapPin
                                    className="w-5 h-5 text-[#29E68B]"
                                    aria-hidden="true"
                                />
                                <a
                                    href="https://maps.app.goo.gl/CCVDpdqJ6fTkoto5A"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#29E68B] transition-colors"
                                    itemScope
                                    itemType="https://schema.org/Organization"
                                >
                                    <span
                                        itemProp="address"
                                        itemScope
                                        itemType="https://schema.org/PostalAddress"
                                    >
                                        <span itemProp="streetAddress">
                                            Virkakatu 8J{" "}
                                        </span>
                                        ,{" "}
                                        <span itemProp="postalCode">
                                            90570{" "}
                                        </span>
                                        ,{" "}
                                        <span itemProp="addressLocality">
                                            Oulu{" "}
                                        </span>
                                        ,{" "}
                                        <span itemProp="addressCountry">
                                            Finland
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-[#282D45] pt-8 max-md:pt-4 flex flex-col md:flex-row justify-between items-center gap-6 max-md:gap-4">
                {/* Copyright and Legal */}
                <div className="text-[#8F9BB7] text-base max-md:text-sm max-md:text-center max-md:w-11/12 max-md:mx-auto max-md:order-2">
                    <span itemScope itemType="https://schema.org/Organization">
                        © {currentYear}{" "}
                        <span itemProp="name">Penta Studio</span>.{" "}
                        {dictionary?.footer?.footer_text}
                    </span>
                    <span className="max-md:hidden"> • </span>
                    <Link
                        href={`/${lang}/privacy-policy`}
                        className="hover:text-[#29E68B] transition-colors ml-1 max-md:ml-0 max-md:inline-block max-md:mt-2"
                        aria-label="Read our privacy policy"
                        title="Penta Studio Privacy Policy"
                    >
                        {dictionary?.footer?.privacy}
                    </Link>
                    <span className="max-md:hidden"> • </span>
                    <Link
                        href={`/${lang}/terms-of-service`}
                        className="hover:text-[#29E68B] transition-colors ml-1 max-md:ml-4"
                        aria-label="Read our terms of service"
                        title="Penta Studio Terms of Service"
                    >
                        {dictionary?.footer?.terms}
                    </Link>
                </div>

                {/* Social Media Links */}
                <nav aria-label="Social media links" className="max-md:order-1">
                    <ul className="flex gap-4 max-md:gap-3 list-none max-md:justify-center">
                        <li className="group">
                            <a
                                href="https://x.com/PentaStd"
                                className="w-10 h-10 max-md:w-8 max-md:h-8 bg-[#060B27] border-[1px] border-[#282D45] rounded-lg flex items-center justify-center hover:bg-[#29E68B] transition-colors duration-200"
                                aria-label="Follow Penta Studio on X (Twitter)"
                                title="Penta Studio on X"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-6 h-6 max-md:w-4 max-md:h-4 text-[#29E68B] group-hover:text-[#060B27] transition-colors duration-200" />
                            </a>
                        </li>
                        <li className="group">
                            <a
                                href="https://www.linkedin.com/company/penta-std/"
                                className="w-10 h-10 max-md:w-8 max-md:h-8 bg-[#060B27] border-[1px] border-[#282D45] rounded-lg flex items-center justify-center hover:bg-[#29E68B] transition-colors duration-200"
                                aria-label="Connect with Penta Studio on LinkedIn"
                                title="Penta Studio on LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin
                                    className="w-6 h-6 max-md:w-4 max-md:h-4 text-[#29E68B] group-hover:text-[#060B27] transition-colors duration-200"
                                    aria-hidden="true"
                                />
                            </a>
                        </li>
                        <li className="group">
                            <a
                                href="https://www.instagram.com/pentastd/"
                                className="w-10 h-10 max-md:w-8 max-md:h-8 bg-[#060B27] border-[1px] border-[#282D45] rounded-lg flex items-center justify-center hover:bg-[#29E68B] transition-colors duration-200"
                                aria-label="Follow Penta Studio on Instagram"
                                title="Penta Studio on Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram
                                    className="w-6 h-6 max-md:w-4 max-md:h-4 text-[#29E68B] group-hover:text-[#060B27] transition-colors duration-200"
                                    aria-hidden="true"
                                />
                            </a>
                        </li>
                        <li className="group">
                            <a
                                href="https://www.facebook.com/share/182i1yEqNS/"
                                className="w-10 h-10 max-md:w-8 max-md:h-8 bg-[#060B27] border-[1px] border-[#282D45] rounded-lg flex items-center justify-center hover:bg-[#29E68B] transition-colors duration-200"
                                aria-label="Follow Penta Studio on Facebook"
                                title="Penta Studio on Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook
                                    className="w-6 h-6 max-md:w-4 max-md:h-4 text-[#29E68B] group-hover:text-[#060B27] transition-colors duration-200"
                                    aria-hidden="true"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}