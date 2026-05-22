import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Carlos Henrique Meireles",
    role: "Produtor Rural — Sorriso, MT",
    text: "A Pulso resolveu em menos de 24 horas um problema no piloto automático que estava travando nossa plantação. Atendimento técnico impecável e sem enrolação. Recomendo para qualquer produtor da região.",
    rating: 5,
  },
  {
    name: "Rogério Alves Teixeira",
    role: "Gerente de Fazenda — Campo Verde, MT",
    text: "Instalaram o sistema Precision Planting na nossa plantadeira e a diferença foi imediata. Uniformidade muito melhor, menos perda de semente. A equipe da Pulso conhece o que faz.",
    rating: 5,
  },
  {
    name: "Fernanda Cristina Borges",
    role: "Proprietária Rural — Rondonópolis, MT",
    text: "Tenho três tratores atendidos pela Pulso. Sempre pontuais, sempre com solução. É difícil achar assistência técnica com esse nível de comprometimento no interior.",
    rating: 5,
  },
  {
    name: "Adriano José Pereira",
    role: "Produtor de Soja e Milho — Primavera do Leste, MT",
    text: "O sinal de correção que a Pulso fornece é estável o dia todo. Antes tínhamos perda de sinal na parte da tarde. Agora operamos sem interrupção. Faz toda a diferença na produtividade.",
    rating: 5,
  },
  {
    name: "Marcelo Dutra Figueiredo",
    role: "Operador e Sócio — Fazenda Santa Clara, Lucas do Rio Verde, MT",
    text: "Fizeram o treinamento com nossa equipe depois da instalação do piloto automático. Todo mundo aprendeu a usar direitinho. Suporte pós-venda de verdade, não abandonam o cliente.",
    rating: 5,
  },
  {
    name: "João Batista Souza Neto",
    role: "Produtor Rural — Nova Mutum, MT",
    text: "Empresa nova na região mas com conhecimento técnico de sobra. Resolveram um problema na balança de pesagem do gado que outros não conseguiram. Virei cliente fiel da Pulso.",
    rating: 5,
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const current = testimonials[index];

  return (
    <section
      className="bg-[#111111] py-12 md:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-primary text-xs font-semibold uppercase"
            style={{ letterSpacing: "2px" }}
          >
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold uppercase leading-tight text-foreground">
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-[640px] mx-auto leading-relaxed">
            A confiança dos produtores é o nosso maior resultado.
          </p>
        </div>

        <div className="relative mt-12 max-w-3xl mx-auto">
          <div
            key={index}
            className="bg-[#1a1a1a] border border-white/[0.06] rounded-2xl p-8 md:p-10 animate-in fade-in duration-500"
          >
            <Quote className="h-10 w-10 text-primary" strokeWidth={2.4} />

            <p className="mt-5 text-base md:text-lg italic text-foreground/90 leading-relaxed">
              {current.text}
            </p>

            <div className="mt-6 flex gap-1" aria-label={`${current.rating} estrelas`}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5" fill="#f5a623" stroke="#f5a623" />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div
                aria-hidden="true"
                className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg shrink-0"
              >
                {initials(current.name)}
              </div>
              <div>
                <p className="font-display font-bold text-foreground">{current.name}</p>
                <p className="text-sm text-muted-foreground">{current.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="h-10 w-10 rounded-full border border-white/15 text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="h-10 w-10 rounded-full border border-white/15 text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
