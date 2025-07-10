import React  , {useState}from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("❌ Error connecting to server.");
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Me</h2>
        <p className="text-lg text-center text-indigo-200 mb-8">
          Feel free to reach out via the platforms below or drop a message!
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl mb-10">
          <a href="mailto:kdaud1602@gmail.com" className="hover:text-amber-400 transition" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/daud-khan-7a0643284/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Daudddkhan" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/Daudkhan02/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition" title="LeetCode">
            <SiLeetcode />
          </a>
          <a href="https://www.codechef.com/users/daudkhan02" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition" title="CodeChef">
            <SiCodechef />
          </a>
          <a href="https://www.hackerrank.com/profile/kdaud1602" target="_blank" rel="noreferrer" className="hover:text-green-400 transition" title="HackerRank">
            <SiHackerrank />
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6" data-aos="zoom-in">
  <div className="flex flex-col md:flex-row gap-6">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your Name"
      className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Your Email"
      className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required
    />
  </div>
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    rows="5"
    placeholder="Your Message"
    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    required
  />
  <button
    type="submit"
    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
  >
    Send Message
  </button>
  {status && <p className="text-indigo-300 font-medium mt-4">{status}</p>}
</form>

      </div>
    </section>
  );
}
