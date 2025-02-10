"use client"; // Required for React Hooks in Next.js App Router

import Image from "next/image";
import { Wallet, Code, Users, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#3F3A34]  text-[#ECE4D9] py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <div className="inline-block bg-[#3F3A34] text-[#ECE4D9] px-4 py-2 rounded-lg text-[18px] leading-[22px]  font-bold mb-4">
            Why Choose Our App Development Services
          </div>
          <h2 className="text-[46px] leading-[55px] font-black mb-6">Why Choose Us?</h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Wallet className="text--[#ECE4D9]"  size={32} />
              <div>
                <h3 className="text-[22px] leading-[26px] font-extrabold">Budget-Friendly</h3>
                <p className="text-[16px] leading-[29px] font-normal ">
                  Reduce development costs by choosing customized development services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text--[#ECE4D9]" size={32} />
              <div>
                <h3 className="text-[22px] leading-[26px] font-extrabold">Less Error-Rates</h3>
                <p className="text-[16px] leading-[29px] font-normal ">
                  Leads to proficiency standards of high-quality application.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="text--[#ECE4D9]" size={32} />
              <div>
                <h3 className="text-[22px] leading-[26px] font-extrabold">Great Work and Team</h3>
                <p className="text-[16px] leading-[29px] font-normal">
                  Top-notch services attract and create more opportunities for customers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Code className="text--[#ECE4D9]" size={32} />
              <div>
                <h3 className="text-[22px] leading-[26px] font-extrabold">Best Product Quality</h3>
                <p className="text-[16px] leading-[29px] font-normal">
                  A well-designed app development cycle ensures the best possible outcome.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <Image
            src="/WhyNxVs.webp"
            alt="Why Choose Us"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
