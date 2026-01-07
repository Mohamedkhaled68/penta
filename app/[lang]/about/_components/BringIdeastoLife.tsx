"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import contact from "@/public/About/contactt.svg";
import Image from "next/image";
import { AnimateOnView } from "@/components/global components/AnimateOnView";
// TypeScript interfaces
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
    agreeToTerms: boolean;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    message?: string;
    agreeToTerms?: string;
}

type SubmitStatus = "idle" | "success" | "error";

export default function BringIdeastoLife() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        agreeToTerms: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

    // Basic validation function
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName || formData.firstName.length < 2) {
            newErrors.firstName = "First name must be at least 2 characters";
        }
        if (!formData.lastName || formData.lastName.length < 2) {
            newErrors.lastName = "Last name must be at least 2 characters";
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.phoneNumber || formData.phoneNumber.length < 10) {
            newErrors.phoneNumber = "Phone number must be at least 10 digits";
        }
        if (!formData.message || formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms =
                "You must agree to the Terms of Use and Privacy Policy";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle input changes with proper typing
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // API submission function with proper typing
    const handleSubmit = async (
        e: FormEvent<HTMLButtonElement>
    ): Promise<void> => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            setSubmitStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                message: "",
                agreeToTerms: false,
            });
            setErrors({});
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full h-max flex flex-col gap-8 max-sm:pt-6 py-16 px-20 max-md:px-6">
            <AnimateOnView animation="up" className="w-full flex gap-10">
                {/* Chat Icon */}
                <Image alt="" src={contact} className="w-20 h-20" />

                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl max-md:text-2xl font-bold text-whit">
                        Bring Ideas to Life
                    </h1>
                    <p className="text-[#98989A] text-lg max-sm:text-base">
                        Let&apos;s make your next product, space, or message
                        unforgettable and immersive by design.
                    </p>
                </div>
            </AnimateOnView>

            {/* Form Section */}
            <AnimateOnView animation="up" className="space-y-6">
                {/* First Row - First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-white font-medium mb-4"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter First Name"
                            className="w-full bg-[#0E1330] border border-[#151934] rounded-lg px-4 py-4 text-[#8F9BB7] placeholder-[#8F9BB7] focus:outline-none focus:border-[#29E68C] transition-colors"
                        />
                        {errors.firstName && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.firstName}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-white font-medium mb-4"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter Last Name"
                            className="w-full bg-[#0E1330] border border-[#151934] rounded-lg px-4 py-4 text-[#8F9BB7] placeholder-[#8F9BB7] focus:outline-none focus:border-[#29E68C] transition-colors"
                        />
                        {errors.lastName && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.lastName}
                            </p>
                        )}
                    </div>
                </div>

                {/* Second Row - Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-white font-medium mb-4"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your Email"
                            className="w-full bg-[#0E1330] border border-[#151934] rounded-lg px-4 py-4 text-[#8F9BB7] placeholder-[#8F9BB7] focus:outline-none focus:border-[#29E68C] transition-colors"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="phoneNumber"
                            className="block text-white font-medium mb-4"
                        >
                            Phone Number
                        </label>
                        <div className="flex">
                            <div className="bg-[#0E1330] border border-[#151934] rounded-l-lg px-3 py-4 flex items-center border-r-0">
                                <div className="w-6 h-4 bg-gray-400 rounded-sm mr-2"></div>
                                <svg
                                    className="w-4 h-4 text-[#8F9BB7]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Phone Number"
                                className="flex-1 bg-[#0E1330] border border-[#151934] rounded-r-lg px-4 py-4 text-[#8F9BB7] placeholder-[#8F9BB7] focus:outline-none focus:border-[#29E68C] transition-colors"
                            />
                        </div>
                        {errors.phoneNumber && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.phoneNumber}
                            </p>
                        )}
                    </div>
                </div>

                {/* Message Field */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-white font-medium mb-4"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Enter your Message"
                        className="w-full h-[136px] bg-[#0E1330] border border-[#151934] rounded-lg px-4 py-4 text-[#8F9BB7] placeholder-[#8F9BB7] focus:outline-none focus:border-[#29E68C] transition-colors resize-none"
                    />
                    {errors.message && (
                        <p className="text-red-400 text-sm mt-1">
                            {errors.message}
                        </p>
                    )}
                </div>

                <div className="flex justify-between max-sm:flex-col gap-3">
                    <div className="flex flex-col justify-start items-center cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                    className="appearance-none mt-1 w-4 h-4 bg-[#0E1330] border border-[#29E68C] rounded focus:ring-0 cursor-pointer checked:bg-[#0E1330]"
                                />
                                {formData.agreeToTerms && (
                                    <span className="absolute top-1 left-0 w-4 h-4 flex items-center justify-center text-[#29E68C] text-xs font-bold pointer-events-none">
                                        ✓
                                    </span>
                                )}
                            </div>
                            <label htmlFor="agreeToTerms" className="text-sm">
                                I agree with{" "}
                                <a
                                    href="#"
                                    className="text-white font-bold hover:text-[#29E68C]"
                                >
                                    Terms of Use
                                </a>{" "}
                                and{" "}
                                <a
                                    href="#"
                                    className="text-white font-bold hover:text-[#29E68C]"
                                >
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                        {errors.agreeToTerms && (
                            <p className="text-red-400 text-sm mt-0.5">
                                {errors.agreeToTerms}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end ">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="w-[137px] max-md:w-full h-[50px] bg-[#29E68C] hover:bg-[#4FF0A3] text-[#070707] text-base font-medium cursor-pointer rounded-[8px] transition-colors duration-300 ease-in-out hover:shadow-lg flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-[#29E68C] focus:ring-offset-2 focus:ring-offset-transparent"
                        >
                            {isSubmitting ? "Sending..." : "Send"}
                        </button>
                    </div>
                </div>
                {/* Terms Checkbox */}

                {/* Submit Button */}

                {/* Status Messages */}
                {submitStatus === "success" && (
                    <div className="text-[#29E68C] text-center mt-4">
                        ✅ Message sent successfully! We&apos;ll get back to you
                        soon.
                    </div>
                )}
                {submitStatus === "error" && (
                    <div className="text-red-400 text-center mt-4">
                        ❌ Failed to send message. Please try again.
                    </div>
                )}
            </AnimateOnView>
        </section>
    );
}
