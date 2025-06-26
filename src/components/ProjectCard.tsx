import React from 'react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  date?: string;
  category?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  liveUrl,
  repoUrl,
  date,
  category,
}) => {
  return (
    <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{category} - {date}</p>
      <p className="mt-2">{description}</p>
      <p className="mt-2 font-mono text-sm">Tech: {techStack.join(', ')}</p>
      <div className="mt-3 space-x-4">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Live Demo
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};
