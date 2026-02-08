import React from "react";
import { cn } from "@/lib/utils";

const tags = [
  {
    label: "Remote",
    color: "bg-white text-indigo-600 border-indigo-100",
    position: "top-[-5%] left-[5%]",
    rotate: "-rotate-6",
    animationDelay: "0s",
  },
  {
    label: "Full-time",
    color: "bg-white text-pink-600 border-pink-100",
    position: "top-[10%] right-[0%]",
    rotate: "rotate-6",
    animationDelay: "2s",
  },
  {
    label: "Internship",
    color: "bg-white text-emerald-600 border-emerald-100",
    position: "top-[25%] -left-[5%]",
    rotate: "-rotate-3",
    animationDelay: "4s",
  },
  {
    label: "Contract",
    color: "bg-white text-orange-600 border-orange-100",
    position: "top-[40%] -right-[5%]",
    rotate: "rotate-12",
    animationDelay: "1s",
  },
  {
    label: "Entry Level",
    color: "bg-white text-blue-600 border-blue-100",
    position: "bottom-[5%] left-[10%]",
    rotate: "rotate-3",
    animationDelay: "3s",
  },
  {
    label: "Part-time",
    color: "bg-white text-purple-600 border-purple-100",
    position: "bottom-[28%] right-[5%]",
    rotate: "-rotate-6",
    animationDelay: "5s",
  },
  {
    label: "$20/hr",
    color: "bg-white text-dark-green border-green-100",
    position: "top-[50%] left-[45%]",
    rotate: "rotate-12",
    animationDelay: "2.5s",
  },
];

export const FloatingJobTags = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-20"
      aria-hidden="true"
    >
      <div className="relative w-full h-full">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={cn(
              "absolute inline-flex items-center justify-center px-4 py-2",
              "rounded-full font-semibold text-sm border shadow-sm",
              "bg-white/95 backdrop-blur-sm",
              tag.color,
              tag.position,
              tag.rotate,
            )}
            style={{
              animation: `float 6s ease-in-out infinite`,
              animationDelay: tag.animationDelay,
            }}
          >
            {tag.label}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--tw-rotate));
          }
          50% {
            transform: translateY(-10px) rotate(var(--tw-rotate));
          }
        }
      `}</style>
    </div>
  );
};
