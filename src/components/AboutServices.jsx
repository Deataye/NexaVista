"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAndroid, FaWordpress, FaVrCardboard, FaGlobe, FaBitcoin } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const AboutServices = () => {
  const sectionRef = useRef(null);
  const serviceRef = useRef(null);
  const featureRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      serviceRef.current.children,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      featureRef.current.children,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={`bg-[#ECE4D9] text-[#3F3A34] pt-20 ${poppins.className}`}>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-1/2 overflow-hidden rounded-lg">
          <Image
            ref={imgRef}
            src="/WelcomeToNxVs.webp"
            alt="Team Meeting"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[46px] font-black leading-[55px] pb-10">
            We Provide Excellent <span className="text-[#6B6159]">Service</span> to Meet Your Specific Needs
          </h2>
          <p className="mt-4 text-[#6B6159] pb-4 text-[16px] leading-[29px]">
            NexaVista Technologies is a leading mobile app development company in the USA. Our expert team specializes
            in creating high-quality apps for iPhone, iPad, Android, and web platforms.
          </p>

          {/* Service List with Icons */}
          <div ref={serviceRef} className="grid grid-cols-2 gap-4 pb-6 mt-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="flex items-center gap-2 bg-[#E5DBD0] hover:bg-[#3F3A34] text-[#6B6159] hover:text-[#ECE4D9] px-4 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                <service.icon className="w-10 h-10 transition-all duration-300" />
                <span className="text-[16px] leading-[29px]">{service.title}</span>
              </Link>
            ))}
          </div>

          {/* Feature Highlights */}
          <div ref={featureRef} className="mt-8 flex flex-col md:flex-row gap-10 pb-6">
            {/* Technical Advancements */}
            <div className="flex items-center gap-3 p-4 rounded-md bg-[#E5DBD0] hover:bg-[#3F3A34] transition-all duration-300">
              <MdOutlineMilitaryTech className="text-[80px] text-[#3F3A34] transition-all duration-300 hover:text-[#E5DBD0]" />
              <div>
                <h4 className="font-extrabold text-[22px] leading-[26px] text-[#3F3A34] transition-all duration-300 hover:text-[#E5DBD0]">
                  Technical Advancements
                </h4>
                <p className="text-[#6B6159] text-[16px] leading-[29px] transition-all duration-300 hover:text-[#E5DBD0]">
                  We upgrade our services to stay ahead of the competition
                </p>
              </div>
            </div>

            {/* IT Consultancy */}
            <div className="flex items-center gap-3 p-4 rounded-md bg-[#E5DBD0] hover:bg-[#3F3A34] transition-all duration-300">
              <BsFillPersonLinesFill className="text-[55px] text-[#3F3A34] transition-all duration-300 hover:text-[#E5DBD0]" />
              <div>
                <h4 className="font-extrabold text-[22px] leading-[26px] text-[#3F3A34] transition-all duration-300 hover:text-[#E5DBD0]">
                  IT Consultancy
                </h4>
                <p className="text-[#6B6159] text-[16px] leading-[29px] transition-all duration-300 hover:text-[#E5DBD0]">
                  Our IT experts consult you about your required services
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-block bg-[#3F3A34] hover:bg-[#6B6159] text-[#ECE4D9] hover:text-[#1A1816] px-6 py-3 rounded-lg text-[16px] font-medium transition-all transform hover:scale-105"
          >
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
};

// Service data with icons
const services = [
  { title: "Android App Development", href: "/android", icon: FaAndroid },
  { title: "CMS Development", href: "/cms", icon: FaWordpress },
  { title: "IDS App Development", href: "/ids", icon: SiArduino },
  { title: "AR VR App Development", href: "/ar-vr", icon: FaVrCardboard },
  { title: "Web App Development", href: "/web", icon: FaGlobe },
  { title: "Blockchain App Development", href: "/blockchain", icon: FaBitcoin },
];

export default AboutServices;
