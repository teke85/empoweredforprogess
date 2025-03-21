import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Objectives() {
  return (
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
              beneficiaries, fostering a sense of community and shared purpose.
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
              Encourage beneficiaries to actively participate in the democratic
              process, including voter registration and participation in
              elections.
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
              Cultivate a network of empowered citizens who can act as advocates
              for the UPND governments achievements and vision.
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
  );
}

export default Objectives;
