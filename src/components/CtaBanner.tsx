import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      className="py-20 px-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=80')" }}
    >
      <div className="absolute inset-0 bg-[#C59B6D]/90" />
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
            60 Anos Transformando Estilos
          </h2>
          <p className="text-black/80 mt-4 text-base md:text-lg max-w-xl font-medium">
            Agende seu horário com quem é referência em Bauru e sinta a diferença de um serviço que atravessa gerações.
          </p>
        </div>
        <a href="https://wa.me/5514988160755" target="_blank" rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 bg-black hover:bg-[#1a1a1a] text-white font-bold uppercase text-sm tracking-widest px-10 py-5 transition-all hover:scale-105 shadow-xl">
          Agendar pelo WhatsApp <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
