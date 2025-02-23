"use client";
import { FaPenNib, FaBullhorn, FaEnvelopeOpenText } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const CopyMethods = () => {
  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-[46px] leading-[55px] font-black mb-4">
          Our <span className="text-[#6B6159]">Copywriting</span> Process for Maximum Conversions
        </h2>
        <p className="text-[#6B6159] mb-10">
          At <span className="text-[#3F3A34] font-semibold">NexaVista Technologies</span>, we create compelling, persuasive, and conversion-driven copy that engages and sells.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sales Copy */}
          <div className="p-6 rounded-lg shadow-md bg-[#6B6159]">
            <div className="flex justify-center mb-4">
              <FaPenNib className="text-[#ECE4D9] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#ECE4D9]">Sales Copy</h3>
            <ul className="text-[#ECE4D9] space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaBullhorn className="text-[#ECE4D9]" /> Persuasive Sales Pages
              </li>
              <li className="flex items-center gap-2">
                <FaBullhorn className="text-[#ECE4D9]" /> Benefit-Driven Messaging
              </li>
              <li className="flex items-center gap-2">
                <FaBullhorn className="text-[#ECE4D9]" /> Compelling Call-to-Actions
              </li>
              <li className="flex items-center gap-2">
                <FaBullhorn className="text-[#ECE4D9]" /> Emotional Triggers for Conversions
              </li>
            </ul>
          </div>

          {/* Landing Pages */}
          <div className="p-6 rounded-lg shadow-md bg-[#6B6159]">
            <div className="flex justify-center mb-4">
              <FaBullhorn className="text-[#ECE4D9] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#ECE4D9]">Landing Pages</h3>
            <ul className="text-[#ECE4D9] space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaPenNib className="text-[#ECE4D9]" /> Lead Generation Copy
              </li>
              <li className="flex items-center gap-2">
                <FaPenNib className="text-[#ECE4D9]" /> High-Converting Headlines
              </li>
              <li className="flex items-center gap-2">
                <FaPenNib className="text-[#ECE4D9]" /> Trust-Boosting Testimonials
              </li>
              <li className="flex items-center gap-2">
                <FaPenNib className="text-[#ECE4D9]" /> Optimized Content Flow
              </li>
            </ul>
          </div>

          {/* Email Copy */}
          <div className="p-6 rounded-lg shadow-md bg-[#6B6159]">
            <div className="flex justify-center mb-4">
              <FaEnvelopeOpenText className="text-[#ECE4D9] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#ECE4D9]">Email Copy</h3>
            <ul className="text-[#ECE4D9] space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaEnvelopeOpenText className="text-[#ECE4D9]" /> Engaging Sequences
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelopeOpenText className="text-[#ECE4D9]" /> Click-Worthy Subject Lines
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelopeOpenText className="text-[#ECE4D9]" /> Nurturing & Promotional Emails
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelopeOpenText className="text-[#ECE4D9]" /> Data-Driven Open Rates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyMethods;
