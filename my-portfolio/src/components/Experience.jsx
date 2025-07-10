import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-950 text-white">
      <div className="max-w-5xl mx-auto">
        {/* <h2 className="text-3xl font-bold text-center mb-10" >
          Experience
        </h2> */}
                <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-down">Experience</h2>


        <div
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-xl transition duration-300" data-aos="fade-left"
        >
          <h3 className="text-xl font-semibold text-white">Frontend Developer Intern</h3>
          <p className="text-sm text-indigo-200 mt-1">InfoMover, Bhopal | Jan 2025 – April 2025</p>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-gray-100">
            <li>Worked on the UI of the HireTalent website.</li>
            <li>Used React.js, PrimeReact, and PrimeFlex for responsive layouts.</li>
            <li>Built clean and mobile-first designs.</li>
            <li>Collaborated with the team to maintain UI consistency.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
