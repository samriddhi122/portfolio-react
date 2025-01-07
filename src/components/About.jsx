import { useRef, useState, useEffect } from 'react';
import LinkedInImage from '../assets/linkedin.png';
import GitHubImage from '../assets/github.png';
import MailImage from '../assets/mail.png';
import ResumePDF from '../assets/Resume_Samriddhi.pdf';
import LeetCodeImage from '../assets/LeetCode.png';
import GeeksforGeeksImage from '../assets/gfg.png';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 transform transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col items-center md:space-x-12">
          <div className="flex-1">
            <p className="text-lg mb-8">
            Samriddhi | Second Year | Institute of Engineering and Technology
 * Full-Stack Developer with a strong foundation in C++ and Data Structures & Algorithms.
 * Passionate about problem-solving, software development, and building innovative web applications.
 * Proficient in core web development concepts and actively learning the MERN stack (MongoDB, Express.js, React, Node.js).
 * Seeking an internship to gain practical experience, contribute to real-world projects, and accelerate my growth in the tech industry.
 * Enthusiastic learner with a keen interest in exploring new technologies and staying updated with industry trends.
 * Outside of coding: I enjoy reading thought-provoking books and expressing my creativity through writing. </p>
            <div className="flex justify-center items-center space-x-6 my-8">
              <a 
                href="https://www.linkedin.com/in/samriddhi-sahu-a14273298/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={LinkedInImage} 
                  alt="LinkedIn" 
                  className="w-10 h-10" // Adjusted width and height
                />
              </a>
              <a 
                href="https://github.com/samriddhi122" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={GitHubImage} 
                  alt="GitHub" 
                  className="w-10 h-10 filter brightness-100 dark:brightness-100" // Adjusted width and height
                />
              </a>
              <a 
                href="mailto:sahusamriddhi5@gmail.com"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={MailImage} 
                  alt="Email" 
                  className="w-10 h-10" // Adjusted width and height
                />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/sahusamrg2r7/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={GeeksforGeeksImage} 
                  alt="GeeksforGeeks" 
                  className="w-10 h-10" // Adjusted width and height
                />
              </a>
              <a 
                href="https://leetcode.com/u/sahusamriddhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={LeetCodeImage} 
                  alt="LeetCode" 
                  className="w-10 h-10" // Adjusted width and height
                />
              </a>
              <a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
