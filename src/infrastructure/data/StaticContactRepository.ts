// src/infrastructure/data/StaticContactRepository.ts
import { ContactRepository } from "@/domain/repositories/ContactRepository";
import { ContactForm } from "@/domain/entities/ContactForm";

export class StaticContactRepository implements ContactRepository {
  async sendContactMessage(form: ContactForm): Promise<void> {
    console.log("Sending contact message:", form);
    // You can integrate EmailJS, SMTP, or an API here
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
