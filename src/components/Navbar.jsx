"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: navRef.current, start: "top 90%" },
      }
    );
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [mobileMenuOpen]);

  return (
    <nav ref={navRef} className={`absolute w-full z-50 text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
          <img src="/logo.png" alt="NexaVista Logo" className="h-32 w-32 mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col items-center text-[18px] leading-[28px]">
          <div className="flex space-x-6 font-semibold">
            <Link href="/" className="hover:underline transition-colors duration-300">Home</Link>
            <span>|</span>
            <Link href="/Services" className="hover:underline transition-colors duration-300">Services</Link>
            <span>|</span>
            <Link href="/About" className="hover:underline transition-colors duration-300">About Us</Link>
            <span>|</span>
            <Link href="/Contact" className="hover:underline transition-colors duration-300">Contact Us</Link>
          </div>
          {/* Services below main navigation */}
          <div className="flex space-x-2 mt-2 text-[18px] leading-[28px] font-semibold">
            <Link href="/Services/WebDev" className="hover:underline transition-colors duration-300">Web Development</Link>
            <span>|</span>
            <Link href="/Services/AppDev" className="hover:underline transition-colors duration-300">App Development</Link>
            <span>|</span>
            <Link href="/Services/CopyWriting" className="hover:underline transition-colors duration-300">Copywriting</Link>
            <span>|</span>
            <Link href="/Services/DigitalMarketing" className="hover:underline transition-colors duration-300">Digital Marketing</Link>
            <span>|</span>
            <Link href="/Services/GraphicDesigning" className="hover:underline transition-colors duration-300">Graphic Designing</Link>
          </div>
        </div>

        {/* Book an Appointment Button */}
        <div className="hidden md:flex">
          <Link href="/appointment" className="bg-white text-[#6B6159] px-6 py-3 rounded-lg text-[14px] leading-[20px] font-semibold shadow-md hover:bg-[#ECE4D9] transition-all duration-300">
            Book an Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={menuRef} className="md:hidden fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center text-[#ECE4D9] space-y-6 p-6 z-50 transition-opacity">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6">
            <X size={32} className="text-[#ECE4D9] hover:text-[#6B6159] transition-colors duration-300" />
          </button>
          <Link href="/" className="text-xl font-semibold hover:text-[#6B6159] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" className="text-xl font-semibold hover:text-[#6B6159] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/about" className="text-xl font-semibold hover:text-[#6B6159] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="text-xl font-semibold hover:text-[#6B6159] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          <hr className="border-gray-600 w-full" />
          <Link href="/services/web-development" className="text-lg hover:text-[#6B6159] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Web Development</Link>
          <Link href="/services/app-development" className="text-lg hover:text-[#6B6159] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>App Development</Link>
          <Link href="/services/copywriting" className="text-lg hover:text-[#6B6159] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Copywriting</Link>
          <Link href="/services/digital-marketing" className="text-lg hover:text-[#6B6159] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Digital Marketing</Link>
          <Link href="/services/graphic-designing" className="text-lg hover:text-[#6B6159] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Graphic Designing</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
