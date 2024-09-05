import { MapPin, Mail, Github, Linkedin, Phone, Code, Server, Database, Box } from 'lucide-react';

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

export default Footer;