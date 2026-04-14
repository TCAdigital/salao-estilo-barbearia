"use client";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Tradição de Pai para Filho",
  "60 Anos de Mercado em Bauru",
  "Profissionalismo e História",
  "Corte e Barba com Excelência",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left: Image collage */}
        <div className="relative hidden lg:flex h-[540px]">
          {/* Big image top-left - Vintage Barber Shop */}
          <div className="absolute top-0 left-0 w-[75%] h-[90%] overflow-hidden border border-white/5 shadow-2xl z-0">
            <Image
              src="/pai-filho.jpg"
              alt="Hélzio e Mateus - Barbearia Estilo"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              sizes="500px"
              priority
            />
          </div>

          {/* Small image bottom-right - Football/Retro reference */}
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] border-8 border-[#1a1a1a] overflow-hidden shadow-2xl z-10">
            <Image
              src="/historia-noroeste.png"
              alt="História e Tradição"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              sizes="320px"
            />
          </div>

          {/* Gold accent box */}
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bottom-5 left-0 bg-[#C59B6D] px-6 py-5 text-black z-10 w-44 text-center shadow-lg"
          >
            <p className="font-[family-name:var(--font-playfair)] text-4xl font-black leading-none">+ 60</p>
            <p className="text-xs font-bold uppercase tracking-wider mt-1">Anos de Tradição</p>
          </motion.div>
        </div>

        {/* Right: Text */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-[#C59B6D]" />
            <span className="text-[#C59B6D] text-sm font-bold uppercase tracking-widest text-shadow-sm">História e Legado</span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            De Pai para Filho:<br />Uma História Escrita com Navalha
          </h2>
          <div className="flex flex-col gap-4 text-zinc-400 text-base leading-relaxed">
            <p>
              Estamos no mercado há mais de <strong>60 anos</strong>. A Barbearia Estilo é um marco em Bauru que vem passando de pai para filho desde o seu início, mantendo viva a essência da barbearia clássica.
            </p>
            <p>
              Nosso Barbeiro Sênior, <strong>Hélzio A. Aguirra Alves</strong>, traz em seu DNA a disciplina e a garra de quem já brilhou nos gramados como lateral direito do <strong>Noroeste E.C.</strong>. Essa mesma paixão ele transferiu para as cadeiras de barbeiro, onde cada corte é tratado como uma jogada de mestre.
            </p>
            <p>
              Hoje, Hélzio e seu filho <strong>Mateus Caldeira Alves</strong> conduzem o local unindo a sabedoria da tradição com as técnicas modernas, recebendo cada cliente com muita história e o mais alto nível de profissionalismo.
            </p>
          </div>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle size={16} className="text-[#C59B6D] shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-6 mt-4">
            <a href="https://wa.me/5514988160755" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#C59B6D] hover:bg-[#b08a5d] text-black font-bold uppercase text-sm tracking-widest px-8 py-4 transition-colors">
              Conhecer Pessoalmente <ArrowRight size={14} />
            </a>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#C59B6D]/30 overflow-hidden relative border border-[#C59B6D]/50 text-shadow-sm">
                 <div className="flex items-center justify-center w-full h-full text-white font-bold text-xs">HA</div>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Hélzio A. Aguirra Alves</p>
                <p className="text-zinc-500 text-xs text-shadow-sm">Barbeiro Sênior (Ex-Noroeste)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
