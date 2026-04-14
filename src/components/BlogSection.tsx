"use client";
import { useState } from "react";
import { Calendar, User, MessageSquare, ArrowRight, X } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80",
    date: "25 Setembro 2024",
    author: "Mateus Alves",
    comments: 5,
    title: "Guia Completo: Os Melhores Cortes de Cabelo para 2024",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque laudantium totam...",
    content: `
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.

      **Os cortes mais pedidos:**
      - Fade alto com topete
      - Undercut clássico
      - Texturizado moderno
      - Pompadour contemporâneo

      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
    `,
  },
  {
    img: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=800&q=80",
    date: "20 Setembro 2024",
    author: "Mateus Alves",
    comments: 3,
    title: "Como Cuidar da Barba em Casa: Dicas dos Profissionais",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque laudantium totam...",
    content: `
      Nosso objetivo na Barbearia Estilo é oferecer muito mais que um corte. Nossos barbeiros profissionais compartilham os segredos que utilizam no dia a dia.

      **Rotina diária recomendada:**
      - Lavagem com shampoo específico para barba
      - Aplicação de óleo hidratante
      - Penteado com pente de dentes largos
      - Finalização com balm ou pomada

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.

      A hidratação diária é fundamental para evitar o ressecamento e o coceiro. Use sempre produtos de qualidade e específicos para faces sensíveis.
    `,
  },
  {
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
    date: "15 Setembro 2024",
    author: "Mateus Alves",
    comments: 8,
    title: "Os Benefícios da Meditação para uma Rotina de Cuidados Pessoais",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque laudantium totam...",
    content: `
      O cuidado pessoal vai muito além da aparência. Integrar práticas de meditação e relaxamento à sua rotina de autocuidado pode transformar completamente a sua qualidade de vida.

      **Benefícios comprovados:**
      - Redução do estresse e ansiedade
      - Melhora na qualidade do sono
      - Aumento do foco e produtividade
      - Sensação geral de bem-estar

      Em nossa barbearia, incorporamos técnicas de relaxamento durante os serviços, transformando cada visita em uma experiência de renovação completa.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.
    `,
  },
];

type Post = typeof posts[number];

export default function BlogSection() {
  const [selected, setSelected] = useState<Post | null>(null);

  return (
    <section id="blog" className="py-24 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#C59B6D] text-sm font-bold uppercase tracking-widest block mb-3">Últimas Notícias</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Nosso Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div key={i} className="group bg-[#1a1a1a] border border-white/5 flex flex-col hover:border-[#C59B6D]/30 transition-colors">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Meta */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#C59B6D]" />{p.date}</span>
                  <span className="flex items-center gap-1.5"><User size={12} className="text-[#C59B6D]" />{p.author}</span>
                  <span className="flex items-center gap-1.5"><MessageSquare size={12} className="text-[#C59B6D]" />Coment. ({p.comments})</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white leading-snug group-hover:text-[#C59B6D] transition-colors">
                  {p.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.excerpt}</p>
                <button
                  onClick={() => setSelected(p)}
                  className="inline-flex items-center gap-2 text-[#C59B6D] text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all mt-auto pt-2 text-left"
                >
                  Leia Mais <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {selected && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#1a1a1a] border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-56 md:h-72 w-full">
              <Image
                src={selected.img}
                alt={selected.title}
                fill
                className="object-cover"
                sizes="672px"
              />
              <button
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="absolute top-4 right-4 w-10 h-10 bg-black/70 flex items-center justify-center text-white hover:bg-[#C59B6D] hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 flex flex-col gap-4">
              <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
                <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#C59B6D]" />{selected.date}</span>
                <span className="flex items-center gap-1.5"><User size={12} className="text-[#C59B6D]" />{selected.author}</span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-white leading-tight">
                {selected.title}
              </h2>
              <div className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
                {selected.content}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="mt-4 self-start inline-flex items-center gap-2 bg-[#C59B6D] hover:bg-[#b08a5d] text-black font-bold uppercase text-xs tracking-widest px-6 py-3 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
