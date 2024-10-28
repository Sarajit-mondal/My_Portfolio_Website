function Skills() {
  const mySkills = [
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

  return (
    <section className="py-12 bg-gray-100">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {mySkills.map((skill, index) => (
            <div
              key={index}
              className=" p-4 bg-white rounded-lg  transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/50"
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
}

export default Skills;
