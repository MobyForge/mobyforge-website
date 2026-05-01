import { Cloud, Code2, MessageSquare, Workflow } from "lucide-react";

const services = [
  {
    no: "01",
    icon: Code2,
    title: "Web Development",
    desc: "Custom websites, landing pages and web apps — designed from scratch, built to feel fast and look distinct.",
    points: ["Custom design + build", "wordpress,framer", "SEO & performance"],
  },
  {
    no: "02",
    icon: MessageSquare,
    title: "WhatsApp Automation",
    desc: "Turn WhatsApp into a 24/7 channel for orders, leads and support with bots that actually understand context.",
    points: ["Order & lead bots", "Auto-replies, broadcasts", "CRM integrations"],
  },
  {
    no: "03",
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Stitch your tools together. We build small back-office systems that quietly remove hours of manual work.",
    points: ["Process automation", "AI agents,n8n workflows", "API integrations"],
  },
  {
    no: "04",
    icon: Cloud,
    title: "Cloud Setup",
    desc: "Need things hosted properly? We handle deployments, environments and CI/CD so you don't have to.",
    points: ["AWS / Cloud hosting", "CI/CD pipelines", "Domains & SSL"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-36 relative bg-paper">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono tracking-[0.3em] text-primary mb-4">
              — WHAT WE DO
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] max-w-2xl">
              0ur exclusive <span className="italic text-gradient">services</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm md:text-right">
            
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border shadow-paper">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-card p-8 md:p-10 hover:bg-paper transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-sm text-muted-foreground tracking-wider">
                  {s.no}
                </span>
                <div className="h-12 w-12 rounded-xl bg-ink text-primary-foreground flex items-center justify-center group-hover:bg-ember group-hover:rotate-6 transition-all duration-500">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-foreground/70 flex items-center gap-2">
                    <span className="text-primary font-mono">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
