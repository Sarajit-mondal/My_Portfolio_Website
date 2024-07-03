import { useState } from "react";
import TypewriterEffect from "./TypewriterEffect";
import DropdownButton from "./dropdown/DropDown";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [textLenght, setTextLength] = useState(0);
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <TypewriterEffect
            setTextLength={setTextLength}
            text="Saarajit Mandal"
            speed={100}
          ></TypewriterEffect>
        </div>
        <ul className="hidden md:flex space-x-4 ">
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
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
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Hire me
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
