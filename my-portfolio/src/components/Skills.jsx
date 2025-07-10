import React from 'react';

function Skills() {
  const skills = {
    "Frontend": ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js"],
    "Database": ["MongoDB"],
    "Programming Languages": ["Java", "JavaScript"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman", "Firebase"],
    "Data Structures & Algorithms": [
     "Arrays", "Strings", "Linked List",
      "HashMap", "Sorting", "Searching"
    ],
    "Others": ["REST APIs", "Responsive Design", "JSON", "JWT Authentication"]
  };

  return (
<section id="skills" className="py-16 px-6 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-down">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <div
  key={category}
  data-aos="fade-up"
  data-aos-delay={i * 100}
  className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white shadow-lg rounded-xl p-6 border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
>
  <h3 className="text-xl font-semibold text-indigo-400 mb-3">{category}</h3>
  <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
    {items.map((item, idx) => (
      <li
        key={idx}
        className="hover:text-indigo-400 transition duration-200"
      >
        {item}
      </li>
    ))}
  </ul>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
