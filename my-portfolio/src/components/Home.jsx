import React from 'react';

function Home() {
  return (
    <section id="home" className="py-20 px-6 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
    
    {/* 🧑‍💻 Image Section */}
    <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center" data-aos="zoom-in">
      <img
        src="/project-images/daud.jpg" // Change this path to your image location
        alt="Daud Khan"
        className="w-64 h-64 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
      />
    </div>

    {/* ✍️ Text Section */}
    <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
      <h1 className="text-4xl font-bold mb-2">
        <span className="">Hi, I'm</span> <span className="text-emerald-400">Daud Khan</span>
      </h1>
      <h2 className="text-2xl font-bold  mb-4">
                <span className="">Full Stack</span> <span className="text-cyan-400">Web Developer</span>
 </h2>

      <p className="text-gray-200 mb-6">
        I'm a MERN stack developer from Bhopal, currently pursuing B.Tech at All Saints College. I enjoy solving real-world problems through clean and efficient code. Skilled in Java, DSA, and full-stack development.
      </p>

      <div className="space-x-4">
        <a
          href="#contact"
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-full font-semibold transition"
        >
          Contact Me
        </a>
        {/* <a
          href="#projects"
          className="border border-indigo-400 px-5 py-2 rounded-full font-semibold hover:bg-indigo-500 transition"
        >
          View Projects
        </a> */}
        <a 
        className="border border-indigo-400 px-5 py-2 rounded-full font-semibold hover:bg-indigo-500 transition"
        href="/Daud-Khan-Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>

      </div>
    </div>
  </div>
</section>


  );
}

export default Home;
