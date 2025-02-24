"use client";
import { FaBullhorn, FaChartLine, FaEnvelopeOpenText } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const DigitalMethods = () => {
  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-[46px] leading-[55px] font-black mb-4">
          Our <span className="text-[#6B6159]">Digital Marketing</span> Approach for Maximum Growth
        </h2>
        <p className="text-[#6B6159] mb-10">
          At <span className="text-[#3F3A34] font-semibold">NexaVista Technologies</span>, we implement data-driven strategies that increase brand visibility, engagement, and conversions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Social Media Marketing */}
          <div className="p-6 rounded-lg shadow-md bg-[#6B6159]">
            <div className="flex justify-center mb-4">
              <FaBullhorn className="text-[#ECE4D9] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#ECE4D9]">Social Media Marketing</h3>
            <ul className="text-[#ECE4D9] space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaBullhorn className="text-[#ECE4D9]" /> Content Strategy & Creation
              </li>
              <li className="flex items-center gap-2">
                <FaBullhorn className="text-[#ECE4D9]" /> Platform-Specific Campaigns
              </li>
              <li className="flex items-center gap-2">
                <FaBullhorn className="text-[#ECE4D9]" /> Audience Engagement & Growth
              </li>
              <li className="flex items-center gap-2">
                <FaBullhorn className="text-[#ECE4D9]" /> Paid Ad Management
              </li>
            </ul>
          </div>

          {/* SEO & Content Marketing */}
          <div className="p-6 rounded-lg shadow-md bg-[#6B6159]">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-[#ECE4D9] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#ECE4D9]">SEO & Content Marketing</h3>
            <ul className="text-[#ECE4D9] space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaChartLine className="text-[#ECE4D9]" /> Keyword Research & Strategy
              </li>
              <li className="flex items-center gap-2">
                <FaChartLine className="text-[#ECE4D9]" /> On-Page & Off-Page Optimization
              </li>
              <li className="flex items-center gap-2">
                <FaChartLine className="text-[#ECE4D9]" /> High-Quality Blog Content
              </li>
              <li className="flex items-center gap-2">
                <FaChartLine className="text-[#ECE4D9]" /> Backlink Building & Authority Growth
              </li>
            </ul>
          </div>

          {/* Email Marketing */}
          <div className="p-6 rounded-lg shadow-md bg-[#6B6159]">
            <div className="flex justify-center mb-4">
              <FaEnvelopeOpenText className="text-[#ECE4D9] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#ECE4D9]">Email Marketing</h3>
            <ul className="text-[#ECE4D9] space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaEnvelopeOpenText className="text-[#ECE4D9]" /> Targeted Email Campaigns
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelopeOpenText className="text-[#ECE4D9]" /> Automated Lead Nurturing
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelopeOpenText className="text-[#ECE4D9]" /> Persuasive Subject Lines
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelopeOpenText className="text-[#ECE4D9]" /> Measurable Engagement & Conversions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMethods;
