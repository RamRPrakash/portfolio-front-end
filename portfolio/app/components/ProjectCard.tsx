"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Define colors for tech stack tags
const techColors: { [key: string]: string } = {
  "React.js": "bg-blue-500",
  Redux: "bg-purple-500",
  "Tanstack React Query": "bg-indigo-500",
  Zustand: "bg-green-500",
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-400",
  "Next.js": "bg-gray-700",
  "Node.js": "bg-green-600",
  MongoDB: "bg-emerald-600",
  "Framer Motion": "bg-red-500",
  HTML: "bg-orange-500",
  CSS: "bg-teal-500",
};

interface ProjectProps {
  slug: string;
  company: string;
  title: string;
  description: string;
  period: string;
  techStack: string[];
}

export default function ProjectCard({
  slug,
  company,
  title,
  description,
  period,
  techStack,
}: ProjectProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        className="relative p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg shadow-lg rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 transition-transform transform hover:scale-[1.05] hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400"
        whileHover={{
          y: -5,
          rotateX: 5,
          rotateY: 5,
          boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.5)",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 via-transparent to-gray-300 dark:from-gray-900 dark:to-gray-700 opacity-20"></div>

        {/* Company Name with Subtitle */}
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl">
          {company} - Software Solutions
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">
          {title}
        </h3>

        {/* Project Period */}
        <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 relative z-10">
          📅 {period}
        </p>

        {/* Project Description */}
        <p className="text-gray-800 dark:text-gray-300 mb-4 relative z-10">
          {description}
        </p>

        {/* Tech Stack with Color Tags */}
        <div className="flex flex-wrap gap-2 mt-2 relative z-10">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`text-white text-xs px-3 py-1 rounded-md font-medium ${
                techColors[tech] || "bg-gray-600"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <p className="text-blue-600 dark:text-blue-400 font-medium mt-4 text-sm relative z-10">
          View Details →
        </p>
      </motion.div>
    </Link>
  );
}
