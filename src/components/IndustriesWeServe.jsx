"use client";
import { useEffect, useRef } from "react";
import { FaHeartbeat, FaShoppingCart, FaBuilding, FaIndustry, FaGraduationCap, FaBolt } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const IndustriesWeServe = () => {
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

  const industries = [
    {
      title: "Healthcare",
      description:
        "In healthcare web app development, we focus on creating solutions that enhance patient care, streamline operations, and facilitate communication among healthcare professionals. Our applications prioritize security, compliance, and interoperability to improve healthcare delivery.",
      icon: <FaHeartbeat className="text-[#ECE4D9] transition-all duration-300 text-3xl group-hover:text-[#3F3A34]" />,
    },
    {
      title: "eCommerce",
      description:
        "In eCommerce, our web app development services focus on creating secure, scalable, and user-friendly platforms. We aim to provide a seamless shopping experience, incorporating secure payment gateways, inventory management, and personalized user interfaces to drive online sales.",
      icon: <FaShoppingCart className="text-[#ECE4D9] transition-all duration-300 text-3xl group-hover:text-[#3F3A34]" />,
    },
    {
      title: "Real Estate",
      description:
        "For real estate, our web applications streamline property management, facilitate online property listings, and improve communication between agents and clients. We focus on creating visually appealing and user-friendly platforms that enhance the property buying and selling experience.",
      icon: <FaBuilding className="text-[#ECE4D9] transition-all duration-300 text-3xl group-hover:text-[#3F3A34]" />,
    },
    {
      title: "Manufacturing",
      description:
        "For the manufacturing industry, our web app development addresses process optimization, inventory management, and supply chain coordination. We create robust solutions that improve production efficiency, reduce costs, and provide real-time insights into manufacturing operations.",
      icon: <FaIndustry className="text-[#ECE4D9] transition-all duration-300 text-3xl group-hover:text-[#3F3A34]" />,
    },
    {
      title: "Education",
      description:
        "Our web app development services in the education sector cater to e-learning platforms, student management systems, and administrative tools. We aim to enhance collaboration, accessibility, and engagement, creating innovative solutions to support modern educational needs.",
      icon: <FaGraduationCap className="text-[#ECE4D9] transition-all duration-300 text-3xl group-hover:text-[#3F3A34]" />,
    },
    {
      title: "On-Demand",
      description:
        "In the on-demand industry, our web app development caters to platforms that connect service providers with users in real time. Whether it's ride-sharing, food delivery, or other on-demand services, we focus on creating intuitive and reliable platforms that prioritize user experience and efficiency.",
      icon: <FaBolt className="text-[#ECE4D9] transition-all duration-300 text-3xl group-hover:text-[#3F3A34]" />,
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#6B6159] text-center ${poppins.className}`}>
      <h2 className="text-[46px] text-[#ECE4D9] leading-[55px] font-bold mb-6">
        <span className="text-[#1A1816]">Industries</span> We Serve
      </h2>
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="flex items-start gap-4 bg-[#ECE4D9] p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-[#3F3A34] group"
          >
            <div className="p-3 bg-[#6B6159] rounded-full transition-all duration-300 group-hover:bg-[#ECE4D9]">
              {industry.icon}
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ECE4D9] transition-all duration-300">
                {industry.title}
              </h3>
              <p className="text-gray-700 group-hover:text-[#ECE4D9] transition-all duration-300">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
