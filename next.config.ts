import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        formats: ["image/webp", "image/avif"],
        remotePatterns: [],
        unoptimized: false,
    },
};

export default nextConfig;
