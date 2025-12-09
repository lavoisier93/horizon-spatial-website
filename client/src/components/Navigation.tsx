import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "Solutions", href: "/solutions" },
    { name: "Projets", href: "/projets" },
    { name: "À Propos", href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="relative w-10 h-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
              <span className="text-white font-heading font-bold text-xl">H</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-50" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none tracking-tight">
                Horizon Spatial
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                Intelligence Territoriale
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary cursor-pointer relative group",
                  location === link.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  location === link.href ? "w-full" : ""
                )} />
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="font-heading font-semibold rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
              Contactez-nous
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className="block py-2 text-lg font-medium hover:text-primary cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
              Contactez-nous
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
