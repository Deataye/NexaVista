"use client"; // This makes sure the Navbar works in App Router

import Navbar from "@/components/Navbar"; // Adjust path if needed
import "./globals.css"; // Global styles
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
