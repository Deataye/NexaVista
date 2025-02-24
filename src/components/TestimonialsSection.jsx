"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const testimonials = [
  {
    id: 1,
    name: "Susan Persad",
    position: "CEO, Jacks4Hire",
    image: "/bachir.jpg",
    quote:
      "They took our idea during a call and came up with an app prototype that was very impressive and accurate.",
  },
  {
    id: 2,
    name: "Putra Cyrillus Rabin",
    position: "CEO, Flovely",
    image: "/flovely_c.jpg",
    quote:
      "They are a task-oriented company, quite a big difference from the companies we had worked with in the past.",
  },
  {
    id: 3,
    name: "Bachir El Kai",
    position: "CEO, Elite Fishing",
    image: "/jacks_c.jpg",
    quote:
      "Generally, I don’t give reviews or testimonials, but their quality of work expertise and availability make an exception.",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading Animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Testimonials Animation
    testimonialRefs.current.forEach((testimonial, index) => {
      gsap.fromTo(
        testimonial,
        { opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonial,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className={`bg-[#ECE4D9] text-[#1A1816] py-20 ${poppins.className}`}>
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-24">
          <h3 className="text-[18px] leading-[22px] uppercase tracking-widest text-[#3F3A34] font-bold mb-8">
            Our Testimonials
          </h3>
          <h2 className="text-3xl md:text-[46px] leading-[55px] font-black">
            Check Out What Our <br /> Clients Think of <br />
            <span className="text-[#3F3A34]">Our Services</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className="relative bg-[#25221E] p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-[#3F3A34] hover:scale-105"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 transition-transform duration-300 hover:scale-110">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-[#3F3A34]"
                />
              </div>
              <div className="mt-10">
                <p className="italic text-[16px] leading-[29px] font-normal text-gray-400 transition-colors duration-300 hover:text-[#ECE4D9]">
                  "{testimonial.quote}"
                </p>
                <h3 className="mt-4 text-[20px] leading-[24px] text-[#ECE4D9] font-extrabold">
                  {testimonial.name}
                </h3>
                <p className="text-[16px] leading-[29px] font-normal text-[#ECE4D9]">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
