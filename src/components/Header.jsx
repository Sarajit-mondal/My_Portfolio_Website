import { useState } from "react";
import TypewriterEffect from "./TypewriterEffect";

const Header = () => {
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
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="hover:text-blue-400 transition">
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
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-white font-bold transition bg-blue-500 py-1 px-3 rounded-2xl"
            >
              Hire me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
