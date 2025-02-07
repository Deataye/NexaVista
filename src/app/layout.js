"use client"; // This makes sure the Navbar works in App Router

import Navbar from "@/components/Navbar"; // Adjust path if needed
import "./globals.css"; // Global styles

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
