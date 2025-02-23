"use client";
import Image from "next/image";
import { FaEdit, FaPenNib, FaFileAlt, FaPhotoVideo } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const GraphicDesignServices = () => {
  const services = [
    {
      title: "Image & Video Editing",
      description:
        "Enhance your brand’s visuals with professional image and video editing services, making your content more engaging and impactful.",
      icon: <FaPhotoVideo className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Logo Designing",
      description:
        "Create a strong and memorable brand identity with unique and versatile logo designs that capture your business essence.",
      icon: <FaPenNib className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Brand Guides",
      description:
        "Ensure consistency across all marketing materials with comprehensive brand guides, including color schemes, typography, and design elements.",
      icon: <FaFileAlt className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Flyer & Brochure Design",
      description:
        "Design high-quality flyers and brochures that effectively communicate your message and enhance your brand’s presence.",
      icon: <FaEdit className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
  ];

  return (
    <section className={`py-16 bg-[#1A1816] text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-[42px] font-bold leading-[50px]">
            Elevate Your Brand with <span className="text-[#6B6159]">Creative Design Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-lg ${service.bgColor}`}>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center text-[#ECE4D9]">{service.title}</h3>
                <p className="text-sm text-center text-[#ECE4D9]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/Editing.jpg" // Replace with actual image path
            alt="Graphic Design Process"
            width={600}
            height={900} // Increased height
            className="rounded-lg shadow-lg object-cover h-[750px]" // Ensures proper height scaling
          />
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignServices;
