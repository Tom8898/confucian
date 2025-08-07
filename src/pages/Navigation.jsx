import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-white shadow">
            <div className="border border-gray-400 max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">NZ Newcomer Guide</h1>
                <div className="flex space-x-4 items-center">
                    <Link to="/arrival" className="text-gray-700 hover:text-blue-600 transition-colors">Arrival</Link>
                    <Link to="/living" className="text-gray-700 hover:text-blue-600 transition-colors">Living</Link>
                    {/* Education Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button
                            className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none flex items-center"
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen}
                            type="button"
                        >
                            Education
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {dropdownOpen && (
                            <div 
                                className="absolute left-0 top-full w-40 bg-white border border-gray-200 rounded shadow-lg z-10"
                            >
                                <Link
                                    to="/education/school"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    School
                                </Link>
                                <Link
                                    to="/education/teacher"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    Teacher
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</Link>
                </div>
            </div>
        </nav>
    );
}