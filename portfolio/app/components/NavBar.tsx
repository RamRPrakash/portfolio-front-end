"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🚀 Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          🚀 My Dev Space
        </Link>

        {/* 🌐 Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          {navLinks.map(({ href, label }, index) => (
            <Link
              key={index}
              href={href}
              className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* 🌗 Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <FaSun size={22} className="text-yellow-500" />
          ) : (
            <FaMoon size={22} className="text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* 📱 Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-900 dark:text-white"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map(({ href, label }, index) => (
            <Link
              key={index}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

/* 📌 Navigation Links */
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/personal", label: "Personal" },
];
