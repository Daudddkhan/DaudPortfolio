import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-950 via-purple-950 to-blue-950 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side text */}
        <p className="text-sm text-gray-300 mb-4 md:mb-0">
          © {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">Daud Khan</span> — All rights reserved.
        </p>

        {/* Right side social icons */}
        <div className="flex space-x-5 text-xl">
          <a href="mailto:kdaud1602@gmail.com" className="hover:text-amber-400 transition" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Daudddkhan" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/daud-khan-7a0643284/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
