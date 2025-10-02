import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const HeroSection = ({ scrollToSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Floating elements that follow mouse */}
      <div 
        className="absolute w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px)`
        }}
      ></div>
      <div 
        className="absolute w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01}px)`
        }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Interactive Profile Picture */}
        <div className="mb-8 relative">
          <div 
            className="relative w-32 h-32 mx-auto mb-6 cursor-pointer group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Rotating border */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 transition-all duration-500 ${isHovering ? 'animate-spin-slow scale-110' : ''}`}></div>
            
            {/* Image container */}
            <div className="absolute inset-1 rounded-full bg-white p-1">
              <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden relative">
                {/* Replace this with your actual image */}
                <img 
                  src={profilePic} 
                  alt="Yu Xuan" 
                  className={`w-full h-full object-cover transition-transform duration-500 ${isHovering ? 'scale-110' : 'scale-100'}`}
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-400"><span class="text-white text-4xl font-bold">YX</span></div>';
                  }}
                />
              </div>
            </div>

            {/* Sparkle effects on hover */}
            {isHovering && (
              <>
                <Sparkles className="absolute -top-2 -right-2 text-pink-500 animate-pulse" size={20} />
                <Sparkles className="absolute -bottom-2 -left-2 text-purple-500 animate-pulse animation-delay-200" size={20} />
              </>
            )}
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Hi, I'm <span className="text-pink-500 inline-block hover:scale-110 transition-transform duration-300 cursor-default">Yu Xuan</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in">
          Software Engineering Student
        </p>
        
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-fade-in-delay">
          I build clean, functional applications with thoughtful and functional design.
          <br />
          <span className="text-pink-500 font-medium">Available for internship May 2026 - April 2027</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-in-delay-2">
          <a href="https://github.com/buttoboo" target="_blank" rel="noopener noreferrer" 
             className="group flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-lg">
            <Github size={20} className="group-hover:rotate-12 transition-transform" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/lee-yu-xuan/" target="_blank" rel="noopener noreferrer"
             className="group flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-all hover:scale-105 hover:shadow-lg">
            <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:nicoleleeyuxuan@gmail.com"
             className="group flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-pink-500 hover:text-pink-500 transition-all hover:scale-105">
            <Mail size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Email</span>
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-pink-500 transition-colors animate-bounce-slow"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-pink-500 transition-colors">
              <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </button>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.6s both;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;