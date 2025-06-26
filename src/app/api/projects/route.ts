import { NextResponse } from 'next/server';
import { StaticProjectRepository } from '../../../infrastructure/data/StaticProjectRepository';
import { GetProjectsUseCase } from '../../../use-cases/GetProjectsUseCase';

export async function GET() {
  const repo = new StaticProjectRepository();
  const useCase = new GetProjectsUseCase(repo);

  const projects = await useCase.execute();

  // Return JSON with only plain data, not class instances
  const response = projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    techStack: project.techStack,
    liveUrl: project.liveUrl,
    repoUrl: project.repoUrl,
    date: project.date,
    category: project.category,
  }));

  return NextResponse.json(response);
}
