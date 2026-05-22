import { Wrench, Satellite, Sprout, Radio, Gauge, Navigation, Package, GraduationCap } from "lucide-react";

const services = [
  { icon: Wrench, title: "Assistência Técnica Especializada", desc: "Manutenção e reparo de tratores, colheitadeiras, pulverizadores, plantadeiras e implementos agrícolas em geral.", isTopcon: false },
  { icon: Satellite, title: "Agricultura de Precisão", desc: "Instalação e manutenção de pilotos automáticos e sistemas de alto desempenho para elevar a eficiência da operação.", isTopcon: false },
  { icon: Sprout, title: "Precision Planting", desc: "Instalação, configuração e manutenção de sistemas Precision Planting para plantar com mais precisão e rentabilidade.", isTopcon: false },
  { icon: Radio, title: "Sinais de Correção GNSS", desc: "Comercialização e suporte de sinais RTK/NTRIP: Topcon e outras marcas. Sinal estável para operações sem pausa.", isTopcon: false },
  { icon: Gauge, title: "Equipamentos Topcon — Concessionária Oficial", desc: "Como concessionária Topcon, oferecemos o portfólio completo da marca: monitores, receptores, pilotos elétricos e hidráulicos, com especialidade na integração à linha Massey Ferguson. Tecnologia mundial com suporte técnico local.", isTopcon: true },
  { icon: Navigation, title: "Direção Automática e Autoguiagem", desc: "Instalação de sistemas hidráulicos e elétricos. Redução de sobreposições e economia de insumos.", isTopcon: false },
  { icon: Package, title: "Soluções para Alimentação Animal", desc: "Células de pesagem e monitores de balança para controle preciso da gestão do rebanho.", isTopcon: false },
  { icon: GraduationCap, title: "Suporte e Treinamento Técnico", desc: "Treinamento para que o operador domine cada tecnologia implantada e maximize os resultados.", isTopcon: false },
];

const Servicos = () => {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">O que fazemos</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-extrabold uppercase leading-none">Soluções para o Campo</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Transformamos problemas técnicos em produtividade — com conhecimento especializado e tecnologia de precisão aplicada ao campo.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {services.map(({ icon: Icon, title, desc, isTopcon }) => (
          <article
            key={title}
            className="relative bg-surface-2 border border-border rounded-lg p-7 shadow-elevated hover:border-primary/60 hover:shadow-red-glow transition-all"
          >
            {isTopcon && (
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-2 md:-translate-y-1/2 md:translate-x-4">
                <span className="bg-[#e00000] text-white text-[10px] md:text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wider shadow-lg">
                  Concessionária Oficial Topcon
                </span>
              </div>
            )}
            <Icon className="h-9 w-9 text-primary" strokeWidth={1.8} />
            <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-foreground">{title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Servicos;
