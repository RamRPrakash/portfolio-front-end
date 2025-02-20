import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Portfolio | Ramprakash",
  description: "A creative portfolio showcasing my skills and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
