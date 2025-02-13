"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function ContactHero() {
  return (
    <section 
      className={`relative text-[#ECE4D9] py-36 text-center ${poppins.className}`}
      style={{ backgroundImage: "url('/ContactUsBg.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#1A1816] opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-6">
        {/* Heading */}
        <h1 className="text-[46px] leading-[55px] font-black mb-4">Get in Touch</h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-[#ECE4D9] text-[18px] leading-[29px] mb-8">
          Have questions or want to collaborate? We’d love to hear from you. 
          Let’s build something amazing together!
        </p>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="inline-block bg-[#ECE4D9] text-[#3F3A34] px-8 py-3 rounded-full text-[18px] font-medium shadow-md hover:bg-[#D6C9BC] transition-all"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
