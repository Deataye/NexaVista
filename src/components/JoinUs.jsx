"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function JoinUs() {
  return (
    <section className={`bg-[#ECE4D9] text-[#3F3A34] py-20 text-center ${poppins.className}`}>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[36px] md:text-[46px] leading-[55px] font-black mb-4">
          Join Us on Our Journey
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-[#6B6159] text-[18px] leading-[29px] mb-8">
          At NexaVista Technologies, we believe that the best is yet to come. We are excited 
          about the future and the opportunities it holds for our clients and our team. 
          We invite you to join us on this journey and discover how we can help your business 
          thrive in the digital age.
        </p>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="inline-block bg-[#3F3A34] hover:bg-[#2F2A24] text-[#ECE4D9] px-6 py-3 rounded-lg text-[16px] font-medium transition-all"
        >
          Contact Us →
        </Link>
      </div>
    </section>
  );
}
