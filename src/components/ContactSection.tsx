'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="w-full px-6 py-24 flex flex-col md:flex-row items-start justify-center md:gap-x-12 gap-y-16">
      {/* LEFT SIDE */}
      <div className="flex flex-col basis-1/2 max-w-lg gap-8">
        <h2 className="text-4xl font-bold text-indigo-300">Contact Me</h2>

        <div className="relative w-80 h-[320px] rounded-xl overflow-hidden">
          <div className="absolute -top-6 -left-6 w-full h-full border-4 border-indigo-400 rotate-2 z-0 rounded-xl"></div>
          <img
            src="/contact/cat3.jpg"
            alt="Cute Cat"
            className="relative z-10 object-cover w-full h-full rounded-xl shadow-lg"
          />
        </div>

        {/* Bottom Message for Mobile */}
        <div className="md:hidden flex justify-center items-center gap-4 mt-8 px-4">
          <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="text-indigo-500 text-center font-semibold text-lg select-none">
            My furry friend awaits your message!
          </div>
        </div>
      </div>

      {/* MIDDLE ARROWS for Desktop */}
      {/* <div className="hidden md:flex flex-col items-center w-32 shrink-0">
        <svg className="w-12 h-12 text-indigo-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <div className="text-indigo-300 text-center font-semibold text-lg select-none">
          My friend here awaits your message!
        </div>
        <svg className="w-12 h-12 text-indigo-400 mt-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div> */}

      {/* RIGHT FORM CARD */}
      <div className="basis-1/2 max-w-xl mt-0">
        <div className="w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-300 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            Get in Touch
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-purple-600 hover:to-indigo-500 transition-colors"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status === "sent" && (
              <p className="text-green-600 dark:text-green-400 text-sm">
                Message sent! Thank you.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 text-sm">
                Oops! Something went wrong.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
