import React from 'react';
import { useParams } from 'react-router-dom';
import { Mail, Target, CreditCard, BarChart3 } from 'lucide-react';

const products = {
  'email-automation': {
    title: 'Email Automation',
    description: 'Automate email sequences and follow-ups to engage customers and improve conversion rates.',
    icon: Mail,
    features: [
      'Create dynamic email workflows based on user actions',
      'Schedule follow-ups and nurture leads with AI-powered personalization',
      'Analyze open rates & engagement to optimize email performance'
    ],
    benefits: [
      'Increase customer engagement',
      'Save time on manual email tasks',
      'Improve conversion rates',
      'Personalize at scale'
    ],
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1920&h=1080'
  },
  'sales-lead-generation': {
    title: 'Sales & Lead Generation',
    description: 'Leverage AI-driven prospecting and outreach to generate high-quality leads and increase revenue.',
    icon: Target,
    features: [
      'Automate lead sourcing from various online databases',
      'Score and qualify leads using AI-driven insights',
      'Trigger sales workflows to engage leads at the right time'
    ],
    benefits: [
      'Generate more qualified leads',
      'Reduce manual prospecting time',
      'Increase sales efficiency',
      'Improve conversion rates'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920&h=1080'
  },
  'billing-automation': {
    title: 'Billing Automation',
    description: 'Automate invoicing, payment processing, and reminders to eliminate manual work and reduce errors.',
    icon: CreditCard,
    features: [
      'Auto-generate invoices and send them to clients instantly',
      'Track payments in real-time and send overdue reminders automatically',
      'Integrate with accounting software for seamless financial management'
    ],
    benefits: [
      'Reduce payment delays',
      'Minimize accounting errors',
      'Improve cash flow',
      'Save time on billing tasks'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920&h=1080'
  },
  'data-analysis': {
    title: 'Data Analysis & Insights',
    description: 'Collect, process, and analyze data effortlessly to unlock business growth opportunities.',
    icon: BarChart3,
    features: [
      'Extract insights from large datasets with AI-powered analysis',
      'Automate reporting with real-time dashboards',
      'Detect patterns & trends to improve decision-making'
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify growth opportunities',
      'Predict market trends',
      'Optimize business processes'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920&h=1080'
  }
};

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? products[productId as keyof typeof products] : null;

  if (!product) {
    return <div>Product not found</div>;
  }

  const Icon = product.icon;

  return (
    <div className="pt-16">
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 to-navy-900/90" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center">
                <Icon className="h-8 w-8 text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {product.title}
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <div className="space-y-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Benefits</h2>
            <div className="space-y-4">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-navy-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Get Started</h2>
            <p className="text-gray-300 mb-8">
              Ready to transform your business with {product.title}? Contact us today for a personalized demo.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-all"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}