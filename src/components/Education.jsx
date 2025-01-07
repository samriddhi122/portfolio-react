import UcfImage from '../assets/Ucf.png'; // Import the UCF image
import JntuImage from '../assets/jntu.png'; // Import the JNTU image

const education = [
  {
    institution: "Institution of Engineering and Technology DAVV Indore",
    degree: "Bachelor of Engineering in Information Technology",
    duration: "Graduated: June 2027",
    image: UcfImage
  },
  {
    institution: "Jawahar Navodaya Vidyalaya,Bhopal",
    duration: "Graduated: June 2022",
    image: JntuImage
  },
];

const Education = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex items-center space-x-6"
            >
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  {edu.institution}
                </h3>
                <p className="mt-2 text-lg">{edu.degree}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{edu.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;