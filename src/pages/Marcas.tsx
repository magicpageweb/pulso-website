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

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {brands.map((b) => (
          <div
            key={b}
            className="relative bg-surface-2 border border-border rounded-lg h-32 flex items-center justify-center text-center px-4 shadow-elevated hover:border-primary transition-colors group"
          >
            <span className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-primary group-hover:shadow-red-glow" />
            <span className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-foreground">
              {b}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marcas;
