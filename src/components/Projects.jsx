const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-600 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
