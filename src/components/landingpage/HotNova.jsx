import React, { useState, useEffect, useRef } from 'react';
import { 
  Minus, Circle, Square, Triangle,
  ArrowUpRight, Diamond
} from 'lucide-react';

const HotNova = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      if (cursorRef.current && cursorTextRef.current) {
        const x = e.clientX - cursorRef.current.clientWidth / 2;
        const y = e.clientY - cursorRef.current.clientHeight / 2;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        cursorTextRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sections = [
    { title: "ATELIER", icon: <Circle className="w-3 h-3" strokeWidth={1} /> },
    { title: "ESSENCE", icon: <Square className="w-3 h-3" strokeWidth={1} /> },
    { title: "MÉTIER", icon: <Triangle className="w-3 h-3" strokeWidth={1} /> },
    { title: "LEGACY", icon: <Diamond className="w-3 h-3" strokeWidth={1} /> }
  ];

  const features = [
    {
      title: "Refined Intelligence",
      description: "Curated insights for the discerning",
    },
    {
      title: "Artisanal Automation",
      description: "Precision-crafted workflows",
    },
    {
      title: "Bespoke Security",
      description: "Protection worthy of haute couture",
    },
    {
      title: "Global Artifice",
      description: "Worldwide excellence, meticulously curated",
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white/90 selection:bg-white selection:text-black overflow-hidden">
      {/* Custom Cursors */}
      <div 
        ref={cursorRef}
        className="fixed w-12 h-12 border border-white/10 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200"
      />
      <div 
        ref={cursorTextRef}
        className="fixed w-24 h-24 pointer-events-none z-50 flex items-center justify-center text-[8px] tracking-[0.3em] font-extralight opacity-0 hover:opacity-100 transition-opacity duration-500"
      >
        EXPLORE
      </div>

      {/* Progress Line */}
      <div className="fixed top-0 left-0 w-full h-px bg-white/5 z-50">
        <div 
          className="h-full bg-white/20 transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-40 mix-blend-difference">
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="h-32 flex items-center justify-between">
            <div className="text-lg tracking-[0.5em] font-semibold">
              ScaffoldX
            </div>
            
            <div className="hidden md:flex items-center space-x-24">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.title.toLowerCase()}`}
                  className="group flex items-center space-x-3 opacity-50 hover:opacity-100 transition-opacity duration-700"
                >
                  <span className="text-sm tracking-[0.3em] font-semibold">
                    {section.title}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {section.icon}
                  </span>
                </a>
              ))}
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-12 h-12 flex items-center justify-center"
            >
              <Minus 
                className="text-md font-bold w-4 h-4 transition-transform duration-700"
                style={{ transform: menuOpen ? 'rotate(45deg)' : 'none' }}
                strokeWidth={1}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}
        />
        <div className="max-w-screen-lg mx-auto px-12 text-center">
          <div className="space-y-16">
            <div>
              <span className="text-[13px] tracking-[0.3em] font-light opacity-50">
                EDITION N°2
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-[0.2em] leading-relaxed">
              CRAFTING DIGITAL
              <span className="block mt-2">EXCELLENCE</span>
            </h1>
            <p className="text-sm md:text-sm tracking-[0.2em] text-white/40 font-extralight max-w-xl mx-auto leading-loose">
              A masterpiece of project sophistication, meticulously designed 
              for those who appreciate the art of refined management.
            </p>
            <div>
              <button className="group relative">
                <span className="text-[15px] tracking-[0.3em] font-extralight">
                  EXPERIENCE
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-40 ">
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 ">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="relative">
                  <div className="absolute -left-6 top-0 opacity-40 text-xs font-extralight">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="space-y-8">
                    <h3 className="text-lg tracking-[0.3em] font-extralight">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] tracking-[0.2em] text-white/50 font-extralight leading-loose">
                      {feature.description}
                    </p>
                    <div className="h-px bg-white/5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-40 border-t border-white/5">
        <div className="max-w-screen-lg mx-auto px-12 text-center">
          <p className="text-lg md:text-2xl font-light tracking-[0.2em] leading-loose mb-12">
            "The epitome of digital sophistication."
          </p>
          <div className="text-[15px] tracking-[0.3em] text-white/50 font-light">
            MAISON DE L'INNOVATION
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="flex flex-col items-center space-y-12">
            <div className="text-[15px] tracking-[0.5em] font-light opacity-60">
              HOT NOVA ·
            </div>
            <div className="text-[10px] tracking-[0.3em] text-white/40 font-light">
              CRAFTED WITH PRECISION · {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>

      {/* Menu Overlay */}
      <div className={`
        fixed inset-0 bg-black transition-all duration-1000
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="h-full flex items-center justify-center">
          <div className="text-center space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="overflow-hidden">
                <a
                  href={`#${section.title.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-2xl md:text-3xl tracking-[0.3em] font-extralight hover:text-white/50 transition-colors duration-700"
                  style={{
                    transform: menuOpen ? 'translateY(0)' : 'translateY(100%)',
                    transition: `transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s`
                  }}
                >
                  {section.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotNova;