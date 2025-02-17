"use client"; // Required for React Hooks in Next.js App Router

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`absolute w-full z-50  text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto flex justify-between items-center  py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
          <img src="/logo.png" alt="Logo" className="h-32 w-32 mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col items-center text-[18px] leading-[28px]">
          <div className="flex space-x-6 font-semibold">
            <Link href="/" className="hover:underline">Home</Link>
            <span>|</span>
            <Link href="/Services" className="hover:underline">Services</Link>
            <span>|</span>
            <Link href="/About" className="hover:underline">About Us</Link>
            <span>|</span>
            <Link href="/Contact" className="hover:underline">Contact Us</Link>
          </div>
          {/* Services below main navigation */}
          <div className="flex space-x-2 mt-2 text-[18px] leading-[28px] font-semibold">
            <Link href="/Services/WebDev" className="hover:underline">Web Development</Link>
            <span>|</span>
            <Link href="/services/app-development" className="hover:underline">App Development</Link>
            <span>|</span>
            <Link href="/services/copywriting" className="hover:underline">Copywriting</Link>
            <span>|</span>
            <Link href="/services/digital-marketing" className="hover:underline">Digital Marketing</Link>
            <span>|</span>
            <Link href="/services/graphic-designing" className="hover:underline">Graphic Designing</Link>
          </div>
        </div>

        {/* Book an Appointment Button */}
        <div className="hidden md:flex">
          <Link href="/appointment" className="bg-white text-[#6B6159] px-6 py-3 rounded-lg text-[14px] leading-[20px] font-semibold shadow-md">
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
        <div className="md:hidden bg-black bg-opacity-90 text-[#ECE4D9] flex flex-col space-y-4 p-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <span>|</span>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <span>|</span>
          <Link href="/about" className="hover:text-gray-300">About Us</Link>
          <span>|</span>
          <Link href="/contact" className="hover:text-gray-300">Contact Us</Link>
          <hr className="border-gray-600" />
          <Link href="/services/web-development" className="hover:text-gray-300">Web Development</Link>
          <span>|</span>
          <Link href="/services/app-development" className="hover:text-gray-300">App Development</Link>
          <span>|</span>
          <Link href="/services/copywriting" className="hover:text-gray-300">Copywriting</Link>
          <span>|</span>
          <Link href="/services/digital-marketing" className="hover:text-gray-300">Digital Marketing</Link>
          <span>|</span>
          <Link href="/services/graphic-designing" className="hover:text-gray-300">Graphic Designing</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
