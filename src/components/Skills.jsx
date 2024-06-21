import { SkillsLabel } from "../utility/SkillsLabel";

const skills = [
  {
    technology: "HTHL",
    label: 95,
  },
  {
    technology: "CSS",
    label: 92,
  },
  {
    technology: "JavaScript",
    label: 85,
  },
  {
    technology: "React",
    label: 85,
  },
  {
    technology: "Tailwind CSS",
    label: 90,
  },
  {
    technology: "Next js",
    label: 70,
  },
  {
    technology: "Node js",
    label: 65,
  },
  {
    technology: "Express js",
    label: 60,
  },
  {
    technology: "Mongodb",
    label: 55,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <div className=" text-left">
          {skills &&
            skills.map((skill) => (
              <div
                key={skill.label}
                className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700 transition"
              >
                <h1> {skill.technology}</h1>
                {/* skill line */}
                <div className="flex justify-between gap-5 items-center ">
                  <div className="relative w-full">
                    <hr className="bg-gray-400 border-0 h-2 rounded-3xl " />
                    <hr
                      className={`absolute bg-blue-500 border-0 h-2 rounded-3xl top-2/4 -translate-y-2/4 ease-linear duration-200`}
                      style={{ width: SkillsLabel(skill.label) + "%" }}
                    />
                  </div>
                  <p>{SkillsLabel(skill.label)}%</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
