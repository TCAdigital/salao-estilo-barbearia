import { Scissors, Zap, Heart, Home } from "lucide-react";

const services = [
  { icon: <Scissors size={36} />, title: "Corte Social", desc: "O corte clássico com acabamento impecável, ideal para o dia a dia do homem moderno." },
  { icon: <Zap size={36} />,      title: "Corte Degrade", desc: "Técnica moderna de graduação nas laterais, garantindo um visual limpo e atualizado." },
  { icon: <Heart size={36} />,    title: "Barba",        desc: "Design e cuidado com a barba utilizando toalha quente e produtos de alta qualidade." },
  { icon: <Home size={36} />,     title: "Atendimento a Domicílio", desc: "Leve a tradição e o profissionalismo da Barbearia Estilo para o conforto da sua casa." },
];

export default function ServiceSection() {
  return (
    <section id="services"
      className="py-24 px-4 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-[#C59B6D] text-sm font-bold uppercase tracking-widest block mb-3">Serviços que oferecemos</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Excelência em Cada Detalhe
          </h2>
        </div>

        {/* 2x2 Grid (since we have 4 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div key={i}
              className="group bg-[#111111]/80 border border-white/5 p-10 flex flex-col items-center text-center gap-5 hover:bg-[#C59B6D] transition-all duration-300">
              <div className="text-[#C59B6D] group-hover:text-black transition-colors">{s.icon}</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white group-hover:text-black transition-colors">
                {s.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-black/80 transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
