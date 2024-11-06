import React, { useState, useEffect, useRef } from 'react';
import { 
  Circle, Dot, Plus, ArrowUpRight,
  Diamond, Star
} from 'lucide-react';

const MaisonPro = () => {
  const [theme, setTheme] = useState('gold'); // gold, silver, noir
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  const themes = {
    gold: {
      bg: 'bg-gradient-to-b from-[#0C0B09] to-[#171614]',
      accent: 'bg-amber-700/10',
      text: 'text-amber-100/90',
      border: 'border-amber-500/10',
      highlight: 'bg-amber-500/10',
      glow: 'amber-500/5'
    },
    silver: {
      bg: 'bg-gradient-to-b from-[#0A0A0B] to-[#141419]',
      accent: 'bg-zinc-400/10',
      text: 'text-zinc-100/90',
      border: 'border-zinc-400/10',
      highlight: 'bg-zinc-400/10',
      glow: 'zinc-400/5'
    },
    noir: {
      bg: 'bg-gradient-to-b from-[#030303] to-[#0A0A0A]',
      accent: 'bg-white/5',
      text: 'text-white/90',
      border: 'border-white/10',
      highlight: 'bg-white/5',
      glow: 'white/5'
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && cursorDotRef.current) {
        const x = e.clientX - cursorRef.current.clientWidth / 2;
        const y = e.clientY - cursorRef.current.clientHeight / 2;
        
        requestAnimationFrame(() => {
          cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
      }
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = [
    { title: "Collections", icon: <Circle className="w-1 h-1" /> },
    { title: "Expertise", icon: <Diamond className="w-1 h-1" /> },
    { title: "Philosophy", icon: <Star className="w-1 h-1" /> },
    { title: "Atelier", icon: <Dot className="w-1 h-1" /> }
  ];

  const features = [
    {
      title: "Divine Detail",
      description: "Where precision meets perfection"
    },
    {
      title: "Timeless Vision",
      description: "Beyond the boundaries of ordinary"
    },
    {
      title: "Pure Excellence",
      description: "Crafted for the discerning"
    },
    {
      title: "Refined Legacy",
      description: "A heritage of distinction"
    }
  ];

  return (
    <div className={`relative min-h-screen ${themes[theme].bg} text-white overflow-hidden`}>
      {/* Ambient Background */}
      <div 
        className={`fixed inset-0 opacity-40`}
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${themes[theme].glow} 0%, transparent 60%)`
        }}
      />
      
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className={`fixed w-5 h-5 border ${themes[theme].border} rounded-full pointer-events-none z-50 mix-blend-difference`}
      />
      <div 
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Theme Switcher */}
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        {Object.keys(themes).map(t => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`w-2 h-2 rounded-full ${theme === t ? themes[t].highlight : 'bg-white/10'}`}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-black/5 backdrop-blur-[2px]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="h-20 flex items-center justify-between">
            <div className="text-lg font-semibold">N O V A P R O</div>
            
            <div className="hidden md:flex items-center space-x-12">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.title.toLowerCase()}`}
                  className="group flex items-center space-x-2 opacity-60 hover:opacity-100 transition-all duration-700"
                >
                  <span className="text-sm font-normal">{section.title}</span>
                  <span className="font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-700">
                    {section.icon}
                  </span>
                </a>
              ))}
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 flex items-center justify-center"
            >
              <Plus 
                className="w-4 h-4 transition-transform duration-700"
                style={{ transform: menuOpen ? 'rotate(50deg)' : 'none' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-8 text-center z-10">
          <div className="space-y-8">
            <div className="text-sm font-light opacity-60">EST. MMXXIV</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight">
              Artistry of Excellence
              <span className="block"></span>
            </h1>
            <p className="text-sm text-white/50 font-normal max-w-md mx-auto">
              Where vision transcends the ordinary, 
              creating moments of pure sophistication.
            </p>
            <div>
              <button className="group relative px-6 py-3">
                <span className="text-md font-normal flex items-center">
                  experience
                  <ArrowUpRight className="w-3 h-3 ml-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-px ${themes[theme].accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative py-32">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className={`relative p-8 border ${themes[theme].border} hover:bg-white/[0.02] transition-colors duration-700`}>
                  <div className="absolute -left-2 -top-2 text-sm font-normal opacity-40">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-md font-normal">{feature.title}</h3>
                    <p className="text-sm text-white/60 font-light">
                      {feature.description}
                    </p>
                    <div className={`h-px ${themes[theme].accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className={`relative py-32 border-t ${themes[theme].border}`}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-xl md:text-2xl font-normal leading-relaxed mb-6">
            "The epitome of digital refinement"
          </p>
          <div className="text-sm text-white/60 font-normal">
            VOGUE DIGITAL
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`relative py-12 border-t ${themes[theme].border}`}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-sm font-semibold opacity-60">
              NOVARPRO ·
            </div>
            <div className="text-[15px] text-white/50 font-light">
              crafted with love - {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>

      {/* Menu Overlay */}
      <div className={`
        fixed inset-0 bg-black/90 backdrop-blur-sm transition-all duration-700
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="h-full flex items-center justify-center">
          <div className="text-center space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="overflow-hidden">
                <a
                  href={`#${section.title.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-2xl md:text-3xl font-thin hover:text-white/50 transition-colors duration-500"
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

export default MaisonPro;