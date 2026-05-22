import { Check, Target, Telescope, Zap } from "lucide-react";

const values = [
  "Resultado acima do discurso",
  "Transparência em cada entrega",
  "Excelência técnica como padrão",
  "Agilidade com responsabilidade",
  "Inovação aplicada ao campo",
  "Confiança construída na prática",
  "Parceria duradoura com o produtor",
];

const Sobre = () => {
  return (
    <div className="container py-16 md:py-24 max-w-5xl">
      <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">Sobre a Pulso</span>
      <h1 className="mt-3 font-display text-5xl md:text-6xl font-extrabold uppercase leading-none">Quem é a Pulso?</h1>
      
      <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
        <p>
          A Pulso Tecnologia e Serviços é uma empresa especializada em mecânica agrícola e agricultura de precisão, com atuação técnica direta no campo e foco em resultado real para o produtor. Sediada em Juara — MT, a empresa atende produtores rurais com soluções completas que unem assistência especializada, tecnologia de precisão e suporte confiável do início ao fim da operação.
        </p>
        <p>
          A Pulso também atua como concessionária Topcon — uma das marcas mais reconhecidas globalmente em tecnologia de posicionamento e agricultura de precisão. Isso significa que o produtor encontra em um só lugar equipamentos de alto nível, instalação especializada e suporte técnico contínuo.
        </p>
      </div>

      <div className="mt-16 max-w-3xl">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground">Uma história nascida do campo</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          A Pulso foi fundada por Evandro, profissional com sólida trajetória no setor agrícola. Depois de anos atuando como CLT na área, ele identificou uma lacuna real: produtores que precisavam de suporte técnico especializado mas raramente encontravam atendimento com profundidade técnica, prontidão e acompanhamento consistente. A Pulso nasce para preencher esse espaço com uma proposta mais robusta, profissional e orientada à realidade da operação agrícola.
        </p>
      </div>

      <div className="mt-16 border-l-4 border-primary bg-[#111111] p-8 md:p-10 rounded-r-xl shadow-elevated">
        <p className="font-display text-2xl md:text-3xl font-semibold text-white leading-snug">
          "Mais do que assistência técnica — a Pulso entrega produtividade com tecnologia, agilidade e confiança no campo."
        </p>
      </div>

      <div className="mt-24 grid gap-6 md:grid-cols-3">
        <div className="bg-[#111111] rounded-[12px] p-8 flex flex-col items-start border border-white/[0.08]">
          <Target className="h-10 w-10 text-[#e00000] mb-6" strokeWidth={1.5} />
          <h3 className="font-display text-2xl font-bold text-white uppercase mb-4">Missão</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            Levar ao produtor rural soluções técnicas e tecnológicas confiáveis, com excelência em atendimento, aplicação prática e foco em resultado no campo.
          </p>
        </div>
        <div className="bg-[#111111] rounded-[12px] p-8 flex flex-col items-start border border-white/[0.08]">
          <Telescope className="h-10 w-10 text-[#e00000] mb-6" strokeWidth={1.5} />
          <h3 className="font-display text-2xl font-bold text-white uppercase mb-4">Visão</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            Ser uma das principais referências do agro no médio norte de Mato Grosso em assistência técnica especializada, agricultura de precisão e soluções tecnológicas aplicadas ao campo.
          </p>
        </div>
        <div className="bg-[#111111] rounded-[12px] p-8 flex flex-col items-start border border-white/[0.08]">
          <Zap className="h-10 w-10 text-[#e00000] mb-6" strokeWidth={1.5} />
          <h3 className="font-display text-2xl font-bold text-white uppercase mb-4">Propósito</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            Existimos para impulsionar a produtividade no agro por meio de soluções técnicas especializadas, tecnologia aplicada e suporte de confiança no campo.
          </p>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground">Nossos Valores</h2>
        <p className="mt-3 text-lg text-muted-foreground">O que orienta cada decisão, cada atendimento, cada entrega da Pulso.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-4xl">
          {values.map((v) => (
            <div key={v} className="flex items-start gap-3 bg-surface-1 border border-border rounded-md p-4 transition-colors hover:border-primary/50">
              <span className="shrink-0 mt-0.5 text-[#e00000]"><Check className="h-5 w-5" strokeWidth={2.5} /></span>
              <span className="text-foreground/90 font-medium">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 pt-16 border-t border-white/10">
        <span className="text-[#e00000] font-semibold uppercase tracking-[0.2em] text-sm">Por que a Pulso?</span>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold uppercase leading-tight text-foreground max-w-3xl">
          O Espaço que Nenhuma Empresa Ocupa Sozinha
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          A Pulso reúne aquilo que raramente aparece junto no mercado: a proximidade e agilidade de quem conhece cada produtor pelo nome, a estrutura e credibilidade de uma empresa séria e especializada, e a força tecnológica de uma concessionária Topcon com profundidade técnica real.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-white mb-3">Proximidade de Quem Conhece o Campo</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Atendimento ágil, presença na operação e entendimento real da rotina do produtor rural.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-white mb-3">Estrutura Técnica Profissional</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Equipe qualificada, processos definidos e capacidade de atendimento com consistência e segurança.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-white mb-3">Tecnologia de Nível Mundial</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Concessionária Topcon com domínio completo em GPS, pilotos automáticos, Precision Planting e sistemas de correção.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
