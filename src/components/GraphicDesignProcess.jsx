"use client";
import Image from "next/image";
import { FaEdit, FaCommentDots, FaFileSignature } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const GraphicDesignProcess = () => {
  const steps = [
    {
      title: "Editing & Refinement",
      description:
        "We enhance your visuals with professional image and video editing to ensure high-quality content that aligns with your brand identity.",
      icon: <FaEdit className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Client Feedback & Revisions",
      description:
        "We value your input and refine the designs based on feedback to ensure they align with your expectations and brand goals.",
      icon: <FaCommentDots className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#3F3A34]",
    },
    {
      title: "Finalization & Delivery",
      description:
        "Once approved, we finalize your designs and provide high-resolution files optimized for digital and print use.",
      icon: <FaFileSignature className="text-[#ECE4D9] text-3xl" />,
      bgColor: "bg-[#1A1816]",
    },
  ];

  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-[46px] font-black leading-[55px]">
            <span className="text-[#6B6159]">Graphic Design</span> Process
          </h2>
          <p className="text-[#6B6159] text-[16px] leading-[29px]">
            Our streamlined design process ensures creativity, precision, and seamless execution 
            to enhance your brand’s visual identity.
          </p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${step.bgColor}`}>{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3F3A34]">{step.title}</h3>
                  <p className="text-[#6B6159] text-[16px] leading-[29px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image with Increased Height */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/Logo.jpg" // Replace with actual image path
            alt="Graphic Design Process"
            width={600}
            height={700} // Increased height from 500 to 700
            className="rounded-lg shadow-lg h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignProcess;
