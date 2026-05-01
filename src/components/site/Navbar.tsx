import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mobyforge-logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border shadow-paper"
          : "bg-background/40 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={logo}
              alt="MobyForge logo"
              className="h-20 w-20 md:h-24 md:w-24 object-contain transition-transform group-hover:scale-105 group-hover:-rotate-3"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-xl md:text-2xl tracking-tight">
              Moby<span className="text-gradient">Forge</span>
            </span>
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-muted-foreground mt-1">
              MARKETING AGENCY
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1 bg-card/60 backdrop-blur border border-border rounded-full px-2 py-1.5 shadow-paper">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary px-4 py-2 rounded-full transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm" className="rounded-full px-5">
            <a href="#contact">Start a project →</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium py-2.5 px-3 rounded-lg text-foreground/80 hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-2 rounded-full">
              <a href="#contact" onClick={() => setOpen(false)}>Start a project</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
