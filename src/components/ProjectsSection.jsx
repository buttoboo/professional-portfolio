import React, { useState } from 'react';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'ClearCare',
      tags: ['C#', 'JavaScript', 'Firebase', 'ASP.NET MVC'],
      shortDesc: 'Healthcare coordination platform',
      fullDescription: 'A comprehensive web application designed to streamline pre-discharge service coordination and scheduling for patients. Built using MVC architecture with Firebase for real-time database management.',
      features: [
        'Real-time scheduling system with automated conflict resolution',
        'Role-based access control for healthcare professionals, patients, caregivers, and administrators',
        'Firebase authentication with secure user management',
        'Cross-functional team collaboration tools and communication features',
        'Implemented using MVC architecture with software design patterns including Observer, Factory, and Singleton'
      ],
      contribution: [
        'Developed core functionality for the Account & Data Hub module',
        'Engineered delegate caregiver feature enabling family members to manage patient care',
        'Architected solutions using MVC design patterns to ensure scalability and maintainability'
      ],
      technologies: ['HTML', 'C#', 'CSS', 'JavaScript', 'Firebase', 'ASP.NET MVC'],
      images: [
        "/images/clearcare/register.png",
        "/images/clearcare/medical-records.png",
        "/images/clearcare/delegate-caregiver.png",
        "/images/clearcare/manage-staff.png"
      ],
      github: null
    },
    {
      id: 2,
      title: 'FitForm',
      tags: ['Android', 'Kotlin', 'XML', 'MediaPipe', 'Google Maps'],
      shortDesc: 'AI-powered fitness tracking app',
      fullDescription: 'Android application for real-time exercise form tracking and correction using MediaPipe Pose API. Features AI algorithms for movement analysis and automatic rep counting.',
      features: [
        'Real-time pose detection and analysis using Google MediaPipe Pose API',
        'Computer vision algorithms analyzing 33 body keypoints for comprehensive movement tracking',
        'Automatic repetition counting with 95% accuracy across various exercise types',
        'Intelligent form assessment with corrective feedback',
        'GPS-enabled outdoor activity tracking with route mapping and distance calculation'
      ],
      contribution: [
        'Integrated GPS tracking functionality for outdoor workout monitoring',
        'Designed and implemented Room database architecture for persistent local storage',
        'Developed exercise tracking and history features using Data Access Objects (DAO) pattern'
      ],
      technologies: ['Android', 'Kotlin', 'XML', 'MediaPipe', 'Google Maps'],
      images: [
        "/images/fitform/homepage.png",
        "/images/fitform/exercise-tracking.png",
        "/images/fitform/exercise-history.png",
        "/images/fitform/running.png"
      ],
      github: null
    },
    {
      id: 3,
      title: 'Recipe Planner',
      tags: ['JavaScript', 'MySQL', 'MariaDB', 'MongoDB'],
      shortDesc: 'Smart meal planning application',
      fullDescription: 'A full-stack meal planning application built on the Food.com dataset, providing users with access to over 500,000 recipes. Successfully engineered a database migration from MySQL to MongoDB, achieving a 40% improvement in query performance and enhanced scalability for complex nutritional queries.',
      features: [
        'Extensive recipe database with over 500,000 recipes from Food.com',
        'Nutritional analysis and macro tracking using USDA FoodData Central API',
        'Strategic database migration from relational (MySQL) to document-oriented (MongoDB) architecture',
        '40% performance optimization in query execution time',
        'Custom recipe creation with nutritional calculation and ingredient management'
      ],
      technologies: ['JavaScript', 'MySQL', 'MariaDB', 'MongoDB'],
      images: [
        "/images/recipe-planner/register.png",
        "/images/recipe-planner/recipes.png",
        "/images/recipe-planner/filter-recipes.png",
        "/images/recipe-planner/admin-dashboard.png",
        "/images/recipe-planner/edit-recipe.png",
      ],
      github: null
    },
    {
        id: 4,
        title: 'PalmLink',
        tags: ['JavaScript', 'React', 'Node.js', 'Sequelize', 'Amazon S3', 'Telegram Bot'],
        shortDesc: 'Palm oil resource management system',
        fullDescription: 'Resource and power management system for palm oil middlemen, landowners and workers.',
        features: [
            'Multi-role platform supporting landowners, middlemen, and workers with detailed dashboard interfaces',
            'Job posting and land management system for landowners with real-time updates',
            'Advanced scheduling tools enabling middlemen to efficiently allocate workers',
            'Telegram bot integration for instant job notifications to field workers'
        ],
        contribution: [
            'Designed and implemented frontend architecture and component structure',
            'Developed JWT-based authentication system with role-specific authorization',
            'Built real-time chat functionality with AWS S3 integration for media storage',
            'Integrated RESTful APIs using Sequelize ORM for database operations'
        ],
        technologies: ['JavaScript', 'React', 'Node.js', 'Sequelize', 'Amazon S3', 'Telegram Bot'],
        images: [
          "/images/palmlink/login.png",
          "/images/palmlink/dashboard.png",
          "/images/palmlink/profile.png",
          "/images/palmlink/chat.png"
        ],
        github: null
    },
    {
        id: 5,
        title: 'Job Cupid',
        tags: ['JavaScript', 'Python', 'Node.js', 'Machine Learning', 'Generative AI'],
        shortDesc: 'AI-driven job matching platform',
        fullDescription: 'An intelligent recruitment platform utilizing machine learning algorithms to connect job seekers with optimal employment opportunities. The system analyzes candidate profiles, skills, and experience to generate personalized job recommendations and streamline the application process.',
        features: [
            'Machine learning-based job matching algorithm analyzing skills, experience, and preferences',
            'Automated resume parsing and skill extraction algorithm',
            'One-click application system with auto-filled candidate information',
            'AI-generated personalized cover letters tailored to specific job postings'
        ],
        technologies: ['JavaScript', 'Python', 'Node.js', 'Machine Learning', 'Generative AI'],
        images: [
          "/images/job-cupid/homepage.png",
          "/images/job-cupid/extract-info.png",
          "/images/job-cupid/jobs.png",
          "/images/job-cupid/cover-letter.png"
        ],
        github: null
    },
    {
      id: 6,
      title: 'Find-A-Home',
      tags: ['Python', 'Streamlit', 'Folium', 'OneMap', 'Data Structures & Algorithms'],
      shortDesc: 'Resale flat search and comparison platform',
      fullDescription: 'Find-A-Home is a data-driven web application designed to streamline the search for resale flats in Singapore. It integrates map visualization, geolocation services, and efficient search and pathfinding algorithms to help users discover and compare housing options based on key criteria like price, location, and remaining lease.',
      features: [
          'Interactive map interface built with Folium to visualize flat locations and nearby amenities',
          'Comprehensive search, filtering, sorting, and comparison tools for key housing attributes and pricing',
          'Efficient search operations using Timsort and Binary Search for fast retrieval',
          'Pathfinding using Dijkstra and A* algorithms for distance calculations'
      ],
      technologies: ['Python', 'Streamlit', 'Folium', 'OneMap', 'Data Structures & Algorithms'],
      images: [
        "/images/find-a-home/search.png",
        "/images/find-a-home/comparison.png",
        "/images/find-a-home/pathfinding-1.png",
        "/images/find-a-home/pathfinding-2.png"
      ],
      github: null
  },
  {
      id: 7,
      title: 'Safe Access',
      tags: ['Raspberry Pi', 'JavaScript', 'Python', 'Flask', 'Computer Networks', 'IoT'],
      shortDesc: 'Smart home access and automation system',
      fullDescription: 'SafeAccess is a smart home lock system designed to address traditional key security issues by integrating RFID authentication, real-time monitoring, and remote control of home appliances. Built using multiple Raspberry Pis, the system enables secure access control, logs visitor activity, and allows users to control door locks, lights, and fans through a centralized web dashboard.',
      features: [
          'RFID and keypad-based access control for secure door entry',
          'Automatic logging of visits and real-time monitoring via a web dashboard',
          'Integrated doorbell with camera that captures and displays images on the dashboard',
          'Remote control of lights and fans through the dashboard interface',
          'Multi-Raspberry Pi network architecture using TCP/IP for communication between components'
      ],
      contribution: [
        'Integrated camera functionality to capture and display visitor images on the dashboard',
        'Configured multi-Pi network communication over TCP/IP to ensure reliable data exchange between devices',
        'Contributed to system design, network diagram, and security logic for access control'
      ],
      technologies: ['Raspberry Pi', 'JavaScript', 'Python', 'Flask', 'Computer Networks', 'IoT'],
      images: [
        "/images/safe-access/lights-and-fans.png",
        "/images/safe-access/dashboard.png",
        "/images/safe-access/door-1.png",
        "/images/safe-access/door-2.png",
        "/images/safe-access/smart-card.png",
        "/images/safe-access/network-diagram.png"
      ],
      github: null
    },
    {
      id: 8,
      title: 'Space Adventure',
      tags: ['Java', 'LibGDX', 'OOP', 'Design Patterns', 'Game Development', 'AI'],
      shortDesc: 'Space-themed shooting game',
      fullDescription: 'Space Adventure is a 2D educational game designed to engage children in learning about space through fun gameplay and interactive facts. Built using Java and LibGDX, the game is structured into a modular engine layer and a game layer. The engine layer provides reusable systems for rendering, input/output, collision detection, resource management, and AI. The game layer integrates these systems into an engaging space shooter with unique sprites, animations, and educational victory screens.',
      features: [
        'Modular engine architecture with separate engine and game layers for scalability and reusability',
        'Custom rendering, collision detection, I/O, and AI managers to handle game logic and performance',
        'Space-themed educational gameplay with fun facts shown after each stage to engage young players',
        'Unique sprites, animations, and enemy behaviors including figure-8 movement patterns for dynamic gameplay',
        'Integrated HUD for real-time display of player lives, scores, and stage information'
      ],
      technologies: ['Java', 'LibGDX', 'OOP', 'Design Patterns', 'Game Development', 'AI'],
      images: [
        "/images/space-adventure/start-screen.png",
        "/images/space-adventure/game.png",
        "/images/space-adventure/boss.png",
        "/images/space-adventure/victory-screen.png",
        "/images/space-adventure/uml-diagram.png"
      ],
      github: null
    },
    {
        id: 9,
        title: 'Crumbly',
        tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Docker'],
        shortDesc: 'E-commerce platform for local bakery',
        fullDescription: 'A secure, full-featured e-commerce solution developed for a local bakery business. The platform provides complete online shopping functionality including product catalog management, secure checkout, order tracking, and a comprehensive admin dashboard for business operations.',
        features: [
            'Dynamic product catalog with advanced search, filtering, and sorting capabilities',
            'Secure shopping cart with session management and checkout workflow',
            'Order history tracking and real-time status updates for customers',
            'Comprehensive admin panel for inventory, order, and customer management',
            'Secure authentication system with password hashing and session management'
        ],
        contribution: [
          'Designed database schema and optimized queries for performance',
          'Implemented admin panel complete with CRUD operations for product and order management'
        ],
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Docker'],
        images: [
          "/images/crumbly/order-management.png",
          "/images/crumbly/product-management.png",
          "/images/crumbly/add-product.png",
          "/images/crumbly/products.png"
        ],
        github: null
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const getProjectEmoji = (id) => {
    if (id === 1) return '🏥';
    if (id === 2) return '💪';
    if (id === 3) return '🍳';
    return '💻';
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-pink-500 font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Featured Projects</h2>
          <p className="text-gray-600 mt-4">Click on any project to see more details</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group bg-white rounded-2xl border-2 border-gray-200 p-6 cursor-pointer hover:border-pink-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-pink-50 text-pink-600 rounded-lg text-xs font-medium border border-pink-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                <span>View Details</span>
                <ExternalLink size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl z-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                <p className="text-gray-600 mt-1">{selectedProject.shortDesc}</p>
              </div>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              {selectedProject.images.length > 0 ? (
                <div className="relative w-full h-96 bg-white rounded-2xl mb-6 overflow-hidden group border border-gray-200">
                  <img 
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <React.Fragment>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft size={24} className="text-gray-800" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight size={24} className="text-gray-800" />
                      </button>
                      
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`h-2 rounded-full transition-all ${
                              idx === currentImageIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50 w-2'
                            }`}
                          />
                        ))}
                      </div>
                    </React.Fragment>
                  )}
                </div>
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">
                      {getProjectEmoji(selectedProject.id)}
                    </div>
                    <p className="text-gray-600 font-medium">Project Screenshot</p>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">About This Project</h3>
                <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <span className="text-pink-500">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

                {selectedProject.contribution && (
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">My Contribution</h3>
                    <ul className="space-y-2">
                    {selectedProject.contribution.map((contrib, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <span className="text-pink-500">•</span>
                        <span>{contrib}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.github && (
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
