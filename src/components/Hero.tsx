"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-[20%] -bottom-[20%] will-change-transform"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1600&q=80')" }}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-20">
        <div className="max-w-2xl flex flex-col gap-6">
          {/* Pre-heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-[2px] bg-[#C59B6D]" />
            <span className="text-[#C59B6D] text-sm font-bold uppercase tracking-widest">Explore Nossos Serviços</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]"
          >
            Tradição, Corte<br />e Muita História
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl"
          >
            Sua barbearia de confiança no coração de Bauru. Cortes clássicos e modernos conduzidos por quem entende de estilo e legado.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center gap-6 mt-2"
          >
            <a href="#services"
              className="inline-flex items-center gap-2 bg-[#C59B6D] hover:bg-[#b08a5d] text-black font-bold uppercase text-sm tracking-widest px-8 py-4 transition-colors">
              Nossos Serviços <ArrowRight size={16} />
            </a>
            <button className="flex items-center gap-3 group">
              <span className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-[#C59B6D] transition-colors">
                <Play size={14} className="text-white fill-white ml-1" />
              </span>
              <span className="text-white font-semibold uppercase text-sm tracking-wider group-hover:text-[#C59B6D] transition-colors">Assistir Vídeo</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
