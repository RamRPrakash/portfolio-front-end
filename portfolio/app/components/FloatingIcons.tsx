"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techIcons = [
  { name: "React", src: "/icons/react.svg" },
  { name: "Next.js", src: "/icons/nextjs.svg" },
  { name: "TypeScript", src: "/icons/typescript.svg" },
  { name: "Node.js", src: "/icons/nodejs.svg" },
  { name: "MongoDB", src: "/icons/mongodb.svg" },
  { name: "CSS", src: "/icons/css.svg" },
  { name: "Tailwind", src: "/icons/tailwind.svg" },
];

export default function FloatingIcons() {
  return (
    <div className="relative flex flex-wrap justify-center gap-8 py-10">
      {techIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="w-16 h-16 md:w-20 md:h-20 p-2 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Image src={icon.src} alt={icon.name} width={50} height={50} />
        </motion.div>
      ))}
    </div>
  );
}
