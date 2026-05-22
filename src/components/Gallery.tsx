import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import galeria1 from "@/assets/galeria-00-1200x800.webp";
import galeria2 from "@/assets/galeria-01-1200x800.webp";
import galeria3 from "@/assets/galeria-03-1200x800.webp";
import galeria4 from "@/assets/galeria-04-1200x800.webp";
import galeria5 from "@/assets/galeria-05-1200x800.webp";
import galeria6 from "@/assets/galeria-06-1200x800.webp";

const images = [
  { src: galeria1, alt: "Galeria Pulso Tecnologia — imagem 1" },
  { src: galeria2, alt: "Galeria Pulso Tecnologia — imagem 2" },
  { src: galeria3, alt: "Galeria Pulso Tecnologia — imagem 3" },
  { src: galeria4, alt: "Galeria Pulso Tecnologia — imagem 4" },
  { src: galeria5, alt: "Galeria Pulso Tecnologia — imagem 5" },
  { src: galeria6, alt: "Galeria Pulso Tecnologia — imagem 6" },
];

export const Gallery = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);

  const onNavClick = useCallback(() => {
    const autoScroll = emblaApi?.internalEngine().plugins.autoScroll;
    if (!autoScroll) return;

    autoScroll.stop();
    if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
    
    autoScrollTimer.current = setTimeout(() => {
      autoScroll.play();
    }, 3000);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      onNavClick();
    }
  }, [emblaApi, onNavClick]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      onNavClick();
    }
  }, [emblaApi, onNavClick]);

  const close = useCallback(() => setOpenIndex(null), []);
  const modalPrev = useCallback(() => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)), []);
  const modalNext = useCallback(() => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") modalPrev();
      if (e.key === "ArrowRight") modalNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, modalPrev, modalNext]);

  return (
    <section className="bg-[#0d0d0d] py-12 md:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[2px]">
            Galeria
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold uppercase leading-tight text-foreground">
            Tecnologia Agrícola em <span className="text-primary">Ação</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-[640px] mx-auto leading-relaxed">
            Conheça o trabalho que realizamos no campo — precisão, tecnologia e resultado para o produtor.
          </p>
        </div>
      </div>

      <div className="mt-12 relative group/gallery">
        {/* Carousel Container */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6 px-6">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setOpenIndex(i)}
                className="relative shrink-0 w-[85vw] sm:w-[420px] md:w-[480px] lg:w-[560px] aspect-[3/2] overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-primary/60 transition-all"
                aria-label={`Abrir imagem: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/65 text-white shadow-[0_2px_12px_rgba(0,0,0,0.4)] transition-all duration-200 hover:bg-[#e00000]/85"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/65 text-white shadow-[0_2px_12px_rgba(0,0,0,0.4)] transition-all duration-200 hover:bg-[#e00000]/85"
          aria-label="Próximo"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Lightbox Modal */}
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/[0.92] animate-in fade-in"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/90 hover:text-primary transition-colors p-2"
            aria-label="Fechar"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); modalPrev(); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-primary transition-colors p-2"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <img
            src={images[openIndex].src}
            alt={images[openIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />

          <button
            onClick={(e) => { e.stopPropagation(); modalNext(); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-primary transition-colors p-2"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
};

