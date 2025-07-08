// src/use-cases/GetAboutUseCase.ts
import { AboutRepository } from "@/domain/repositories/AboutRepository";
import { About } from "@/domain/entities/About";

export class GetAboutUseCase {
  constructor(private aboutRepo: AboutRepository) {}

  async execute(): Promise<About> {
    return this.aboutRepo.getAboutInfo();
  }
}
