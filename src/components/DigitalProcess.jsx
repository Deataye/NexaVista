"use client";
import Image from "next/image";
import { FaSearch, FaBullhorn, FaChartLine } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const DigitalProcess = () => {
  const steps = [
    {
      title: "Market Research & Strategy",
      description:
        "We analyze your industry, audience behavior, and competition to develop a data-driven digital marketing strategy for maximum impact.",
      icon: <FaSearch className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Campaign Execution & Engagement",
      description:
        "We implement targeted campaigns across multiple channels, ensuring optimized content, compelling ads, and strategic social engagement.",
      icon: <FaBullhorn className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#3F3A34]",
    },
    {
      title: "Performance Tracking & Optimization",
      description:
        "We continuously monitor key metrics, analyze performance, and refine strategies to ensure sustained growth and maximum ROI.",
      icon: <FaChartLine className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#1A1816]",
    },
  ];

  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-[46px] font-black leading-[55px]">
            Our <span className="text-[#6B6159]">Digital Marketing</span> Process
          </h2>
          <p className="text-[#6B6159] text-[16px] leading-[29px]">
            Our data-driven approach ensures strategic execution, audience engagement, and continuous optimization 
            to maximize your digital presence.
          </p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${step.bgColor}`}>{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3F3A34]">{step.title}</h3>
                  <p className="text-[#6B6159] text-[16px] leading-[29px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image with Increased Height */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/SocialMedia.jpg" // Replace with actual image path
            alt="Digital Marketing Process"
            width={600}
            height={700} // Increased height from 500 to 700
            className="rounded-lg shadow-lg h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalProcess;
