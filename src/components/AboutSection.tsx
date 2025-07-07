'use client';

import { motion } from 'framer-motion';
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
  SiGit,
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
  { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
  { name: 'Java', Icon: FaJava, color: '#007396' },
  { name: 'SQL', Icon: FaDatabase, color: '#003B57' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'K8s', Icon: SiKubernetes, color: '#326CE5' },
];


export default function AboutSection() {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto px-8 py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row md:space-x-16">
        {/* Left side */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-500">
            As a Full-Stack Developer, I design secure and scalable systems that create real business impact. My approach is rooted in architectural clarity, system resilience, and outcome-driven development. I combine technical excellence with a data-informed mindset to deliver solutions that are robust, adaptable, and built for continuous improvement. I am passionate about turning complex challenges into elegant, efficient solutions that drive success.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-700 dark:text-gray-400 transition-colors duration-500">
            When I'm not coding, I enjoy soaking in the simple moments of life.
          </p>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 mt-12 md:mt-0 grid grid-cols-2 grid-rows-3 gap-y-6 gap-x-10 text-center">
          {factualData.map(({ value, label }, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-indigo-500">
                {value}
              </span>
              <span className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills grid */}
      <div className="mt-20">
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-8">
          {skills.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center space-y-2 transition-colors duration-500"
            >
              <Icon className="w-12 h-12" style={{ color }} />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

{/* <div
key={name}
className="flex flex-col items-center space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-500"
>
<Icon className="text-indigo-500 w-12 h-12" />
<span className="text-sm font-medium">{name}</span>
</div> */}