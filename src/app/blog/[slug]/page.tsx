
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next';
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find(post => post.slug === slug);
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Webfolio",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: `${post.title} | Webfolio Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.imageUrl, // Ensure this is an absolute URL for OpenGraph
          width: 1200, // Example width
          height: 630, // Example height
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound(); // This will render the nearest not-found.tsx or Next.js default 404 page
  }

  return (
    <article className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl animate-fadeIn">
      <header className="mb-10">
        <Link href="/blog" className="mb-8 inline-flex items-center text-primary hover:underline group">
          <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-6">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <Tag className="mr-1.5 h-4 w-4 flex-shrink-0" />
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs bg-accent/10 text-accent hover:bg-accent/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-xl shadow-lg mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={post.imageHint}
            className="bg-muted"
            priority // Prioritize loading hero image for LCP
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </header>
      
      <div
        className="prose dark:prose-invert max-w-none text-foreground/90 text-lg leading-relaxed blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-16 pt-8 border-t border-border">
        <Button variant="outline" asChild>
          <Link href="/blog" className="group">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Explore More Posts
          </Link>
        </Button>
      </footer>
    </article>
  );
}

// Optional: For static site generation, tell Next.js which slugs to pre-render
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

    