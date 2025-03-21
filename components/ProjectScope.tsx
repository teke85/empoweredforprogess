import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function ProjectScope() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b39] mb-4 font-bricolage">
            Project Scope
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-bricolage">
            Our research encompasses all major beneficiaries of UPND government
            empowerment programs.
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
              Students and teachers benefiting from improved access to education
              and working conditions.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/scope">
            <Button className="bg-[#0e3b39] hover:bg-[#0a2a28] text-white rounded-full px-8 py-3">
              View Beneficiaries
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectScope;
