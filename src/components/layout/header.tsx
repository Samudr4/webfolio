"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from "@/lib/utils";
import type { HTMLAttributeAnchorTarget } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface NavLinkProps {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, target, children, className, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} legacyBehavior passHref>
      <a
        target={target}
        onClick={onClick}
        className={cn(
          "text-md font-medium transition-all duration-200 px-3 py-2 rounded-lg", // Added padding and rounded-lg for boxy feel
          isActive
            ? "bg-primary/10 text-primary font-semibold" // Active state with background
            : "text-foreground/80 hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10", // Hover state with background
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
};


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const siteLogo = useMemo(() => (
    <Link href="/" className="flex items-center gap-0 group" aria-label="Webfolio Home">
      <span className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">Purp1eHaze</span>
    </Link>
  ), []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      isScrolled ? "border-border/60 bg-background/80 backdrop-blur-lg shadow-md" : "border-transparent bg-background/60"
    )}>
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {siteLogo}
        
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div style={{ width: 100, height: 100 }} className="transition-transform duration-300 hover:scale-110">
            <DotLottieReact 
              src="/assets/cat.lottie" 
              loop 
              autoplay 
            />
          </div>
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-foreground/70 hover:text-primary">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6 shadow-xl"> {/* Adjusted max-w and padding */}
              <div className="flex flex-col space-y-3"> {/* Reduced space-y */}
                <div onClick={() => setMobileMenuOpen(false)}>{siteLogo}</div>
                {navItems.map((item) => (
                  <NavLink 
                    key={item.href} 
                    href={item.href}
                    className="text-lg py-2.5 block w-full text-left" // Adjusted text size, padding, and alignment
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
