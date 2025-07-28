import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Welcome to NZ Newcomer Guide";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">NZ Newcomer Guide</h1>
          <div className="space-x-4">
            <Link to="/arrival" className="text-gray-700 hover:text-blue-600">Arrival</Link>
            <Link to="/living" className="text-gray-700 hover:text-blue-600">Living</Link>
            <Link to="/education" className="text-gray-700 hover:text-blue-600">Education</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Welcome to New Zealand!</h2>
        <p className="text-lg text-blue-700 max-w-xl mx-auto">
          Your one-stop guide to settling, living, and thriving in Aotearoa.
        </p>
        <div className="mt-8">
          <Link to="/arrival" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Arrival Essentials</h3>
            <p className="text-gray-600">Everything you need to know when first landing in NZ: SIM card, IRD number, bank, transport.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Daily Living</h3>
            <p className="text-gray-600">Understand housing, healthcare, shopping, recycling, driving and more.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Education & Work</h3>
            <p className="text-gray-600">Learn how to enroll in schools, understand NCEA, and start your job search.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          &copy; 2025 NZ Newcomer Guide. All rights reserved.
        </div>
      </footer>
    </div>
  );
}