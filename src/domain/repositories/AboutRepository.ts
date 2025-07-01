// src/domain/repositories/AboutRepository.ts
import { About } from "../entities/About";

export interface AboutRepository {
  getAboutInfo(): Promise<About>;
}
