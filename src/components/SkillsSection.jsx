import React, { useState } from 'react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'Java', 'C++', 'JavaScript', 'PHP', 'Kotlin', 'SQL', 'C']
    },
    {
      category: 'Web Development',
      items: ['HTML/CSS', 'React', 'MySQL', 'Backend Integration', 'REST APIs']
    },
    {
      category: 'Mobile Development',
      items: ['Android', 'Kotlin', 'Jetpack Compose', 'XML']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git/GitHub', 'VS Code', 'IntelliJ', 'Android Studio', 'Docker']
    },
    {
      category: 'Software Engineering',
      items: ['SDLC', 'Design Patterns', 'MVC Architecture', 'Version Control', 'Agile']
    },
    {
      category: 'Cloud & Data',
      items: ['AWS/Azure Basics', 'CI/CD Pipeline', 'Machine Learning', 'Data Structures']
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-pink-500 font-medium text-sm uppercase tracking-wider">My Toolkit</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Skills & Technologies
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillSet, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-pink-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {skillSet.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill) => (
                  <span
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 transition-all duration-300 cursor-default ${
                      hoveredSkill === skill 
                        ? 'border-pink-500 text-pink-500 scale-110 shadow-md bg-pink-50' 
                        : 'hover:border-pink-300'
                    }`}
                  >
                    {skill}
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

export default SkillsSection;