"use client";
import { useState } from "react";
import { Phone, Clock, Menu, X } from "lucide-react";
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

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Serviços", href: "#services" },
  { label: "Fotos", href: "#gallery" },
  { label: "Preços", href: "#pricing" },
  { label: "Contato", href: "#contact" },
];

const WHATSAPP_URL = "https://wa.me/5514988160755";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#111111] border-b border-white/10 px-4 md:px-12 py-2 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C59B6D] transition-colors">
            <Phone size={12} className="text-[#C59B6D]" />
            Ligue ou WhatsApp: (14) 98816-0755
          </a>
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-[#C59B6D]" />
            Horário: Seg - Sáb, 08h - 19h
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Instagram" className="flex items-center gap-2 text-zinc-400 hover:text-[#C59B6D] transition-colors text-xs font-bold uppercase tracking-widest">
            <InstagramIcon size={14} className="text-[#C59B6D]" /> Instagram
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-[#1c1c1c]/95 backdrop-blur-sm px-4 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/barbearia_estilo.png" 
              alt="Barbearia Estilo Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <span className="font-[family-name:var(--font-playfair)] font-black text-white text-2xl tracking-tighter uppercase">
            Barbearia <span className="text-[#C59B6D]">Estilo</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-white hover:text-[#C59B6D] transition-colors flex items-center gap-1">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center bg-[#C59B6D] hover:bg-[#b08a5d] text-black font-bold uppercase text-xs tracking-widest px-6 py-3 transition-colors">
          Agendar Horário
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white">
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1c1c1c] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
              className="text-white font-semibold uppercase text-sm border-b border-white/10 pb-3 hover:text-[#C59B6D] transition-colors">
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
            className="bg-[#C59B6D] text-black font-bold uppercase text-sm py-3 text-center mt-2 hover:bg-[#b08a5d] transition-colors">
            Agendar Horário
          </a>
        </div>
      )}
    </header>
  );
}
