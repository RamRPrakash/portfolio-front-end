"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const skills = [
  { name: "React.js", color: "from-blue-500 to-cyan-500", rating: 5 },
  { name: "Redux", color: "from-purple-500 to-indigo-500", rating: 5 },
  {
    name: "TanStack React Query",
    color: "from-red-500 to-orange-500",
    rating: 5,
  },
  { name: "Zustand", color: "from-yellow-500 to-yellow-400", rating: 5 },
  { name: "JavaScript", color: "from-yellow-400 to-orange-400", rating: 5 },
  { name: "TypeScript", color: "from-blue-600 to-indigo-600", rating: 5 },
  { name: "Next.js", color: "from-rose-600 to-yellow-600", rating: 4 },
  { name: "Node.js", color: "from-green-600 to-green-400", rating: 4 },
  { name: "MongoDB", color: "from-green-500 to-emerald-500", rating: 3 },
  { name: "Framer Motion", color: "from-purple-500 to-pink-500", rating: 3 },
  { name: "HTML", color: "from-orange-500 to-red-500", rating: 5 },
  { name: "CSS", color: "from-blue-400 to-blue-300", rating: 5 },
];

export default function Skills() {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        🚀 Tech Stack
      </h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`p-5 rounded-lg bg-gradient-to-r ${skill.color} text-white shadow-lg transform transition-transform hover:scale-105`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <div className="flex justify-center mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`text-yellow-300 ${
                    i < skill.rating ? "opacity-100" : "opacity-30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
