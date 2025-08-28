import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Navigation() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const closeTimerRef = useRef(null);
    const menuRef = useRef(null);

    const openDropdown = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        setDropdownOpen(true);
    };

    const closeDropdownWithDelay = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
        }
        closeTimerRef.current = setTimeout(() => {
            setDropdownOpen(false);
            closeTimerRef.current = null;
        }, 300);
    };

    useEffect(() => {
        if (!dropdownOpen) return;

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [dropdownOpen]);

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">NZ Newcomer Guide</h1>
                <div className="flex space-x-4 items-center">
                    <Link to="/arrival" className="text-gray-700 hover:text-blue-600 transition-colors">Arrival</Link>
                    <Link to="/living" className="text-gray-700 hover:text-blue-600 transition-colors">Living</Link>
                    {/* Education Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={openDropdown}
                        ref={menuRef}
                    >
                        <button
                            className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none flex items-center"
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen}
                            type="button"
                            onFocus={openDropdown}
                            onClick={() => setDropdownOpen((prev) => !prev)}
                        >
                            Education
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {dropdownOpen && (
                            <div 
                                className="absolute left-0 top-full w-40 bg-white border border-gray-200 rounded shadow-lg z-50"
                                onMouseEnter={openDropdown}
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