import React, { useState, useEffect } from "react";
import {
  BarChart2,
  Shield,
  Globe,
  Zap,
  ChevronRight,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRequestDemo = () => {
    navigate("/request-demo")
  }

  const handleLearnMore = () => {
    navigate("/learn-more")
  }
  const features = [
    {
      title: "Executive Dashboard",
      description:
        "Sophisticated analytics and insights for strategic decision-making",
      icon: <BarChart2 className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "Global Collaboration",
      description: "Seamless coordination across teams and time zones",
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered workflow optimization and resource allocation",
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance measures",
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
    },
  ];

  const metrics = [
    { label: "Enterprise Clients", value: "500+" },
    { label: "Tasks Completed", value: "1M+" },
    { label: "Team Members", value: "50k+" },
    { label: "Countries", value: "120+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-8">
            Launch Your Next
            Project in 
              <span className="block mt-2 font-light text-emerald-400">
              One Click!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12">
            No manual setup, just select, click, and code! Get your development environment ready in seconds.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
              onClick={handleRequestDemo}
              className="px-12 py-4 bg-emerald-400 text-black text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300">
                Get Started
              </button>
              <button 
              onClick={handleLearnMore}
              className="px-12 py-4 border border-gray-700 text-sm tracking-wider hover:border-emerald-400 transition-colors duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-thin tracking-wider mb-4">
              REFINED CAPABILITIES
            </h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div
                  className={`p-8 border border-gray-800 hover:border-emerald-400/50 transition-all duration-500 relative ${
                    activeFeature === index ? "bg-black/50" : "bg-transparent"
                  }`}
                >
                  <div className="flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-light tracking-wider mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-light text-emerald-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm tracking-wider text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-12 h-12 text-emerald-400 mx-auto mb-8" />
            <p className="text-2xl font-light italic leading-relaxed mb-8">
              "ScaffoldX has revolutionized how we manage global projects. The level
              of sophistication and attention to detail is unmatched in the
              industry."
            </p>
            <div className="text-sm tracking-wider text-emerald-400 mb-2">
              ALEXANDRA CHEN
            </div>
            <div className="text-sm tracking-wider text-gray-400">
              CHIEF TECHNOLOGY OFFICER, FORTUNE 500
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-thin tracking-wider mb-8">
              EXPERIENCE EXCELLENCE
            </h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Join the elite circle of organizations transforming their project
              management capabilities.
            </p>
            <button className="px-12 py-4 bg-emerald-400 text-black text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center mx-auto group">
              BEGIN YOUR JOURNEY
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default LandingPage;
