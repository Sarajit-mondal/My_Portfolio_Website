const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Sarajit Mandal. All rights reserved.</p>
      <div className="space-x-4 mt-2">
        <a
          href="https://www.linkedin.com/in/sarajit-mandal"
          target="blank"
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Sarajit-mondal"
          target="blank"
          className="hover:text-blue-400 transition"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
