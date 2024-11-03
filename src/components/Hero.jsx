import { useState } from "react";
import TypewriterEffect from "./TypewriterEffect";
import resumeOfSarajit from "../assets/resumeOfSarajit.pdf";
import CV from "../assets/CV.pdf";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const myName = "I am Sarajit Mandal";
  const [textLength, setTextLength] = useState(0);

  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col items-center text-center md:text-left p-6">
          <div className="mx-auto size-44  relative ">
            <img
              src="https://i.ibb.co/SQj7HTc/profile-pic-4.png"
              alt="Profile"
              className="mx-auto rounded-full mb-4 z-20 absolute"
            />
            <div className=" size-44 z-30 border-8 border-b-blue-500 border-t-cyan-500 shadow-xl animate-spin shadow-blue-500/50 rounded-full"></div>
          </div>
          <h1 className="text-3xl md:text-4xl mt-4 text-center font-bold mb-2">
            Hello,{" "}
            <TypewriterEffect
              setTextLength={setTextLength}
              text={myName}
              speed={100}
            />
            {textLength + 1 === myName.length ? "." : "|"}
          </h1>
          <p className="mt-4 text-xl max-w-md text-center">
            I am a passionate Web Developer with a strong focus on creating
            dynamic and responsive web applications.
          </p>
          <div className="mt-5 flex space-x-4">
            <a
              href={resumeOfSarajit}
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

        {/* Right Section (Video CV) */}
        <div className="md:w-1/2 flex justify-center py-2 px-3">
          <video controls className="w-full max-w-md rounded-lg shadow-lg">
            <source src="/path/to/your/video-cv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
