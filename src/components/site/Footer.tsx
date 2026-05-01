import logo from "@/assets/mobyforge-logo.png";

const Footer = () => {
  return (
    <footer className="bg-ink text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-4 py-16 max-w-6xl relative">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="MobyForge" className="h-20 w-20 object-contain bg-primary-foreground/10 rounded-xl p-2" />
              <div>
                <div className="font-display font-black text-2xl">MobyForge</div>
                <div className="text-[10px] font-mono tracking-[0.2em] text-primary-foreground/60">
                  DIGITAL · CLOUD · AUTOMATION
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              A small studio building custom websites, cloud setups and
              automation systems for ambitious teams.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-mono tracking-wider text-primary-foreground/50 uppercase mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              {["About", "Services", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-primary-foreground/80 hover:text-primary-foreground transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-mono tracking-wider text-primary-foreground/50 uppercase mb-4">Get in touch</div>
            <a href="mailto:hiteshraj576@gmail.com" className="block text-lg font-display hover:text-primary transition mb-2">
              hiteshraj576@gmail.com
            </a>
            <p className="text-sm text-primary-foreground/60">
              Replies within 24 hours 
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60 font-mono">
            © {new Date().getFullYear()} MobyForge — all rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/60 font-mono">
            developed by <span className="text-primary font-semibold">MobyForge</span> ✦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
