"use client";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Footer from "./Footer";
import { useLanguagePersistence } from "@/hooks/useLanguagePersistence";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Persist language preference across navigations
    useLanguagePersistence();

    return (
        <>
            <Navbar />
            <MobileNavbar />
            {children}
            <Toaster position="top-center" reverseOrder={false} />
            <Footer />
        </>
    );
}
