import { useState, useEffect } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import DropdownMenu from "./Desktopbar/DropdownMenu.jsx";
import LanguageDropdown from "./Desktopbar/LanguageDropdown.jsx";
import MobileSolutionsDropdown from "./MobileNavbar/MobileSolutionsDropdown.jsx";
import MobileLanguageDropdown from "./MobileNavbar/MobileLanguageDropdown.jsx";
import logo from "../../Assets/logo/logo.jpg";
import logoBlue from "../../Assets/logo/logo-blue.svg";

const Navbar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY) {
        // If scrolling down, hide navbar
        setIsVisible(false);
      } else {
        // If scrolling up, show navbar
        setIsVisible(true);
      }

      // Change navbar styles when scrolled
      setIsScrolled(scrollY > 50);

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-1000 
      ${isScrolled ? "bg-white shadow-md text-sky-600" : "bg-transparent text-white"} 
      ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="xl:w-3/5 sm:w-4/5 w-4/5 mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
          <a href="/"><img src={isScrolled ? logoBlue : logo} alt="logo" /></a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <DropdownMenu />
          <a href="#" className="hover:border-b-2 p-4 px-6 border-blue-500">Services</a>
          <a href="/about" className="hover:border-b-2 p-4 px-6 border-blue-500">About Us</a>
          <LanguageDropdown />
        </div>

        {/* Contact Us Button */}
        <a
          href="#"
          className={`hidden lg:flex px-5 py-3 font-bold text-lg border ${isScrolled ? "bg-[#fe8b53] text-white rounded-sm border-[#fe8b53] shadow-2xl hover:shadow-2xl" : "border-white text-white hover:bg-white hover:shadow-2xl hover:text-sky-600"
            } transition-all duration-300`}
        >
          Contact Us →
        </a>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className={`lg:hidden bg-blue-700 text-white p-4 transition-all duration-300`}>
          <MobileSolutionsDropdown />
          <a href="#" className="block p-4">Services</a>
          <a href="#" className="block p-4">About Us</a>
          <div className="flex items-center justify-center">
            <MobileLanguageDropdown />
          </div>
          <a href="#" className="block p-4">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
