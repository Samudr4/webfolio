"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  const buttonContent = useMemo(() => {
    if (!mounted) {
      return null;
    }

    return (
      <>
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform",
            theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
          )}
        >
          <Sun className="h-5 w-5" />
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform",
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"
          )}
        >
          <Moon className="h-5 w-5" />
        </span>
      </>
    );
  }, [mounted, theme]);

  if (!mounted) {
    // Render a placeholder or null to avoid hydration mismatch
    return <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled className="h-9 w-9 rounded-full" />;
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={handleToggle} 
      aria-label="Toggle theme" 
      className="h-9 w-9 rounded-full relative overflow-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {buttonContent}
    </Button>
  );
}
