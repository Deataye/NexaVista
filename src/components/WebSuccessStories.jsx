"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebSuccessStories = () => {
  const points = [
    "Agile Web Design & Development Methodology",
    "Award Winning Web Solutions & Sites",
    "Competitive Rates for Web Design and Development Talent",
    "Agile Web Design and Development Methodology",
  ];

  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] text-center ${poppins.className}`}>
      <h2 className="text-[46px] leading-[55px] font-bold mb-6">
        View Our <span className="text-[#6B6159]">Success Stories</span> of Web Application
      </h2>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center ">
        {/* Left Side Content */}
        <div className="lg:w-1/2 bg-[#6B6159] text-[#ECE4D9] p-10 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-6 leading-tight">
            Why Do Medium & Large Businesses Choose Custom Apps More Often?
          </h3>
          <ul className="space-y-4 text-left">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <FaCheckCircle className="text-[#ECE4D9]" /> {point}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Side Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/Expertise_WebDev.jpg" // Replace with actual image path
            alt="Success Stories"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WebSuccessStories;
