"use client"; // Required for React Hooks in Next.js App Router

import Image from "next/image";
import Link from "next/link";

const TechnologiesSection = () => {
  return (
    <section className="bg-[#1A1816] text-[#ECE4D9] py-16">
      {/* Technology Partners */}
      <div className="bg-[#13110F] py-6">
        <div className="container mx-auto flex flex-wrap justify-center gap-10">
          <Image src="/itfirms.png" alt="IT Firms" width={140} height={40} />
          <Image src="/topdevelopers.png" alt="Top Developers" width={180} height={40} />
          <Image src="/appfutura.png" alt="App Futura" width={160} height={40} />
          <Image src="/clutch.png" alt="Clutch" width={120} height={40} />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="container mx-auto px-6 text-center mt-12">
        <div className="inline-block bg-[#3F3A34] text-[#ECE4D9] px-4 py-2 rounded-lg text-sm font-semibold mb-4">
          Our Technologies
        </div>
        <h2 className="text-4xl font-extrabold">Our Entire Stack of Technology</h2>

        {/* Call to Action */}
        <div className="mt-6">
          <p className="text-lg">Do You Want To explore more services?  
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

