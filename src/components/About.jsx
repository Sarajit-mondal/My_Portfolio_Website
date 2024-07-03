import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
        <div className="my-5">
          <h3 className="text-xl font-bold mb-2">
            Sarajit Mondal - Web Developer
          </h3>
          <p className=" max-w-2xl mx-auto text-justify">
            I am a passionate web developer with a knack for creating elegant
            and responsive web applications. My journey in web development
            started with curiosity and grew into a full-fledged career. I thrive
            on the challenges of translating complex problems into user-friendly
            digital solutions. With a strong foundation in HTML, CSS,
            JavaScript, and modern frameworks like React and Next.js, I am
            dedicated to continuous learning and improvement. I enjoy
            collaborating with teams and contributing to meaningful projects
            that make a difference. My goal is to leverage my skills to build
            innovative web applications that enhance user experiences and drive
            business success. I am eager to take on new challenges and continue
            growing as a developer in the ever-evolving tech landscape.
          </p>
        </div>
        {/* social media */}
        <div className="flex justify-center mt-5 gap-5 [&>a]:bg-gray-400 [&>a]:p-2 [&>a]:rounded-full [&>a]:cursor-pointer">
          <a href="https://github.com/Sarajit-mondal" target="blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sarajit-mandal" target="blank">
            <FaLinkedin className="text-blue-600" />
          </a>
          <a href="https://www.facebook.com/sarajit.mondal.777" target="blank">
            <FaFacebook className="text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
