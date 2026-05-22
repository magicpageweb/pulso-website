import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WHATSAPP_HREF =
  "https://wa.me/5566996615516?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações.";

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.692 5.522l-.999 3.648 3.796-.869z" />
  </svg>
);

export const GlobalCTA = () => {
  return (
    <section className="relative py-[64px] md:py-[100px] overflow-hidden bg-white">
      {/* Background Image with Grayscale Filter (12% Opacity over White) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed pointer-events-none z-0"
        style={{ 
          backgroundImage: `url('/src/assets/hero-1.webp')`,
          filter: "grayscale(100%) saturate(0)",
          opacity: 0.12
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-[700px] mx-auto text-center">
          {/* Red Label */}
          <span
            className="inline-block text-[#e00000] text-xs font-semibold uppercase tracking-[3px]"
          >
            Fale com a nossa equipe
          </span>

          {/* Red Decorative Line */}
          <div
            className="mx-auto my-3 bg-[#e00000]"
            style={{ width: "60px", height: "3px" }}
          />

          {/* Main Title */}
          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3rem)] font-extrabold uppercase leading-tight text-[#0a0a0a]">
            Sua Operação Não Pode Parar
          </h2>

          {/* Supporting Text */}
          <p className="mt-5 text-base text-[#333333] font-normal max-w-[560px] mx-auto leading-[1.7]">
            A Pulso está pronta para atender — com diagnóstico preciso, resposta ágil e tecnologia aplicada ao campo. Fale com nossa equipe e descubra como podemos impulsionar a produtividade da sua operação.
          </p>

          {/* Buttons Area */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[16px]">
            {/* Redesigned WhatsApp Button */}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center overflow-hidden rounded-[8px] h-[52px] shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(37,211,102,0.50)] w-full sm:w-auto"
            >
              <div className="flex items-center justify-center bg-[#1a1a1a] h-full px-5 transition-colors duration-250 group-hover:bg-[#25D366]">
                <WhatsAppIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex items-center justify-center bg-[#25D366] h-full px-7 transition-colors duration-250 group-hover:bg-[#1da851]">
                <span className="text-white font-bold whitespace-nowrap">Chamar no WhatsApp</span>
              </div>
            </a>

            {/* Secondary Services Button */}
            <Button
              asChild
              variant="outline"
              className="h-[52px] px-7 border-2 border-[#0a0a0a] text-[#0a0a0a] bg-transparent hover:bg-[#0a0a0a] hover:text-white uppercase tracking-wider font-semibold rounded-[8px] transition-all w-full sm:w-auto"
            >
              <Link to="/servicos">Ver Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

