import React from 'react';
import { Mail, Target, CreditCard, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Email Automation',
    description: 'Automate email sequences and follow-ups to engage customers and improve conversion rates.',
    icon: Mail,
    link: '/products/email-automation',
    bgImage: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Sales & Lead Generation',
    description: 'Leverage AI-driven prospecting and outreach to generate high-quality leads and increase revenue.',
    icon: Target,
    link: '/products/sales-lead-generation',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Billing Automation',
    description: 'Automate invoicing, payment processing, and reminders to eliminate manual work and reduce errors.',
    icon: CreditCard,
    link: '/products/billing-automation',
    bgImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Data Analysis & Insights',
    description: 'Collect, process, and analyze data effortlessly to unlock business growth opportunities.',
    icon: BarChart3,
    link: '/products/data-analysis',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

export default function Products() {
  return (
    <div id="products" className="py-16 bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive suite of automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-navy-700/50 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img
                  src={product.bgImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="relative p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {product.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-4">
                  {product.description}
                </p>

                <a
                  href="https://calendly.com/mylesmerreighn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 group-hover:text-blue-300"
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}