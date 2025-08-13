import { useEffect } from "react";
import { Link } from "react-router-dom";

// This is weather widget component
import WeatherWidget from './WeatherWidget';
// Importing the navbar
import Navigation from './Navigation.jsx';
// import the content
import HomeContent from './HomeContent.jsx';
// import the carousel
import Carousel from '../components/Carousel.jsx';

export default function Home() {
  useEffect(() => {
    document.title = "Welcome to NZ Newcomer Guide";
  }, []);

  return (

    <div className="border border-blue-400 min-h-screen bg-gray-50">
      {/* <nav className="bg-white shadow">
        <div className="border border-gray-400 max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">NZ Newcomer Guide</h1>
          <div className="space-x-4">
            <Link to="/arrival" className="text-gray-700 hover:text-blue-600">Arrival</Link>
            <Link to="/living" className="text-gray-700 hover:text-blue-600">Living</Link>
            <Link to="/education" className="text-gray-700 hover:text-blue-600">Education</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
          </div>
        </div>
      </nav>  */}
      <Navigation />

      {/* Hero Section - Carousel */}
      <Carousel />

      {/* <section className="relative min-h-[400px] lg:h-[500px] text-white flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/auckland-night2.png')" }}>
        <WeatherWidget />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white-800 mb-4">Welcome to New Zealand!</h2>
          <p className="text-lg text-white-700 max-w-xl mx-auto">
            Your one-stop guide to settling, living, and thriving in Aotearoa.
          </p>
          <div className="mt-8">
            <Link to="/arrival" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Get Started
            </Link>
          </div>
        </div>
      </section> */}


      {/* Feature Sections */}
      <section className="py-16 bg-white">
        <HomeContent />
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