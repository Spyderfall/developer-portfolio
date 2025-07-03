// components/Footer.tsx

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with real submission logic (e.g. API call)
    alert(`Thanks for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-tr from-gray-800 to-gray-900 text-gray-200 py-3">
      {/* CTA Banner */}
      <div className="max-w-4xl mx-auto text-center px-4 pt-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Let’s build something great together 🚀
        </h2>
        <p className="mb-6 text-gray-400">
          Got a project in mind or just want to say hi? My inbox is always open.
        </p>

      </div>

      <hr className="border-gray-700 my-3" />

      {/* Social + Contact */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 px-4 text-center sm:text-left">
        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-gray-300 mb-2">Connect With Me</h3>
          <div className="flex justify-center sm:justify-start space-x-4 text-gray-400">
            <a
              href="https://linkedin.com/in/sagar-adulkar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Spyderfall"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>            
            <a
              href="https://x.com/spyderfall"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              X
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-gray-300 mb-2">Contact</h3>
          <p>Email: <a href="mailto:you@example.com" className="hover:text-white">sagaradulkarwork@gmail.com</a></p>
          <p>Based in India.🌍 </p>
        </div>
      </div>

      <hr className="border-gray-700 my-3" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sagar Adulkar. All rights reserved.
      </div>
    </footer>
  );
}
