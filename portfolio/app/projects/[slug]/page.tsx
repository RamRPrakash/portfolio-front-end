import { notFound } from "next/navigation";

import Link from "next/link";
import { projects } from "@/app/lib/projectsData";

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {project.company} • {project.period}
      </p>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Role & Responsibilities */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Role & Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {project.role.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      {/* Challenges */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Challenges & Solutions</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {project.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Back to Projects */}
      <Link
        href="/projects"
        className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        ← Back to Projects
      </Link>
    </main>
  );
}
