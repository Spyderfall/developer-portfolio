// src/use-cases/SendContactMessageUseCase.ts
import { ContactRepository } from "@/domain/repositories/ContactRepository";
import { ContactForm } from "@/domain/entities/ContactForm";

export class SendContactMessageUseCase {
  constructor(private contactRepo: ContactRepository) {}

  async execute(form: ContactForm): Promise<void> {
    return this.contactRepo.sendContactMessage(form);
  }
}
