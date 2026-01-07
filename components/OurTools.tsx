"use client";
import React from "react";
import Image from "next/image";
import Node from "@/public/ourtools/Node.js_logo 1.svg";
import Firebase from "@/public/ourtools/Firebase_Logo 1.svg";

export default function OurTools() {
  const tools = [
    { name: "Laravel", image: Node },
    { name: "Flutter", image: Node },
    { name: "Node.js", image: Node },
    { name: "Firebase", image: Firebase },
  ];

  // ضاعف العناصر أكتر عشان يبقى زي شريط الأخبار
  const extendedTools = [...tools, ...tools, ...tools, ...tools, ...tools];

  return (
    <div className="w-full h-max overflow-hidden py-5 px-20 max-md:px-6 relative bg-[#060B27]">
      {/* Left shadow gradient */}
      <div
        className="absolute left-0 top-0 bottom-0 w-40 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #060B27 0%, rgba(6, 11, 39, 0.8) 50%, rgba(6, 11, 39, 0) 100%)",
        }}
      ></div>

      {/* Right shadow gradient */}
      <div
        className="absolute right-0 top-0 bottom-0 w-40 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, #060B27 0%, rgba(6, 11, 39, 0.8) 50%, rgba(6, 11, 39, 0) 100%)",
        }}
      ></div>

      <div className="relative w-full overflow-hidden">
        {/* Desktop: 5 visible boxes */}
        <div className="hidden lg:block">
          <div className="flex animate-marquee-desktop gap-8 will-change-transform">
            {extendedTools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#0F1A33] rounded-lg border border-[#262626] hover:border-[#29E68C] transition-colors flex-shrink-0 group"
                style={{ width: "230px", minWidth: "200px", height: "120px" }}
              >
                <Image
                  src={tool.image}
                  alt={tool.name}
                  className="w-[140px] h-[50px] object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet: 3 visible boxes */}
        <div className="hidden md:block lg:hidden">
          <div className="flex animate-marquee-tablet gap-6 will-change-transform">
            {extendedTools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#0F1A33] rounded-lg border border-[#262626] hover:border-[#29E68C] transition-colors flex-shrink-0 group"
                style={{ width: "180px", minWidth: "180px", height: "132px" }}
              >
                <Image
                  src={tool.image}
                  alt={tool.name}
                  className="w-[160px] h-[48px] object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: 1 visible box */}
        <div className="block md:hidden">
          <div className="flex animate-marquee-mobile gap-4 will-change-transform">
            {extendedTools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#0F1A33] rounded-lg border border-[#262626] hover:border-[#29E68C] transition-colors flex-shrink-0 group"
                style={{ width: "180px", minWidth: "150px", height: "100px" }}
              >
                <Image
                  src={tool.image}
                  alt={tool.name}
                  className="w-[120px] h-[40px] object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-desktop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(
              calc(-1 * ((200px + 32px) * ${tools.length})),
              0,
              0
            );
          }
        }

        @keyframes marquee-tablet {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(
              calc(-1 * ((180px + 24px) * ${tools.length})),
              0,
              0
            );
          }
        }

        @keyframes marquee-mobile {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(
              calc(-1 * ((150px + 16px) * ${tools.length})),
              0,
              0
            );
          }
        }

        .animate-marquee-desktop {
          animation: marquee-desktop 8s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .animate-marquee-tablet {
          animation: marquee-tablet 10s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .animate-marquee-mobile {
          animation: marquee-mobile 12s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
