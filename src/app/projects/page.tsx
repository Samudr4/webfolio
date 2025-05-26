
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my development projects and creative work.',
};

const projects = [
  {
    title: "AI-Assamese-Dictionary",
    description: "অসমীয়া অভিধান is a sleek web app showcasing an ultra-fast Bi-Directional Lookup that lets users type in Assamese or English and instantly receive accurate translations. Its smart auto-suggest and fuzzy matching guarantee the right result even with approximate spellings, while the built-in phonetic guide ensures users can pronounce words confidently. Perfect for a portfolio, this project highlights both user-centric design and robust functionality.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "futuristic online store AI",
    tags: ["Next.js", "Genkit", "AI","TypeScript", "Tailwind CSS"],
    liveLink: "https://assamese-dictionary.vercel.app/",
  },
  {
    title: "Real-time Collaborative Task Manager",
    description: "A collaborative task management tool with real-time updates using Firebase. Features drag-and-drop interface, notifications, and advanced project organization.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "team collaboration interface",
    tags: ["React", "Firebase", "Material UI", "Real-time"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Webfolio V2 (This Site!)",
    description: "My personal portfolio website, built with Next.js, ShadCN UI, Tailwind CSS and Genkit. Focused on showcasing skills, projects, and blog content with a creative flair.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "modern portfolio design",
    tags: ["Next.js", "ShadCN UI", "TailwindCSS", "Genkit"],
    liveLink: "/", 
  },
  
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 animate-fadeIn">
      <header className="mb-16 text-center">
        <Layers className="h-16 w-16 text-primary mx-auto mb-6 animate-fadeIn [animation-delay:0.1s]" />
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl animate-fadeIn [animation-delay:0.2s]">
          My <span className="text-primary">Creations</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeIn [animation-delay:0.3s]">
          A curated collection of projects that blend technology, creativity, and problem-solving.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="group flex flex-col overflow-hidden rounded-xl shadow-lg creative-card-hover bg-card/80 backdrop-blur-sm animate-fadeIn"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.imageHint}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <CardTitle className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300 drop-shadow-lg">{project.title}</CardTitle>
              </div>
            </div>
            
            <CardContent className="p-6 flex-grow">
              <CardDescription className="text-md leading-relaxed mb-4 text-foreground/80">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4 p-6 border-t">
              {project.repoLink && (
                <Button variant="outline" asChild className="transition-colors hover:border-primary/70 hover:text-primary hover:bg-primary/10 group/btn">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5 group-hover/btn:text-primary transition-colors" /> Source Code
                  </a>
                </Button>
              )}
              {project.liveLink && (
                 <Button asChild className="transition-transform hover:scale-105 group/btn">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-5 w-5 group-hover/btn:rotate-3 transition-transform" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
