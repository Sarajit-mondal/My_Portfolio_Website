/* eslint-disable no-unused-vars */
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  // eslint-disable-next-line no-unused-vars
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiRedux,
  SiSocketdotio,
  SiWebrtc,
  SiTypescript,
  SiExpress,
  SiMongoose,
} from "react-icons/si";

function Skills() {
  const mySkills = [
    {
      technology: "HTML",
      label: 95,
      icon: <FaHtml5 />,
    },
    {
      technology: "CSS",
      label: 92,
      icon: <FaCss3Alt />,
    },
    {
      technology: "JavaScript",
      label: 85,
      icon: <FaJs />,
    },
    {
      technology: "React",
      label: 85,
      icon: <FaReact />,
    },
    {
      technology: "Tailwind CSS",
      label: 90,
      icon: <SiTailwindcss />,
    },
    {
      technology: "Next.js",
      label: 70,
      icon: <SiNextdotjs />,
    },
    {
      technology: "Node.js",
      label: 65,
      icon: <FaNodeJs />,
    },
    {
      technology: "Express.js",
      label: 60,
      icon: <SiExpress />,
    },
    {
      technology: "MongoDB",
      label: 55,
      icon: <SiMongodb />,
    },
    {
      technology: "Mongoose",
      label: 60,
      icon: <SiMongoose />,
    },
    {
      technology: "Redux",
      label: 75,
      icon: <SiRedux />,
    },
    {
      technology: "Socket.io",
      label: 65,
      icon: <SiSocketdotio />,
    },
    {
      technology: "WebRTC",
      label: 50,
      icon: <SiWebrtc />,
    },
    {
      technology: "TypeScript",
      label: 70,
      icon: <SiTypescript />,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="mx-auto px-2 sm:px-4 lg:px-2">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {mySkills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/50 border-black"
            >
              <div className="flex items-center cursor-pointer hover:ml-12 hover:ease-linear hover:duration-300">
                <div className="flex-shrink-0 text-3xl text-blue-500 ">
                  {skill.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {skill.technology}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
