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
          <img
            src="https://i.ibb.co/60rtZpB/profile-pic-3.png"
            alt="Profile"
            className="mx-auto rounded-full size-40 mb-4 border-8 border-b-blue-500 border-t-cyan-500 shadow-xl shadow-blue-500/50"
          />
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
            <p className="mt-4 text-xl">Junior Web Developer</p>
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
