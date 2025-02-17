"use client";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebDevHero = () => {
  return (
    <section className={`relative w-full h-screen bg-gradient-to-br from-[#1A1816] to-[#5c5143] flex items-center justify-center text-center ${poppins.className}`}>
      <div className="container  flex flex-col lg:flex-row items-center justify-center px-6 lg:px-0 gap-20">
        
        {/* Left Side Content - Centered */}
        <div className="lg: flex flex-col  pt-14 text-left text-[#ECE4D9]">
          <h1 className="text-[48px] lg:text-[68px] font-extrabold leading-[68px]">
            Web App Development <br /> Services
          </h1>
          <p className="mt-6 text-[20px] leading-[32px] max-w-2xl">
            Welcome to NexaVista Technologies, where innovation meets expertise in crafting unparalleled web solutions. 
            Elevate your online presence and user experience with our top-notch web development services.
          </p>
          <Link href="/contact">
            <button className="mt-10 bg-[#ECE4D9] hover:bg-[#CFC7BD] text-[#1A1816] px-8 py-4 rounded-md text-[18px] font-medium transition-all">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right Side Image - Bigger & Centered */}
        <div className="lg: flex justify-center">
          <Image 
            src="/Home.jpg" 
            alt="Web App Development"
            width={900}  // Increased width
            height={1100} // Increased height
            className="rounded-lg shadow-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default WebDevHero;
