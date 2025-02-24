"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const Footer = () => {
  const footerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
      }
    );

    sectionRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        }
      );
    });
  }, []);

  return (
    <footer ref={footerRef} className={`bg-[#1A1816] text-[#ECE4D9] py-12 ${poppins.className}`}>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Company Info */}
        <div ref={(el) => (sectionRefs.current[0] = el)}>
          <Link href="/" className="text-2xl font-bold flex items-center">
            <img src="/logo.png" alt="NexaVista Logo" className="h-20 w-20 mr-2" />
          </Link>
          <p className="mt-4 text-[16px] leading-[29px] font-normal text-[#ECE4D9]">
            NexaVista leads in web and mobile app development, serving startups, small businesses, and enterprises with premium solutions.
          </p>
          <div className="flex space-x-3 mt-4">
            <Link href="#" className="hover:text-[#3F3A34] transition-colors duration-300">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-[#3F3A34] transition-colors duration-300">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-[#3F3A34] transition-colors duration-300">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div ref={(el) => (sectionRefs.current[1] = el)}>
          <h3 className="text-[20px] font-extrabold leading-[24px] text-[#ECE4D9] mb-4">Links</h3>
          <ul className="space-y-2 text-[#ECE4D9] text-[16px] leading-[29px]">
            <li><Link href="/services" className="hover:text-[#3F3A34] transition-colors duration-300">Services</Link></li>
            <li><Link href="/about" className="hover:text-[#3F3A34] transition-colors duration-300">About Us</Link></li>
            <li><Link href="/faqs" className="hover:text-[#3F3A34] transition-colors duration-300">FAQs</Link></li>
            <li><Link href="/terms" className="hover:text-[#3F3A34] transition-colors duration-300">Terms of Service</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#3F3A34] transition-colors duration-300">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div ref={(el) => (sectionRefs.current[2] = el)}>
          <h3 className="text-[20px] font-extrabold leading-[24px] text-[#ECE4D9] mb-4">Get Started</h3>
          <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
            Office No 1, Floor No 3, Plaza 74, Spring North Commercial, Bahria Town Phase 7, Islamabad, Pakistan.
          </p>
          <p className="flex items-center mt-2 text-[#ECE4D9] text-[16px] leading-[29px]">
            <Phone size={16} className="mr-2" /> +92 (336) 8323237
          </p>
          <p className="flex items-center mt-2 text-[#ECE4D9] text-[16px] leading-[29px]">
            <Mail size={16} className="mr-2" /> sales@nexavistatech.com
          </p>
          <Link href="/contact">
            <button className="mt-4 w-full bg-[#3F3A34] hover:bg-[#ECE4D9] hover:text-[#1A1816] text-[#ECE4D9] py-2 rounded-md transition-all duration-300">
              Book a Consultation
            </button>
          </Link>
        </div>

        {/* Newsletter */}
        <div ref={(el) => (sectionRefs.current[3] = el)}>
          <h3 className="text-[20px] font-extrabold leading-[24px] text-[#ECE4D9] mb-4">Newsletter</h3>
          <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
            Stay updated with the latest news, trends, and offers.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-[#25221E] text-[#ECE4D9] border border-[#3F3A34] transition-all duration-300 focus:border-[#ECE4D9] focus:ring-2 focus:ring-[#ECE4D9]"
            />
            <button className="mt-2 w-full bg-[#3F3A34] hover:bg-[#ECE4D9] hover:text-[#1A1816] text-[#ECE4D9] py-2 rounded-md transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-[16px] leading-[29px] text-[#ECE4D9] border-t border-[#3F3A34] mt-8 pt-4">
        Copyright © 2020-2024. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
