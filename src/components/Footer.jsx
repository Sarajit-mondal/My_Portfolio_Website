import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright Text */}
        <p className="text-center md:text-left">
          &copy; 2024 Sarajit Mandal. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/sarajit-mandal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Sarajit-mondal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.facebook.com/sarajit.mondal.777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right space-y-1">
          <p>Mobile: +8801990925968</p>
          <p>Email: sarajitmandal12@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
