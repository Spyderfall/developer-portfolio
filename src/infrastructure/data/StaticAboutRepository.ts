// src/infrastructure/data/StaticAboutRepository.ts
import { AboutRepository } from "@/domain/repositories/AboutRepository";
import { About } from "@/domain/entities/About";

export class StaticAboutRepository implements AboutRepository {
  async getAboutInfo(): Promise<About> {
    return {
      title: "About Me",
      description: "I’m a passionate developer...",
      skills: ["React", "Next.js", "TypeScript"],
      experience: ["3 years of experience...", "Worked at XYZ Corp"]
    };
  }
}
