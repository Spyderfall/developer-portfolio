import { ContactForm } from "@/domain/entities/ContactForm";

export class SendContactMessageUseCase {
  async execute(form: ContactForm): Promise<void> {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }
  }
}
