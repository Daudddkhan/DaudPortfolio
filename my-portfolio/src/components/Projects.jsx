import React from 'react';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    name: 'Blog Application',
    description:
      'A full-stack blog platform built using the MERN stack. Users can create, edit, delete, and view blogs with category-wise filtering and secure login.',
   image: '/project-images/blog1.jpeg',
    github: 'https://github.com/Daudddkhan/Blog-Website.git'
  },
  {
    name: 'Digital Clock',
    description:
      'A simple digital clock that displays real-time hours, minutes, and seconds. Built using JavaScript and styled with CSS for a clean and responsive UI.',
   image: '/project-images/digital-clock.jpeg',
    github: 'https://github.com/Daudddkhan/Digital-Clock.git'
  },
  {
    name: 'Rental Car Website',
    description:
      'A React-based car rental site where users can explore available cars, view pricing, and make bookings with a smooth and modern layout.',
   image: '/project-images/car.jpg',
    github: 'https://github.com/Daudddkhan/Rental-car.git'
  },
  {
    name: 'Snake Game',
    description:
      'A classic snake game using HTML, CSS, and JavaScript. Features real-time movement, increasing difficulty, and score tracking.',
   image: '/project-images/snake2.jpg',
    github: 'https://github.com/Daudddkhan/Snake-Game.git'
  },
  {
    name: 'Calculator App',
    description:
      'A basic calculator app built with React.js. Supports all arithmetic operations and includes a responsive and user-friendly design.',
    image: '/project-images/calculator.jpeg',
    github: 'https://github.com/Daudddkhan/Calculator-app.git'
  }
];

export default function Projects() {
  return (
    <section
  id="projects"
  className="py-16 px-6 text-white bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900"
>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10  " >My Projects</h2>
        <div className="overflow-x-auto snap-x snap-mandatory">
          <div className="flex space-x-6 w-max px-4 pb-4" >
            {projects.map((project, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={1000}
                className="min-w-[300px] max-w-sm flex-shrink-0 snap-center"
              >
                <div className="bg-gray-800 rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-40 w-full object-cover rounded-xl mb-4"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                  <h3 className="text-xl font-semibold text-indigo-400 mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded"
                  >
                    View Code
                  </a>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
