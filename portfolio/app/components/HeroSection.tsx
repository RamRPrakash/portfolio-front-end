"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center p-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-500">Ramprakash R</span> 👋
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A **Senior Frontend Engineer** passionate about building creative,
        scalable, and high-performance web applications.
      </motion.p>

      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg"
        >
          View Projects
        </a>
        <a
          href="/personal"
          className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
