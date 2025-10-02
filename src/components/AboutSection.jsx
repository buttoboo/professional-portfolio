import React from 'react';
import { Phone, Mail, Heart } from 'lucide-react';

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="text-pink-500 font-medium text-sm uppercase tracking-wider">About Me</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Nice to meet you
        </h2>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
        <div className="space-y-6 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a Year 3 Software Engineering student at Singapore Institute of Technology. 
            I focus on writing clean, maintainable code and building applications that solve real problems.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From mobile apps to web platforms, I enjoy the entire development process - from 
            understanding user needs to deploying functional solutions. I believe good software 
            is both technically solid and user-friendly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <Phone className="text-pink-500 mb-2" size={24} />
            <p className="text-xs text-gray-500 mb-1">Phone</p>
            <p className="text-gray-900 font-medium">98379330</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-xl">
            <Mail className="text-pink-500 mb-2" size={24} />
            <p className="text-xs text-gray-500 mb-1">Email</p>
            <p className="text-gray-900 font-medium text-sm">nicoleleeyuxuan@gmail.com</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-xl">
            <Heart className="text-pink-500 mb-2" size={24} />
            <p className="text-xs text-gray-500 mb-1">Status</p>
            <p className="text-gray-900 font-medium">Open to opportunities</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;