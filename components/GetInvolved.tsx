import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function GetInvolved() {
  return (
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
  );
}

export default GetInvolved;
