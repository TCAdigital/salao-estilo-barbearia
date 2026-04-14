import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Cliente há 15 anos",
    content: "Frequento a barbearia desde que o Sr. Hélzio ainda jogava no Noroeste. Ver a tradição continuar com o Mateus é gratificante. O melhor corte de Bauru, sem dúvidas.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "João Paulo Aguiar",
    role: "Empresário",
    content: "O atendimento a domicílio me salvou várias vezes. Profissionalismo impecável e pontualidade. É nítido que a experiência de 60 anos faz toda a diferença no resultado final.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Felipe Caldeira",
    role: "Cliente Novo",
    content: "Procurei por indicação e virei fã do degrade. O ambiente é acolhedor e a conversa sobre futebol com o Sr. Hélzio é um bônus que não tem preço. Recomendo muito!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-[#0d0d0d] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[#C59B6D] text-sm font-bold uppercase tracking-widest block mb-3">Depoimentos</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              O que dizem nossos<br />clientes e amigos
            </h2>
          </div>
          <div className="hidden md:block">
             <Quote size={80} className="text-[#C59B6D]/10 transform -rotate-12" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#111111] p-8 border border-white/5 relative group hover:border-[#C59B6D]/40 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#C59B6D] fill-[#C59B6D]" />
                ))}
              </div>
              <p className="text-zinc-400 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/10">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{t.name}</h4>
                  <p className="text-zinc-600 text-xs font-semibold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
