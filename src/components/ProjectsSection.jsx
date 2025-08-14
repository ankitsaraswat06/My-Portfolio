import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Wanderlust – Rental Listing Platform",
    description: "A full-stack Airbnb-inspired web application where users can list, browse, and book stays. Features authentication, image uploads, and responsive design.",
    image: "/projects/project1.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "MERN", "Cloudinary"],
    demoUrl: "https://wanderlust-hzkh.onrender.com/listings",
    githubUrl: "https://github.com/ankitsaraswat06/WanderLust-fullstack-app",
  },
  {
    id: 2,
    title: "SkinVision: Intelligent Skin Disease Classifier",
    description:
      "A machine learning-powered web app that classifies skin diseases from images using CNNs, provides predictions, and stores feedback for model improvement.",
    image: "/projects/project2.png",
    tags:  ["Python", "TensorFlow", "Flask", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A React-based weather application that fetches real-time weather data using a public Weather API, showing temperature, humidity, and conditions based on city input.",
    image: "/projects/project3.png",
    tags: ["React", "Weather API", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ankitsaraswat06"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};