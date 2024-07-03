const projects = [
  {
    title: "Medical Camp Management System (MCMS)",
    type: "Full-Stack",
    imagelink:
      "https://img.freepik.com/free-photo/mature-medical-physician-explaining-treatment-nurses-healthcare-seminar-pointing-digital-monitor-clinic-herapist-discussing-with-colleagues-about-disease-medicine-professional_482257-5969.jpg?t=st=1718979494~exp=1718983094~hmac=6d3036da0e8d9724d9b53d853344c8c8698df0c6d78fc1508e70028cb4d5a091&w=826",
    features:
      "Stripe Payment, Admin and user panel, Advanced Sorting and Searching, Advanced Filtering ,Seamless Pagination, Camp booking and User-Friendly Interface",
    tools: "git & Github, npm, vercel, firebase, visual Studio Code.",
    description:
      "The ultimate solution for organizing and managing medical camps efficiently and effectively. Designed with the needs of healthcare providers in mind, MCMS offers a comprehensive suite of features that streamline operations, improve patient care, and enhance overall camp management.",
    Clintlink:
      "https://github.com/Sarajit-mondal/Assignment-12-Medical-Camp-Management-System-MCMS--client-site",
    serverlink:
      "https://github.com/Sarajit-mondal/Assignment-12-Medical-Camp-Management-System-MCMS-server-site",
    livelink: "https://carecamp-organizer.web.app",
  },
  {
    title: "Peaceful Hotel (Hotel Booking Website)",
    type: "Full-Stack",
    imagelink:
      "https://img.freepik.com/free-vector/flat-hotel-landing-page-template-with-illustrations_23-2148904513.jpg?t=st=1718979643~exp=1718983243~hmac=2b69ec1bd6db96c6258d6d1277932d5728c4b30c2a324e986760eedead63244b&w=740",
    features:
      " Advanced Filtering , Map, room booking and cancel condition, Seamless Pagination, Camp booking and User-Friendly Interface",
    tools: "git & Github, npm, vercel, firebase, visual Studio Code.",
    description:
      "Discover the perfect place to stay with StayFinder, your go-to platform for seamless hotel bookings. Whether you're planning a luxurious getaway, a business trip, or a budget-friendly vacation, StayFinder offers an extensive selection of hotels to meet all your needs.",
    Clintlink: "https://github.com/Sarajit-mondal/Assignment-11-Hotel-Booking",
    serverlink:
      "https://github.com/Sarajit-mondal/Assignment-11-Hotel-Booking-Server",
    livelink: "https://hotel-booking-c0e42.web.app",
  },
  {
    title: "Draw-Print-Dream (Print-selling-Website)",
    type: "Full-Stack",
    imagelink:
      "https://img.freepik.com/free-vector/skech-hand-holding-pen-isolated-white-background-with-urban-city-skyline-vector-illustration_460848-15646.jpg?t=st=1718980193~exp=1718983793~hmac=6146b5f6e6c381d1f8a835d8c29212cebe19e55d41dd3e222b0bf105639be230&w=740",
    features: "Authentication, Filtering,High-Quality Prints,Sorting",
    tools: "git & Github, npm, firebase, visual Studio Code.",
    description:
      "Unleash your creativity and adorn your spaces with stunning artwork from Artify, the ultimate platform for buying and selling original drawings and prints.",
    Clintlink:
      "https://github.com/Sarajit-mondal/Assignment-10-Draw_Print_Client_site",
    serverlink:
      "https://github.com/Sarajit-mondal/Assignment-10-Draw_Print_Client_site",
    livelink: "https://draw-print-dream.web.app",
  },
  {
    title: "Medical Camp Management System (MCMS)",
    type: "Full-Stack",
    imagelink:
      "https://img.freepik.com/free-photo/mature-medical-physician-explaining-treatment-nurses-healthcare-seminar-pointing-digital-monitor-clinic-herapist-discussing-with-colleagues-about-disease-medicine-professional_482257-5969.jpg?t=st=1718979494~exp=1718983094~hmac=6d3036da0e8d9724d9b53d853344c8c8698df0c6d78fc1508e70028cb4d5a091&w=826",
    features:
      "Stripe Payment, Admin and user panel, Advanced Sorting and Searching, Advanced Filtering ,Seamless Pagination, Camp booking and User-Friendly Interface",
    tools: "git & Github, npm, vercel, firebase, visual Studio Code.",
    description:
      "The ultimate solution for organizing and managing medical camps efficiently and effectively. Designed with the needs of healthcare providers in mind, MCMS offers a comprehensive suite of features that streamline operations, improve patient care, and enhance overall camp management.",
    Clintlink:
      "https://github.com/Sarajit-mondal/Assignment-12-Medical-Camp-Management-System-MCMS--client-site",
    serverlink:
      "https://github.com/Sarajit-mondal/Assignment-12-Medical-Camp-Management-System-MCMS-server-site",
    livelink: "https://carecamp-organizer.web.app",
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
              className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer hover:bg-gray-900 hover:text-white ease-linear duration-500 space-y-2"
            >
              <div className="flex gap-3 items-center">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="border-2 px-1 font-bold text-blue-500">
                  {project.type}
                </p>
              </div>
              {/* links */}
              <div className=" mt-3 flex justify-center gap-5 [&>a]:border-2 [&>a]:px-1 ">
                <a
                  href={project.Clintlink}
                  target="blank"
                  className="active:scale-95 ease-linear duration-300 hover:text-blue-500 hover:font-bold"
                >
                  GitHub Client{" "}
                </a>
                <a href={project.serverlink} target="blank">
                  GitHub Server{" "}
                </a>
                <a href={project.livelink} target="blank">
                  Live
                </a>
              </div>
              {/* image */}
              <img
                src={project.imagelink}
                alt=""
                className="md:h-72 my-3 w-full"
              />
              {/* key features */}
              <div>
                <p className="font-bold text-left">
                  Key Features :{" "}
                  <span className="font-normal">{project.features}</span>{" "}
                </p>
              </div>
              {/* Tools used */}
              <div className="flex gap-2">
                <p className="font-bold text-left">
                  Tools used :{" "}
                  <span className="font-normal">{project.tools}</span>{" "}
                </p>
              </div>
              <p className="text-justify">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
