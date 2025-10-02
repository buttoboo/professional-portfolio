import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: 'ClearCare',
      subtitle: 'Healthcare Coordination Platform',
      description: 'Web application streamlining pre-discharge service coordination and scheduling for patients using MVC architecture and Firebase for real-time database management.',
      tech: ['PHP', 'Firebase', 'MVC Architecture', 'Real-time DB'],
      highlights: ['Real-time scheduling', 'Cross-functional team collaboration', 'Multiple design patterns'],
      details: 'Built with a team of 5 developers, implementing advanced design patterns including Observer, Factory, and Singleton. Integrated Firebase Authentication and Firestore for seamless real-time updates across multiple user roles.'
    },
    {
      title: 'FitForm',
      subtitle: 'AI-Powered Fitness Application',
      description: 'Android application for real-time exercise form tracking and correction using MediaPipe Pose API with AI algorithms for movement analysis and automatic rep counting.',
      tech: ['Kotlin', 'XML', 'MediaPipe API', 'AI/ML'],
      highlights: ['Form assessment', 'Automatic rep counting', 'GPS tracking integration'],
      details: 'Leveraged MediaPipe Pose Landmark Detection to analyze 33 body keypoints in real-time. Implemented custom algorithms for rep counting with 95% accuracy. Integrated Google Maps API for outdoor activity tracking.'
    },
    {
      title: 'Recipe Planner',
      subtitle: 'Meal Planning Application',
      description: 'Comprehensive meal planning web application leveraging Food.com dataset with database migration from MySQL to MongoDB for enhanced flexibility.',
      tech: ['MySQL', 'MongoDB', 'Web Development', 'Database Design'],
      highlights: ['Schema design', 'NoSQL migration', 'Performance optimization'],
      details: 'Processed 500,000+ recipes from Food.com dataset. Migrated from relational MySQL database to MongoDB, improving query performance by 40%. Implemented nutritional analysis using USDA FoodData API.'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-pink-500 font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Featured Projects
          </h2>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-pink-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-pink-500 font-medium">{project.subtitle}</p>
                </div>
                <button
                  onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                  className="p-2 hover:bg-pink-50 rounded-lg transition-colors"
                >
                  {expandedProject === idx ? (
                    <ChevronUp className="text-pink-500" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </button>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {expandedProject === idx && (
                <div className="mb-6 p-4 bg-pink-50 rounded-xl animate-expand">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Project Details</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.details}</p>
                </div>
              )}
              
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">Key Features</p>
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-pink-50 text-pink-600 rounded-lg text-sm font-medium hover:bg-pink-100 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes expand {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-expand {
          animation: expand 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;