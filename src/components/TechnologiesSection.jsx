"use client"; // Required for React Hooks in Next.js App Router

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const TechnologiesSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const images = [
    { src: "/itfirms_logo.png", alt: "IT Firms" },
    { src: "/topdevelopers-logo.png", alt: "Top Developers" },
    { src: "/appfutura_logo.png", alt: "App Futura" },
    { src: "/clutch_logo-1.png", alt: "Clutch" },
  ];

  return (
    <section style={{ backgroundColor: "#ECE4D9", color: "#1A1816", padding: "40px 0" }}>
      {/* Technology Partners */}
      <div style={{ backgroundColor: "#1A1816", padding: "20px 200px" }}>
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflow: "hidden",
            whiteSpace: "nowrap",
            padding: "20px 0",
            gap: "60px",
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div key={index} style={{ flex: "0 0 auto", padding: "0 40px" }}>
              <Image src={image.src} alt={image.alt} width={300} height={300} />
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div
        className="container mx-auto px-6 py-20 text-center mt-12"
        style={{ backgroundColor: "#ECE4D9", color: "#1A1816" }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#3F3A34",
            color: "#ECE4D9",
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Our Technologies
        </div>
        <h2
          style={{
            fontSize: "46px",
            lineHeight: "55px",
            paddingBottom: "16px",
            fontWeight: "900",
          }}
        >
          Our Entire Stack of <br /> Technology
        </h2>

        {/* Call to Action */}
        <div style={{ marginTop: "24px", paddingBottom: "56px" }}>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "25px",
              fontWeight: "800",
            }}
          >
            Do You Want To explore more services?
            <Link href="/services" legacyBehavior>
              <a style={{ color: "#3F3A34", textDecoration: "underline", marginLeft: "8px" }}>
                Click Here
              </a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;