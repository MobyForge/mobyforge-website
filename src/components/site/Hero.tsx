import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mobyforge-logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative pt-36 md:pt-44 pb-20 md:pb-32 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-[24rem] h-[24rem] rounded-full bg-accent/15 blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-ring" />
              <span className="text-xs font-mono tracking-[0.25em] text-foreground/70">
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>

            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We build the
              <br />
              <span className="italic text-gradient">quiet machines</span>
              <br />
              behind loud brands.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              MobyForge is a small digital studio crafting custom websites, cloud setups and automation systems — built to fit.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild variant="hero" size="xl" className="rounded-full">
                <a href="#contact">
                  Start a project <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-foreground px-2"
              >
                <span className="underline-sketch">See recent work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right: floating logo card */}
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative mx-auto max-w-sm">
              {/* Stamp card */}
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-lift rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-muted-foreground">
                  No. 001 / ∞
                </div>
                <div className="aspect-square rounded-2xl bg-paper flex items-center justify-center p-6 relative grain overflow-hidden">
                  <img src={logo} alt="MobyForge mark" className="w-full h-full object-contain animate-float relative z-10" />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-lg">MobyForge</div>
                    <div className="text-[11px] font-mono text-muted-foreground tracking-wider">
                      DIGITAL · CLOUD · AUTOMATION
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-ember shadow-ember flex items-center justify-center text-primary-foreground text-xs font-mono">
                    MF
                  </div>
                </div>
              </div>
              {/* sticker */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-ink text-primary-foreground flex items-center justify-center text-center font-display italic text-sm rotate-[-12deg] shadow-ink">
                hand·<br/>crafted
              </div>
            </div>
          </div>
        </div>

        {/* Tagline marquee */}
        <div className="mt-20 md:mt-28 border-y border-border py-4 overflow-hidden relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-2xl md:text-3xl font-medium">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span>Custom websites</span>
                <span className="text-primary">✦</span>
                <span className="italic text-muted-foreground">Cloud infrastructure</span>
                <span className="text-primary">✦</span>
                <span>WhatsApp automation</span>
                <span className="text-primary">✦</span>
                <span className="italic text-muted-foreground">Workflow bots</span>
                <span className="text-primary">✦</span>
                <span>AI agents</span>
                <span className="text-primary">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
