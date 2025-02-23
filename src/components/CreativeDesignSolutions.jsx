"use client";
import Image from "next/image";
import { FaEdit, FaRegLightbulb, FaLayerGroup } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const CreativeDesignSolutions = () => {
  const services = [
    {
      title: "Image & Video Editing",
      description:
        "Enhance your visuals with professional editing services that make your content more engaging and impactful across platforms.",
      icon: <FaEdit className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Logo & Brand Identity",
      description:
        "We design unique logos and brand guides to create a strong, cohesive identity that makes your business stand out.",
      icon: <FaRegLightbulb className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#3F3A34]",
    },
    {
      title: "Social Media Graphics",
      description:
        "Custom-designed social media posts and visuals to boost engagement and establish a consistent brand presence online.",
      icon: <FaLayerGroup className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#1A1816]",
    },
  ];

  return (
    <section className={`py-16 bg-[#1A1816] text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/BusyDesk.jpg" // Replace with actual image path
            alt="Graphic Designing"
            width={600}
            height={600} // Adjusted height for better visibility
            className="rounded-lg shadow-lg object-cover h-[500px]"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-[42px] font-bold leading-[50px]">
            <span className="text-[#6B6159]">Creative Design</span> Solutions for Your Brand
          </h2>
          <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
            We craft stunning visuals that elevate your brand, ensuring consistency and creativity across all platforms.
          </p>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${service.bgColor}`}>{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#ECE4D9]">{service.title}</h3>
                  <p className="text-[#ECE4D9] text-[16px] leading-[29px]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreativeDesignSolutions;
