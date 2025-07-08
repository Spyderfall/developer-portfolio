import { ProjectRepository } from '../../domain/repositories/ProjectRepository';
import { Project, ProjectProps } from '../../domain/entities/Project';

const projectsData: ProjectProps[] = [
  {
    id: '1',
    title: 'My Portfolio',
    description: 'Personal portfolio website built with Next.js',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://myportfolio.com',
    repoUrl: 'https://github.com/username/my-portfolio',
    date: '2024-06-25',
    category: 'Web Development',
  },
  {
    id: '2',
    title: 'Blog Platform',
    description: 'A full-stack blog platform with user auth',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL'],
    repoUrl: 'https://github.com/username/blog-platform',
    date: '2023-12-15',
    category: 'Web Development',
  },
];

export class StaticProjectRepository implements ProjectRepository {
  async getAllProjects(): Promise<Project[]> {
    return projectsData.map((p) => new Project(p));
  }

  async getProjectById(id: string): Promise<Project | null> {
    const project = projectsData.find((p) => p.id === id);
    return project ? new Project(project) : null;
  }
}
