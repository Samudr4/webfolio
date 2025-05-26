
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Tag, Feather } from "lucide-react";
import type { Metadata } from 'next';
import { blogPosts } from "@/lib/blog-data"; // Import data

export const metadata: Metadata = {
  title: 'Blogs and Updates',
  description: 'Read insightful articles on technology, development, and more.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 animate-fadeIn">
      <header className="mb-16 text-center">
        <Feather className="h-16 w-16 text-primary mx-auto mb-6 animate-fadeIn [animation-delay:0.1s]" />
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl animate-fadeIn [animation-delay:0.2s]">
          Blogs <span className="text-primary">and Updates</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeIn [animation-delay:0.3s]">
          Insights, tutorials, and reflections from the frontiers of technology and creative development.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <Card 
            key={post.slug} 
            className="group flex flex-col overflow-hidden rounded-xl shadow-lg creative-card-hover bg-card/80 backdrop-blur-sm animate-fadeIn"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={post.imageHint}
                className="transition-transform duration-500 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-opacity duration-300"></div>
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-md leading-relaxed">{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4 p-6 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                    <Tag className="mr-1.5 h-3.5 w-3.5"/>{tag}
                  </span>
                ))}
              </div>
              <Button variant="link" asChild className="p-0 text-primary self-end group-hover:underline text-md">
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-1.5 h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

    