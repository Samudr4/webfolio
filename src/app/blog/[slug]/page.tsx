import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog';
import { BlogPost } from '@/components/blog/blog-post';
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Ensure params is properly awaited
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Ensure params is properly awaited
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound(); // This will render the nearest not-found.tsx or Next.js default 404 page
  }

  return <BlogPost post={post} />;
}

// Optional: For static site generation, tell Next.js which slugs to pre-render
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

    