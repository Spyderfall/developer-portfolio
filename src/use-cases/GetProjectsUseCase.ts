import { Project } from '../domain/entities/Project';
import { ProjectRepository } from '../domain/repositories/ProjectRepository';

export class GetProjectsUseCase {
  private projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(): Promise<Project[]> {
    return this.projectRepository.getAllProjects();
  }
}
