import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

// Custom Instagram Icon to fix build error
const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const quickLinks = ["Início", "Nossos Serviços", "Nossa Equipe", "Fotos"];
const servicesList = ["Corte Social", "Corte Degrade", "Barba", "Atendimento a Domicílio"];

const WHATSAPP_URL = "https://wa.me/5514988160755";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Rua+Boa+Esperança+2-16+Bauru+Sao+Paulo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0d0d0d] pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image 
                  src="/barbearia_estilo.png" 
                  alt="Barbearia Estilo Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="font-[family-name:var(--font-playfair)] font-black text-white text-xl tracking-wider uppercase">
                Barbearia <span className="text-[#C59B6D]">Estilo</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Tradição e profissionalismo que atravessa gerações no coração de Bauru. 
              Sua melhor escolha para corte e barba desde 1960.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 border border-white/20 flex items-center justify-center text-zinc-400 hover:text-[#C59B6D] hover:border-[#C59B6D] transition-colors">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] font-bold text-white text-lg mb-6 uppercase tracking-wide">Links Rápidos</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a href="#" className="text-zinc-500 text-sm flex items-center gap-2 hover:text-[#C59B6D] transition-colors group">
                    <ArrowRight size={12} className="text-[#C59B6D] opacity-0 group-hover:opacity-100 transition-opacity" />{l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] font-bold text-white text-lg mb-6 uppercase tracking-wide">Serviços</h4>
            <ul className="flex flex-col gap-3">
              {servicesList.map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-zinc-500 text-sm flex items-center gap-2 hover:text-[#C59B6D] transition-colors group">
                    <ArrowRight size={12} className="text-[#C59B6D] opacity-0 group-hover:opacity-100 transition-opacity" />{s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] font-bold text-white text-lg mb-6 uppercase tracking-wide">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-zinc-500">
                <MapPin size={16} className="text-[#C59B6D] shrink-0 mt-0.5" />
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#C59B6D] transition-colors">
                  Rua Boa Esperança 2-16<br />Bauru - SP, 17013-100
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-zinc-500 hover:text-[#C59B6D] transition-colors">
                  <Phone size={16} className="text-[#C59B6D] shrink-0" />(14) 98816-0755
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-500">
                <Clock size={16} className="text-[#C59B6D] shrink-0" />Seg - Sáb, 08h - 19h
              </li>
              <li>
                <a href="mailto:contato@barbeariaestilo.com.br" className="flex items-center gap-3 text-sm text-zinc-500 hover:text-[#C59B6D] transition-colors">
                  <Mail size={16} className="text-[#C59B6D] shrink-0" />contato@barbeariaestilo.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Barbearia Estilo. Todos os direitos reservados.</p>
          <p>Tradição que passa de pai para filho em Bauru.</p>
        </div>
      </div>
    </footer>
  );
}
