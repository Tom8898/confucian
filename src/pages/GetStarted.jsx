import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function GetStarted() {
  useEffect(() => {
    document.title = 'Get Started - NZ Newcomer Guide';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-blue-50 flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to New Zealand 🇳🇿
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Let&apos;s set up your new life step by step.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            to="/arrival"
            className="block w-full py-4 px-6 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Start with Arrival Essentials
          </Link>
          <Link
            to="/education"
            className="block w-full py-4 px-6 bg-white text-gray-800 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 shadow hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            I Have Kids
          </Link>
          <Link
            to="/work"
            className="block w-full py-4 px-6 bg-white text-gray-800 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 shadow hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            I&apos;m Looking for Work
          </Link>
          <Link
            to="/"
            className="block w-full py-4 px-6 bg-gray-100 text-gray-700 text-lg font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Just Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
