'use client';

import {
  FaReact,
  FaDatabase,
  FaJava,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiFlutter,
  SiSpringboot,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiAndroid,
  SiGit
} from 'react-icons/si';

const factualData = [
  { value: '12+', label: 'Completed Projects' },
  { value: '100k+', label: 'Downloads' },
  { value: '4+', label: 'Years Industry Experience' },
  { value: '5k+', label: 'Business Requests' },
  { value: '2', label: 'Awards & Recognitions' },
  { value: '40+', label: 'Features Deployed' },
];

const skills = [
  { name: 'Flutter', Icon: SiFlutter },  
  { name: 'React', Icon: FaReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Spring Boot', Icon: SiSpringboot },
  { name: 'Java', Icon: FaJava },
  { name: 'SQL', Icon: FaDatabase },
  { name: 'Git', Icon: SiGit },
  { name: 'Docker', Icon: SiDocker },
  { name: 'K8s', Icon: SiKubernetes },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="snap-start h-screen flex flex-col justify-center bg-gray-50 px-12 py-16"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="flex flex-col md:flex-row md:space-x-16 max-w-6xl mx-auto mt-16">
        {/* Left side */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-base leading-relaxed text-gray-700">
            As a Full-Stack Developer, I design secure and scalable systems that create real business impact. My approach is rooted in architectural clarity, system resilience, and outcome-driven development. I combine technical excellence with a data-informed mindset to deliver solutions that are robust, adaptable, and built for continuous improvement. I am passionate about turning complex challenges into elegant, efficient solutions that drive success.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-700">
            When I'm not coding, I enjoy soaking in the simple moments of life.
          </p>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 mt-12 md:mt-0 grid grid-cols-2 grid-rows-3 gap-y-6 gap-x-10 text-center">
          {factualData.map(({ value, label }, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-indigo-500">{value}</span>
              <span className="mt-1 text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills grid below remains unchanged */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-10 gap-8">
          {skills.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center space-y-2 text-gray-700"
            >
              <Icon className="text-indigo-500 w-12 h-12" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
