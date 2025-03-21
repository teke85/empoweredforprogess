import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/">
                <h1 className="text-2xl font-bold">EMPOWERED FOR PROGRESS</h1>
              </Link>
            </div>
            <nav className="flex gap-6">
              <Link href="/" className="hover:underline font-medium">
                Home
              </Link>
              <Link href="/about" className="hover:underline font-medium">
                About
              </Link>
              <Link href="/objectives" className="hover:underline font-medium">
                Objectives
              </Link>
              <Link href="/scope" className="hover:underline font-medium">
                Scope
              </Link>
              <Link href="/team" className="hover:underline font-medium">
                Team
              </Link>
              <Link href="/contact" className="hover:underline font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-green-800">
              About the Initiative
            </h1>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The UPND government, under the leadership of President Hakainde
                Hichilema, has implemented numerous empowerment programs aimed
                at improving the lives of Zambians across various sectors. As a
                passionate supporter and having witnessed the pivotal role of
                the youth in the 2021 elections, we propose a comprehensive
                research and engagement initiative to identify, document, and
                connect with the beneficiaries of these programs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This initiative, Empowered for Progress, will serve to document
                the positive impact of the UPND governments policies, create a
                network of empowered citizens who can act as ambassadors for the
                governments achievements, mobilize beneficiaries to participate
                in the democratic process, particularly in the 2026 general
                elections, and foster a sense of community and shared purpose
                among beneficiaries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Drawing from experience as a Part time ECZ Staff who worked as
                an Assistant Returning Officer in Mongu Central Constituency
                during the 2021 General elections and 2025 Litawa Ward
                By-Elections in Nalikwanda Constituency, we witnessed firsthand
                the dedication of the youth. This project seeks to harness that
                energy and build a lasting connection between the government and
                its beneficiaries.
              </p>
            </div>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
              Project Timeline
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  Phase 1
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Months 1-3</p>
                <p className="text-gray-700">
                  Project mobilization, stakeholder engagement, research design,
                  and data collection instrument development.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  Phase 2
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Months 4-6</p>
                <p className="text-gray-700">
                  Data collection, including review of records, surveys, and
                  interviews.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  Phase 3
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Months 7-9</p>
                <p className="text-gray-700">
                  Data analysis, database development, and engagement strategy
                  implementation.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  Phase 4
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Months 10-12</p>
                <p className="text-gray-700">
                  Network building, beneficiary testimony collection, and
                  project reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expected Outcomes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
              Expected Outcomes
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>A comprehensive
                  database of UPND government empowerment program beneficiaries.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  An active network of engaged and empowered citizens.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Increased awareness of the positive impact of government
                  policies.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Enhanced civic participation and voter mobilization.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>A strong
                  foundation for continued engagement and advocacy.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Initiative</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Be part of this transformative project that aims to strengthen the
              connection between the UPND government and its beneficiaries.
            </p>
            <Button className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6">
              Get Involved Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EMPOWERED FOR PROGRESS</h3>
              <p className="text-gray-300">
                A comprehensive research and engagement initiative for
                government beneficiaries.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/objectives"
                    className="text-gray-300 hover:text-white"
                  >
                    Objectives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/scope"
                    className="text-gray-300 hover:text-white"
                  >
                    Project Scope
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-300 hover:text-white">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-2">
                Email: info@empoweredforprogress.org
              </p>
              <p className="text-gray-300 mb-2">Phone: +260 XXX XXX XXX</p>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
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
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
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
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
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
