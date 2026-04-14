"use client";
import Image from "next/image";

const team = [
  {
    name: "Hélzio A. Aguirra Alves",
    role: "Barbeiro Sênior & Fundador",
    img: "/helzio.jpeg",
    desc: "Ex-jogador do Noroeste E.C. e mestre na arte da barbearia clássica com 60 anos de experiência."
  },
  {
    name: "Mateus Caldeira Alves",
    role: "Barbeiro Master & Gestor",
    img: "/mateus.jpeg",
    desc: "Unindo a tradição da família com as técnicas mais modernas de corte e visagismo."
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[#C59B6D] text-sm font-bold uppercase tracking-widest block mb-3">Nossos Especialistas</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Tradição que Passa de Pai para Filho
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Uma equipe unida pelo compromisso com a excelência e pelo legado da Barbearia Estilo em Bauru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col items-center text-center bg-[#161616] p-4 border border-white/5 hover:border-[#C59B6D]/40 transition-colors">
              <div className="relative w-full h-80 md:h-[400px] overflow-hidden mb-6">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 px-6">
                  <p className="text-[#C59B6D] text-xs font-bold uppercase tracking-widest bg-black/60 px-4 py-2">Membro da Família Alves</p>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white group-hover:text-[#C59B6D] transition-colors">
                {member.name}
              </h3>
              <p className="text-[#C59B6D] text-xs font-bold uppercase tracking-widest mt-2 mb-4">{member.role}</p>
              <p className="text-zinc-500 text-sm leading-relaxed px-4">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
