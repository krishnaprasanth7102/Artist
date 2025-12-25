'use client';

import { useState, useEffect } from 'react';

const crafts = [
  {
    id: 1,
    title: "Ceramic Vase Collection",
    description: "Hand-thrown stoneware with natural glaze variations",
    category: "Ceramics",
    image: "https://images.unsplash.com/photo-1574732011388-8e9d1ef80f20?q=80&w=1974&auto=format&fit=crop",
    year: "2024",
    materials: ["Stoneware", "Natural Glazes", "Wood Fired"],
    dimensions: "30 × 20 cm",
  },
  {
    id: 2,
    title: "Linen Embroidery Series",
    description: "Hand-stitched botanical patterns on natural linen",
    category: "Textile Art",
    image: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    materials: ["Linen", "Silk Thread", "Natural Dyes"],
    dimensions: "45 × 45 cm",
  },
  {
    id: 3,
    title: "Walnut Wood Carvings",
    description: "Intricate carvings from reclaimed walnut wood",
    category: "Woodwork",
    image: "https://images.unsplash.com/photo-1598880940080-ff2c1c9c56d4?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
    materials: ["Walnut", "Reclaimed Wood", "Natural Oil"],
    dimensions: "25 × 15 × 10 cm",
  },
  {
    id: 4,
    title: "Paper Sculptures",
    description: "Delicate hand-cut paper forms inspired by nature",
    category: "Paper Art",
    image: "https://images.unsplash.com/photo-1583339522870-0d4f6d1a7179?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    materials: ["Archival Paper", "Japanese Washi", "Pigments"],
    dimensions: "40 × 40 cm",
  },
  {
    id: 5,
    title: "Functional Pottery",
    description: "Organic forms and textures for daily use",
    category: "Ceramics",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1934&auto=format&fit=crop",
    year: "2023",
    materials: ["Porcelain", "Local Clay", "Ash Glaze"],
    dimensions: "Various sizes",
  },
  {
    id: 6,
    title: "Hand-woven Textiles",
    description: "Traditional techniques meet contemporary design",
    category: "Textile Art",
    image: "https://images.unsplash.com/photo-1564598552160-1118c7822c0f?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    materials: ["Cotton", "Linen", "Natural Indigo"],
    dimensions: "60 × 90 cm",
  },
  {
    id: 7,
    title: "Brass Sculptures",
    description: "Lost-wax casting with patina finishes",
    category: "Metalwork",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d6f?q=80&w=1974&auto=format&fit=crop",
    year: "2024",
    materials: ["Brass", "Lost-wax", "Patina"],
    dimensions: "35 × 25 × 15 cm",
  },
  {
    id: 8,
    title: "Natural Fiber Baskets",
    description: "Woven from locally sourced plant fibers",
    category: "Fiber Art",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop",
    year: "2023",
    materials: ["Rattan", "Sea Grass", "Natural Dyes"],
    dimensions: "30 × 30 × 20 cm",
  },
  {
    id: 9,
    title: "Terracotta Relief",
    description: "Narrative scenes in baked clay",
    category: "Ceramics",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    materials: ["Terracotta", "Clay Slip", "Oxides"],
    dimensions: "50 × 70 cm",
  },
];

const processSteps = [
  {
    title: "Inspiration & Sketching",
    description: "Drawing inspiration from natural forms, traditional patterns, and cultural heritage. Each piece begins with detailed hand-drawn sketches.",
    icon: "🌿",
  },
  {
    title: "Material Sourcing",
    description: "Carefully selecting sustainable, natural materials from ethical sources. Working with local clay, reclaimed wood, and natural fibers.",
    icon: "🪵",
  },
  {
    title: "Handcrafting",
    description: "Meticulous manual work using traditional techniques. Every piece is shaped, carved, or woven by hand with focused attention.",
    icon: "✋",
  },
  {
    title: "Finishing & Patina",
    description: "Applying natural finishes, glazes, or patinas that enhance the material's inherent beauty and ensure longevity of the artwork.",
    icon: "✨",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = ['All', 'Ceramics', 'Textile Art', 'Woodwork', 'Paper Art', 'Metalwork', 'Fiber Art'];
  const filteredCrafts = activeFilter === 'All' 
    ? crafts 
    : crafts.filter(craft => craft.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('text-gold', 'border-gold');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('text-gold', 'border-gold');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#EFEAE0]/50 py-3' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-serif text-[#5D4A32] hover:text-[#D4AF37] transition-colors duration-300"
            >
              Navaneeth
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {['Home', 'About', 'Gallery', 'Process', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-serif text-[#5D4A32] hover:text-[#D4AF37] transition-colors duration-300 relative group text-lg"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#5D4A32] hover:text-[#D4AF37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#F5F1E8]/95 backdrop-blur-md border-t border-[#EFEAE0] mt-2">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'About', 'Gallery', 'Process', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left font-serif text-[#5D4A32] hover:text-[#D4AF37] transition-colors duration-300 text-lg py-3 border-b border-[#EFEAE0]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 left-10 w-48 h-48 border border-[#D4AF37]/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 border border-[#A68A64]/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-[#D4AF37]/5 rounded-full animate-spin-slow"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="inline-block mb-8">
              <span className="text-sm tracking-[0.3em] uppercase text-[#8B7355] mb-6 block">
                Handcrafted Art & Craft
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#5D4A32] mb-8 leading-[0.9] tracking-tight">
              Navaneeth
            </h1>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-10"></div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-[#8B7355] font-serif italic mb-12 max-w-3xl mx-auto leading-relaxed">
              Preserving tradition through contemporary craftsmanship
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('gallery')}
              className="group px-8 py-4 bg-[#5D4A32] text-[#F5F1E8] font-serif text-lg rounded-sm hover:bg-[#8B7355] transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              <span>View Gallery</span>
              <svg 
                className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button 
              onClick={() => scrollToSection('process')}
              className="px-8 py-4 bg-transparent border-2 border-[#5D4A32] text-[#5D4A32] font-serif text-lg rounded-sm hover:bg-[#5D4A32] hover:text-[#F5F1E8] transition-all duration-300"
            >
              Creative Process
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce flex flex-col items-center text-[#A68A64] hover:text-[#D4AF37] transition-colors duration-300"
          >
            <span className="text-sm font-serif mb-2">Explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 bg-[#FFFDF7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] uppercase text-[#8B7355] mb-4 block">
              The Artisan
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#5D4A32] mb-8">
              About Navaneeth
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#D4AF37] via-[#A68A64] to-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-[#8B7355] leading-relaxed font-light">
                  For over twelve years, Navaneeth has immersed in the world of traditional 
                  crafts, dedicating their practice to preserving age-old techniques while 
                  breathing contemporary life into each creation.
                </p>
                <p className="text-[#8B7355] leading-relaxed">
                  Working from a sunlit studio surrounded by nature's rhythms, Navaneeth 
                  finds inspiration in organic forms, natural textures, and the subtle 
                  imperfections that reveal the human hand. Each piece tells a story of 
                  material, process, and the quiet dedication required to transform raw 
                  elements into objects of beauty and meaning.
                </p>
                <p className="text-[#8B7355] leading-relaxed">
                  The work is characterized by a deep respect for materiality, a commitment 
                  to sustainable practices, and a belief that true craftsmanship lies in 
                  the harmony between tradition and innovation.
                </p>
              </div>
              
              <div className="pt-8 border-t border-[#EFEAE0]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-serif text-[#5D4A32] mb-2">12+</div>
                    <div className="text-sm text-[#8B7355]">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-[#5D4A32] mb-2">200+</div>
                    <div className="text-sm text-[#8B7355]">Artworks Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-[#5D4A32] mb-2">15</div>
                    <div className="text-sm text-[#8B7355]">Exhibitions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-[#5D4A32] mb-2">9</div>
                    <div className="text-sm text-[#8B7355]">Materials Mastered</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#EFEAE0] to-[#F5F1E8] rounded-lg overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center mix-blend-multiply"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop)',
                  }}
                ></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-[#D4AF37]/20 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 border border-[#A68A64]/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 sm:px-6 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] uppercase text-[#8B7355] mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#5D4A32] mb-8">
              Craft Gallery
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#D4AF37] via-[#A68A64] to-[#D4AF37] mx-auto"></div>
            <p className="text-[#8B7355] mt-8 max-w-2xl mx-auto">
              A curated collection of handcrafted pieces, each telling its own story through material and form.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-serif text-sm transition-all duration-300 transform hover:-translate-y-0.5 ${
                  activeFilter === category
                    ? 'bg-[#5D4A32] text-[#F5F1E8] shadow-lg'
                    : 'bg-transparent text-[#8B7355] hover:text-[#D4AF37] border border-[#A68A64] hover:border-[#D4AF37] hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCrafts.map((craft) => (
              <div 
                key={craft.id} 
                className="group relative overflow-hidden bg-[#FFFDF7] rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${craft.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif text-[#5D4A32] group-hover:text-[#D4AF37] transition-colors duration-300">
                      {craft.title}
                    </h3>
                    <span className="text-sm text-[#A68A64] font-serif">{craft.year}</span>
                  </div>
                  <p className="text-[#8B7355] mb-4 text-sm leading-relaxed">{craft.description}</p>
                  <div className="mb-4">
                    <span className="text-xs text-[#A68A64]">{craft.dimensions}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {craft.materials.map((material, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1.5 bg-[#EFEAE0] text-[#8B7355] rounded-full border border-[#EFEAE0]"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCrafts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#8B7355] text-lg">No works found in this category. Please select another filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-4 sm:px-6 bg-[#FFFDF7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] uppercase text-[#8B7355] mb-4 block">
              Methodology
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#5D4A32] mb-8">
              Creative Process
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#D4AF37] via-[#A68A64] to-[#D4AF37] mx-auto"></div>
            <p className="text-[#8B7355] mt-8 max-w-3xl mx-auto">
              Each artwork follows a journey from inspiration to completion, guided by traditional 
              techniques and mindful practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-gradient-to-br from-[#F5F1E8] to-[#EFEAE0] rounded-xl p-8 flex flex-col items-center text-center h-full transition-all duration-300 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-xl border border-[#EFEAE0]">
                  <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                  <div className="absolute top-4 right-4 text-3xl font-serif text-[#D4AF37]/20">0{index + 1}</div>
                  <h3 className="text-2xl font-serif text-[#5D4A32] mb-6">
                    {step.title}
                  </h3>
                  <p className="text-[#8B7355] text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-[#D4AF37] to-[#A68A64]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-[#F5F1E8] to-[#EFEAE0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] uppercase text-[#8B7355] mb-4 block">
              Collaboration
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#5D4A32] mb-8">
              Get in Touch
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#D4AF37] via-[#A68A64] to-[#D4AF37] mx-auto"></div>
            <p className="text-[#8B7355] mt-8 max-w-2xl mx-auto">
              For commissions, exhibition inquiries, or studio visits.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-10">
              <div>
                <h3 className="text-2xl font-serif text-[#5D4A32] mb-6 pb-4 border-b border-[#EFEAE0]">
                  Studio Information
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#EFEAE0] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#A68A64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif text-[#8B7355] mb-1">Studio Location</h4>
                      <p className="text-[#A68A64]">
                        Artisan District<br />
                        Chennai, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#EFEAE0] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#A68A64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif text-[#8B7355] mb-1">Phone / WhatsApp</h4>
                      <a 
                        href="https://wa.me/918129502212"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A68A64] hover:text-[#D4AF37] transition-colors duration-300 flex items-center group"
                      >
                        <span>+91 81295 02212</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <p className="text-xs text-[#A68A64]/80 mt-1">Click to message on WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#EFEAE0] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#A68A64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif text-[#8B7355] mb-1">Studio Visits</h4>
                      <p className="text-[#A68A64]">
                        By appointment<br />
                        Monday - Friday, 10am - 4pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-[#EFEAE0]">
                <h4 className="font-serif text-[#8B7355] mb-4">Connect with Us</h4>
                <div className="flex space-x-4">
                  {/* WhatsApp Button */}
                  <a 
                    href="https://wa.me/918129502212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    title="Message on WhatsApp"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                    </svg>
                  </a>
                  
                  {/* Instagram Button */}
                  <a 
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    title="Follow on Instagram"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                  
                  {/* Email Button (as backup) */}
                  <a 
                    href="mailto:studio@navaneeth.com"
                    className="w-12 h-12 rounded-full bg-[#8B7355] flex items-center justify-center hover:bg-[#5D4A32] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    title="Send Email"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-3.48a2 2 0 011.11 0L21 8m-18 0v9a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l6 3m-6-3l6-3m6 3l6-3m0 0v9a2 2 0 01-2 2h-6m-6-6h6m-6 0v6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-[#FFFDF7] rounded-xl p-8 md:p-12 shadow-lg border border-[#EFEAE0]">
                <div className="mb-8">
                  <h3 className="text-2xl font-serif text-[#5D4A32] mb-4">
                    Quick WhatsApp Message
                  </h3>
                  <p className="text-[#8B7355] mb-6">
                    Prefer to chat? Click below to start a conversation on WhatsApp.
                  </p>
                  <a 
                    href="https://wa.me/918129502212?text=Hello%20Navaneeth,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-serif text-lg rounded-sm hover:bg-[#128C7E] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                    </svg>
                    Start WhatsApp Chat
                  </a>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      </section> 
      {/* Footer */}
      <footer className="bg-[#5D4A32] text-[#F5F1E8] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-[#8B7355]/30">
            <div>
              <h3 className="text-3xl font-serif mb-4">Navaneeth</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Creating timeless handcrafted art that bridges traditional techniques 
                with contemporary design.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'About', 'Gallery', 'Process', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-left text-sm opacity-80 hover:opacity-100 hover:text-[#F4E9C9] transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6">Newsletter</h4>
              <p className="text-sm opacity-80 mb-4">
                Stay updated on new works and exhibitions.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-3 bg-[#8B7355]/30 text-[#F5F1E8] placeholder-[#A68A64] focus:outline-none rounded-l-sm"
                />
                <button className="px-6 bg-[#D4AF37] text-[#5D4A32] font-serif hover:bg-[#F4E9C9] transition-colors duration-300 rounded-r-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <p className="text-sm opacity-80 mb-2">
                © {new Date().getFullYear()} Navaneeth Studio. All rights reserved.
              </p>
              <p className="text-xs opacity-60">
                Handcrafted with intention and care
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-[#F4E9C9] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-[#F4E9C9] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-[#F4E9C9] transition-colors duration-300">
                Credits
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-[#5D4A32] text-[#F5F1E8] rounded-full flex items-center justify-center shadow-xl hover:bg-[#8B7355] transition-all duration-300 transform hover:-translate-y-1 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .text-gold {
          color: #D4AF37;
        }
        
        .border-gold {
          border-color: #D4AF37;
        }
      `}</style>
    </div>
  );
}