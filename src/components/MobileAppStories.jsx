"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const MobileAppStories = () => {
  const points = [
    "Agile Mobile App Development Process",
    "Award-Winning iOS & Android Applications",
    "Competitive Rates for Mobile Development Talent",
    "Seamless User Experience & Scalable Solutions",
  ];

  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] text-center ${poppins.className}`}>
      <h2 className="text-[46px] leading-[55px] font-bold mb-6">
        View Our <span className="text-[#6B6159]">Success Stories</span> in Mobile App Development
      </h2>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Left Side Content */}
        <div className="lg:w-1/2 bg-[#6B6159] text-[#ECE4D9] p-[39px] rounded-l-lg lg:rounded-l-lg lg:rounded-r-none shadow-lg">
          <h3 className="text-3xl font-bold mb-6 leading-tight">
            Why Do Medium & Large Businesses Choose Custom Mobile Apps?
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
        <div className="lg:w-1/2 flex">
          <Image
            src="/Expertise_AppDev.jpg" // Replace with actual image path
            alt="Success Stories"
            width={600}
            height={500}
            className="rounded-r-lg lg:rounded-r-lg lg:rounded-l-none shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileAppStories;
