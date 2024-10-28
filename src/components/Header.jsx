import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import TypewriterEffect from "./TypewriterEffect";
import DropdownButton from "./dropdown/DropDown";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [textLength, setTextLength] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Updated header styles with `sticky` and `top-4` for top margin
    <div className="sticky py-2 top-0 bg-white z-50">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <TypewriterEffect
              setTextLength={setTextLength}
              text="Sarajit Mandal"
              speed={100}
            />
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-4 items-center">
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-400 transition">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
            <li>
              <DropdownButton />
            </li>
            <li>
              <a href="#contact">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Hire me
                </button>
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-0 w-3/4 bg-gray-800 text-white py-6 rounded-lg shadow-lg md:hidden">
              <ul className="flex flex-col space-y-4 text-center">
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-400 transition"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-blue-400 transition"
                    onClick={toggleMenu}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-blue-400 transition"
                    onClick={toggleMenu}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="hover:text-blue-400 transition"
                    onClick={toggleMenu}
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition"
                    onClick={toggleMenu}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <DropdownButton />
                </li>
                <li>
                  <a href="#contact">
                    <button
                      type="button"
                      className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={toggleMenu}
                    >
                      Hire me
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
