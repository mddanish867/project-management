import React from 'react';
import { Shield, Zap, Users, Globe, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EnterprisePage() {
  const navigate = useNavigate();
  const handleContactSales = () => {
    navigate("/request-demo")
  }
  const enterpriseFeatures = [
    {
      title: "Advanced Security",
      description: "Enterprise-grade security measures to protect your sensitive data.",
      icon: <Shield className="w-12 h-12 text-emerald-400" />
    },
    {
      title: "Scalable Performance",
      description: "Seamlessly scale ScaffoldX to meet your growing enterprise needs.",
      icon: <Zap className="w-12 h-12 text-emerald-400" />
    },
    {
      title: "Dedicated Support",
      description: "24/7 priority support from our expert team.",
      icon: <Users className="w-12 h-12 text-emerald-400" />
    },
    {
      title: "Global Deployment",
      description: "Deploy ScaffoldX across your global offices with ease.",
      icon: <Globe className="w-12 h-12 text-emerald-400" />
    }
  ];

  return (
    <div className='bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white'>
      <div className="pt-32 pb-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-8">
              Enterprise
              <span className="block mt-2 font-light text-emerald-400">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Empower your enterprise with ScaffoldX's comprehensive suite of tools designed for large-scale operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="p-8 border border-gray-800 hover:border-emerald-400/50 transition-all duration-500 group">
                <div className="flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-light tracking-wider mb-4 text-center group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-thin tracking-wider mb-8">
            Elevate Your Enterprise
          </h2>
          <button 
          onClick={handleContactSales}
          className="px-12 py-4 bg-emerald-400 text-black text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center mx-auto group">
            CONTACT SALES
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}