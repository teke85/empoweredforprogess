"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Actual carousel images from public/images folder
const carouselImages = [
  "/images/carpenter.webp",
  "/images/fishing.webp",
  "/images/marketeer_1.webp",
  "/images/marketeer_2.webp",
  "/images/marketeer_3.webp",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main className="flex-1">
      {/* Hero Section with Carousel */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Empowered Zambian ${
                  image.includes("carpenter")
                    ? "Carpenter"
                    : image.includes("fishing")
                    ? "Fisher"
                    : image.includes("marketeer")
                    ? "Market Vendor"
                    : "Citizen"
                }`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content - Increased z-index and added a subtle text shadow */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-bricolage drop-shadow-lg">
              Empowered for Progress: Transforming Lives Through Engagement
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl font-bricolage drop-shadow-md">
              A comprehensive research and engagement initiative for government
              beneficiaries committed to making a positive impact across Zambia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#c1e5d3] hover:bg-[#a3d7bc] text-[#0e3b39] font-medium text-lg px-8 py-6 rounded-full">
                Get Involved
              </Button>
              <Button
                variant="outline"
                className="bg-[#c1e5d3] hover:bg-[#a3d7bc] text-[#0e3b39] text-lg px-8 py-6 rounded-full"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b39] mb-4 font-bricolage">
              Project Objectives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-bricolage">
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
              <h3 className="text-xl font-bold text-[#0e3b39] mb-3 font-bricolage">
                Identify & Document
              </h3>
              <p className="text-gray-700 font-bricolage">
                Systematically research and compile a comprehensive database of
                individuals and groups who have benefited from UPND government
                empowerment programs across all sectors.
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
              <h3 className="text-xl font-bold text-[#0e3b39] mb-3 font-bricolage">
                Engage & Connect
              </h3>
              <p className="text-gray-700 font-bricolage">
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
              <h3 className="text-xl font-bold text-[#0e3b39] mb-3 font-bricolage">
                Amplify Voices
              </h3>
              <p className="text-gray-700 font-bricolage">
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
              <h3 className="text-xl font-bold text-[#0e3b39] mb-3 font-bricolage">
                Promote Civic Participation
              </h3>
              <p className="text-gray-700 font-bricolage">
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
              <h3 className="text-xl font-bold text-[#0e3b39] mb-3 font-bricolage">
                Build Ambassador Network
              </h3>
              <p className="text-gray-700 font-bricolage">
                Cultivate a network of empowered citizens who can act as
                advocates for the UPND governments achievements and vision.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b39] mb-4 font-bricolage">
              Project Scope
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-bricolage">
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
              <h3 className="text-xl font-bold text-[#0e3b39] mb-2 font-bricolage">
                Youth Empowerment
              </h3>
              <p className="text-gray-700 font-bricolage">
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
              <h3 className="text-xl font-bold text-[#0e3b39] mb-2 font-bricolage">
                Farmers & Agriculture
              </h3>
              <p className="text-gray-700 font-bricolage">
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
              <h3 className="text-xl font-bold text-[#0e3b39] mb-2 font-bricolage">
                Women Empowerment
              </h3>
              <p className="text-gray-700 font-bricolage">
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
              <h3 className="text-xl font-bold text-[#0e3b39] mb-2 font-bricolage">
                Education Sector
              </h3>
              <p className="text-gray-700 font-bricolage">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-bricolage">
            Our 2026 Vision
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-10 font-bricolage">
            Empowered Today, Progress Tomorrow: Vote UPND for Continued
            Transformation
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
                <h2 className="text-3xl font-bold text-[#0e3b39] mb-4 font-bricolage">
                  Ready to Get Involved?
                </h2>
                <p className="text-lg text-gray-700 mb-6 font-bricolage">
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
  );
};

export default Hero;
