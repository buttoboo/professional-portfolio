import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => (
  <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto bg-pink-500 rounded-full flex items-center justify-center mb-6">
          <span className="text-5xl">👋</span>
        </div>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
        Hi, I'm Yu Xuan
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-600 mb-4">
        Software Engineering Student
      </p>
      
      <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
        I build clean, functional applications with thoughtful design and solid engineering.
        <br />
        <span className="text-pink-500 font-medium">Available for internship May 2026 - April 2027</span>
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        <a href="https://github.com/buttoboo" target="_blank" rel="noopener noreferrer" 
           className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all">
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/lee-yu-xuan/" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-all">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:nicoleleeyuxuan@gmail.com"
           className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-pink-500 hover:text-pink-500 transition-all">
          <Mail size={20} />
          <span>Email</span>
        </a>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="text-gray-400 hover:text-pink-500 transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </button>
    </div>
  </section>
);

export default HeroSection;