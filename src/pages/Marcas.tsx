const brands = [
  "Massey Ferguson",
  "Valtra",
  "Precision Planting",
  "Topcon",
  "TERRIS",
];

const Marcas = () => {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">Parceiros</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-extrabold uppercase leading-none">Marcas com as Quais Trabalhamos</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Atendemos as principais marcas do mercado com peças originais e mão de obra especializada.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-5">
        {brands.map((b) => (
          <div
            key={b}
            className="group relative w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.875rem)] lg:max-w-[340px] bg-surface-2 border border-border rounded-lg h-32 flex items-center justify-center text-center px-4 shadow-elevated transition-all duration-300 ease-in-out hover:bg-[#e00000] hover:border-[#e00000] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(224,0,0,0.28)]"
          >
            <span className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-primary transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            <span className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-foreground transition-colors duration-300 ease-in-out group-hover:text-white">
              {b}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marcas;
