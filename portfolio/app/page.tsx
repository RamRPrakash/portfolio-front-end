import AnimatedSection from "./components/AnimatedSection";
import FloatingIcons from "./components/FloatingIcons";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./lib/projectsData";
import Link from "next/link";

export default function Home() {
  // Show only the first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-20">
      {/* Hero Section */}
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection delay={0.3}>
        <Skills />
      </AnimatedSection>

      {/* Featured Projects Section */}
      <AnimatedSection delay={0.6}>
        <section className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🚀 Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md transition-transform transform hover:scale-105"
            >
              View All Projects →
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* Optional: Floating Icons (uncomment if needed) */}
      {/* <AnimatedSection delay={0.9}>
        <FloatingIcons />
      </AnimatedSection> */}
    </main>
  );
}
