import React, { useState } from 'react';
import { 
  CheckCircle, BarChart2, Calendar, Users, 
  ArrowRight, Menu, X, Star, MessageCircle, 
  Clock, Shield
} from 'lucide-react';

const ProjectPro = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      title: "Smart Task Management",
      description: "AI-powered task organization and intelligent workload distribution",
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Real-time Analytics",
      description: "Advanced metrics and predictive project insights",
      icon: <BarChart2 className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Team Scheduling",
      description: "Automated timeline optimization and resource allocation",
      icon: <Calendar className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Collaborative Workspace",
      description: "Unified platform for seamless team coordination",
      icon: <Users className="w-6 h-6 text-purple-500" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "This platform transformed how we manage projects. The AI features are game-changing!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "CEO at StartupX",
      content: "We've seen a 40% increase in team productivity since implementing this solution.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Team Lead at InnovateCo",
      content: "The best project management tool we've ever used. Intuitive and powerful!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                ProjectPro
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">Features</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-white">Testimonials</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white">Pricing</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center lg:text-left">
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block">Future of</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Project Management
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Experience the next generation of project management with AI-powered insights,
              real-time collaboration, and intelligent automation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 rounded-full text-lg font-semibold hover:bg-white/20 backdrop-blur-lg transition-all duration-200 flex items-center justify-center">
                Watch Demo
                <Star className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 relative" id="features">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text inline-block">
              Revolutionary Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/70 transform hover:-translate-y-1 transition-all duration-200 border border-gray-700"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-20 relative" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text inline-block">
              What Our Users Say
            </h2>
          </div>
          <div className="relative">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`w-full flex-shrink-0 transition-all duration-500 transform ${
                    index === activeTestimonial ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 mx-auto max-w-2xl border border-gray-700">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="w-6 h-6 text-purple-400 mr-2" />
                      <div className="flex-1" />
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg mb-4 text-gray-300 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeTestimonial ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                10,000+
              </div>
              <p className="text-gray-400 mt-2">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                99.9%
              </div>
              <p className="text-gray-400 mt-2">Uptime</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Enterprise
              </div>
              <p className="text-gray-400 mt-2">Grade Security</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-12 backdrop-blur-lg border border-purple-500/20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of teams already using our platform to deliver projects faster and smarter.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 
footer */}
      <footer className="py-12 border-t border-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          <div className=" items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                ProjectPro
              </span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} ProjectPro All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPro;