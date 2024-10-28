import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left ">
      <button
        type="button"
        className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        Social Media
        {isOpen ? (
          <RiArrowDropUpLine className="text-xl ml-1 transition-transform duration-300" />
        ) : (
          <RiArrowDropDownLine className="text-xl ml-1 transition-transform duration-300" />
        )}
      </button>

      {isOpen && (
        <div
          onClick={toggleDropdown}
          className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 animate-fade-in"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1 space-y-1" role="none">
            <a
              href="https://www.linkedin.com/in/sarajit-mandal"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-500" /> LinkedIn
            </a>
            <a
              href="https://github.com/Sarajit-mondal"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-900" />
              GitHub
            </a>
            <a
              href="https://www.facebook.com/sarajit.mondal.777"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600" />
              Facebook
            </a>
          </div>
        </div>
      )}

      <style>{`
        /* Animation for dropdown fade-in */
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
          opacity: 0;
          transform: translateY(-10px);
        }

        @keyframes fade-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DropdownButton;
