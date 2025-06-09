import portfolioImage from "../assets/portfolio-img.png";    // Import Netflix Clone image
import simonImage from "../assets/Simon-Game.png";           
import drumImage from "../assets/drumkit.png";            // Import URL Shortener image
import myContactImage from "../assets/mycontact.png";          // Import MyContact image
import diceImage from "../assets/dice.png";            // Import Hotel Management System image
import sihImage from "../assets/sih.png";          // Import Camp Booking System image
import todoImage from "../assets/todo.png";          // Import To Do App using Django image

const projects = [
  {
    id: 1,
    name: "Portfolio",
    technologies: "React, Tailwind CSS",
    image: portfolioImage,
    github: "https://github.com/samriddhi122/portfolio-react",
  },
  {
    id: 2,
    name: "Campus Stories",
    technologies: "Express.js, MongoDB,Node.js",
    image: todoImage,
    github: "https://github.com/samriddhi122/miniMedium/commits/main/",
  },
  {
    id: 3,
    name: "MyContact Frontend",
    technologies: "React, Tailwind CSS",
    image: "myContactImage",
    github: "https://github.com/samriddhi122/mycontacts_frontend",
  },
  {
    id: 4,
    name: "Simon Game",
    technologies: "JavaScript, HTML, Css",
    image: simonImage,
    github: "https://github.com/samriddhi122/simonGame",
  },
  {
    id: 5,
    name: " INFERNO GUARD",
    technologies: " Next.js, TypeScript, Node.js, Firebase, Gmail API, Google Maps API",
    image: "",
    github: "https://github.com/Ryadav0654/prayatna2.0/commits?author=samriddhi122",
  },
  {
    id: 6,
    name: "Sansthaein Aur Samvidhan",
    technologies: "Node.js,Express.js,MongoDB",
    image: sihImage,
    github: "https://github.com/samriddhi122/sihbackend",
  },
  {
    id: 7,
    name: "Drumkit",
    technologies: "CSS,HTML",
    image: drumImage,
    github: "https://github.com/samriddhi122/Drumkit",
  },
  {
    id: 8,
    name: "Dice Game",
    technologies: "JavaScript, HTML, Css",
    image: diceImage,
    github: "https://github.com/samriddhi122/MydiceGame",
  },
];

const Projects = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img 
                src={project.image} 
                alt={project.name} 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.technologies}</p>
              <a 
                href={project.github} 
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
