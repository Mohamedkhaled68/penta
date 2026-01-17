import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true, // Disable image optimization for static export or unsupported hosts
    },
};

export default nextConfig;
