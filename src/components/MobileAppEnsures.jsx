"use client";
import Image from "next/image";
import Link from "next/link";
import { FaMobileAlt, FaRocket, FaUsers, FaShieldAlt } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const MobileAppEnsures = () => {
  const features = [
    {
      title: "Scalable & High-Performance Apps",
      description:
        "NexaVista Technologies builds mobile applications that scale effortlessly with your business growth. Whether it’s handling increased user traffic or adding new features, our apps remain responsive, efficient, and future-proof.",
      icon: <FaMobileAlt className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-[125px]" />,
    },
    {
      title: "Optimized Speed & Performance",
      description:
        "Speed matters in mobile apps. Our optimization strategies ensure smooth performance, fast load times, and minimal resource consumption across all devices, keeping users engaged and satisfied.",
      icon: <FaRocket className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-[125px]" />,
    },
    {
      title: "Expert Development Team",
      description:
        "Our skilled mobile developers specialize in native iOS (Swift), Android (Flutter), and cross-platform (React Native) apps. With experience across multiple industries, we ensure high-quality, innovative solutions tailored to your business needs.",
      icon: <FaUsers className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-[125px]" />,
    },
    {
      title: "Robust Security & Compliance",
      description:
        "Security is a top priority at NexaVista Technologies. We integrate advanced encryption, secure authentication, and compliance measures to safeguard your app’s data and protect users from security threats.",
      icon: <FaShieldAlt className="text-[#6B6159] hover:text-[#3F3A34] transition-colors text-[125px]" />,
    },
  ];

  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/request-a-call-back-im1.jpg" // Replace with actual image path
            alt="Mobile App Development"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[46px] font-black leading-[55px] pb-10">
            <span className="text-[#6B6159]">NexaVista Technologies</span> Ensures Seamless{" "}
            <span className="text-[#6B6159]">Mobile App Development</span>
          </h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {feature.icon}
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-[#6B6159] text-[16px]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-[#3F3A34] hover:bg-[#2F2A24] text-[#ECE4D9] px-6 py-3 rounded-lg text-lg font-medium transition-all"
          >
            Start Your Mobile App Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileAppEnsures;
