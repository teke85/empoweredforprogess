"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
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
              <Button className="bg-[#4ED38B] hover:bg-[#a3d7bc] text-[#0e3b39] font-medium text-lg px-8 py-6 rounded-full">
                Get Involved
              </Button>
              <Button className="bg-[#4ED38B] hover:bg-[#a3d7bc] text-[#0e3b39] text-lg px-8 py-6 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
