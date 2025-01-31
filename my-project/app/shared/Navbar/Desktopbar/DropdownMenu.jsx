import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group hover:border-b-1 p-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Parent Button */}
      <button className="relative flex items-center gap-1 text-white   cursor-pointer">
        Solutions <ChevronDown size={16} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-44 bg-white text-black rounded-md shadow-md border border-gray-300">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">AnySaaS</a>
          <div className="border-t border-gray-300"></div>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">AnyBass</a>
          <div className="border-t border-gray-300"></div>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">AnyPass</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
