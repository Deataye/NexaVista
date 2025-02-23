"use client";
import Link from "next/link";
import { FaApple, FaAndroid, FaSyncAlt, FaMobileAlt, FaPalette, FaRocket } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const MobileAppServices = () => {
  const services = [
    {
      title: "iOS App Development",
      description:
        "Crafting top-tier iOS applications using Swift, ensuring seamless performance, high security, and a stunning user experience. We integrate Apple’s ecosystem features like Siri, Apple Pay, and more for a premium app experience.",
      icon: <FaApple className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Android App Development",
      description:
        "Building scalable and high-performance Android apps with Flutter, Google’s powerful UI toolkit. Our apps are visually appealing, responsive, and optimized for seamless deployment on Google Play.",
      icon: <FaAndroid className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Cross-Platform Development",
      description:
        "Developing efficient, high-quality apps with React Native, allowing businesses to target both iOS and Android with a unified codebase. Enjoy native performance with seamless updates and consistent UX across platforms.",
      icon: <FaSyncAlt className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Custom Mobile App Solutions",
      description:
        "We create tailored mobile applications designed to meet your business objectives, ensuring high performance, robust security, and user-centric design.",
      icon: <FaMobileAlt className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "UI/UX Design for Mobile Apps",
      description:
        "Enhancing mobile app usability with sleek, intuitive designs that align with platform aesthetics and drive user engagement.",
      icon: <FaPalette className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Mobile Performance Optimization",
      description:
        "Optimizing apps for speed, efficiency, and minimal resource consumption, ensuring smooth performance across all devices.",
      icon: <FaRocket className="text-[#ECE4D9] text-4xl" />,
      bgColor: "bg-[#6B6159]",
    },
  ];

  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-[46px] leading-[55px] font-black mb-4">
          Mobile Application <span className="text-[#6B6159]">Development</span> Services
        </h2>
        <p className="text-[#6B6159] mb-10">
          At <Link href="/" className="text-[#3F3A34] font-semibold">NexaVistaTechnologies</Link>, we specialize in delivering cutting-edge mobile solutions. Whether you need a native iOS or Android app, or a cross-platform solution, our expertise ensures high performance, seamless user experience, and scalable solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md ${service.bgColor}`}>
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#ECE4D9]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppServices;
