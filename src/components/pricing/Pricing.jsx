import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const Pricing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: 0,
      features: [
        { label: 'Executive Dashboard', included: true },
        { label: 'Global Collaboration', included: true },
        { label: 'Intelligent Automation', included: false },
        { label: 'Enterprise Security', included: false },
      ],
      cta: 'Start for Free'
    },
    {
      name: 'Pro',
      price: 49,
      features: [
        { label: 'Executive Dashboard', included: true },
        { label: 'Global Collaboration', included: true },
        { label: 'Intelligent Automation', included: true },
        { label: 'Enterprise Security', included: true },
      ],
      cta: 'Get Pro'
    },
    {
      name: 'Enterprise',
      price: 199,
      features: [
        { label: 'Executive Dashboard', included: true },
        { label: 'Global Collaboration', included: true },
        { label: 'Intelligent Automation', included: true },
        { label: 'Enterprise Security', included: true },
      ],
      cta: 'Contact Sales'
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin tracking-wider">PRICING</h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-900 border border-gray-800 rounded-lg overflow-hidden ${
                  isMenuOpen ? 'opacity-50 pointer-events-none' : ''
                }`}
              >
                <div className="bg-gray-800 py-6 px-8 text-center">
                  <h3 className="text-2xl font-light">{plan.name}</h3>
                  <div className="text-4xl font-light text-emerald-400 my-4">
                    ${plan.price}
                    {plan.price > 0 && <span className="text-sm text-gray-400">/mo</span>}
                  </div>
                </div>
                <div className="py-8 px-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400 mr-2" />
                        )}
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800 py-6 px-8 text-center">
                  <button
                    className={`px-6 py-3 rounded-md transition-colors duration-300 ${
                      plan.price > 0
                        ? 'bg-emerald-400 text-black hover:bg-emerald-300'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-gray-900 via-gray-900 to-black backdrop-blur-lg">
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-sm tracking-wider">
              FEATURES
            </a>
            <a href="#solutions" className="block text-sm tracking-wider">
              SOLUTIONS
            </a>
            <a href="#enterprise" className="block text-sm tracking-wider">
              ENTERPRISE
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Pricing;