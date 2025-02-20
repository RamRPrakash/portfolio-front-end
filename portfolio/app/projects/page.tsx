"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, List } from "lucide-react"; // Icons for Grid/List View
import { projects } from "../lib/projectsData";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

const ITEMS_PER_PAGE = 6; // Number of projects per page

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("latest");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const techStacks = Array.from(new Set(projects.flatMap((p) => p.techStack)));
  const companies = Array.from(new Set(projects.map((p) => p.company)));

  // Filter & Sort projects
  const filteredProjects = projects
    .filter((project) =>
      filter
        ? project.techStack.includes(filter) || project.company === filter
        : true
    )
    .filter((project) =>
      searchQuery
        ? project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    )
    .sort((a, b) =>
      sortBy === "latest"
        ? new Date(b.period.split(" - ")[1]).getTime() -
          new Date(a.period.split(" - ")[1]).getTime()
        : new Date(a.period.split(" - ")[1]).getTime() -
          new Date(b.period.split(" - ")[1]).getTime()
    );

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="container mx-auto px-6 py-12">
      {/* Back to Home Button */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center bg-gray-700 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        🚀 My Projects
      </h1>

      {/* Search & View Toggle */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          className="p-2 border rounded-md w-full sm:w-72 bg-white dark:bg-gray-800"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            className={`p-2 rounded-md ${
              viewMode === "grid"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
            onClick={() => setViewMode("grid")}
          >
            <Grid size={20} />
          </button>
          <button
            className={`p-2 rounded-md ${
              viewMode === "list"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
            onClick={() => setViewMode("list")}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          onChange={(e) => setFilter(e.target.value || null)}
          className="p-2 border rounded-md bg-white dark:bg-gray-800"
        >
          <option value="">Filter by Tech Stack</option>
          {techStacks.map((tech, index) => (
            <option key={index} value={tech}>
              {tech}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setFilter(e.target.value || null)}
          className="p-2 border rounded-md bg-white dark:bg-gray-800"
        >
          <option value="">Filter by Company</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded-md bg-white dark:bg-gray-800"
        >
          <option value="latest">Sort by Latest</option>
          <option value="oldest">Sort by Oldest</option>
        </select>

        {filter && (
          <button
            onClick={() => setFilter(null)}
            className="p-2 text-sm text-white bg-red-500 rounded-md"
          >
            Clear Filter ❌
          </button>
        )}
      </div>

      {/* Project List with Animation */}
      <AnimatePresence mode="popLayout">
        <div
          className={`grid ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
              : "grid-cols-1"
          } gap-8`}
        >
          {paginatedProjects.length > 0 ? (
            paginatedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              No projects found.
            </p>
          )}
        </div>
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 mx-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
          >
            ← Previous
          </button>
          <span className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-4 py-2 mx-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}
    </main>
  );
}
