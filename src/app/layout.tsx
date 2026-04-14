import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barbearia Estilo | Tradição e Estilo em Bauru",
  description: "A Barbearia Estilo em Bauru oferece cortes de cabelo e barba com a tradição de 60 anos no mercado. Descubra a nossa história de pai para filho.",
  keywords: ["barbearia", "barbearia estilo", "corte de cabelo bauru", "barba bauru", "tradição", "helzio alves"],
  openGraph: {
    title: "Barbearia Estilo | Experiência de Tradição",
    description: "60 anos de história no coração de Bauru. Agende seu horário com quem entende do assunto.",
    url: "https://www.barbeariaestilo.com.br",
    siteName: "Barbearia Estilo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-dark)] text-[var(--color-light)]">
        {children}
      </body>
    </html>
  );
}
