import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => (
    <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <p className="w-full sm:w-auto mb-2 sm:mb-0">&copy; 2023 Nithin I Bhandari. All rights reserved.</p>
                <p className="w-full sm:w-auto mb-4 sm:mb-0">Last updated: September 2nd, 2024</p>
                <div className="flex justify-center sm:justify-start space-x-4 mt-4 sm:mt-0">
                    <a href="https://github.com/NithinIBhandari1999" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/nithinibhandari1999" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;