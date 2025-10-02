import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Heart } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateValue(setExperience, 0, 1, 2000);
          animateValue(setProjects, 0, 10, 2000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const animateValue = (setter, start, end, duration) => {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setter(end);
        clearInterval(timer);
      } else {
        setter(current);
      }
    }, 16);
  };

  return (
    <section id="about" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-pink-500 font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Nice to meet you
          </h2>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 hover:border-pink-500 hover:shadow-lg transition-all duration-300">
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

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-pink-50 rounded-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">{Math.floor(experience)}+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">{Math.floor(projects)}+</div>
              <div className="text-sm text-gray-600 mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">20+</div>
              <div className="text-sm text-gray-600 mt-1">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">8+</div>
              <div className="text-sm text-gray-600 mt-1">Languages</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors cursor-default group">
              <Phone className="text-pink-500 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-xs text-gray-500 mb-1">Phone</p>
              <p className="text-gray-900 font-medium">98379330</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors cursor-default group">
              <Mail className="text-pink-500 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <p className="text-gray-900 font-medium text-sm">nicoleleeyuxuan@gmail.com</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors cursor-default group">
              <Heart className="text-pink-500 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-xs text-gray-500 mb-1">Status</p>
              <p className="text-gray-900 font-medium">Open to opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;