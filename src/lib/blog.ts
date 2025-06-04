import { blogPosts } from './blog-data';
import type { BlogPost } from './blog-data';

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find(post => post.slug === slug);
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  return blogPosts.slice(0, limit);
} 