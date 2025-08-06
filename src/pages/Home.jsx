import { useEffect } from "react";
import { Link } from "react-router-dom";

// This is weather widget component
import WeatherWidget from './WeatherWidget';

// 引入图标
import workIcon from '../assets/work.png';
import healthcareIcon from '../assets/healthcare.png';
import enssentialIcon from '../assets/enssential.png';
import livingIcon from '../assets/living.png';
import educationIcon from '../assets/education.png';
import transportIcon from '../assets/transport.png';

export default function Home() {
  useEffect(() => {
    document.title = "Welcome to NZ Newcomer Guide";
  }, []);

  return (
    <div className="border border-blue-400 min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="border border-gray-400 max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">NZ Newcomer Guide</h1>
          <div className="space-x-4">
            <Link to="/arrival" className="text-gray-700 hover:text-blue-600">Arrival</Link>
            <Link to="/living" className="text-gray-700 hover:text-blue-600">Living</Link>
            <Link to="/education" className="text-gray-700 hover:text-blue-600">Education</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
          </div>
        </div>
      </nav> 

      <section className="relative min-h-[400px] lg:h-[500px] text-white flex flex-col justify-center items-center bg-cover bg-center"
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
      </section>

      {/* Feature Sections */}
      <section className="py-16 bg-white">
        <div className="border border-red-400 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          <div className="border border-gray-400 text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Arrival Essentials</h3>
            <img src={enssentialIcon} alt="Essential Icon" className="border border-red-400 w-26 h-26 mx-auto mb-[-39px] mt-[-19px]" />
            <h2 className="text-sm font-bold text-gray-800 mb-4">Step-by-Step Help for Your First Days in New Zealand</h2>
            <p className="text-gray-600">Get practical help with all the essentials you need when you first arrive in New Zealand. Learn how to set up a local bank account, apply for an IRD number for tax, and get your public transport card. We also guide you through finding short-term accommodation, understanding mobile plans, and accessing translation or settlement support services. Everything you need to settle quickly and confidently is here.</p>
          </div>
          <div className="border border-gray-400 text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Daily Living</h3>
            <img src={livingIcon} alt="Living Icon" className="border border-red-400 w-26 h-26 mx-auto mb-[-39px] mt-[-19px]" />
            <h2 className="text-sm font-bold text-gray-800 mb-4">Navigate Everyday Life with Confidence</h2>
            <p className="text-gray-600">Discover how daily life works in New Zealand — from grocery shopping and renting a home to handling rubbish and recycling. Learn how to read power bills, find internet providers, and manage common household tasks. This section also covers social norms, local etiquette, and helpful apps to make life easier. Whether you’re living alone or with family, you’ll feel more at home every day.</p>
          </div>
          <div className="border border-gray-400 text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Education</h3>
            <img src={educationIcon} alt="Education Icon" className="border border-red-400 w-26 h-26 mx-auto mb-[-39px] mt-[-19px]" />
            <h2 className="text-sm font-bold text-gray-800 mb-4">Explore Learning Options for Every Age and Stage</h2>
            <p className="text-gray-600">Understand how the New Zealand education system works, from early childhood to university. We explain how to enrol your children in school, what the different year levels mean, and how school zoning works. If you’re studying yourself, learn about tertiary education options, English language classes, and qualifications recognition. We also include tips for accessing student support and navigating school-parent communication.</p>
          </div>

          <div className="border border-gray-400 text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Public Transport</h3>
            <img src={transportIcon} alt="Transport Icon" className="border border-red-400 w-26 h-26 mx-auto mb-[-39px] mt-[-19px]" />
            <h2 className="text-sm font-bold text-gray-800 mb-4">Travel with Ease Across the City</h2>
            <p className="text-gray-600">Learn how to use New Zealand’s public transport systems including buses, trains, and ferries. Understand how to top up and use transport cards like the AT HOP and Bee Card. We also cover timetable tools, fare discounts, and practical tips for getting around smoothly.</p>
          </div>
          <div className="border border-gray-400 text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Healthcare</h3>
            <img src={healthcareIcon} alt="Healthcare Icon" className="border border-red-400 w-26 h-26 mx-auto mb-[-39px] mt-[-19px]" />
            <h2 className="text-sm font-bold text-gray-800 mb-4">Take Care of Your Health with Confidence</h2>
            <p className="text-gray-600">Find out how to register with a GP, what to do in a medical emergency, and how the healthcare system works in New Zealand. We cover costs, government subsidies, ACC injury claims, pharmacy services, and tips on health insurance so you can stay well-prepared.</p>
          </div>
          <div className="border border-gray-400 text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Jobs & Work</h3>
            <img src={workIcon} alt="Work Icon" className="border border-red-400 w-26 h-26 mx-auto mb-[-39px] mt-[-19px]" />
            <h2 className="text-sm font-bold text-gray-800 mb-4">Start Your Career Journey in New Zealand</h2>
            <p className="text-gray-600">Start Your Career Journey in New Zealand:Get guidance on where to find jobs, how to write a local-style CV, and prepare for interviews. Learn about work visas, employment rights, and the workplace culture in New Zealand. Whether you’re looking for full-time work, part-time roles, or internships — we’ve got you covered.</p>
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