import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-lang")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative dropdown-lang my-2 ml-4">
      {/* Parent Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer text-white "
      >
        <Globe size={16} />
        EN
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Dropdown with Animation */}
      <div
        className={`absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-md border border-gray-300 transition-all duration-300 transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">English</a>
        <div className="border-t border-gray-300"></div>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Thai</a>
        <div className="border-t border-gray-300"></div>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bahasa Indonesia</a>
        <div className="border-t border-gray-300"></div>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Traditional Chinese</a>
      </div>
    </div>
  );
};

export default LanguageDropdown;
