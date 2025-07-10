import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-down">Education</h2>

        <div className="space-y-6">
          {/* College */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:shadow-xl transition" data-aos="fade-right">
            <h3 className="text-xl font-semibold text-indigo-300">B.Tech in Computer Science</h3>
            <p className="text-sm text-gray-300 mt-1">All Saints College of Technology, Bhopal</p>
            <p className="text-sm text-gray-400 mt-1">2022 – 2026 (Pursuing)</p>
            <p className="text-sm mt-2">Currently in 3rd year. Learning full-stack development and DSA actively.</p>
          </div>

         
        </div>
      </div>
    </section>
  );
}
