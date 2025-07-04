'use client';

import React from 'react';

interface ProjectsSectionProps {
  projectIndex: number;
}

const projects = [
  {
    id: 1,
    title: 'Supplier Registration Portal (SRP)',
    description:
      'Developed a centralized platform for vendors to seamlessly onboard their business and products into the Retail ecosystem. Standardization of vendor onboarding across multiple formats and categories, dynamic terms of trade according to various business, automates the approval process, and ensures relaible complaince -- enabling thousands of suppliers to connect and trade.',
    image: '/projects/project1.jpg',
  },
  {
    id: 2,
    title: 'A Place Of Business',
    description:
      'Built a robust, streamlined platform for generating GSTINs, enabling businesses to legally operate in specific locations. The centralized system has supported the setup of 5000+ new places of business nationwide. With multi-role support and clear approval flow, it replaces manual paperwork and emails with a transparent, automated process -- reducing delays and ensuring full complaince.',
    image: '/projects/project2.jpg',
  },
  {
    id: 3,
    title: 'Project Three',
    description:
      'A real-time collaboration tool with live cursors, rich text, and syncing across devices.',
    image: '/projects/project3.jpg',
  },
  {
    id: 4,
    title: 'Project Four',
    description:
      'A data dashboard for analytics with harmonious charts and intuitive filters.',
    image: '/projects/project4.jpg',
  },
];

export default function ProjectsSection({ projectIndex }: ProjectsSectionProps) {
  const project = projects[projectIndex];
  if (!project) return null;

  const imageRight = projectIndex % 2 === 0;

  return (
    <div className="w-full h-full bg-gray-50 pt-24 pb-8 px-4 sm:px-8 md:px-16">
      {/* Section Header (only for the first project) */}
      <div className="max-w-6xl mx-auto mb-8 flex justify-end min-h-[2.5rem]">
        {projectIndex === 0 && (
          <h2 className="text-4xl font-bold text-indigo-500">Projects</h2>
        )}
      </div>

      {/* Content */}
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 relative ${
          imageRight ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Image Container */}
        <div className="md:w-[60%] relative flex justify-center items-center rounded-lg">
          <div className="absolute inset-0 rounded-lg bg-indigo-200 opacity-20 blur-3xl pointer-events-none"></div>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-[280px] object-cover rounded-lg shadow-lg relative z-10"
          />
        </div>

        {/* Text Container */}
        <div
          className={`md:w-[45%] bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 relative z-20 select-none ${
            imageRight ? '-mt-20 md:mt-0 md:-mr-20' : '-mt-20 md:mt-0 md:-ml-20'
          }`}
        >
          <div className="flex items-start gap-4">
            {/* Vertical Accent Bar */}
            <div className="w-1 h-10 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-sm" />
            <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
          </div>

          <p className="leading-relaxed text-gray-700 mt-4 text-[15.5px]">
            {project.description}
          </p>

          {/* <button
            type="button"
            onClick={() => alert(`Viewing ${project.title}`)}
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            View Project
          </button> */}
        </div>
      </div>
    </div>
  );
}
