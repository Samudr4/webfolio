
"use client"; // Required for useState

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, Zap, Brain, Code, Users, FileText, Download } from "lucide-react";
import type { Metadata } from 'next';
import { ResumeModal } from "@/components/resume-modal"; 

// Metadata can't be used in client components directly this way if we need useState
// Consider moving Metadata to a layout file or a server component parent if strict separation is needed.
// For now, we'll keep it, but be mindful if build errors occur related to client component metadata.
// export const metadata: Metadata = {
//   title: 'About Me',
//   description: 'Learn more about my background, skills, and professional experience.',
// };

const skills = [
  { name: "JavaScript (ES6+)", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "TypeScript", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "React & Next.js", icon: <Zap className="h-6 w-6 text-primary" /> },
  { name: "Node.js & Express", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "Python", icon: <Brain className="h-6 w-6 text-primary" /> },
  { name: "SQL & NoSQL Databases", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "Cloud Platforms (AWS, Firebase)", icon: <Zap className="h-6 w-6 text-primary" /> },
  { name: "Agile Methodologies", icon: <Users className="h-6 w-6 text-primary" /> },
  { name: "UI/UX Principles", icon: <Brain className="h-6 w-6 text-primary" /> },
  { name: "Genkit & AI Integration", icon: <Zap className="h-6 w-6 text-primary" /> },
];

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Led a team of frontend developers in creating responsive and performant web applications using React and Next.js. Championed innovative UI/UX solutions and mentored junior developers. Collaborated with UX/UI designers and backend teams to deliver high-quality products.",
  },
  {
    role: "Full Stack Developer",
    company: "Innovate Co.",
    period: "2018 - 2021",
    description: "Developed and maintained full-stack applications, focusing on both client-side and server-side logic. Worked extensively with Node.js, Express, and various database technologies, contributing to significant feature enhancements.",
  },
  {
    role: "Junior Web Developer",
    company: "Startup Hub",
    period: "2016 - 2018",
    description: "Gained foundational experience in web development, contributing to various projects and learning rapidly in a fast-paced startup environment. Developed a keen eye for detail and a passion for clean code.",
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
            Driven by passion, fueled by coffee, creating impactful digital experiences.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
          {/* Profile Section */}
          <div className="lg:col-span-2 flex flex-col items-center animate-fadeIn [animation-delay:0.3s]">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-primary mb-8 group">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Developer's Portrait"
                layout="fill"
                objectFit="cover"
                data-ai-hint="professional creative portrait"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h2 className="text-3xl font-semibold text-foreground">Samudra Saikia</h2>
            <p className="text-lg text-primary mt-1">Full Stack Alchemist & UI/UX Enthusiast</p>
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
                <CardTitle className="text-3xl text-primary">My Story & Philosophy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-foreground/90 text-lg leading-relaxed">
                <p>
                  Hello! I'm Samudra, a results-oriented Full Stack Developer with an insatiable curiosity for crafting elegant and efficient digital solutions. My coding journey began with a spark of fascination for how the web works, blossoming into a profound passion for software artistry.
                </p>
                <p>
                  I've had the privilege of architecting and contributing to a spectrum of projects – from dynamic e-commerce ecosystems to intelligent AI-driven applications. Challenges are my catalysts for growth, and I relentlessly pursue opportunities to learn and innovate in this ever-evolving tech landscape.
                </p>
                <p>
                  My development philosophy is rooted in <strong className="text-accent">clean code, user-centric design, and synergistic teamwork</strong>. I firmly believe that truly exceptional products emerge from the harmonious fusion of technical mastery and an empathetic understanding of user aspirations.
                </p>
                <p>
                  When I'm not immersed in code, you'll find me exploring emerging technologies, contributing to open-source initiatives, or savoring a perfectly brewed cup of coffee.
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
                className="shadow-xl overflow-hidden creative-card-hover bg-card/80 backdrop-blur-sm animate-fadeIn"
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
              >
                <CardHeader className="bg-secondary/20 dark:bg-secondary/30 p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <CardTitle className="text-2xl text-secondary-foreground mb-1 sm:mb-0">{exp.role}</CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                  </div>
                  <p className="text-xl font-semibold text-primary">{exp.company}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-foreground/90 text-lg leading-relaxed">{exp.description}</p>
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
