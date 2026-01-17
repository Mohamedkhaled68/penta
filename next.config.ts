import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        formats: ["image/webp", "image/avif"],
        unoptimized: true, // Disable image optimization for static export or unsupported hosts
    },
};

export default nextConfig;
