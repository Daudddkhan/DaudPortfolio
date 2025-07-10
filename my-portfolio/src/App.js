import React ,  { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from './components/Education';
import Footer from './components/Footer';



function App() {
  useEffect(() => {
  AOS.init({ duration: 800 });
}, []); 


  return (
    
   <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-sans min-h-screen">
      <Navbar/>
      <Home />
      <Skills />
      <Projects />
      <Experience/>
       <Education/>
      <Contact />
      <Footer />
    </div>
     
  );
}

export default App;
