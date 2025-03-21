"use client";

import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Logo from "./Logo";

function Header() {
  return (
    <header className="bg-[#0e3b39] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Logo />
            {/* <span className="text-2xl font-bold font-bricolage">
              Empowered for Progress
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center font-bricolage space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-green-200 py-2">
                <span>About Us</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Our Story
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Our Team
                </Link>
              </div>
            </div>
            <Link
              href="/objectives"
              className="text-white hover:text-green-200"
            >
              Objectives
            </Link>
            <Link href="/scope" className="text-white hover:text-green-200">
              Scope
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-green-200 py-2">
                <span>Projects</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Current Projects
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Past Projects
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-white hover:text-green-200">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu />
          </div>

          <Button className="hidden md:flex font-bricolage bg-[#c1e5d3] hover:bg-[#a3d7bc] text-[#0e3b39] font-medium rounded-full px-6">
            Get Involved
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

// Mobile Menu Component
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0e3b39] z-50 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-green-200 py-2">
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-green-200 py-2"
            >
              About Us
            </Link>
            <Link
              href="/objectives"
              className="text-white hover:text-green-200 py-2"
            >
              Objectives
            </Link>
            <Link
              href="/scope"
              className="text-white hover:text-green-200 py-2"
            >
              Scope
            </Link>
            <Link href="/team" className="text-white hover:text-green-200 py-2">
              Team
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-green-200 py-2"
            >
              Contact
            </Link>
            <Button className="bg-[#c1e5d3] hover:bg-[#a3d7bc] text-[#0e3b39] font-medium rounded-full">
              Get Involved
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
