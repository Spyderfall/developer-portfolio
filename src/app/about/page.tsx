export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hello! I'm [Your Name], a passionate web developer specializing in building performant and user-friendly applications with modern technologies like Next.js, React, and TypeScript.
      </p>
      <p className="mb-4">
        I enjoy creating clean, maintainable code using best practices such as Clean Architecture. When I'm not coding, I love exploring new tech, reading, and contributing to open-source projects.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Skills</h2>
      <ul className="list-disc list-inside">
        <li>Next.js & React</li>
        <li>TypeScript & JavaScript</li>
        <li>Node.js & Express</li>
        <li>CSS, Tailwind CSS, and responsive design</li>
        <li>Clean Architecture & SOLID principles</li>
      </ul>
    </main>
  );
}
