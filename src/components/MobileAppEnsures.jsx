"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMobileAlt, FaRocket, FaUsers, FaShieldAlt } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const MobileAppEnsures = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: imageRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: textRef.current, start: "top 85%" },
      }
    );

    featureRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        }
      );
    });
  }, []);

  const features = [
    {
      title: "Scalable & High-Performance Apps",
      description:
        "Our mobile applications scale effortlessly, handling user growth while staying responsive, efficient, and future-proof.",
      icon: <FaMobileAlt className="text-[#6B6159] transition-transform duration-300 text-[35px] group-hover:scale-110" />,
    },
    {
      title: "Optimized Speed & Performance",
      description:
        "We ensure smooth app performance, fast load times, and minimal resource usage for an engaging user experience.",
      icon: <FaRocket className="text-[#6B6159] transition-transform duration-300 text-[35px] group-hover:scale-110" />,
    },
    {
      title: "Expert Development Team",
      description:
        "Our experienced developers specialize in native iOS, Android, and cross-platform solutions with top-notch quality.",
      icon: <FaUsers className="text-[#6B6159] transition-transform duration-300 text-[35px] group-hover:scale-110" />,
    },
    {
      title: "Robust Security & Compliance",
      description:
        "We integrate advanced security features to protect user data, ensuring a secure and compliant mobile experience.",
      icon: <FaShieldAlt className="text-[#6B6159] transition-transform duration-300 text-[35px] group-hover:scale-110" />,
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div ref={imageRef} className="relative w-full lg:w-1/2">
          <Image
            src="/request-a-call-back-im1.jpg"
            alt="Mobile App Development"
            width={500}
            height={500}
            className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side - Content */}
        <div ref={textRef} className="w-full lg:w-1/2">
          <h2 className="text-[46px] font-black leading-[55px] pb-10">
            <span className="text-[#6B6159]">NexaVista Technologies</span> Ensures Seamless{" "}
            <span className="text-[#6B6159]">Mobile App Development</span>
          </h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="flex items-start gap-4 p-4 transition-all duration-300 bg-[#ECE4D9] hover:bg-[#3F3A34] group rounded-lg"
              >
                <div>{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-[#ECE4D9] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B6159] text-[16px] group-hover:text-[#ECE4D9] transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-[#3F3A34] hover:bg-[#6B6159] text-[#ECE4D9] hover:text-[#1A1816] px-6 py-3 rounded-lg text-lg font-medium transition-all"
          >
            Start Your Mobile App Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileAppEnsures;
