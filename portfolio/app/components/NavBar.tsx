"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="p-4 md:p-6 flex justify-between items-center bg-white dark:bg-gray-900 shadow-lg fixed top-0 w-full z-50">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
      >
        🚀 My Dev Space
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-lg font-medium">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          Projects
        </Link>
        <Link
          href="/personal"
          className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          Personal
        </Link>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? (
          <FaSun size={20} className="text-yellow-500" />
        ) : (
          <FaMoon size={20} className="text-gray-600 dark:text-gray-300" />
        )}
      </button>
    </nav>
  );
}
