import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import { cn } from "@/lib/utils";

type CTA = { label: string; to?: string; href?: string };
type Slide = { bg: string; title: string; subtitle: string; cta1: CTA; cta2: CTA };

const slides: Slide[] = [
  {
    bg: hero1,
    title: "Tecnologia de Precisão no Campo",
    subtitle: "Assistência técnica especializada, agricultura de precisão e soluções tecnológicas aplicadas — com o suporte que o produtor do agro merece.",
    cta1: { label: "Conheça Nossos Serviços", to: "/servicos" },
    cta2: { label: "Fale pelo WhatsApp", href: "https://wa.me/5566996615516" },
  },
  {
    bg: hero2,
    title: "Concessionária Topcon no Médio Norte de Mato Grosso",
    subtitle: "Pilotos automáticos, sinais de correção, monitores e sistemas de precisão — tecnologia reconhecida mundialmente com suporte técnico especializado na sua região.",
    cta1: { label: "Solicitar Atendimento", to: "/contato" },
    cta2: { label: "Ver Soluções Topcon", to: "/servicos" },
  },
];

export const HeroSlider = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, [idx]);

  const prevSlide = () => setIdx(i => (i - 1 + slides.length) % slides.length);
  const nextSlide = () => setIdx(i => (i + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: 520 }}>
      {slides.map((s, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <img src={s.bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at left, hsl(0 100% 30% / 0.18), transparent 60%)" }} />

          <div className="relative h-full container flex items-center">
            <div className="max-w-2xl">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.95] text-foreground">
                {s.title}
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                {s.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider font-semibold">
                  {s.cta1.to ? <Link to={s.cta1.to}>{s.cta1.label}</Link> : <a href={s.cta1.href} target="_blank" rel="noreferrer">{s.cta1.label}</a>}
                </Button>
                <Button asChild size="lg" variant="outline" className="border-foreground/40 text-foreground hover:bg-foreground/10 hover:text-foreground uppercase tracking-wider font-semibold bg-transparent">
                  {s.cta2.to ? <Link to={s.cta2.to}>{s.cta2.label}</Link> : <a href={s.cta2.href} target="_blank" rel="noreferrer">{s.cta2.label}</a>}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-[12px] md:left-[24px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[36px] h-[36px] md:w-[44px] md:h-[44px] rounded-full bg-white/10 border border-white/25 transition-all duration-250 ease-in-out hover:bg-[#e00000]/75 hover:border-[#e00000]/50"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-white" strokeWidth={1.5} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-[12px] md:right-[24px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[36px] h-[36px] md:w-[44px] md:h-[44px] rounded-full bg-white/10 border border-white/25 transition-all duration-250 ease-in-out hover:bg-[#e00000]/75 hover:border-[#e00000]/50"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-white" strokeWidth={1.5} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              "h-1 transition-all rounded-full",
              i === idx ? "w-10 bg-primary" : "w-6 bg-foreground/40 hover:bg-foreground/70"
            )}
          />
        ))}
      </div>
    </section>
  );
};
