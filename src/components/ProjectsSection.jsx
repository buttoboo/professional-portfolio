import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'ClearCare',
      subtitle: 'Healthcare Coordination Platform',
      description: 'Web application streamlining pre-discharge service coordination and scheduling for patients using MVC architecture and Firebase for real-time database management.',
      tech: ['PHP', 'Firebase', 'MVC Architecture', 'Real-time DB'],
      highlights: ['Real-time scheduling', 'Cross-functional team collaboration', 'Multiple design patterns']
    },
    {
      title: 'FitForm',
      subtitle: 'AI-Powered Fitness Application',
      description: 'Android application for real-time exercise form tracking and correction using MediaPipe Pose API with AI algorithms for movement analysis and automatic rep counting.',
      tech: ['Kotlin', 'XML', 'MediaPipe API', 'AI/ML'],
      highlights: ['Form assessment', 'Automatic rep counting', 'GPS tracking integration']
    },
    {
      title: 'Recipe Planner',
      subtitle: 'Meal Planning Application',
      description: 'Comprehensive meal planning web application leveraging Food.com dataset with database migration from MySQL to MongoDB for enhanced flexibility.',
      tech: ['MySQL', 'MongoDB', 'Web Development', 'Database Design'],
      highlights: ['Schema design', 'NoSQL migration', 'Performance optimization']
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
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-pink-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-pink-500 font-medium">{project.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
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
                    className="px-3 py-1 bg-pink-50 text-pink-600 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;