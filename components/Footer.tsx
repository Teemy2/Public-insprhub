"use client";

import Image from "next/image";
import {
  XLogoIcon,
  LinkedinLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/group_14.png"
            alt="inspr"
            width={80}
            height={32}
            className="h-8 w-auto brightness-0 invert"
          />
        </div>

        <p className="text-gray-400 text-sm">
          Connecting Africa to the World...
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://x.com/InsprLtd"
            className="transition-colors hover:text-gray-400"
            aria-label="Twitter"
          >
            <XLogoIcon className="w-5 h-5" weight="fill" />
          </a>
          <a
            href="#"
            className="transition-colors hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <LinkedinLogoIcon className="w-5 h-5" weight="fill" />
          </a>
          <a
            href="https://www.instagram.com/insprhub/"
            className="transition-colors hover:text-gray-400"
            aria-label="Instagram"
          >
            <InstagramLogoIcon className="w-5 h-5" weight="fill" />
          </a>
        </div>
      </div>
    </footer>
  );
}
