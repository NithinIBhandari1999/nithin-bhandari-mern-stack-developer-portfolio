import React from 'react';
import { MapPin, Mail, Github, Linkedin, Phone, Code, Server, Database, Box } from 'lucide-react';

const TechIcon = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="flex flex-col items-center">
    <Icon size={24} className="text-blue-500 mb-1" />
    <span className="text-xs">{label}</span>
  </div>
);

const HeroSection = () => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <img src="/NithinIBhandari1999.png" alt="Nithin I Bhandari" className="rounded-full border-4 border-white shadow-2xl w-56 h-56 object-cover transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4 leading-tight">Nithin I Bhandari</h1>
          <p className="text-2xl mb-6 text-blue-200">MERN Stack Developer | API Specialist | Full-Stack Problem Solver</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <TechIcon icon={Server} label="Express" />
            <TechIcon icon={Database} label="MongoDB" />
            <TechIcon icon={Code} label="React" />
            <TechIcon icon={Code} label="Next.js" />
            <TechIcon icon={Box} label="Docker" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="/resume_nithin_i_bhandari_1999.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 shadow-lg">
              View Resume
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactSection = () => (
  <div className="bg-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6">
        <a href="mailto:nithinibhandari2017@gmail.com" className="flex items-center text-gray-600 hover:text-blue-500 transition duration-300">
          <Mail className="mr-2" size={20} /> nithinibhandari2017@gmail.com
        </a>
        <a href="tel:+918073436659" className="flex items-center text-gray-600 hover:text-blue-500 transition duration-300">
          <Phone className="mr-2" size={20} /> (91) 8073436659
        </a>
        <a href="https://www.linkedin.com/in/nithinibhandari1999" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-500 transition duration-300">
          <Linkedin className="mr-2" size={20} /> LinkedIn
        </a>
        <a href="https://github.com/NithinIBhandari1999/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-500 transition duration-300">
          <Github className="mr-2" size={20} /> GitHub
        </a>
        <span className="flex items-center text-gray-600">
          <MapPin className="mr-2" size={20} /> Bengaluru
        </span>
      </div>
    </div>
  </div>
);

const OverallExperienceSection = () => (
  <div className="py-20 lg:px-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600">Overall Experience</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-700 mb-6">
          With over 3 years of experience in software development, I have honed my skills in the MERN stack and beyond. My journey has involved:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Developing and deploying full-stack web applications using React, Next.js, Node.js, and Express.</li>
          <li>Designing and implementing robust database solutions with MongoDB, including complex aggregation pipelines.</li>
          <li>Containerizing applications using Docker for consistent development and deployment environments.</li>
          <li>Integrating third-party APIs and services, including payment gateways and cloud storage solutions.</li>
          <li>Implementing real-time features using WebSockets and Firebase.</li>
          <li>Optimizing application performance and ensuring scalability.</li>
          <li>Leading migration projects from legacy systems to modern tech stacks (MERN Stack).</li>
          <li>Mentoring junior developers and managing code reviews.</li>
        </ul>
        <p className="text-gray-700">
          My experience spans across various projects, where I've contributed to different stages of the software development lifecycle, from conceptualization to deployment and maintenance.
        </p>
      </div>
    </div>
  </div>
);

const SkillsSection = () => (
  <div className="bg-gray-100 py-20 lg:px-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600">Skills & Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[
          'React.js',
          'Node.js',
          'Express.js',
          'MongoDB',
          'Next.js',
          'TypeScript',
          'AWS',
          'Docker',
        ].map((skill, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-blue-600">{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceSection = () => (
  <div className="py-20 lg:px-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600">Professional Experience</h2>
      <div className="space-y-12">
        {[
          {
            company: "Ripple Mind Private Limited",
            role: "MERN Stack Developer",
            period: "JUNE 2023 - PRESENT",
            achievements: [
              "Developed full-stack web applications using Next.js, React, MongoDB, and Express",
              "Led PHP to MERN stack migration project",
              "Engineered high-performance bidding algorithm",
              "Managed code deployments and database backups",
              "Mentored junior developers and managed pull requests"
            ]
          },
          {
            company: "Edufu",
            role: "MERN Stack Developer",
            period: "January 2021 - JUNE 2023",
            achievements: [
              "Built robust web applications with Next.js, React, MongoDB, Express, Firebase, and AWS",
              "Implemented user authentication with sub-user access using Redux",
              "Developed flexible APIs using MongoDB's Aggregate functions",
              "Integrated video/image upload features with AWS S3 and Lambda",
              "Implemented real-time chat functionality using Firebase and MongoDB",
              "Integrated payment gateway (Cashfree) and invoice generation (Puppeteer)"
            ]
          }
        ].map((job, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-6">
              <h3 className="text-2xl font-bold">{job.company}</h3>
              <p className="text-lg">{job.role}</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{job.period}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => (
  <div className="bg-gray-100 py-20 lg:px-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Local Shop Search",
            description: "A web application for finding products in nearby shops, built with React, Express, MongoDB, and Leaflet JS.",
            image: "/projects/localshopsearch_search.png",
            link: "https://local-shop-search.netlify.app/search/",
            github: "https://github.com/NithinIBhandari1999/localshopsearch_client"
          },
          {
            title: "City Classified Ads",
            description: "A platform for posting and searching classified ads in cities.",
            image: "/projects/city_classified_ads_homepage_crop.png",
            link: "/project/city_classified_ads_by_mern_stack/"
          },
          {
            title: "Password Manager Offline",
            description: "A secure, offline password manager application.",
            image: "/projects/PasswordManagerOffline.png",
            link: "https://nibpasswordmanager.netlify.app/"
          }
        ].map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
            <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex space-x-2">
                <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300" href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                {project.github && (
                  <a className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full transition duration-300" href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="inline mr-2" size={16} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EducationSection = () => (
  <div className="py-20 lg:px-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600">Education</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-blue-600 mb-2">SRN Adarsh College, Bengaluru</h3>
        <p className="text-gray-600 mb-2">Bachelor of Computer Applications (BCA)</p>
        <p className="text-gray-600 mb-4">DEC 2017 - AUG 2021</p>
        <p className="text-gray-700">Studied various programming languages and technologies including C, C++, Java, Visual Basic, and Microprocessor 8085.</p>
      </div>
    </div>
  </div>
);

const CertificationsSection = () => (
  <div className="bg-gray-100 py-20 lg:px-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Next.js & React - The Complete Guide</h3>
          <p className="text-gray-700">
            By Maximilian Schwarzmüller
            <a href="https://www.udemy.com/certificate/UC-5bbeeb2e-510a-4ebc-ab1c-7afeeeb72b62/" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Elasticsearch 7 and the Elastic Stack</h3>
          <p className="text-gray-700">
            By Frank Kane
            <a href="https://www.udemy.com/certificate/UC-f297cc6f-c64a-4d96-b45d-4a1079ea544c/" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-blue-600 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 Nithin I Bhandari. All rights reserved.</p>
        <p>Last updated: September 2nd, 2024</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/NithinIBhandari1999" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nithinibhandari1999" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const Portfolio = () => {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <OverallExperienceSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
};

export default Portfolio;