import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

        <div className="my-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Sarajit Mondal - Web Developer
          </h3>
          <p className="text-lg leading-relaxed text-justify mx-auto">
            I am a passionate web developer with a knack for creating elegant
            and responsive web applications. My journey in web development
            started with curiosity and grew into a full-fledged career. I thrive
            on the challenges of translating complex problems into user-friendly
            digital solutions. With a strong foundation in HTML, CSS,
            JavaScript, and modern frameworks like React and Next.js, I am
            dedicated to continuous learning and improvement.
          </p>
          <p className="text-lg leading-relaxed text-justify mx-auto mt-4">
            I enjoy collaborating with teams and contributing to meaningful
            projects that make a difference. My goal is to leverage my skills to
            build innovative web applications that enhance user experiences and
            drive business success. I am eager to take on new challenges and
            continue growing as a developer in the ever-evolving tech landscape.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-10 space-x-6">
          <a
            href="https://github.com/Sarajit-mondal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400 transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarajit-mandal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-300 rounded-full text-blue-600 hover:bg-gray-400 transition duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/sarajit.mondal.777"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-300 rounded-full text-blue-600 hover:bg-gray-400 transition duration-300"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
