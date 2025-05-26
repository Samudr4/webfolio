
"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Mail, Phone, Linkedin, Github, Globe, Briefcase, GraduationCap, Lightbulb, Star, Code, Sparkles } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function ResumeModal({ isOpen, setIsOpen }: ResumeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl w-[90vw] h-[90vh] p-0 flex flex-col rounded-lg shadow-2xl bg-background">
        <DialogHeader className="p-6 border-b sticky top-0 bg-background z-10">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-primary">Samudra Saikia - Resume</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-6 w-6" />
              </Button>
            </DialogClose>
          </div>
          <DialogDescription className="text-sm text-muted-foreground">
            Full Stack Alchemist & UI/UX Enthusiast - Crafting digital excellence.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8 leading-relaxed"> {/* Added leading-relaxed and increased space-y */}
          {/* Contact Information */}
          <section className="pb-6 border-b">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div className="flex items-center space-x-3"> {/* Increased space-x */}
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:hello@webfolio.com" className="text-foreground hover:text-primary text-sm">hello@webfolio.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground text-sm">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="https://linkedin.com/in/samudrasaikia" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary text-sm">linkedin.com/in/samudrasaikia</a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="https://github.com/samudrasaikia" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary text-sm">github.com/samudrasaikia</a>
              </div>
              <div className="flex items-center space-x-3 sm:col-span-2"> {/* Allow website to take full width on small screens if needed */}
                <Globe className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="https://webfolio.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary text-sm">webfolio.com</a>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <Lightbulb className="h-6 w-6 mr-2.5 text-primary" /> Professional Summary {/* Increased icon margin */}
            </h2>
            <p className="text-foreground/90">
              Dynamic and innovative Full Stack Developer with 7+ years of experience in designing, developing, and deploying scalable web applications. Proven ability to lead projects, mentor teams, and translate complex requirements into user-friendly solutions. Passionate about leveraging cutting-edge technologies and agile methodologies to drive product success and deliver exceptional user experiences.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Briefcase className="h-6 w-6 mr-2.5 text-primary" /> Experience
            </h2>
            <div className="space-y-6">
              {[
                {
                  role: "Senior Frontend Developer",
                  company: "Tech Solutions Inc.",
                  period: "Jan 2021 - Present",
                  points: [
                    "Led a team of 5 frontend developers, fostering a collaborative and high-performance environment.",
                    "Architected and implemented a new micro-frontend architecture, improving scalability and development velocity by 30%.",
                    "Drove adoption of Next.js and TypeScript, enhancing application performance and code quality.",
                    "Collaborated with UX/UI teams to design and A/B test new features, resulting in a 15% increase in user engagement.",
                  ],
                },
                {
                  role: "Full Stack Developer",
                  company: "Innovate Co.",
                  period: "Jun 2018 - Dec 2020",
                  points: [
                    "Developed and maintained full-stack applications using React, Node.js, Express, and PostgreSQL.",
                    "Integrated third-party APIs (Stripe, Twilio) to enhance platform functionality.",
                    "Optimized database queries and backend services, reducing API response times by 25%.",
                    "Participated in all phases of the SDLC, from requirements gathering to deployment and maintenance.",
                  ],
                },
                {
                  role: "Junior Web Developer",
                  company: "Startup Hub",
                  period: "Aug 2016 - May 2018",
                  points: [
                    "Contributed to the development of client websites using HTML, CSS, JavaScript, and PHP.",
                    "Assisted in creating responsive designs and ensuring cross-browser compatibility.",
                    "Gained experience with version control (Git) and agile development practices.",
                  ],
                },
              ].map((job, idx) => (
                <div key={idx} className="pl-4 border-l-2 border-primary/50 relative"> {/* Changed border color and added relative for potential future dot */}
                  {/* Optional: Add a dot marker: <div className="absolute -left-[calc(0.25rem+1px)] top-1.5 w-2 h-2 rounded-full bg-primary"></div> */}
                  <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                  <p className="text-md text-primary font-medium">{job.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
                  <ul className="list-disc list-outside ml-5 space-y-1.5 text-foreground/80"> {/* Increased space-y */}
                    {job.points.map((point, pIdx) => <li key={pIdx}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2.5 text-primary" /> Education
            </h2>
            <div className="pl-4 border-l-2 border-primary/50 space-y-4"> {/* Added space-y */}
               <div>
                <h3 className="text-lg font-semibold text-foreground">M.S. in Computer Science</h3>
                <p className="text-md text-primary font-medium">University of Advanced Technology</p>
                <p className="text-sm text-muted-foreground">Graduated: May 2016</p>
               </div>
               <div>
                <h3 className="text-lg font-semibold text-foreground">B.S. in Software Engineering</h3>
                <p className="text-md text-primary font-medium">State University</p>
                <p className="text-sm text-muted-foreground">Graduated: May 2014</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Star className="h-6 w-6 mr-2.5 text-primary" /> Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3"> {/* Adjusted sm:grid-cols-3 for better fit */}
              {[
                "JavaScript (ESNext)", "TypeScript", "React", "Next.js", "Node.js", "Express.js",
                "Python", "Django", "Flask", "SQL (PostgreSQL, MySQL)", "NoSQL (MongoDB, Firebase)",
                "HTML5", "CSS3", "Tailwind CSS", "Sass/SCSS", "RESTful APIs", "GraphQL",
                "Docker", "Kubernetes", "AWS", "Firebase", "Git/GitHub", "CI/CD",
                "Agile/Scrum", "JIRA", "UI/UX Design Principles", "Genkit", "AI Model Integration"
              ].map(skill => (
                <div key={skill} className="flex items-center space-x-2 bg-secondary/50 dark:bg-secondary/20 p-2.5 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <Code className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground/90">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects (Optional Summary) */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3 flex items-center">
               <Sparkles className="h-6 w-6 mr-2.5 text-primary" /> Notable Projects
            </h2>
             <p className="text-foreground/90">
              A portfolio of diverse projects demonstrating expertise in full-stack development, AI integration, and UI/UX design. Detailed project showcases are available on <a href="/projects" className="text-accent hover:underline font-medium" onClick={() => setIsOpen(false)}>Webfolio's projects page</a>.
            </p>
          </section>

        </div>
      </DialogContent>
    </Dialog>
  );
}
