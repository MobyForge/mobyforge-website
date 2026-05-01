import { Mail, MapPin, Clock,Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "hiteshraj576@gmail.com";
const WHATSAPP_NUMBER = "919035003446"; // +91 90350 03446
const WHATSAPP_MESSAGE = "Hi MobyForge 👋 — I'd love to know more about your services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-36 relative bg-paper overflow-hidden">
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-0" />
      <div className="absolute -bottom-20 left-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-0" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="text-xs font-mono tracking-[0.3em] text-primary mb-6">
              — GET IN TOUCH
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] mb-8">
              Tell us what you're <span className="italic text-gradient">building</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
              Skip the form — let's actually talk. Tap the button and we'll be chatting on WhatsApp in seconds.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: Phone, label: "PHONE", value: "+91 9035003446" },
                { icon: Clock, label: "Response time", value: "Usually within an hour" },
                { icon: MapPin, label: "Working", value: "Remote · Worldwide" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-paper transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-ink text-primary-foreground flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-semibold text-sm">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: WhatsApp CTA card */}
          <div className="lg:col-span-7">
            <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-lift overflow-hidden">
              <div className="absolute top-6 right-6 text-[10px] font-mono tracking-widest text-muted-foreground">
                
              </div>
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/15 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-[#25D366] shadow-lift mb-8 rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                  <MessageCircle className="h-10 w-10 text-white" strokeWidth={2.2} />
                </div>

                <h3 className="font-display font-black text-3xl md:text-5xl leading-[1.05] mb-5">
                  Let's chat on <span className="italic text-gradient">WhatsApp</span>.
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                  Prefer WhatsApp? Same here. It's quicker than email and honestly just easier. Hit the button and we'll get back to you soon.
                </p>

                <Button
                  asChild
                  size="xl"
                  className="rounded-full bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-lift hover:-translate-y-0.5 transition-all font-semibold"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with MobyForge on WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Message us on WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <p className="text-[11px] text-muted-foreground mt-6 font-mono">
                  opens whatsapp · +91 90350 03446 · we usually reply within an hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
