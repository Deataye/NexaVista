"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaApple, FaAndroid, FaSyncAlt, FaMobileAlt, FaPalette, FaRocket } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const MobileAppServices = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
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
      title: "iOS App Development",
      description:
        "Crafting top-tier iOS applications using Swift, ensuring seamless performance, high security, and a stunning user experience.",
      icon: <FaApple className="text-[#ECE4D9] text-4xl transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: "Android App Development",
      description:
        "Building scalable and high-performance Android apps with Flutter, optimized for seamless deployment on Google Play.",
      icon: <FaAndroid className="text-[#ECE4D9] text-4xl transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: "Cross-Platform Development",
      description:
        "Developing efficient apps with React Native, allowing businesses to target both iOS and Android with a unified codebase.",
      icon: <FaSyncAlt className="text-[#ECE4D9] text-4xl transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: "Custom Mobile App Solutions",
      description:
        "We create tailored mobile applications designed to meet your business objectives with high performance and security.",
      icon: <FaMobileAlt className="text-[#ECE4D9] text-4xl transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: "UI/UX Design for Mobile Apps",
      description:
        "Enhancing mobile app usability with sleek, intuitive designs that align with platform aesthetics and drive engagement.",
      icon: <FaPalette className="text-[#ECE4D9] text-4xl transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: "Mobile Performance Optimization",
      description:
        "Optimizing apps for speed, efficiency, and minimal resource consumption, ensuring smooth performance across all devices.",
      icon: <FaRocket className="text-[#ECE4D9] text-4xl transition-transform duration-300 group-hover:scale-110" />,
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 ref={titleRef} className="text-[46px] leading-[55px] font-black mb-4">
          Mobile Application <span className="text-[#6B6159]">Development</span> Services
        </h2>
        <p ref={descriptionRef} className="text-[#6B6159] mb-10">
          At{" "}
          <Link href="/" className="text-[#3F3A34] font-semibold">
            NexaVistaTechnologies
          </Link>
          , we specialize in delivering cutting-edge mobile solutions. Whether you need a native iOS or Android app, or a cross-platform solution, our expertise ensures high performance and a seamless user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="p-6 rounded-lg shadow-md bg-[#6B6159] transition-all duration-300 hover:bg-[#3F3A34] group"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#ECE4D9]">{service.title}</h3>
              <p className="text-[#ECE4D9]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppServices;
