import { Github, Linkedin, Twitter, Feather } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <p className="text-center text-sm text-muted-foreground md:text-left md:col-span-1">
            &copy; {currentYear} Webfolio. All rights reserved. <br className="sm:hidden"/>
            Crafted with <span className="text-primary">&hearts;</span> and code.
          </p>

          <div className="flex items-center justify-center md:justify-end space-x-5 md:col-span-1">
            {[
              { href: "https://github.com", label: "GitHub", icon: <Github className="h-6 w-6" /> },
              { href: "https://linkedin.com", label: "LinkedIn", icon: <Linkedin className="h-6 w-6" /> },
              { href: "https://twitter.com", label: "Twitter", icon: <Twitter className="h-6 w-6" /> },
            ].map(social => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.label} 
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
