const stats = [
  { k: "Client Satisfaction", v: "98%" },
  { k: "Projects Completed", v: "6+" },
  { k: "Growth Delivered", v: "3x" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-xs font-mono tracking-[0.3em] text-primary mb-6">
          — ABOUT THE STUDIO
        </div>

        <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] mb-10 max-w-4xl">
          A small studio that takes <span className="italic text-gradient">your problem</span> personally —
          and ships software that feels considered.
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          <div className="md:col-span-2 space-y-5 text-lg text-foreground/80 leading-relaxed">
            <p>
              MobyForge is a digital solutions studio. We design and build websites,
              set up cloud infrastructure, and create automations that quietly run your
              business in the background — from WhatsApp bots to internal workflow tools.
            </p>
            <p>
              We're not a freelance marketplace and not a 200-person agency. We're a
              focused team that prefers doing fewer things, better. Every project gets
              named, scoped, and built with care.
            </p>
            <p className="font-display italic text-2xl text-foreground pt-4 border-l-2 border-primary pl-5">
              "If it's worth shipping, it's worth shaping."
            </p>
          </div>

          <div className="space-y-6">
            {stats.map((s) => (
              <div key={s.k} className="border-b border-border pb-4">
                <div className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-1">
                  {s.k}
                </div>
                <div className="font-display font-bold text-3xl text-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
