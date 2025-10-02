import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <span className="text-pink-500 font-medium text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities to apply my skills and grow as a developer.
          </p>
          <p className="text-pink-500 font-semibold mt-4">
            Available: May 2026 - April 2027
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          
          <a
            href="mailto:nicoleleeyuxuan@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-all"
          >
            <Mail size={20} />
            <span>Send Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/lee-yu-xuan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-pink-500 hover:text-pink-500 transition-all"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/buttoboo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-gray-900 hover:text-gray-900 transition-all"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;