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
    title: "Assamese Dictionary",
    description: "অসমীয়া অভিধান/Assamese-Dictionary is a sleek web app showcasing an ultra-fast Bi-Directional Lookup that lets users type in Assamese or English and instantly receive accurate translations. Its smart auto-suggest and fuzzy matching guarantee the right result even with approximate spellings, while the built-in phonetic guide ensures users can pronounce words confidently.",
    imageUrl: "/assets/AD-logo.png",
    imageHint: "futuristic online store AI",
    tags: ["Next.js", "Google Genkit", "AI","TypeScript", "Tailwind CSS"],
    liveLink: "https://assamese-dictionary.vercel.app/",
  },
  {
    title: "Travel website with Dashboard",
    description: "A full-stack web application that lets users explore and book exciting adventure tours in the North East region. The backend handles tour bookings, user accounts, and secure payments, while the frontend offers a smooth, user-friendly interface for browsing and reserving tours. It’s designed to make planning your next adventure easy and enjoyable!",
    imageUrl: "/assets/travel-logo.png",
    imageHint: "team collaboration interface",
    tags: ["TypeScript","React","MongoDB","Razorpay","TailwindCSS ", "RESTful APIs"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Code trasnlator)",
    description: "simple code trasnlator withe help of gen AI",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "modern portfolio design",
    tags: ["Next.js", "ShadCN UI", "TailwindCSS", "Genkit"],
    liveLink: "/", 
  },
  {
    title: "Ongoing Project)",
    description: "Avalable soon",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="group flex flex-col overflow-hidden rounded-xl shadow-sm hover:shadow-md creative-card-hover bg-card/60 backdrop-blur-sm animate-fadeIn"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <CardHeader className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-secondary/10">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl font-medium text-foreground/90 group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 pt-0 flex-grow">
              <CardDescription className="text-sm leading-relaxed mb-3 text-foreground/60">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-normal bg-accent/5 text-accent/80 group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0 flex gap-2">
              {project.repoLink && (
                <Button variant="outline" size="sm" asChild className="transition-colors hover:border-primary/50 hover:text-primary/80 hover:bg-primary/5 group/btn">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:text-primary/80 transition-colors" /> Source Code
                  </a>
                </Button>
              )}
              {project.liveLink && (
                <Button size="sm" asChild className="transition-transform hover:scale-105 group/btn bg-primary/80 hover:bg-primary/90">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:rotate-3 transition-transform" />
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
