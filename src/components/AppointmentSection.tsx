"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5514988160755"; // Bauru - SP

export default function AppointmentSection() {
  const [form, setForm] = useState({
    name: "", phone: "", service: "", date: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Olá! Gostaria de agendar um horário.`,
      `*Nome:* ${form.name}`,
      `*Telefone:* ${form.phone}`,
      `*Serviço:* ${form.service || "A confirmar"}`,
      form.date ? `*Data preferida:* ${form.date}` : null,
      form.message ? `*Observação:* ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="appointment"
      className="py-24 px-4 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#C59B6D] text-sm font-bold uppercase tracking-widest block mb-3">Agende uma Visita</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Faça Seu Agendamento
          </h2>
          <p className="text-zinc-400 mt-4 text-sm">
            Preencha os dados abaixo e clique em <strong className="text-[#C59B6D]">Confirmar</strong> — você será redirecionado ao nosso WhatsApp com tudo pronto!
          </p>
        </div>

        {/* Form → WhatsApp */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            type="text"
            placeholder="Seu Nome *"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="bg-white/5 border border-white/10 text-white placeholder-zinc-500 px-5 py-4 focus:border-[#C59B6D] focus:outline-none text-sm"
          />
          <input
            required
            type="tel"
            placeholder="Seu Telefone / WhatsApp *"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className="bg-white/5 border border-white/10 text-white placeholder-zinc-500 px-5 py-4 focus:border-[#C59B6D] focus:outline-none text-sm"
          />
          <select
            value={form.service}
            onChange={e => setForm({ ...form, service: e.target.value })}
            className="bg-[#1a1a1a] border border-white/10 text-zinc-400 px-5 py-4 focus:border-[#C59B6D] focus:outline-none text-sm"
            aria-label="Selecione um Serviço"
          >
            <option value="">Selecione um Serviço</option>
            <option>Corte de Cabelo</option>
            <option>Design de Barba</option>
            <option>Beleza & Spa</option>
            <option>Tratamentos Corporais</option>
            <option>Meditação & Massagem</option>
          </select>
          <input
            type="date"
            title="Data preferida"
            placeholder="Data preferida"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
            className="bg-white/5 border border-white/10 text-zinc-400 px-5 py-4 focus:border-[#C59B6D] focus:outline-none text-sm"
          />
          <textarea
            rows={4}
            placeholder="Observações (opcional)"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className="bg-white/5 border border-white/10 text-white placeholder-zinc-500 px-5 py-4 focus:border-[#C59B6D] focus:outline-none text-sm md:col-span-2 resize-none"
          />
          <div className="md:col-span-2 flex justify-center mt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#C59B6D] hover:bg-[#b08a5d] text-black font-bold uppercase text-sm tracking-widest px-12 py-4 transition-colors"
            >
              Confirmar pelo WhatsApp <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
