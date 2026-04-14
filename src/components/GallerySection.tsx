const photos = [
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80", label: "Corte de Cabelo" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80", label: "Design de Barba" },
  { src: "https://images.unsplash.com/photo-1593702295094-05574aa940e5?auto=format&fit=crop&w=600&q=80", label: "Estilo Clássico" },
  { src: "https://images.unsplash.com/photo-1512690196236-7abb0647c2fa?auto=format&fit=crop&w=600&q=80", label: "Barboterapia" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-4 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#C59B6D] text-sm font-bold uppercase tracking-widest block mb-3">Galeria de Fotos</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Nossos Melhores Trabalhos
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <div key={i} className="group relative overflow-hidden h-64 lg:h-80">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.src})` }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h4 className="text-white font-[family-name:var(--font-playfair)] font-bold text-xl">{p.label}</h4>
                <p className="text-[#C59B6D] text-xs uppercase tracking-widest mt-2">Barbearia Estilo</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
