// src/domain/repositories/ContactRepository.ts
import { ContactForm } from "../entities/ContactForm";

export interface ContactRepository {
  sendContactMessage(form: ContactForm): Promise<void>;
}
