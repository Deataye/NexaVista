"use client"; // Required for React Hooks in Next.js App Router

import Image from "next/image";
import Link from "next/link";

const TechnologiesSection = () => {
  return (
    <section className="bg-[#ECE4D9] text-[#1A1816]  ">
      {/* Technology Partners */}
      <div className="bg-[#3F3A34] py-16">
        <div className="container mx-auto flex flex-wrap justify-center gap-10">
          <Image src="/itfirms_logo.png" alt="IT Firms" width={340} height={340} />
          <Image src="/topdevelopers-logo.png" alt="Top Developers" width={340} height={340} />
          <Image src="/appfutura_logo.png" alt="App Futura" width={340} height={340} />
          <Image src="/clutch_logo-1.png" alt="Clutch" width={340} height={340} />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="container mx-auto px-6 py-16  text-center mt-12">
        <div className="inline-block bg-[#3F3A34] text-[#ECE4D9] px-4 py-2 rounded-lg text-[18px] leading-[22px] font-bold mb-4">
          Our Technologies
        </div>
        <h2 className="text-[46px] leading-[55px] pb-16  font-black">Our Entire Stack of <br /> Technology</h2>

        {/* Call to Action */}
        <div className="mt-6 pb-14">
          <p className="text-[18px] leading-[25px] font-extrabold ">Do You Want To explore more services?  
            <Link href="/services" className="text-[#3F3A34] underline ml-2">
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;

