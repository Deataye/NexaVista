"use client"; 

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Wallet, Code, Users, CheckCircle } from "lucide-react";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Text animation (Fade in from left)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Image animation (Slide in from right)
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Feature boxes animation (Fade in with scale)
    featureRefs.current.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
          },
        }
      );
    });

  }, []);

  return (
    <section ref={sectionRef} className={`bg-[#1A1816] text-[#ECE4D9] py-20 ${poppins.className}`}>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        
        {/* Text Content */}
        <div ref={textRef} className="lg:w-1/2">
          <div className="inline-block bg-[#3F3A34] text-[#ECE4D9] px-4 py-2 rounded-lg text-[18px] leading-[22px] font-bold mb-4">
            Why Choose Our App Development Services
          </div>
          <h2 className="text-[46px] leading-[55px] font-black">Why Choose Us?</h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-16 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="flex flex-col p-6 rounded-lg transition-all duration-300
                bg-[#3F3A34] hover:bg-[#6B6159] group cursor-pointer"
              >
                <feature.icon
                  className="text-[#ECE4D9] group-hover:text-[#1A1816] transition-all duration-300 mb-2"
                  size={56}
                />
                <h3 className="text-[22px] leading-[26px] font-extrabold text-[#ECE4D9] 
                  group-hover:text-[#1A1816] transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-[16px] leading-[29px] font-normal text-[#ECE4D9] 
                  group-hover:text-[#1A1816] transition-all duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <div className="relative w-[300px] md:w-[400px] lg:w-[500px] h-[250px] md:h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/WhyNxVs.webp"
              alt="Why Choose Us"
              width={500}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

// Features Data
const features = [
  { title: "Budget-Friendly", description: "Reduce development costs by choosing customized development services.", icon: Wallet },
  { title: "Less Error-Rates", description: "Leads to proficiency standards of high-quality application.", icon: CheckCircle },
  { title: "Great Work and Team", description: "Top-notch services attract and create more opportunities for customers.", icon: Users },
  { title: "Best Product Quality", description: "A well-designed app development cycle ensures the best possible outcome.", icon: Code },
];

export default WhyChooseUs;
