import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          Social Media
          {isOpen ? (
            <RiArrowDropDownLine className="text-xl" />
          ) : (
            <RiArrowDropUpLine className="text-xl" />
          )}
        </button>
      </div>
      {isOpen && (
        <div
          onClick={toggleDropdown}
          className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div
            className="py-1 [&>a]:flex [&>a]:items-center [&>a]:gap-x-1 "
            role="none"
          >
            <a
              href="https://www.linkedin.com/in/sarajit-mandal"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-500" /> LinkedIn
            </a>
            <a
              href="https://github.com/Sarajit-mondal"
              className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-red-500" />
              GitHub
            </a>
            <a
              href="https://www.facebook.com/sarajit.mondal.777"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-500" />
              Facebook
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
