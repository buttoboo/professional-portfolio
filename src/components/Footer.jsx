import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">LY</span>
          </div>
          <div>
            <p className="font-semibold">Lee Yu Xuan</p>
            <p className="text-gray-400 text-sm">Software Engineer</p>
          </div>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/buttoboo" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/lee-yu-xuan/" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:nicoleleeyuxuan@gmail.com"
             className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>© 2025 Lee Yu Xuan. Built with React & Tailwind CSS</p>
      </div>
    </div>
  </footer>
);

export default Footer;