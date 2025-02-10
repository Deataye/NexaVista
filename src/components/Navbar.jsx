"use client"; // Required for React Hooks in Next.js App Router

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#1A1816] bg-opacity-80 text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
          <img src="/logo.png" alt="Logo" className="h-20 w-20 mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex font-extrabold text-[15px] leading-[29px] space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-gray-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services <ChevronDown size={14} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg py-2 w-40">
                <Link href="/services/web-development" className="block px-4 py-2 hover:bg-gray-200">
                  Web Development
                </Link>
                <Link href="/services/app-development" className="block px-4 py-2 hover:bg-gray-200">
                  App Development
                </Link>
                <Link href="/services/copywriting" className="block px-4 py-2 hover:bg-gray-200">
                  Copywriting
                </Link>
                <Link href="/services/digital-marketing" className="block px-4 py-2 hover:bg-gray-200">
                  Digital Marketing
                </Link>
                <Link href="/services/graphic-designing" className="block px-4 py-2 hover:bg-gray-200">
                  Graphic Designing
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-[#ECE4D9] flex flex-col space-y-4 p-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-gray-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services <ChevronDown size={14} />
            </button>
            {dropdownOpen && (
              <div className="mt-2 bg-white text-black shadow-lg rounded-lg py-2 w-full">
                <Link href="/services/web-development" className="block px-4 py-2 hover:bg-gray-200">
                  Web Development
                </Link>
                <Link href="/services/app-development" className="block px-4 py-2 hover:bg-gray-200">
                  App Development
                </Link>
                <Link href="/services/copywriting" className="block px-4 py-2 hover:bg-gray-200">
                  Copywriting
                </Link>
                <Link href="/services/digital-marketing" className="block px-4 py-2 hover:bg-gray-200">
                  Digital Marketing
                </Link>
                <Link href="/services/graphic-designing" className="block px-4 py-2 hover:bg-gray-200">
                  Graphic Designing
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

