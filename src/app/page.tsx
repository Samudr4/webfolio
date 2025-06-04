'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Code, UserCircle, Send, Zap, Palette, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] md:min-h-screen py-24 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 dark:from-primary/30 dark:via-secondary/15 dark:to-accent/30 opacity-70 animate-gradient-xy"></div>
        </div>
        
        {/* Decorative Shapes */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-accent/30 rounded-full filter blur-3xl opacity-50 animate-pulse-slower"></div>
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-secondary/20 rounded-xl filter blur-2xl opacity-60 transform rotate-45 animate-pulse-medium"></div>

        <div className="container relative mx-auto px-4 text-center animate-fadeIn">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
            Hello, I'm <span className="text-primary drop-shadow-lg">Samudr4</span>
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed">
            Embark on a journey through innovative projects, insightful articles, and discover the passion woven into every line of code.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button asChild size="lg" className="shadow-xl hover:shadow-primary/60 transition-all duration-300 transform hover:scale-105 group">
              <Link href="/projects">
                Explore Creations <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 border-2 border-foreground/20 hover:border-accent hover:bg-accent/10">
              <Link href="/about">
                More About Me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features/Sections Overview */}
      <section className="w-full py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20 text-foreground animate-fadeIn [animation-delay:0.2s]">
            Discover <span className="text-accent">What Lies Within</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Code className="h-8 w-8 text-primary" />, title: "Projects Showcase", desc: "Dive into a variety of projects, from web applications to creative experiments. Each with a story of its own.", link: "/projects", linkText: "View Projects", delay: "0.3s" },
              { icon: <Lightbulb className="h-8 w-8 text-accent" />, title: "Blog & Insights", desc: "Read articles on technology, development practices, and my personal learnings along the way.", link: "/blog", linkText: "Explore Blog", delay: "0.5s" },
              { icon: <UserCircle className="h-8 w-8 text-secondary-foreground" />, title: "About Me", desc: "Get to know my background, skills, and the passion that drives my work in the tech industry.", link: "/about", linkText: "Discover More", delay: "0.7s" }
            ].map(feature => (
              <Card key={feature.title} className="creative-card-hover bg-card/80 backdrop-blur-sm animate-fadeIn" style={{animationDelay: feature.delay}}>
                <CardHeader className="items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 mb-4 inline-block ring-2 ring-primary/20">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-md">
                    {feature.desc}
                  </CardDescription>
                  <Button variant="link" asChild className="mt-6 p-0 text-primary group text-lg">
                    <Link href={feature.link}>{feature.linkText} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Highlight Reel / Unique Selling Proposition */}
      <section className="w-full py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Star className="h-16 w-16 text-primary mx-auto mb-8 animate-fadeIn [animation-delay:0.2s]" />
          <h2 className="text-4xl font-bold text-foreground mb-6 animate-fadeIn [animation-delay:0.4s]">Crafted with Precision & Passion</h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-12 leading-relaxed animate-fadeIn [animation-delay:0.6s]">
            Every project is an opportunity to blend cutting-edge technology with creative design, resulting in digital experiences that are both functional and delightful.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fadeIn [animation-delay:0.8s]">
            {[
              { icon: <Zap className="h-10 w-10 text-accent" />, title: "Performance", desc: "Lightning-fast load times and smooth interactions." },
              { icon: <Palette className="h-10 w-10 text-primary" />, title: "Aesthetics", desc: "Visually stunning and intuitive user interfaces." },
              { icon: <Code className="h-10 w-10 text-secondary-foreground" />, title: "Clean Code", desc: "Maintainable, scalable, and robust solutions." }
            ].map(usp => (
              <div key={usp.title} className="p-6 rounded-lg">
                <div className="flex justify-center mb-4">{usp.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{usp.title}</h3>
                <p className="text-muted-foreground">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Contact */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-accent/10 via-background to-secondary/10 dark:from-accent/20 dark:via-background dark:to-secondary/20">
        <div className="container mx-auto px-4 text-center animate-fadeIn">
          <Send className="h-16 w-16 text-primary mx-auto mb-8 transform group-hover:rotate-12 transition-transform duration-300" />
          <h2 className="text-4xl font-bold text-foreground mb-6">Let's <span className="text-accent">Connect</span> & Create</h2>
          <p className="max-w-xl mx-auto text-xl text-muted-foreground mb-10 leading-relaxed">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 group px-10 py-6 text-lg">
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
