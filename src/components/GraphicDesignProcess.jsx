"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaEdit, FaCommentDots, FaFileSignature } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const GraphicDesignProcess = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      }
    );

    stepRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const steps = [
    {
      title: "Editing & Refinement",
      description:
        "We enhance your visuals with professional image and video editing to ensure high-quality content that aligns with your brand identity.",
      icon: <FaEdit className="text-[#ECE4D9] text-3xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Client Feedback & Revisions",
      description:
        "We value your input and refine the designs based on feedback to ensure they align with your expectations and brand goals.",
      icon: <FaCommentDots className="text-[#ECE4D9] text-3xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
      bgColor: "bg-[#3F3A34]",
    },
    {
      title: "Finalization & Delivery",
      description:
        "Once approved, we finalize your designs and provide high-resolution files optimized for digital and print use.",
      icon: <FaFileSignature className="text-[#ECE4D9] text-3xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
      bgColor: "bg-[#1A1816]",
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Content */}
        <div ref={textRef} className="lg:w-1/2 space-y-6">
          <h2 className="text-[46px] font-black leading-[55px]">
            <span className="text-[#6B6159]">Graphic Design</span> Process
          </h2>
          <p className="text-[#6B6159] text-[16px] leading-[29px]">
            Our streamlined design process ensures creativity, precision, and seamless execution 
            to enhance your brand’s visual identity.
          </p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className="flex items-start gap-4 p-4 transition-all duration-300 bg-[#ECE4D9] hover:bg-[#3F3A34] group rounded-lg"
              >
                <div className={`p-3 rounded-full ${step.bgColor} transition-all duration-300 group-hover:bg-[#ECE4D9]`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-[#ECE4D9] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#6B6159] text-[16px] group-hover:text-[#ECE4D9] transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image with Increased Height */}
        <div ref={imageRef} className="lg:w-1/2 flex justify-center">
          <Image
            src="/Logo.jpg"
            alt="Graphic Design Process"
            width={600}
            height={700}
            className="rounded-lg shadow-lg h-[500px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignProcess;
