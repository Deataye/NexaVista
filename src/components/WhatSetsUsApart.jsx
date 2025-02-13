"use client";

import { Poppins } from "next/font/google";
import { Users, Globe2, Accessibility, Lightbulb } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function WhatSetsUsApart() {
  return (
    <section className={`bg-[#ECE4D9] text-[#3F3A34] py-20 ${poppins.className}`}>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-[46px] leading-[55px] font-black mb-4">
          What Sets Us Apart
        </h2>

        {/* Subheading / Intro */}
        <p className="text-center max-w-2xl mx-auto text-[#6B6159] text-[18px] leading-[29px] mb-12">
          We’re dedicated to pushing boundaries and driving innovation. Here’s what makes us unique.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-[#3F3A34] p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#ECE4D9]">
              <Users size={36} className="text-[#3F3A34]" />
            </div>
            <h3 className="text-[22px] text-[#ECE4D9] leading-[26px] font-extrabold mb-2">Community-Centric Approach</h3>
            <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
              At NexaVista, we’re more than just a company – we’re a community. 
              We prioritize strong connections with users, partners, and our team.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#3F3A34] p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#ECE4D9]">
              <Globe2 size={36} className="text-[#3F3A34]" />
            </div>
            <h3 className="text-[22px] text-[#ECE4D9]  leading-[26px] font-extrabold mb-2">Tech Diversity</h3>
            <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
              Our team is as diverse as the technology we create. We bring together a range of skills 
              and perspectives, from developers to designers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#3F3A34] p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#ECE4D9]">
              <Accessibility size={36} className="text-[#3F3A34]" />
            </div>
            <h3 className="text-[22px] leading-[26px] text-[#ECE4D9] font-extrabold mb-2">Accessible Technology</h3>
            <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
              We believe technology should be accessible to all. Our commitment to inclusivity 
              empowers individuals and businesses.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#3F3A34] p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#ECE4D9]">
              <Lightbulb size={36} className="text-[#3F3A34]" />
            </div>
            <h3 className="text-[22px] leading-[26px] text-[#ECE4D9] font-extrabold mb-2">Innovative Solutions</h3>
            <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
              We push the boundaries of what’s possible. Our team of experts is dedicated 
              to creating groundbreaking solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
