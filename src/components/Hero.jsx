import { useState } from "react";
import TypewriterEffect from "./TypewriterEffect";
import resume from "../assets/resume.pdf";
import CV from "../assets/CV.pdf";
import { FaDownload } from "react-icons/fa";
const Hero = () => {
  const myName = "I  am Sarajit Mandal";
  const [textLenght, setTextLength] = useState(0);

  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-6  rounded-lg shadow-lg">
          <div className="mx-auto size-44  relative ">
            <img
              src="https://i.ibb.co/SQj7HTc/profile-pic-4.png"
              alt="Profile"
              className="mx-auto rounded-full mb-4 z-20 absolute"
            />
            <div className=" size-44 z-30 border-8 border-b-blue-500 border-t-cyan-500 shadow-xl animate-spin shadow-blue-500/50 rounded-full"></div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hello,{" "}
              <TypewriterEffect
                setTextLength={setTextLength}
                text={myName}
                speed={500}
              />
              {textLenght + 1 === myName.length ? "." : "|"}
            </h1>
            <p className="mt-4 text-xl max-w-xl mx-auto">
              I am a passionate Web Developer with a strong focus on creating
              dynamic and responsive web applications.
            </p>
          </div>
          <div className=" mt-5 flex justify-center space-x-4">
            <a
              href={resume}
              download="Sarajit_Mandal_Resume.pdf"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 flex items-center gap-2 font-bold"
            >
              My Resume <FaDownload />
            </a>
            <a
              href={CV}
              download="Sarajit_Mandal_CV.pdf"
              className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-700 transition duration-300 flex items-center gap-2 font-bold"
            >
              My CV <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
