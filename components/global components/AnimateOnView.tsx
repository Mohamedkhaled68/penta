"use client"
import { useRef, useState, useEffect } from "react";

type AnimateProps = {
    children: React.ReactNode;
    animation?: "up" | "left" | "right";
    className?: string;
    style?: React.CSSProperties;
    delay?: number; // Keep delay prop (in milliseconds)
};

export const AnimateOnView: React.FC<AnimateProps> = ({ 
    children, 
    animation = "up", 
    className = "",
    delay = 0 // Default to 0ms delay
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (delay > 0) {
                        // Apply delay before showing animation
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    } else {
                        setIsVisible(true);
                    }
                    observer.disconnect();
                }
            },
            { threshold: 0.3 } // Fixed at 0.3
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]); // Remove threshold from dependency

    const animationClass =
        animation === "up" ? "animate-up" : animation === "left" ? "animate-left" : "animate-right";

    return (
        <div ref={ref} className={`${isVisible ? animationClass : "opacity-0"} ${className}`}>
            {children}
        </div>
    );
};