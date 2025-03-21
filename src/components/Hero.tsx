import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen bg-navy-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-left max-w-3xl">
          <h1 className="space-y-4">
            <div className="hero-text">Automate Tasks.</div>
            <div className="hero-text">Cut Costs.</div>
            <div className="hero-text gradient-text whitespace-nowrap">Boost Efficiency.</div>
          </h1>
          <p className="mt-8 text-xl text-gray-400">
            We streamline business operations with AI-powered automation, saving you time and money.
          </p>
          <div className="mt-10">
            <a
              href="https://calendly.com/mylesmerreighn"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-all flex items-center inline-flex"
            >
              Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}