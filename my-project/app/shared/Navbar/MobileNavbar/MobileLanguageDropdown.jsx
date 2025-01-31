import { useState } from "react";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import { motion } from "framer-motion";

const MobileLanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Parent Button (Takes Dropdown Width) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-48 px-4 py-2 text-white border-1 rounded-full gap-2"
      >
        <Globe size={18} />
        English
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* Dropdown Menu (Appears Smoothly) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className=" w-48 bg-blue text-black rounded-lg shadow-md border border-gray-300 z-50"
        >
          <div className="py-2">
            {["English", "Thai", "Bahasa Indonesia", "Traditional Chinese"].map((lang, index) => (
              <div key={index}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">{lang}</a>
                {index !== 3 && <hr className="border-gray-300" />}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileLanguageDropdown;
