"use client";

import React from "react";

interface HoverButtonProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onMouseMove?: React.MouseEventHandler<HTMLElement>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export const HoverButton: React.FC<HoverButtonProps> = ({
    children,
    className = "",
    as: Component = "button",
    ...props
}) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--x", `${x}px`);
        e.currentTarget.style.setProperty("--y", `${y}px`);

        if (props.onMouseMove) {
            props.onMouseMove(e);
        }
    };

    return (
        <Component
            {...props}
            onMouseMove={handleMouseMove}
            className={`custom-hover-btn ${className}`}
        >
            <span className="custom-hover-btn-content">{children}</span>
        </Component>
    );
};
