import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const MobileSolutionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Parent Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-2 text-white bg-blue-700 rounded-lg"
      >
        Solutions
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* Dropdown (Takes Space Instead of Absolute) */}
      {isOpen && (
        <div className="mt-2  text-white  px-10 py-2 space-y-2">
          <a href="#" className="block p-2 hover:underline">AnyCaaS</a>
          <a href="#" className="block p-2 hover:underline">AnyBaaS</a>
          <a href="#" className="block p-2 hover:underline">AnyPaaS</a>
        </div>
      )}
    </div>
  );
};

export default MobileSolutionsDropdown;
