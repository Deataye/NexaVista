"use client"; // Required for React Hooks in Next.js App Router

import Image from "next/image";
import Link from "next/link";

const AboutServices = () => {
  return (
    <section className="bg-[#ECE4D9]  text-[#3F3A34] py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Images */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/WelcomeToNxVs.webp"
            alt="Team Meeting"
            width={500}
            height={500}
            className="rounded-lg"
          />
          {/* <Image
            src="/WhyNxVs.webp"
            alt="Collaboration"
            width={250}
            height={250}
            className="absolute bottom-[-40px] left-12 rounded-lg"
          /> */}
          {/* Certified Badge */}
          {/* <div className="absolute top-0 right-0 bg-white text-black px-4 py-2 rounded-full shadow-md text-sm font-bold">
            ✔ Certified
          </div> */}
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[46px] font-black  leading-[55px]">
            We Provide Excellent{" "}
            <span className="text-[#6B6159]">Service</span> to Meet Your Specific Needs
          </h2>
          <p className="mt-4 text-[#6B6159] font-normal text-[16px] leading-[29px] ">
            We are a top-notch technology partner delivering high-quality solutions for web,
            mobile, and enterprise applications.
          </p>

          {/* Service List */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-[#6B6159] font-normal text-[16px] leading-[29px]">
            <Link href="/services/web-development" className="hover:text-[#3F3A34]">
              ✅ Web Development
            </Link>
            <Link href="/services/app-development" className="hover:text-[#3F3A34]">
              ✅ App Development
            </Link>
            <Link href="/services/copywriting" className="hover:text-[#3F3A34]">
              ✅ Copywriting
            </Link>
            <Link href="/services/digital-marketing" className="hover:text-[#3F3A34]">
              ✅ Digital Marketing
            </Link>
            <Link href="/services/graphic-designing" className="hover:text-[#3F3A34]">
              ✅ Graphic Designing
            </Link>
            <Link href="/services/blockchain-development" className="hover:text-[#3F3A34]">
              ✅ Blockchain Development
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <h4 className="font-extrabold text-[22px] leading-[26px]">Technical Advancements</h4>
                <p className="text-[#6B6159] font-normal text-[16px] leading-[29px]">We stay ahead of the competition with cutting-edge technology.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📈</span>
              <div>
                
                <h4 className="font-extrabold text-[22px] leading-[26px]">IT Consultancy</h4>
                <p className="text-[#6B6159] font-normal text-[16px] leading-[29px]">Our experts provide tailored IT consulting services.</p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <Link
            href="/contact"
            className="mt-6 inline-block bg-[#3F3A34] hover:bg-[#2F2A24] text-[#ECE4D9] px-6 py-3 rounded-lg text-[16px] font-medium leading-[26px] transition-all"
          >
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
