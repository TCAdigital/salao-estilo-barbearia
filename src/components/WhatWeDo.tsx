import { Scissors, Zap, Heart, Home } from "lucide-react";

const items = [
  { 
    icon: <Scissors size={36} />, 
    title: "Corte Social", 
    desc: "A elegância do corte clássico com acabamento moderno. Perfeito para quem busca um visual profissional e atemporal." 
  },
  { 
    icon: <Zap size={36} />,      
    title: "Corte Degrade",    
    desc: "A técnica de graduação mais refinada de Bauru. Um visual limpo, nítido e com o estilo que você merece." 
  },
  { 
    icon: <Heart size={36} />,    
    title: "Barba",        
    desc: "Design de barba com toalha quente e terapia de óleos. O cuidado que transforma um hábito em uma experiência de luxo." 
  },
  { 
    icon: <Home size={36} />,     
    title: "Atendimento a Domicílio", 
    desc: "O padrão Barbearia Estilo na comodidade do seu lar. Qualidade e história com a conveniência que o seu tempo exige." 
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#111111] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-[#C59B6D] text-sm font-bold uppercase tracking-widest block mb-3">Conheça Nossos Serviços</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Excelência em Barbearia:<br className="hidden md:block" /> Onde a Tradição Encontra o Estilo
          </h2>
          <p className="text-zinc-500 mt-6 max-w-2xl mx-auto text-base">
            Combinamos técnicas clássicas passadas por gerações com as tendências mais modernas para entregar não apenas um corte, mas um novo padrão de confiança.
          </p>
        </div>

        {/* 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group flex flex-col items-center text-center gap-5 p-10 border border-white/5 bg-[#161616] hover:bg-[#1a1a1a] hover:border-[#C59B6D]/40 transition-all duration-300">
              <div className="w-20 h-20 rounded-full border border-[#C59B6D]/30 flex items-center justify-center text-[#C59B6D] group-hover:bg-[#C59B6D] group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white group-hover:text-[#C59B6D] transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{item.desc}</p>
              <a href="#appointment" className="inline-flex items-center gap-2 text-[#C59B6D] text-xs font-bold uppercase tracking-widest mt-2 hover:translate-x-1 transition-transform">
                Agendar Horário →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
