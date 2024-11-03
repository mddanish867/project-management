import React, { useState, useEffect, useRef } from 'react';
import { 
  Circle, Square, Triangle, Diamond,
  X, ArrowUpRight
} from 'lucide-react';

const Maison = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && cursorLabelRef.current) {
        const x = e.clientX - cursorRef.current.clientWidth / 2;
        const y = e.clientY - cursorRef.current.clientHeight / 2;
        
        requestAnimationFrame(() => {
          cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          cursorLabelRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
      }
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = [
    { title: "Collections", icon: <Circle className="w-2 h-2" /> },
    { title: "Expertise", icon: <Square className="w-2 h-2" /> },
    { title: "Heritage", icon: <Triangle className="w-2 h-2" /> },
    { title: "Atelier", icon: <Diamond className="w-2 h-2" /> }
  ];

  const features = [
    {
      title: "Immaculate Design",
      description: "Where innovation meets timeless elegance"
    },
    {
      title: "Crafted Excellence",
      description: "Perfection in every digital detail"
    },
    {
      title: "Limitless Vision",
      description: "Pushing boundaries with refined grace"
    },
    {
      title: "Divine Experience",
      description: "Seamless luxury at every interaction"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-8 h-8 border border-white/20 rounded-full pointer-events-none z-50 backdrop-blur-sm"
      />
      <div 
        ref={cursorLabelRef}
        className="fixed w-20 h-20 pointer-events-none z-50 flex items-center justify-center text-[10px] opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        DISCOVER
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-24 flex items-center justify-between">
            <div className="text-md font-bold">MAISON</div>
            
            <div className="hidden md:flex items-center space-x-16">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.title.toLowerCase()}`}
                  className="group flex items-center space-x-2 opacity-60 hover:opacity-100 transition-all duration-500"
                >
                  <span className="text-md font-light">{section.title}</span>
                  <span className="transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    {section.icon}
                  </span>
                </a>
              ))}
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex items-center justify-center"
            >
              <X 
                className="w-4 h-4 transition-transform duration-500"
                style={{ transform: menuOpen ? 'rotate(45deg)' : 'none' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.1) 0%, transparent 60%)`
          }}
        />
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="space-y-12">
            <div className="text-sm font-light opacity-60">COLLECTION 2024</div>
            <h1 className="text-4xl md:text-6xl font-light leading-relaxed">
              Digital Artistry
              <span className="block">Redefined</span>
            </h1>
            <p className="text-md text-white/60 font-light max-w-xl mx-auto leading-relaxed">
              Where digital excellence meets timeless sophistication. 
              A masterpiece of contemporary luxury.
            </p>
            <div>
              <button className="group relative px-8 py-4">
                <span className="text-md font-light flex items-center">
                  Explore
                  <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-32 bg-black/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveSection(index)}
              >
                <div className="relative p-8 border border-white/5 backdrop-blur-sm hover:border-white/20 transition-colors duration-500">
                  <div className="absolute -left-4 -top-4 text-xs font-light opacity-40">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-lg font-light">{feature.title}</h3>
                    <p className="text-sm text-white/40 font-light leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="h-px bg-white/10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-2xl font-light leading-relaxed mb-8">
            "The pinnacle of digital sophistication"
          </p>
          <div className="text-sm text-white/40 font-light">
            VOGUE DIGITAL
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-sm font-light opacity-60">
              MAISON · PARIS
            </div>
            <div className="text-xs text-white/40 font-light">
              CRAFTED WITH PRECISION · 2024
            </div>
          </div>
        </div>
      </footer>

      {/* Menu Overlay */}
      <div className={`
        fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-700
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="h-full flex items-center justify-center">
          <div className="text-center space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="overflow-hidden">
                <a
                  href={`#${section.title.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-3xl md:text-4xl font-light hover:text-white/50 transition-colors duration-500"
                  style={{
                    transform: menuOpen ? 'translateY(0)' : 'translateY(100%)',
                    transition: `transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s`
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

export default Maison;