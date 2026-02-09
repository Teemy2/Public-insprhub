"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FloatingJobTags } from "./FloatingJobTags";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-green border border-white shadow-sm">
              <div className="w-2 h-2 rounded-full bg-dark-green" />
              <span className="text-dark-green text-sm font-medium tracking-wide">
                COMING SOON
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
              Your Gateway to <br />
              Global Remote <br />
              Opportunities
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Empowering tertiary students across Africa with access to flexible
              remote jobs that fit your schedule, and build your career.
            </p>

            <div className="flex items-center gap-4">
              <a href="#waitlist">
                <Button className="bg-black hover:bg-black/80 text-white px-8 py-6 text-base font-semibold transition-all group shadow-lg hover:shadow-xl">
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-light-green/40 to-transparent opacity-50 blur-3xl -z-10" />

            <FloatingJobTags />

            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-6 pt-12">
                <div className="group relative overflow-hidden bg-black rounded-3xl p-6 aspect-square flex flex-col justify-end shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/se.jpg"
                    alt="Background"
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.95%, rgba(0, 0, 0, 0.9) 100%)",
                    }}
                  />

                  <div className="relative z-20 text-white">
                    <p className="text-lg font-bold mb-1">Software Engineer</p>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Ilorin, Nigeria
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-[#E3F0E8] rounded-3xl p-6 aspect-[4/3] flex flex-col justify-center items-center text-center shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <Image
                    src="/top-right.jpg"
                    alt="Background"
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.95%, rgba(0, 0, 0, 0.9) 100%)",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="group relative overflow-hidden bg-[#F0FDF4] rounded-3xl p-6 aspect-[4/3] flex items-center justify-center shadow-lg border border-green-50 hover:-translate-y-1 transition-transform duration-300">
                  <Image
                    src="/bottom-left.jpg"
                    alt="Background"
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.95%, rgba(0, 0, 0, 0.9) 100%)",
                    }}
                  />
                </div>

                <div className="group relative overflow-hidden bg-dark-green rounded-3xl p-6 aspect-square flex flex-col justify-end shadow-xl rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/pm.jpg"
                    alt="Background"
                    fill
                    className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.95%, rgba(0, 0, 0, 0.9) 100%)",
                    }}
                  />

                  <div className="relative z-20 text-white">
                    <p className="text-lg font-bold mb-1">Product Manager</p>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Ife, Nigeria
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xs z-30">
              <div className="bg-white rounded-full p-2 pr-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center gap-3">
                <div className="flex -space-x-2 pl-2">
                  <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="/join-1.jpg"
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="/join-2.jpg"
                      alt="Business"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500 block text-xs">
                    Join 100+ top student talents and businesses waiting...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
