"use client";

const pricesList = [
  { name: "Corte Social", price: "R$ 35,00" },
  { name: "Corte Degrade", price: "R$ 40,00" },
  { name: "Barba", price: "R$ 25,00" },
  { name: "Corte Social + Barba", price: "R$ 55,00" },
  { name: "Corte Degrade + Barba", price: "R$ 60,00" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-[#C59B6D] text-sm font-bold uppercase tracking-widest block mb-3">Tabela de Preços</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Nossos Valores
          </h2>
        </div>

        {/* Simplified Price List */}
        <div className="max-w-2xl mx-auto flex flex-col gap-2">
          {pricesList.map((item, i) => (
            <div key={i} className="flex items-center justify-between border-b border-white/10 py-5 group hover:border-[#C59B6D]/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C59B6D]" />
                <span className="text-white font-medium text-lg md:text-xl group-hover:text-[#C59B6D] transition-colors">{item.name}</span>
              </div>
              <span className="text-[#C59B6D] font-bold text-xl md:text-2xl">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-500 text-sm italic">
            * Atendimento a domicílio sob consulta de taxa de deslocamento.
          </p>
        </div>
      </div>
    </section>
  );
}
