"use client";
import { FaImage, FaPencilRuler, FaFileExport } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const GraphicMethods = () => {
  return (
    <section className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-[46px] leading-[55px] font-black mb-4">
          Our <span className="text-[#6B6159]">Graphic Design</span> Process for Impactful Visuals
        </h2>
        <p className="text-[#6B6159] mb-10">
          At <span className="text-[#3F3A34] font-semibold">NexaVista Technologies</span>, we combine creativity and strategy to 
          craft designs that communicate your brand message effectively.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image & Video Editing */}
          <div className="p-6 rounded-lg shadow-md bg-[#6B6159]">
            <div className="flex justify-center mb-4">
              <FaImage className="text-[#ECE4D9] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#ECE4D9]">Image & Video Editing</h3>
            <ul className="text-[#ECE4D9] space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Professional Retouching
              </li>
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Color Correction
              </li>
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Motion Graphics
              </li>
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Video Enhancements
              </li>
            </ul>
          </div>

          {/* Logo & Branding */}
          <div className="p-6 rounded-lg shadow-md bg-[#6B6159]">
            <div className="flex justify-center mb-4">
              <FaPencilRuler className="text-[#ECE4D9] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#ECE4D9]">Logo & Branding</h3>
            <ul className="text-[#ECE4D9] space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Custom Logo Design
              </li>
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Typography Selection
              </li>
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Brand Identity Guidelines
              </li>
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Color Palette Development
              </li>
            </ul>
          </div>

          {/* Marketing Materials */}
          <div className="p-6 rounded-lg shadow-md bg-[#6B6159]">
            <div className="flex justify-center mb-4">
              <FaFileExport className="text-[#ECE4D9] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#ECE4D9]">Marketing Materials</h3>
            <ul className="text-[#ECE4D9] space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Brochures & Flyers
              </li>
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Social Media Graphics
              </li>
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Business Cards
              </li>
              <li className="flex items-center gap-2">
                <FaFileExport className="text-[#ECE4D9]" /> Presentation Designs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicMethods;
