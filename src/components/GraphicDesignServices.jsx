"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaEdit, FaPenNib, FaFileAlt, FaPhotoVideo } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const GraphicDesignServices = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const serviceRefs = useRef([]);

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

    serviceRefs.current.forEach((el, index) => {
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
      description:
        "Enhance your brand’s visuals with professional image and video editing services, making your content more engaging and impactful.",
      icon: <FaPhotoVideo className="text-[#ECE4D9] text-3xl " />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Logo Designing",
      description:
        "Create a strong and memorable brand identity with unique and versatile logo designs that capture your business essence.",
      icon: <FaPenNib className="text-[#ECE4D9] text-3xl " />,
      bgColor: "bg-[#3F3A34]",
    },
    {
      title: "Brand Guides",
      description:
        "Ensure consistency across all marketing materials with comprehensive brand guides, including color schemes, typography, and design elements.",
      icon: <FaFileAlt className="text-[#ECE4D9] text-3xl " />,
      bgColor: "bg-[#1A1816]",
    },
    {
      title: "Flyer & Brochure Design",
      description:
        "Design high-quality flyers and brochures that effectively communicate your message and enhance your brand’s presence.",
      icon: <FaEdit className="text-[#ECE4D9] text-3xl " />,
      bgColor: "bg-[#6B6159]",
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#1A1816] text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Content */}
        <div ref={textRef} className="lg:w-1/2 space-y-6">
          <h2 className="text-[42px] font-bold leading-[50px]">
            Elevate Your Brand with <span className="text-[#6B6159]">Creative Design Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceRefs.current[index] = el)}
                className="p-6 rounded-lg shadow-lg transition-all duration-300 group hover:bg-[#ECE4D9]"
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${service.bgColor} transition-all duration-300 group-hover:bg-[#3F3A34]`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-[#ECE4D9] group-hover:text-[#3F3A34] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-center text-[#ECE4D9] group-hover:text-[#3F3A34] transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div ref={imageRef} className="lg:w-1/2 flex justify-center">
          <Image
            src="/Editing.jpg"
            alt="Graphic Design Process"
            width={600}
            height={900}
            className="rounded-lg shadow-lg object-cover h-[750px] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignServices;
