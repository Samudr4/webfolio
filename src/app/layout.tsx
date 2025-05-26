"use client"; // Required for useState and useEffect

import type { Metadata } from 'next'; // Keep for potential static metadata if needed elsewhere
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader'; // Import your custom Loader

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// If you need dynamic metadata, it must be handled differently in client components
// For now, static metadata object can be defined here but won't be dynamically updated by this component.
// Consider moving to a higher-level server component or layout file for dynamic titles if this becomes a client component.
// export const metadata: Metadata = {
//   title: {
//     default: 'Webfolio | Creative Developer Portfolio',
//     template: '%s | Webfolio',
//   },
//   description: 'Webfolio: Showcasing innovative development projects, insightful blog posts, and professional skills with a creative touch.',
//   // ... other metadata properties
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This timeout simulates an initial asset loading or setup phase.
    // For real-world scenarios, you might tie this to actual data fetching completion
    // or other async operations critical for the initial render.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750); // Reduced duration to 0.75 seconds
    return () => clearTimeout(timer);
  }, []);

  // Note: Managing metadata directly in a "use client" root layout has limitations.
  // For dynamic titles/descriptions per page, ensure they are set in page.tsx files
  // or a parent server component. The static metadata object above serves as a default.

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Default metadata - specific pages can override this */}
        <title>Webfolio | Creative Developer Portfolio</title>
        <meta name="description" content="Webfolio: Showcasing innovative development projects, insightful blog posts, and professional skills with a creative touch." />
        <link rel="icon" href="/assets/animated-dog-favicon.gif" type="image/gif" />
        {/* Add other common meta tags here if needed */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background font-sans`}>
        <ThemeProvider
          attribute="class" // Ensure attribute is set if not already, common for Tailwind
          defaultTheme="dark" // Changed from "system" to "dark"
          enableSystem
          disableTransitionOnChange // Optional: good for preventing theme flashes on load
          storageKey="webfolio-theme"
        >
          {isLoading ? (
            <Loader /> // Use your custom Loader component here
          ) : (
            <>
              <Header />
              <main className="flex-grow pt-0">
                {children}
              </main>
              <Footer />
            </>
          )}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
