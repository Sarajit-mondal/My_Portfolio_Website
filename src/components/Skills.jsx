// import { SkillsLabel } from "../utility/SkillsLabel";

// const skills = [
//   {
//     technology: "HTHL",
//     label: 95,
//   },
//   {
//     technology: "CSS",
//     label: 92,
//   },
//   {
//     technology: "JavaScript",
//     label: 85,
//   },
//   {
//     technology: "React",
//     label: 85,
//   },
//   {
//     technology: "Tailwind CSS",
//     label: 90,
//   },
//   {
//     technology: "Next js",
//     label: 70,
//   },
//   {
//     technology: "Node js",
//     label: 65,
//   },
//   {
//     technology: "Express js",
//     label: 60,
//   },
//   {
//     technology: "Mongodb",
//     label: 55,
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="bg-gray-900 text-white p-8">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
//         <div className=" text-left">
//           {skills &&
//             skills.map((skill) => (
//               <div
//                 key={skill.label}
//                 className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700 transition"
//               >
//                 <h1> {skill.technology}</h1>
//                 {/* skill line */}
//                 <div className="flex justify-between gap-5 items-center ">
//                   <div className={`relative w-full`}>
//                     <hr className="bg-gray-400 border-0 h-2 rounded-3xl " />
//                     <hr
//                       className={`skill absolute bg-blue-500 border-0 h-2 rounded-3xl top-2/4 -translate-y-2/4 ease-linear duration-200 `}
//                       style={{ width: SkillsLabel(skill.label) + "%" }}
//                     />
//                   </div>
//                   <p>{SkillsLabel(skill.label)}%</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

//  <img src="https://skillicons.dev/icons?i=react,bootstrap,mui,html,css,vscode,github,figma,tailwind,git" />
//     <img src="https://skillicons.dev/icons?i=nodejs,javascript,typescript,express,firebase,mongodb,nextjs" /><br></br>

const skills = [
  {
    technology: "HTHL",
    label: 95,
    icon: "html",
  },
  {
    technology: "CSS",
    label: 92,
    icon: "css",
  },
  {
    technology: "JavaScript",
    label: 85,
    icon: "javascript",
  },
  {
    technology: "React",
    label: 85,
    icon: "react",
  },
  {
    technology: "Tailwind CSS",
    label: 90,
    icon: "tailwind",
  },
  {
    technology: "Next js",
    label: 70,
    icon: "nextjs",
  },
  {
    technology: "Node js",
    label: 65,
    icon: "nodejs",
  },
  {
    technology: "Express js",
    label: 60,
    icon: "expressjs",
  },
  {
    technology: "Mongodb",
    label: 55,
    icon: "mongodb",
  },
];

const Skills = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className=" p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center cursor-pointer hover:ml-12 hover:ease-linear hover:duration-300">
                <div className="flex-shrink-0">
                  <img src={`https://skillicons.dev/icons?i=${skill.icon}`} />
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
};

export default Skills;
