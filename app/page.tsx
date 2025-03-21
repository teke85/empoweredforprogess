"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#0e3b39] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">Empowered</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
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

            <Button className="hidden md:flex bg-[#c1e5d3] hover:bg-[#a3d7bc] text-[#0e3b39] font-medium rounded-full px-6">
              Get Involved
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px]">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Empowered for Progress"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Empowered for Progress: Transforming Lives Through Engagement
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                A comprehensive research and engagement initiative for
                government beneficiaries committed to making a positive impact
                across Zambia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#c1e5d3] hover:bg-[#a3d7bc] text-[#0e3b39] font-medium text-lg px-8 py-6 rounded-full">
                  Get Involved
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b39] mb-4">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-[#c1e5d3] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-[#0e3b39] mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create a network of empowered citizens who can act as
                  ambassadors for the government's achievements, fostering a
                  sense of community and shared purpose among beneficiaries of
                  UPND government programs.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-[#0e3b39] mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To identify, document, and connect with the beneficiaries of
                  UPND government empowerment programs, amplifying their voices
                  and mobilizing them to participate in the democratic process,
                  particularly in the 2026 general elections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b39] mb-4">
                Project Objectives
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our initiative focuses on five key objectives to create lasting
                impact across Zambia.
              </p>
              <div className="w-20 h-1 bg-[#c1e5d3] mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#c1e5d3] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#0e3b39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b39] mb-3">
                  Identify & Document
                </h3>
                <p className="text-gray-700">
                  Systematically research and compile a comprehensive database
                  of individuals and groups who have benefited from UPND
                  government empowerment programs across all sectors.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#c1e5d3] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#0e3b39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b39] mb-3">
                  Engage & Connect
                </h3>
                <p className="text-gray-700">
                  Establish communication channels and platforms to connect with
                  beneficiaries, fostering a sense of community and shared
                  purpose.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#c1e5d3] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#0e3b39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b39] mb-3">
                  Amplify Voices
                </h3>
                <p className="text-gray-700">
                  Create opportunities for beneficiaries to share their success
                  stories and experiences, highlighting the positive impact of
                  government policies.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#c1e5d3] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#0e3b39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b39] mb-3">
                  Promote Civic Participation
                </h3>
                <p className="text-gray-700">
                  Encourage beneficiaries to actively participate in the
                  democratic process, including voter registration and
                  participation in elections.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#c1e5d3] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#0e3b39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b39] mb-3">
                  Build Ambassador Network
                </h3>
                <p className="text-gray-700">
                  Cultivate a network of empowered citizens who can act as
                  advocates for the UPND government's achievements and vision.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/objectives">
                <Button className="bg-[#0e3b39] hover:bg-[#0a2a28] text-white rounded-full px-8 py-3">
                  View All Objectives
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Project Scope Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b39] mb-4">
                Project Scope
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our research encompasses all major beneficiaries of UPND
                government empowerment programs.
              </p>
              <div className="w-20 h-1 bg-[#c1e5d3] mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#c1e5d3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#0e3b39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b39] mb-2">
                  Youth Empowerment
                </h3>
                <p className="text-gray-700">
                  Beneficiaries of CDF bursaries, skills training programs, and
                  TEVET programs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#c1e5d3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#0e3b39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b39] mb-2">
                  Farmers & Agriculture
                </h3>
                <p className="text-gray-700">
                  Farmers benefiting from FISP, improved market access, and
                  agricultural training.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#c1e5d3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#0e3b39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b39] mb-2">
                  Women Empowerment
                </h3>
                <p className="text-gray-700">
                  Women benefiting from empowerment grants, loans, and
                  entrepreneurship programs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#c1e5d3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#0e3b39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0e3b39] mb-2">
                  Education Sector
                </h3>
                <p className="text-gray-700">
                  Students and teachers benefiting from improved access to
                  education and working conditions.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/scope">
                <Button className="bg-[#0e3b39] hover:bg-[#0a2a28] text-white rounded-full px-8 py-3">
                  View Full Project Scope
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Slogan Section */}
        <section className="py-20 bg-[#0e3b39] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our 2026 Vision
            </h2>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-10">
              "Empowered Today, Progress Tomorrow: Vote UPND for Continued
              Transformation"
            </p>
            <Button className="bg-[#c1e5d3] hover:bg-[#a3d7bc] text-[#0e3b39] font-medium rounded-full px-8 py-3">
              Join Our Movement
            </Button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white p-12 rounded-lg shadow-md max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-[#0e3b39] mb-4">
                    Ready to Get Involved?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Join us in our mission to document and amplify the impact of
                    government empowerment programs. Together, we can make a
                    difference across Zambia.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#0e3b39] hover:bg-[#0a2a28] text-white rounded-full px-8 py-3">
                      Become a Volunteer
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#0e3b39] text-[#0e3b39] hover:bg-[#0e3b39]/5 rounded-full px-8 py-3"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Get Involved"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0e3b39] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">EMPOWERED FOR PROGRESS</h3>
              <p className="text-gray-300 mb-6">
                A comprehensive research and engagement initiative for
                government beneficiaries.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#c1e5d3]/20 rounded-full flex items-center justify-center hover:bg-[#c1e5d3]/30 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#c1e5d3]/20 rounded-full flex items-center justify-center hover:bg-[#c1e5d3]/30 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#c1e5d3]/20 rounded-full flex items-center justify-center hover:bg-[#c1e5d3]/30 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/objectives"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Objectives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/scope"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Project Scope
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Project Areas</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Youth Empowerment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Farmers & Agriculture
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Women Empowerment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Education Sector
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Healthcare
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 mt-0.5 text-[#c1e5d3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300">
                    info@empoweredforprogress.org
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 mt-0.5 text-[#c1e5d3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-300">+260 XXX XXX XXX</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 mt-0.5 text-[#c1e5d3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300">Lusaka, Zambia</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Empowered for Progress. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
