import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-36 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono tracking-[0.3em] text-primary mb-4">
              — SELECTED WORK
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] max-w-2xl">
              Things we've <span className="italic text-gradient">forged</span> recently.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm md:text-right font-mono text-sm">
            {projects.length.toString().padStart(2, "0")} of many · updated regularly
          </p>
        </div>

        <div className="space-y-px bg-border rounded-3xl overflow-hidden border border-border shadow-paper">
          {projects.map((p, idx) => (
            <a
              key={p.id}
              href={p.link || "#contact"}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noopener noreferrer" : undefined}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 items-center bg-card hover:bg-paper p-6 md:p-8 transition-all duration-500"
            >
              <div className="md:col-span-1 font-mono text-sm text-muted-foreground">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display font-bold text-xl md:text-2xl group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 font-mono">{p.client}</p>
              </div>
              <div className="md:col-span-2">
                <span className="text-xs font-mono tracking-wider text-foreground/70 uppercase">
                  {p.category}
                </span>
              </div>
              <div className="md:col-span-3 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </div>
              <div className="md:col-span-2 flex md:justify-end items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground">{p.year}</span>
                <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-ember group-hover:text-primary-foreground group-hover:border-transparent group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 font-mono">
          want yours featured here next? → <a href="#contact" className="text-primary underline-offset-4 hover:underline">say hi</a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
