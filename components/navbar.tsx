"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BeakerIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/learn/chemistry", label: "Learn" },
    { href: "/quiz", label: "Quiz" },
    { href: "/assessment", label: "Assessment" },
  ];

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Downscroll
        setIsScrolling(true);
      } else {
        // Upscroll
        setIsScrolling(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolling
          ? "opacity-0 transition ease-in-out"
          : "opacity-100 transition ease-in-out"
      }`}
    >
      <nav className={`container flex h-16 items-center`}>
        <Link href="/" className="flex items-center space-x-2">
          <BeakerIcon className="h-6 w-6" />
          <span className="font-bold">ChemLearn</span>
        </Link>

        <div className="flex gap-6 ml-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />

          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
