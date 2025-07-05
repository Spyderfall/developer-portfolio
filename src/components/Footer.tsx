// components/Footer.tsx

import { FaEnvelope, FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-800 to-gray-900 text-gray-200 pt-16 pb-12 px-6">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Let’s build something great together 🚀
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Got a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* 3 Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-8">
  {/* Column 1 */}
  <div className="flex flex-col items-start text-left">
    <h3 className="text-3xl font-bold mb-3">Sagar</h3>
    <p className="text-gray-400 leading-relaxed max-w-xs">
      Crafting solutions that connect people and ideas.
    </p>
  </div>

  {/* Column 2: Quick Links centered */}
  <div className="flex flex-col items-center text-center">
    <h4 className="font-semibold mb-4">Quick Links</h4>
    <ul className="space-y-3">
      <li>
        <a href="#home" className="hover:text-white transition-colors">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-white transition-colors">
          About
        </a>
      </li>
      <li>
        <a href="#experience" className="hover:text-white transition-colors">
          Experience
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-white transition-colors">
          Contact
        </a>
      </li>
    </ul>
  </div>

  {/* Column 3 */}
  <div className="flex flex-col items-end text-right">
    <h4 className="font-semibold mb-4">Contact</h4>

    <a
      href="mailto:sagaradulkarwork@gmail.com"
      className="flex items-center justify-end gap-2 hover:text-white transition-colors"
    >
      <FaEnvelope size={16} />
      <span>sagaradulkarwork@gmail.com</span>
    </a>

    <div className="flex flex-col mt-3 space-y-2">
      <a
        href="https://linkedin.com/in/sagar-adulkar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-end gap-2 hover:text-white transition-colors"
      >
        <FaLinkedin size={16} />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/Spyderfall"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-end gap-2 hover:text-white transition-colors"
      >
        <FaGithub size={16} />
        <span>GitHub</span>
      </a>
      <a
        href="https://x.com/spyderfall"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-end gap-2 hover:text-white transition-colors"
      >
        <FaXTwitter size={16} />
        <span>X</span>
      </a>
    </div>

    <p className="mt-3 leading-relaxed"></p>
  </div>
</div>

      <hr className="border-gray-700 my-10" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sagar Adulkar. All rights reserved. | Based in India 🌍 | Made With Care 🎔
      </div>
    </footer>
  );
}
