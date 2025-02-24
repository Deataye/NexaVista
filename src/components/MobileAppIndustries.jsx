"use client";
import { useEffect, useRef } from "react";
import { FaHeartbeat, FaShoppingCart, FaBuilding, FaIndustry, FaGraduationCap, FaBolt, FaCar, FaUtensils } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const MobileAppIndustries = () => {
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
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
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
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        }
      );
    });
  }, []);

  const industries = [
    {
      title: "Healthcare",
      description:
        "We develop secure and compliant mobile apps for healthcare, enabling telemedicine, patient management, and real-time health monitoring.",
      icon: <FaHeartbeat className="text-[#ECE4D9] transition-all duration-300 text-[40px] group-hover:text-[#3F3A34]" />,
    },
    {
      title: "eCommerce",
      description:
        "Empowering businesses with feature-rich mobile commerce apps that offer seamless shopping experiences and secure transactions.",
      icon: <FaShoppingCart className="text-[#ECE4D9] transition-all duration-300 text-[40px] group-hover:text-[#3F3A34]" />,
    },
    {
      title: "Real Estate",
      description:
        "Building intuitive mobile solutions for property listings, virtual tours, and agent-client interactions, enhancing the real estate process.",
      icon: <FaBuilding className="text-[#ECE4D9] transition-all duration-300 text-[40px] group-hover:text-[#3F3A34]" />,
    },
    {
      title: "Manufacturing",
      description:
        "Enhancing efficiency with mobile apps for inventory management, supply chain tracking, and real-time production monitoring.",
      icon: <FaIndustry className="text-[#ECE4D9] transition-all duration-300 text-[40px] group-hover:text-[#3F3A34]" />,
    },
    {
      title: "Education",
      description:
        "Transforming learning with mobile apps for virtual classrooms, e-learning, student management, and interactive experiences.",
      icon: <FaGraduationCap className="text-[#ECE4D9] transition-all duration-300 text-[40px] group-hover:text-[#3F3A34]" />,
    },
    {
      title: "On-Demand Services",
      description:
        "Developing real-time booking and delivery apps for ride-hailing, home services, and food delivery with seamless user experience.",
      icon: <FaBolt className="text-[#ECE4D9] transition-all duration-300 text-[40px] group-hover:text-[#3F3A34]" />,
    },
    {
      title: "Automotive",
      description:
        "Designing mobile apps for car rentals, vehicle tracking, and smart automotive services, enhancing convenience and efficiency.",
      icon: <FaCar className="text-[#ECE4D9] transition-all duration-300 text-[40px] group-hover:text-[#3F3A34]" />,
    },
    {
      title: "Food & Hospitality",
      description:
        "Creating mobile apps for restaurant reservations, food delivery, and hospitality management to enhance customer engagement.",
      icon: <FaUtensils className="text-[#ECE4D9] transition-all duration-300 text-[40px] group-hover:text-[#3F3A34]" />,
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#6B6159] text-center ${poppins.className}`}>
      <h2 className="text-[46px] text-[#ECE4D9] leading-[55px] font-bold mb-6">
        <span className="text-[#1A1816]">Industries</span> We Serve in Mobile App Development
      </h2>
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="flex items-start gap-4 bg-[#ECE4D9] p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-[#3F3A34] group"
          >
            {/* Icon with Hover Effect */}
            <div className="p-4 bg-[#6B6159] rounded-full transition-all duration-300 group-hover:bg-[#ECE4D9]">
              {industry.icon}
            </div>
            
            {/* Industry Details with Text Color Change */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2 transition-all duration-300 group-hover:text-[#ECE4D9]">
                {industry.title}
              </h3>
              <p className="text-gray-700 transition-all duration-300 group-hover:text-[#ECE4D9]">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileAppIndustries;
