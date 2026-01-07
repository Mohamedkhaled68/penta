"use client";
import React from "react";

interface LoadingFallbackProps {
  message?: string;
  height?: string;
}

function LoadingFallback({ height = "h-32" }: LoadingFallbackProps) {
  return (
    <div
      className={`w-full ${height} flex flex-col items-center justify-center`}
    >
      <div className="animate-pulse bg-[#0F1A33] border border-[#262626] rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-center mb-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#29E68C]"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingFallback;
