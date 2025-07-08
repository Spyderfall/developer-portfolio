'use client';

import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { value: '120+', label: 'Completed Projects' },
    { value: '95%', label: 'Client Satisfaction' },
  ];

  const skills = [
    { name: 'Flutter', logo: '/logos/flutter.svg' },
    { name: 'React', logo: '/logos/react.svg' },
    { name: 'Next.js', logo: '/logos/nextjs.svg' },
    { name: 'Spring Boot', logo: '/logos/springboot.svg' },
    { name: 'SQL', logo: '/logos/sql.svg' },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-center">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
        I'm a passionate full stack developer with a knack for building scalable, clean, and efficient applications using modern technologies. I focus on crafting maintainable code and delightful user experiences.
      </p>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row justify-center gap-10 mb-16">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl font-bold text-indigo-600">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="w-12 h-12 mb-2">
              <Image src={skill.logo} alt={skill.name} width={48} height={48} />
            </div>
            <span className="text-sm text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
