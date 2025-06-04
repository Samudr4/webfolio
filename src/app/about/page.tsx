"use client"; // Required for useState

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, Zap, Brain, Code, Users, FileText, Download, Palette } from "lucide-react";
import type { Metadata } from 'next';
import { ResumeModal } from "@/components/resume-modal"; 
import { cn } from "@/lib/utils";

// Metadata can't be used in client components directly this way if we need useState
// Consider moving Metadata to a layout file or a server component parent if strict separation is needed.
// For now, we'll keep it, but be mindful if build errors occur related to client component metadata.
// export const metadata: Metadata = {
//   title: 'About Me',
//   description: 'Learn more about my background, skills, and professional experience.',
// };

const skills = [
  { name: "JavaScript", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "TypeScript", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "React.js & Next.js", icon: <Zap className="h-6 w-6 text-primary" /> },
  { name: "Node.js & Express", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "Python", icon: <Brain className="h-6 w-6 text-primary" /> },
  { name: "MongoDB & PostgreSQL", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "Cloud Services (AWS, Firebase, Appwrite)", icon: <Zap className="h-6 w-6 text-primary" /> },
  { name: "AI & Genkit Integration", icon: <Zap className="h-6 w-6 text-primary" /> },
  { name: "UI/UX Principles", icon: <Brain className="h-6 w-6 text-primary" /> },
  { name: "Video Editing & Graphics Design", icon: <Palette className="h-6 w-6 text-primary" /> },
];

const experiences = [
  {
    role: "Freelance",
    company: "Independent creative/developer",
    period: "2019 - Present",
    description: "Delivered custom web solutions for diverse clients across various industries. Specialized in full-stack JavaScript development, building scalable applications, e-commerce platforms, and interactive web experiences. Proficient in video editing and graphics design, I consistently met project timelines and technical requirements while maintaining high-quality standards.",
  },
  {
    role: "Senior Developer",
    company: "EncryptArx",
    period: "2024 - Present",
    description: "Led a team of frontend and backend developers in creating responsive and performant web applications using React and Next.js. Championed innovative UI/UX solutions and mentored junior developers. Collaborated with UX/UI designers and backend teams to deliver high-quality products.",
  },
  
  {
    role: "Head of Information Technology",
    company: "LDM Associates.",
    period: "2021 - 2023",
    description: "Leveraged a diverse IT skillset encompassing web development, database administration, and IT service management to ensure robust system performance and user support. Additionally, drove digital engagement through strategic corporate social media management, content creation, and video editing.",
  },
];

export default function AboutPage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 animate-fadeIn">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl animate-fadeIn [animation-delay:0.1s]">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeIn [animation-delay:0.2s]">
            Driven by passion, fueled by tea, creating impactful digital experiences.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
          {/* Profile Section */}
          <div className="lg:col-span-2 flex flex-col items-center animate-fadeIn [animation-delay:0.3s]">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-primary mb-8 group">
              <Image
                src="/assets/logo.png"
                alt="Developer's Portrait"
                layout="fill"
                objectFit="cover"
                data-ai-hint="professional creative portrait"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h2 className="text-3xl font-semibold text-foreground">Samudra K Saikia</h2>
            <p className="text-lg text-primary mt-1">Full Stack Alchemist & Video Game enthusiast</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setIsResumeModalOpen(true)} 
                className="shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 group"
                size="lg"
              >
                <FileText className="mr-2 h-5 w-5 group-hover:animate-pulse" /> View Resume
              </Button>
            </div>
          </div>

          {/* Bio Section */}
          <div className="lg:col-span-3 animate-fadeIn [animation-delay:0.4s]">
            <Card className="shadow-xl bg-card/80 backdrop-blur-sm creative-card-hover">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">My Philosophy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-foreground/90 text-lg leading-relaxed">
                <p>
                  Hello! I'm Samudra, a results-oriented Full Stack Developer with an insatiable curiosity for crafting elegant and efficient digital solutions. My coding journey began with a spark of fascination for how the web works, blossoming into a profound passion for software artistry. I've also explored the realm of Artificial Intelligence, integrating AI-driven technologies to create more intelligent and user-centric experiences.
                </p>
                <p>
                  I've had the privilege of architecting and contributing to a spectrum of projects – from dynamic Tourism, EdTech, and e-commerce ecosystems to intelligent AI-driven applications. Challenges are my catalysts for growth, and I relentlessly pursue opportunities to learn and innovate in this ever-evolving tech landscape.
                </p>
                <p>
                  My development philosophy is rooted in <strong className="text-accent">clean code, user-centric design, and synergistic teamwork</strong>. I firmly believe that truly exceptional products emerge from the harmonious fusion of technical mastery and an empathetic understanding of user aspirations.
                </p>
                <p>
                  When I'm not immersed in code, you'll find me exploring emerging technologies, Playing or streaming Video Games, or savoring a perfectly brewed cup of tea.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mt-20 animate-fadeIn [animation-delay:0.5s]">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Core <span className="text-accent">Competencies</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="p-6 text-center creative-card-hover bg-card/80 backdrop-blur-sm animate-fadeIn"
                style={{animationDelay: `${0.6 + index * 0.05}s`}}
              >
                <div className="flex justify-center mb-3 text-primary">{skill.icon}</div>
                <p className="text-md font-medium text-foreground/90">{skill.name}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-20 animate-fadeIn [animation-delay:0.7s]">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Professional <span className="text-primary">Journey</span></h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={cn(
                  "shadow-xl overflow-hidden creative-card-hover bg-card/80 backdrop-blur-sm animate-fadeIn",
                  exp.company === "LDM Associates." && "bg-[#d0e010]/10 dark:bg-[#d0e010]/20 dark:text-white",
                  exp.company === "EncryptArx" && "bg-[#06122a]/10 dark:bg-[#06122a]/20"
                )}
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
              >
                <CardHeader className={cn(
                  "p-6",
                  exp.company === "LDM Associates." ? "bg-[#d0e010]/20 dark:bg-[#d0e010]/30" : 
                  exp.company === "EncryptArx" ? "bg-[#06122a]/20 dark:bg-[#06122a]/30" :
                  "bg-secondary/20 dark:bg-secondary/30"
                )}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex items-center gap-4">
                      {exp.company === "LDM Associates." && (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                          <Image
                            src="/assets/ldm-logo.jpg"
                            alt="LDM Associates Logo"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      {exp.company === "EncryptArx" && (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                          <Image
                            src="/assets/ecx-logo.jpg"
                            alt="EncryptArx Logo"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <CardTitle className={cn(
                        "text-2xl text-secondary-foreground mb-1 sm:mb-0",
                        exp.company === "LDM Associates." && "dark:text-white"
                      )}>{exp.role}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                  </div>
                  <p className={cn(
                    "text-xl font-semibold text-primary",
                    exp.company === "LDM Associates." && "dark:text-white"
                  )}>{exp.company}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <p className={cn(
                    "text-foreground/90 text-lg leading-relaxed",
                    exp.company === "LDM Associates." && "dark:text-white/90"
                  )}>{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <ResumeModal isOpen={isResumeModalOpen} setIsOpen={setIsResumeModalOpen} />
    </>
  );
}
