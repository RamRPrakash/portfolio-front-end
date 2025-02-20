"use client";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaBlog,
  FaDownload,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PersonalPage() {
  return (
    <main className="container mx-auto px-6 py-24 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        🧑‍💻 Personal Details
      </h1>

      {/* 🚀 Profile Card with Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-700"
      >
        {/* 🏆 Experience Summary */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Professional Summary
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          🚀 **Senior Software Engineer** with **7.6+ years** of experience in
          **web development**, specializing in **React.js, Next.js, TypeScript,
          and JavaScript**.
        </p>
        <p className="mt-3 text-lg">
          💼 Worked at **Apexon, Tata Elxsi, Market Simplified, Damaka, and
          Krossark**.
        </p>
        <p className="mt-3 text-lg">
          🛠️ Expertise in **Frontend Architecture, UI/UX Design, API
          Integrations**.
        </p>
        <p className="mt-3 text-lg">
          🎨 Skilled in **Redux, TanStack Query, Flutter, and Material UI**.
        </p>
        <p className="mt-3 text-lg">
          🔥 Passionate about **building high-quality, responsive, and optimized
          web applications**.
        </p>
      </motion.div>

      {/* 📥 Download Resume Button */}
      <motion.a
        href="/Ramprakash-R-Senior-Engineer.pdf"
        download="Ramprakash-R-Senior-Engineer.pdf"
        whileHover={{ scale: 1.05 }}
        className="mt-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-transform"
      >
        <FaDownload size={20} /> Download Resume
      </motion.a>

      {/* 🌍 Social Links */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Connect with Me
        </h2>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-md shadow-md text-white transition transform hover:scale-105 ${link.bgColor}`}
              whileHover={{ scale: 1.1 }}
            >
              {link.icon} {link.text}
            </motion.a>
          ))}
        </div>
      </div>

      {/* 📞 Contact Details */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Contact Information
        </h2>
        <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">
          <Link
            href="mailto:prakashparthi1996@gmail.com"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            <FaEnvelope size={20} /> prakashparthi1996@gmail.com
          </Link>
          <p className="flex items-center gap-2">
            <FaPhone size={20} /> +91 97874 36363 / +91 75501 30139
          </p>
        </div>
      </div>
    </main>
  );
}

/* 🌟 Social Links Data */
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ram-r-prakash-043b91124",
    text: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    bgColor: "bg-blue-600",
  },
  {
    href: "https://github.com/RamRPrakash",
    text: "GitHub",
    icon: <FaGithub size={20} />,
    bgColor: "bg-gray-900",
  },
  {
    href: "https://task-management-front-end-v1.vercel.app/tasks",
    text: "Blog",
    icon: <FaBlog size={20} />,
    bgColor: "bg-green-500",
  },
];
