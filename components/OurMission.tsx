import React from "react";

function OurMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b39] mb-4 font-bricolage">
            Our Mission & Vision
          </h2>
          <div className="w-20 h-1 bg-[#c1e5d3] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0e3b39] mb-6 font-bricolage">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-bricolage">
              To create a network of empowered citizens who can act as
              ambassadors for the governments achievements, fostering a sense of
              community and shared purpose among beneficiaries of UPND
              government programs.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0e3b39] mb-6 font-bricolage">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-bricolage">
              To identify, document, and connect with the beneficiaries of UPND
              government empowerment programs, amplifying their voices and
              mobilizing them to participate in the democratic process,
              particularly in the 2026 general elections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
