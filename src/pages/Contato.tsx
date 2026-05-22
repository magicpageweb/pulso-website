import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone inválido").max(30),
  mensagem: z.string().trim().min(5, "Mensagem muito curta").max(1000),
});

const Contato = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Revise o formulário", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const msg = `Olá! Meu nome é ${parsed.data.nome}. ${parsed.data.mensagem}`;
    const url = `https://wa.me/5566996615516?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");
    toast({ title: "Mensagem pronta!", description: "Abrimos o WhatsApp para você concluir o envio." });
    (e.target as HTMLFormElement).reset();
    setLoading(false);
  };

  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">Atendimento</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-extrabold uppercase leading-none">Fale com a Pulso</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Tire dúvidas, solicite orçamento ou agende uma visita técnica — nossa equipe responde com agilidade.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <InfoItem icon={MapPin} title="Endereço" value="Rua Marília, 1098 — Jardim Alvorada, Juara — MT" />
          <InfoItem icon={Phone} title="WhatsApp" value="(66) 99661-5516" />
          <InfoItem icon={Clock} title="Horário" value="Seg – Sex: 7h00 – 11h00 / 13h00 – 17h00 | Sábado: 7h00 – 11h00" />
          <InfoItem icon={Mail} title="E-mail" value="evandro@pulsotecnologiamt.com.br" />

          <a
            href="https://wa.me/5566996615516"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-md font-semibold uppercase tracking-wider text-white"
            style={{ backgroundColor: "#25D366" }}
          >
            <Phone className="h-4 w-4" /> Falar no WhatsApp
          </a>

          <div className="mt-6 overflow-hidden rounded-lg border border-border shadow-elevated">
            <iframe
              title="Localização Pulso"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.215584507008!2d-57.5186638!3d-11.724778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9373e9f8e8e8e8e8%3A0xe8e8e8e8e8e8e8e8!2sRua%20Mar%C3%ADlia%2C%201098%20-%20Jardim%20Alvorada%2C%20Juara%20-%20MT%2C%2078575-000!5e0!3m2!1spt-BR!2sbr!4v1714500000000!5m2!1spt-BR!2sbr"
              className="w-full h-64 grayscale-[40%] contrast-110"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-surface-2 border border-border rounded-lg p-7 shadow-elevated space-y-5">
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" name="nome" required maxLength={100} className="mt-2 bg-surface-1 border-border" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" type="email" required maxLength={255} className="mt-2 bg-surface-1 border-border" />
            </div>
            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" name="telefone" required maxLength={30} className="mt-2 bg-surface-1 border-border" />
            </div>
          </div>
          <div>
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea id="mensagem" name="mensagem" required maxLength={1000} rows={6} className="mt-2 bg-surface-1 border-border" />
          </div>
          <Button type="submit" disabled={loading} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider font-semibold">
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>
      </div>
    </div>
  );
};

const InfoItem = ({ icon: Icon, title, value }: { icon: React.ElementType; title: string; value: string }) => (
  <div className="flex items-start gap-4 bg-surface-1 border border-border rounded-md p-4">
    <Icon className="h-5 w-5 mt-0.5 text-primary shrink-0" strokeWidth={2} />
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      <div className="text-foreground font-medium mt-0.5">{value}</div>
    </div>
  </div>
);

export default Contato;
