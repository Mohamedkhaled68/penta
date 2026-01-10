"use client";
import React, { useState, ChangeEvent, FormEvent, useMemo, useRef, useEffect } from "react";
import PhoneInput, { isValidPhoneNumber, getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import en from "react-phone-number-input/locale/en";
import { ChevronDown, Check } from "lucide-react";
import contact from "@/public/About/contactt.svg";
import Image from "next/image";
import { AnimateOnView } from "@/components/global components/AnimateOnView";
import toast from "react-hot-toast";
import { useDictionary } from "@/hooks/useDictionary";
import { HoverButton } from "@/components/global components/HoverButton";

// Custom Country Select Component
// TypeScript interfaces
interface CountryOption {
    value?: string;
    label: string;
}

interface CountrySelectProps {
    value?: string;
    onChange: (value?: string) => void;
    iconComponent?: React.ElementType<{ country: string; label: string }>;
    options: CountryOption[];
}

const CountrySelect = ({ value, onChange, iconComponent: Icon, options }: CountrySelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const validOptions = useMemo(() => {
        return options?.filter((o) => o.value) as { value: import("react-phone-number-input").Country; label: string }[] || [];
    }, [options]);

    const selectedOption = validOptions.find(o => o.value === value);

    return (
        <div className="relative" ref={wrapperRef}>
            <button
                type="button"
                className="flex items-center gap-2 px-2 py-1 focus:outline-none hover:bg-[#1A2040] rounded-md transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {Icon && value && <Icon country={value} label={selectedOption?.label || value} />}
                <ChevronDown className={`w-4 h-4 text-[#8F9BB7] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-50 top-full left-0 mt-2 w-[300px] max-h-[300px] overflow-y-auto bg-[#0E1330] border border-[#151934] rounded-lg shadow-xl custom-scrollbar" style={{ scrollbarColor: '#29E68C #0E1330', scrollbarWidth: 'thin' }}>
                    {validOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[#151934] group ${option.value === value ? 'bg-[#1A2040]' : ''}`}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                        >
                            {Icon && <Icon country={option.value} label={option.label} />}
                            <span className={`flex-1 text-sm ${option.value === value ? 'text-[#29E68C]' : 'text-[#8F9BB7] group-hover:text-[#29E68C]'}`}>
                                {option.label}
                            </span>
                            <span className="text-xs text-gray-500">+{getCountryCallingCode(option.value)}</span>
                            {option.value === value && <Check className="w-4 h-4 text-[#29E68C]" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

// TypeScript interfaces
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    country: string;
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

export default function BringIdeastoLife() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "EG",
        message: "",
        agreeToTerms: false,
    });

    const dictionary = useDictionary();

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Basic validation function
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName || formData.firstName.length < 2) {
            newErrors.firstName =
                dictionary?.about_page?.section3?.form?.errors?.first_name_required;
        }
        if (!formData.lastName || formData.lastName.length < 2) {
            newErrors.lastName =
                dictionary?.about_page?.section3?.form?.errors?.last_name_required;
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email =
                dictionary?.about_page?.section3?.form?.errors?.email_invalid;
        }
        if (!formData.phoneNumber || !isValidPhoneNumber(formData.phoneNumber)) {
            newErrors.phoneNumber =
                dictionary?.about_page?.section3?.form?.errors?.phone_required;
        }
        if (!formData.message || formData.message.length < 10) {
            newErrors.message =
                dictionary?.about_page?.section3?.form?.errors?.message_required;
        }
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms =
                dictionary?.about_page?.section3?.form?.errors?.terms_required;
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

    const handlePhoneChange = (value: string | undefined): void => {
        setFormData((prev) => ({
            ...prev,
            phoneNumber: value || "",
        }));

        if (errors.phoneNumber) {
            setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
        }
    };

    const handleCountryChange = (country: string | undefined): void => {
        if (country) {
            setFormData((prev) => ({
                ...prev,
                country: country,
            }));
        }
    };

    // API submission function with proper typing
    const handleSubmit = async (
        e: FormEvent<HTMLButtonElement> | React.MouseEvent<HTMLElement>
    ): Promise<void> => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fix the form errors before submitting.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit form');

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                country: 'EG',
                message: '',
                agreeToTerms: false,
            });
            setErrors({});

            toast.success("Thanks for reaching out! We’ll call you back shortly.");
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Oops! Something went wrong. Please try again.");
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
                        {dictionary?.about_page?.section3?.title}
                    </h1>
                    <p className="text-[#98989A] text-lg max-sm:text-base">
                        {dictionary?.about_page?.section3?.description}
                    </p>
                </div>
            </AnimateOnView>

            {/* Form Section */}
            <AnimateOnView animation="up" className="space-y-4">
                {/* First Row - First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-white font-medium mb-2"
                        >
                            {
                                dictionary?.about_page?.section3?.form
                                    ?.first_name_label
                            }
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder={
                                dictionary?.about_page?.section3?.form
                                    ?.first_name_placeholder
                            }
                            className="w-full bg-[#0E1330] border border-[#151934] rounded-2xl px-4 py-3 text-[#8F9BB7] placeholder-[#8F9BB7] focus:outline-none focus:border-[#29E68C] transition-colors"
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
                            className="block text-white font-medium mb-2"
                        >
                            {
                                dictionary?.about_page?.section3?.form
                                    ?.last_name_label
                            }
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder={
                                dictionary?.about_page?.section3?.form
                                    ?.last_name_placeholder
                            }
                            className="w-full bg-[#0E1330] border border-[#151934] rounded-2xl px-4 py-3 text-[#8F9BB7] placeholder-[#8F9BB7] focus:outline-none focus:border-[#29E68C] transition-colors"
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
                            className="block text-white font-medium mb-2"
                        >
                            {
                                dictionary?.about_page?.section3?.form
                                    ?.email_label
                            }
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={
                                dictionary?.about_page?.section3?.form
                                    ?.email_placeholder
                            }
                            className="w-full bg-[#0E1330] border border-[#151934] rounded-2xl px-4 py-3 text-[#8F9BB7] placeholder-[#8F9BB7] focus:outline-none focus:border-[#29E68C] transition-colors"
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
                            className="block text-white font-medium mb-2"
                        >
                            {
                                dictionary?.about_page?.section3?.form
                                    ?.phone_label
                            }
                        </label>
                        {/* Custom styles for PhoneInput and Custom Scrollbar */}
                        <style>{`
                            .PhoneInput {
                                display: flex;
                                align-items: center;
                                background-color: #0E1330;
                                border: 1px solid #151934;
                                border-radius: 1rem;
                                padding: 0.75rem 1rem;
                                transition: border-color 0.3s;
                            }
                            .PhoneInput:focus-within {
                                border-color: #29E68C;
                            }
                            .PhoneInputCountry {
                                margin-right: 0.5rem;
                                display: flex;
                                align-items: center;
                                position: relative;
                            }
                            .PhoneInputInput {
                                background-color: transparent;
                                border: none;
                                color: #8F9BB7;
                                font-size: 1rem;
                                outline: none;
                                width: 100%;
                            }
                            .PhoneInputInput::placeholder {
                                color: #8F9BB7;
                            }
                            /* RTL Support */
                            [dir="rtl"] .PhoneInputCountry {
                                margin-right: 0;
                                margin-left: 0.5rem;
                            }
                            [dir="rtl"] .PhoneInputInput {
                                text-align: right;
                            }
                            /* Webkit Scrollbar */
                            .custom-scrollbar::-webkit-scrollbar {
                                width: 6px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-track {
                                background: #0E1330;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb {
                                background-color: #29E68C;
                                border-radius: 10px;
                            }
                        `}</style>
                        <PhoneInput
                            international
                            defaultCountry="EG"
                            value={formData.phoneNumber}
                            onChange={handlePhoneChange}
                            onCountryChange={handleCountryChange}
                            placeholder={
                                dictionary?.about_page?.section3?.form
                                    ?.phone_placeholder
                            }
                            labels={en}
                            countrySelectComponent={CountrySelect}
                        />
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
                        className="block text-white font-medium mb-2"
                    >
                        {dictionary?.about_page?.section3?.form?.message_label}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder={
                            dictionary?.about_page?.section3?.form
                                ?.message_placeholder
                        }
                        className="w-full h-[136px] bg-[#0E1330] border border-[#151934] rounded-2xl px-4 py-3 text-[#8F9BB7] placeholder-[#8F9BB7] focus:outline-none focus:border-[#29E68C] transition-colors resize-none"
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
                                {
                                    dictionary?.about_page?.section3?.form
                                        ?.agree_text
                                }
                            </label>
                        </div>
                        {errors.agreeToTerms && (
                            <p className="text-red-400 text-sm mt-0.5">
                                {errors.agreeToTerms}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end ">
                        <HoverButton
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="w-[120px] max-md:w-full h-[40px] bg-[#29E68C] text-[#060B27] border-[0.5px] border-[#29E68B] text-base font-medium cursor-pointer rounded-2xl transition-colors duration-300 ease-in-out hover:shadow-lg flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-[#29E68C] focus:ring-offset-2 focus:ring-offset-transparent"
                        >
                            {isSubmitting
                                ? dictionary?.about_page?.section3?.form
                                    ?.submitting_btn
                                : dictionary?.about_page?.section3?.form
                                    ?.submit_btn}
                        </HoverButton>
                    </div>
                </div>
            </AnimateOnView>
        </section>
    );
}
