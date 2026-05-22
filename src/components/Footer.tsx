import { Link } from "react-router-dom";
import logo from "@/assets/logo-white.webp";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5566996615516";

const socials = [
  { href: "#", label: "Facebook", Icon: Facebook },
  { href: "#", label: "Instagram", Icon: Instagram },
  { href: WHATSAPP_URL, label: "WhatsApp", Icon: MessageCircle },
];

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-border mt-24">
      <div className="container py-14 grid gap-10 md:grid-cols-[1.5fr_1fr_1.2fr_1fr] items-start">
        <div>
          <img src={logo} alt="Pulso" className="w-auto object-contain" style={{ height: 48 }} />
          <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Tecnologia e suporte de confiança para gerar resultado no campo.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60 max-w-xs leading-relaxed uppercase tracking-wider font-semibold">
            Concessionária Topcon | Juara — MT
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg uppercase tracking-wider text-foreground mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Início" },
              { to: "/sobre", label: "Sobre" },
              { to: "/servicos", label: "Serviços" },
              { to: "/marcas", label: "Marcas" },
              { to: "/contato", label: "Contato" },
            ].map(l => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pr-4">
          <h4 className="font-display text-lg uppercase tracking-wider text-foreground mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>(66) 99661-5516</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>
                <span className="block">Rua Marília, 1098 — Jardim Alvorada</span>
                <span className="block mt-1">Juara — MT · CEP 78575-000 · Brasil</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="mailto:evandro@pulsotecnologiamt.com.br" className="hover:text-primary transition-colors">evandro@pulsotecnologiamt.com.br</a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <div className="space-y-1">
                <span className="block">Seg – Sex: 7h00 – 11h00 / 13h00 – 17h00</span>
                <span className="block">Sábado: 7h00 – 11h00</span>
                <span className="block">Domingo: Fechado</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg uppercase tracking-wider text-foreground mb-4">Redes Sociais</h4>
          <div className="flex items-center" style={{ gap: 16 }}>
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 text-xs text-muted-foreground text-center">
          © 2026 Pulso Tecnologia e Serviços. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
