"use client"; // Required for React Hooks in Next.js App Router

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const TechnologiesSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const images = [
    { src: "/itfirms_logo.png", alt: "IT Firms" },
    { src: "/topdevelopers-logo.png", alt: "Top Developers" },
    { src: "/appfutura_logo.png", alt: "App Futura" },
    { src: "/clutch_logo-1.png", alt: "Clutch" },
  ];

  return (
    <section className={`bg-[#ECE4D9] text-[#1A1816] py-10 ${poppins.className}`}>
      {/* Technology Partners */}
      <div className="bg-[#1A1816] py-5 px-20">
        <div
          ref={scrollRef}
          className="flex overflow-hidden whitespace-nowrap py-5 gap-16"
        >
          {[...images, ...images].map((image, index) => (
            <div key={index} className="flex-shrink-0 px-10">
              <Image src={image.src} alt={image.alt} width={300} height={300} />
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="container mx-auto px-6 py-20 text-center mt-12 bg-[#ECE4D9] text-[#1A1816]">
        <div className="inline-block bg-[#3F3A34] text-[#ECE4D9] py-2 px-4 rounded-lg text-lg font-bold mb-4">
          Our Technologies
        </div>
        <h2 className="text-[46px] leading-[55px] pb-4 font-black">
          Our Entire Stack of <br /> Technology
        </h2>

        {/* Call to Action */}
        <div className="mt-6 pb-14">
          <p className="text-lg leading-[25px] font-extrabold">
            Do You Want To explore more services?
            <Link href="/services" legacyBehavior>
              <a className="text-[#3F3A34] underline ml-2">Click Here</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;