"use client";

import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "5514988160755"; // Bauru - SP

// Ícone SVG oficial do WhatsApp
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

const steps = [
  {
    message: "Olá! Bem-vindo à **Barbearia Estilo** 💈\nComo podemos ajudar hoje?",
    options: [
      { label: "💇‍♂️ Corte Social", value: "Corte Social" },
      { label: "⚡ Corte Degrade", value: "Corte Degrade" },
      { label: "🧔 Design de Barba", value: "Design de Barba" },
      { label: "🏠 Atendimento a Domicílio", value: "Atendimento a Domicílio" },
      { label: "❓ Tenho uma dúvida", value: "duvida" },
    ],
  },
];

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");

  const handleSelect = (value: string) => {
    setService(value);
    setStep(1);
  };

  const handleConfirm = () => {
    const text =
      service === "duvida"
        ? "Olá! Gostaria de tirar uma dúvida sobre os serviços da Barbearia Estilo."
        : `Olá! Gostaria de agendar: *${service}*. Podem me ajudar?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setIsOpen(false);
    setStep(0);
    setService("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Pulse rings */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 pointer-events-none" />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar atendimento" : "Abrir atendimento WhatsApp"}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: "#25D366" }}
        >
          {isOpen
            ? <X size={24} className="text-white" />
            : <WhatsAppIcon size={28} />
          }
        </button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 z-50 flex flex-col shadow-2xl border border-white/10 overflow-hidden"
          style={{ borderRadius: "12px" }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: "#075E54" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#25D366" }}>
              <WhatsAppIcon size={22} />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Barbearia Estilo</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 text-xs">Atendimento Online</span>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex flex-col gap-4 p-4 overflow-y-auto max-h-96" style={{ backgroundColor: "#ECE5DD" }}>
            {/* Bot message + Options */}
            {step === 0 && (
              <>
                <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow text-sm text-gray-800 max-w-[85%]">
                  Olá! Bem-vindo à <strong>Barbearia Estilo</strong> 💈<br />
                  Como podemos ajudar no seu agendamento?
                </div>
                <div className="flex flex-col gap-2">
                  {steps[0].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      className="bg-white border border-[#25D366]/40 text-gray-800 text-sm text-left px-4 py-2.5 rounded-lg shadow-sm hover:bg-[#25D366] hover:text-white transition-colors font-medium"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                {/* User reply bubble */}
                <div className="self-end bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-3 shadow text-sm text-gray-800 max-w-[85%]">
                  {service === "duvida" ? "❓ Tenho uma dúvida" : service}
                </div>
                {/* Bot confirmation */}
                <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow text-sm text-gray-800 max-w-[85%]">
                  {service === "duvida"
                    ? "Sem problema! Vou te conectar agora mesmo para tirar sua dúvida. 😊"
                    : `Excelente escolha! Vou te conectar para confirmar seu horário de *${service}*. 💈`
                  }
                </div>
                <button
                  onClick={handleConfirm}
                  className="mt-1 w-full py-3 rounded-lg font-bold text-white text-sm tracking-wide shadow-lg transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: "#25D366" }}
                >
                  Continuar no WhatsApp →
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
