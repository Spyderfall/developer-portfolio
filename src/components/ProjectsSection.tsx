'use client';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="snap-start h-screen flex flex-col justify-start bg-gray-50 px-12 py-16"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="max-w-6xl w-full mx-auto mt-16 flex justify-end">
        <h2 className="text-3xl font-semibold text-gray-900">Projects</h2>
      </div>
    </section>
  );
}
