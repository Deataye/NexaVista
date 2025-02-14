"use client";

import { useState, useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { FaLightbulb, FaClipboardList, FaSmile } from "react-icons/fa";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const values = [
  {
    title: "Innovation",
    description:
      "Innovation is at the heart of everything we do. We explore new technologies to provide cutting-edge solutions for our clients.",
    icon: FaLightbulb,
    image: "/TrackRecord.jpg", // Replace with actual image paths
  },
  {
    title: "Client-Centricity",
    description:
      "Our clients are the cornerstone of our success. We build long-term relationships based on trust, transparency, and mutual respect.",
    icon: FaClipboardList,
    image: "/OngoingSupport.jpg",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our work, ensuring that each project is completed to the highest standards.",
    icon: FaSmile,
    image: "/TailoredSolutions.jpg",
  },
];

export default function OurValues() {
  const [activeValue, setActiveValue] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);

  // Auto-slide function
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timeoutRef.current);
  }, []);

  // Handle click and drag functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      setActiveValue((prev) => (prev + 1) % values.length);
    } else if (diff < -50) {
      setActiveValue((prev) => (prev - 1 + values.length) % values.length);
    }
    touchStartX.current = null;
  };

  return (
    <section
      className={`relative py-20 text-[#ECE4D9] text-center ${poppins.className}`}
      style={{ backgroundImage: "url('/Values.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-[36px] md:text-[46px] font-black mb-8">Our Values</h2>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {values.map((value, index) => (
            <button
              key={index}
              onClick={() => setActiveValue(index)}
              className={`px-6 py-2 rounded-full text-[16px] font-semibold transition-all ${
                activeValue === index
                  ? "bg-[#3F3A34] text-[#ECE4D9]"
                  : "bg-[#ECE4D9] text-[#3F3A34] hover:bg-[#D6C9BC]"
              }`}
            >
              {value.title}
            </button>
          ))}
        </div>

        {/* Slides Container */}
        <div
          className="relative flex justify-center py-48 items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out flex flex-col md:flex-row max-w-5xl ${
                index === activeValue ? "opacity-100 z-50 scale-100" : "opacity-30 z-0 scale-95"
              }`}
              style={{
                transform: `translateY(${index === activeValue ? "0px" : "20px"})`,
              }}
            >
              {/* Text + Image Wrapper */}
              <div className="flex flex-col md:flex-row bg-[#3F3A34] text-[#ECE4D9] rounded-xl shadow-lg w-full">
                {/* Text Content */}
                <div className="p-8 md:w-1/2 flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className="text-[#E9C46A] text-5xl mb-4">
                    <value.icon />
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] font-extrabold mb-3">{value.title}</h3>

                  {/* Description */}
                  <p className="text-[16px] leading-[26px]">{value.description}</p>
                </div>

                {/* Image */}
                <div className="md:w-1/2">
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={500}
                    height={300}
                    className="rounded-r-xl object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
