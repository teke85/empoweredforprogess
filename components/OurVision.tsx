import React from "react";
import { Button } from "./ui/button";

function OurVision() {
  return (
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
  );
}

export default OurVision;
