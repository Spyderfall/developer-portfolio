import React from 'react';
import { ProjectCard } from '../../components/ProjectCard';

type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  date?: string;
  category?: string;
};

async function fetchProjects(): Promise<Project[]> {
  const res = await fetch('http://localhost:3000/api/projects', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
}
