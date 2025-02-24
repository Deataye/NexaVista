"use client";
import { useEffect, useRef } from "react";
import { FaImage, FaPencilRuler, FaFileExport } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const GraphicMethods = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    cardRefs.current.forEach((el, index) => {
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

  const services = [
    {
      title: "Image & Video Editing",
      description: [
        "Professional Retouching",
        "Color Correction",
        "Motion Graphics",
        "Video Enhancements",
      ],
      icon: <FaImage className="text-[#ECE4D9] text-4xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
    },
    {
      title: "Logo & Branding",
      description: [
        "Custom Logo Design",
        "Typography Selection",
        "Brand Identity Guidelines",
        "Color Palette Development",
      ],
      icon: <FaPencilRuler className="text-[#ECE4D9] text-4xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
    },
    {
      title: "Marketing Materials",
      description: [
        "Brochures & Flyers",
        "Social Media Graphics",
        "Business Cards",
        "Presentation Designs",
      ],
      icon: <FaFileExport className="text-[#ECE4D9] text-4xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-[46px] leading-[55px] font-black mb-4">
          Our <span className="text-[#6B6159]">Graphic Design</span> Process for Impactful Visuals
        </h2>
        <p className="text-[#6B6159] mb-10">
          At <span className="text-[#3F3A34] font-semibold">NexaVista Technologies</span>, we combine creativity and strategy to 
          craft designs that communicate your brand message effectively.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-[#3F3A34] group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-[#6B6159] transition-all duration-300 group-hover:bg-[#ECE4D9]">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#3F3A34] group-hover:text-[#ECE4D9] transition-all duration-300">
                {service.title}
              </h3>
              <ul className="text-[#6B6159] space-y-2 text-left group-hover:text-[#ECE4D9] transition-all duration-300">
                {service.description.map((desc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaFileExport className="text-[#ECE4D9] transition-all duration-300 group-hover:text-[#3F3A34]" /> {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicMethods;
