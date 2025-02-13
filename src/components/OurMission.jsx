"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function OurMission() {
  return (
    <section className={`bg-[#ECE4D9] text-[#3F3A34] py-20 ${poppins.className}`}>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-[46px] leading-[55px]  font-black mb-4">Our Mission</h2>
          <p className="text-[#6B6159] text-[18px] leading-[29px]">
            At NexaVista Technologies, our mission is simple: to help our clients succeed in the digital world.
            We aim to deliver tailored solutions that not only meet but exceed our clients’ expectations. 
            By combining our technical expertise with a deep understanding of our clients’ needs, 
            we create digital experiences that are not only functional but also impactful.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
          <div className="relative w-[400px] h-[400px] overflow-hidden ">
            <Image
              src="/TailoredSolutions.jpg" // Replace with actual image path
              alt="Our Mission"
              width={1000}
              height={1000}
              className="object-cover object-center w-full h-full rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
