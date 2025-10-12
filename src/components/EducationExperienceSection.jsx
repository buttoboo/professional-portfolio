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
        {/* Education - University */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Singapore Institute of Technology</h3>
              <p className="text-pink-500 font-medium mb-2">Bachelor of Engineering in ICT (Software Engineering)</p>
              <p className="text-gray-600 text-sm mb-4">2023 - 2027</p>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expected graduation in 2027</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Specializing in full-stack development, mobile applications, and software architecture</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Hands-on experience with agile development methodologies and team collaboration</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200">
                    Embedded Systems (A)
                  </span>
                  <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200">
                    Machine Learning (B+)
                  </span>
                  <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200">
                    Web Systems (B+)
                  </span>
                  <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200">
                    Mobile App Development (B+)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div id="experience" className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
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
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <span>Awards & Recognition</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'GuruAI Certificate of Excellence (2025)',
              'Social Innovation Project Showcase (2025)',
              'Serious Games Festival Facilitator (2025)',
              'Day Zero Facilitator (2024)',
              'Computational & Algorithmic Thinking Competition (2017-2020)',
              'Appjamming Summit Semi-finalist (2018)'
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