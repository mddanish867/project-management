import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart2, Globe, Zap, Shield,
  Menu, X, Award, ArrowUpRight,
  Plus, Minus
} from 'lucide-react';

const UltraNova = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        const x = e.clientX - cursorRef.current.clientWidth / 2;
        const y = e.clientY - cursorRef.current.clientHeight / 2;
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      title: "Executive Intelligence",
      description: "Refined analytics for strategic excellence",
      icon: <BarChart2 className="w-4 h-4" strokeWidth={1} />
    },
    {
      title: "Global Symphony",
      description: "Seamless worldwide collaboration",
      icon: <Globe className="w-4 h-4" strokeWidth={1} />
    },
    {
      title: "Neural Automation",
      description: "AI-driven workflow perfection",
      icon: <Zap className="w-4 h-4" strokeWidth={1} />
    },
    {
      title: "Sovereign Security",
      description: "Uncompromising protection protocols",
      icon: <Shield className="w-4 h-4" strokeWidth={1} />
    }
  ];

  const metrics = [
    { value: "500+", label: "Global Enterprises" },
    { value: "1M+", label: "Orchestrated Tasks" },
    { value: "50k+", label: "Elite Members" },
    { value: "120+", label: "Nations Unified" }
  ];

  const NavigationLink = ({ href, children }) => (
    <a 
      href={href}
      className="group relative overflow-hidden px-4 py-2"
    >
      <span className="relative z-10 text-xs tracking-[0.2em] font-extralight transition-colors duration-500 group-hover:text-black">
        {children}
      </span>
      <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
    </a>
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-4 h-4 border border-white/20 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference"
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-700 ${
        scrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between h-24 items-center border-b border-white/5">
            <div className="flex items-center">
              <span className="text-lg tracking-[0.5em] font-extralight">
                ULTRA NOVA
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-12">
              {['VISION', 'CRAFT', 'LEGACY'].map((item) => (
                <NavigationLink key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </NavigationLink>
              ))}
              <button className="ml-8 text-xs tracking-[0.2em] font-extralight border-b border-white/20 pb-1 hover:border-white transition-colors duration-500">
                INQUIRE
              </button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center"
            >
              {isMenuOpen ? (
                <Minus className="w-4 h-4" strokeWidth={1} />
              ) : (
                <Plus className="w-4 h-4" strokeWidth={1} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-black transition-transform duration-700 ${isMenuOpen ? 'translate-y-24' : '-translate-y-full'}
        `}>
          <div className="h-full flex flex-col items-center justify-center space-y-12 px-8">
            {['VISION', 'CRAFT', 'LEGACY'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl tracking-[0.2em] font-extralight hover:text-white/50 transition-colors duration-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
            style={{
              transform: `rotate(${(cursorPosition.x / window.innerWidth - 0.5) * 10}deg)`
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="space-y-12">
            <div className="inline-block">
              <span className="text-xs tracking-[0.2em] font-extralight border-b border-white/20 pb-1">
                EXCELLENCE REDEFINED
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extralight tracking-[0.1em] leading-relaxed">
              ELEVATING THE ART OF
              <span className="block mt-2">PROJECT MASTERY</span>
            </h1>
            <p className="text-sm md:text-base text-white/60 font-extralight tracking-wider max-w-2xl mx-auto leading-relaxed">
              Crafting sophisticated solutions for visionary organizations that demand 
              nothing less than excellence in their pursuit of perfection.
            </p>
            <div className="pt-8">
              <button className="group relative px-12 py-4 overflow-hidden">
                <span className="relative z-10 text-xs tracking-[0.2em] font-extralight transition-colors duration-500 group-hover:text-black">
                  COMMENCE
                </span>
                <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-32" id="craft">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group"
                onMouseEnter={() => setActiveSection(index)}
              >
                <div className="p-8 border border-white/5 hover:border-white/20 transition-colors duration-700">
                  <div className="flex flex-col space-y-6">
                    <div className="text-white/60 group-hover:text-white transition-colors duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-sm tracking-[0.2em] font-extralight">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-white/60 font-extralight leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-extralight tracking-wider mb-4">
                  {metric.value}
                </div>
                <div className="text-xs tracking-[0.2em] text-white/60 font-extralight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <Award className="w-6 h-6 mx-auto mb-12" strokeWidth={1} />
          <p className="text-lg md:text-xl font-extralight tracking-wider leading-relaxed mb-12">
            "An unprecedented elevation in project sophistication. 
            NOVA represents the pinnacle of management excellence."
          </p>
          <div className="text-xs tracking-[0.2em] text-white/60 font-extralight">
            DIRECTOR OF OPERATIONS · GLOBAL VENTURES
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-sm tracking-[0.5em] font-extralight">
              NOVA
            </div>
            <div className="text-xs text-white/60 font-extralight tracking-wider">
              © 2024 · ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UltraNova;