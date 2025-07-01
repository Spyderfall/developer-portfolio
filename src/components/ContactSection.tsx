"use client";

import { useState } from "react";
import { ContactForm } from "@/domain/entities/ContactForm";
import { StaticContactRepository } from "@/infrastructure/data/StaticContactRepository";
import { SendContactMessageUseCase } from "@/use-cases/SendContactMessageUseCase";

const PawIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6 text-indigo-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15a4 4 0 014-4h.5a2 2 0 100-4 4 4 0 018 0 2 2 0 100 4H17a4 4 0 014 4v1a3 3 0 11-6 0v-1"
    />
  </svg>
);

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const repo = new StaticContactRepository();
    const useCase = new SendContactMessageUseCase(repo);

    try {
      await useCase.execute(form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full pt-6">
      <div className="w-full pr-8 sm:pl-8 sm:pr-16 py-24 flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left side: Heading + Image */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h2 className="text-4xl font-bold text-indigo-300">Contact Me</h2>
          <div className="relative w-80 h-[320px] rounded-xl overflow-hidden">
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-indigo-400 rotate-2 z-0 rounded-xl"></div>
            <img
              src="/contact/cat3.jpg"
              alt="Cute Cat"
              className="relative z-10 object-cover w-full h-full rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Center: Curve + Phrase */}
        <div className="hidden md:flex flex-col items-center justify-center w-24 h-full">
          {/* Curved line */}
          <svg
            className="mb-4"
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40 C20 0, 60 0, 80 40"
              stroke="#6366f1"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* Phrase with paws */}
          <div className="flex pr-16 items-center gap-4 text-indigo-500 text-center font-semibold text-lg select-none">
            
            <span>Looking forward to working with you 🐾</span>
            
          </div>
        </div>

        {/* Right side: Contact Form Card */}
        <div className="w-full md:w-[46%] mt-12 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-300 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            Get in Touch Today
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name + Email in same row */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="flex-1 min-w-0 p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="flex-1 min-w-0 p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 h-24 resize-none border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
            />

            {/* Submit Button Aligned Right */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Status Message */}
            {status === "sent" && (
              <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                Message sent! Thank you.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                Oops! Something went wrong.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
