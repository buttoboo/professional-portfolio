import React from 'react';

const EducationExperienceSection = () => (
  <section id="education" className="py-24 px-6 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <span className="text-pink-500 font-medium text-sm uppercase tracking-wider">Background</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Education & Experience
        </h2>
      </div>

      <div className="space-y-6">
        {/* Education */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🎓</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Singapore Institute of Technology</h3>
              <p className="text-pink-500 font-medium mb-2">Bachelor of Engineering in ICT (Software Engineering)</p>
              <p className="text-gray-600 text-sm mb-4">2023 - 2027 • GPA: 3.56</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200">
                  Embedded Systems (A)
                </span>
                <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200">
                  Machine Learning (B+)
                </span>
                <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200">
                  Mobile App Development (B+)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div id="experience" className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">💼</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Yap Medicare Clinic & Surgery</h3>
              <p className="text-pink-500 font-medium mb-2">Clinic Assistant</p>
              <p className="text-gray-600 text-sm mb-4">January 2023 - June 2023</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Operated medical software systems for patient registration, medication dispensing, and payment processing</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conducted basic medical tests and operated medical equipment</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maintained patient records and handled administrative tasks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>🏆</span>
            <span>Awards & Recognition</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'GuruAI Certificate of Excellence - 2025',
              'Social Innovation Project Showcase - 2025',
              'Serious Games Festival Facilitator - 2025',
              'Day Zero Facilitator - 2024',
              'Computational & Algorithmic Thinking Competition - 2017-2020',
              'Appjamming Summit Semi-finalist - 2018'
            ].map((award, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2"></div>
                <span className="text-sm text-gray-700">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationExperienceSection;