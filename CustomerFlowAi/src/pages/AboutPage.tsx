import React from 'react';

export default function AboutPage() {
  const founders = [
    {
      name: 'Myles Merreighn',
      role: 'CEO',
      description: 'Leading the vision and strategy for Customer Flow AI, driving innovation in business automation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400'
    },
    {
      name: 'Owen Bush',
      role: 'COO',
      description: 'Overseeing operations and ensuring seamless delivery of our automation solutions to clients worldwide.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400'
    },
    {
      name: 'Hayden Merreighn',
      role: 'CMO',
      description: 'Driving market strategy and brand growth, connecting businesses with transformative automation solutions.',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400&h=400'
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
          <div className="prose prose-lg text-gray-300 max-w-3xl mx-auto">
            <p className="text-xl mb-8">
              Customer Flow AI is at the forefront of business automation, leveraging cutting-edge AI technology to streamline operations and drive growth for businesses worldwide.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses with intelligent automation solutions that drive efficiency, reduce costs, and accelerate growth in the digital age.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the global leader in AI-powered business automation, helping companies of all sizes achieve their full potential through digital transformation.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-navy-800/50 rounded-xl p-6 backdrop-blur-lg border border-navy-700">
                <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{founder.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{founder.role}</p>
                <p className="text-gray-400">{founder.description}</p>
                {founder.name === 'Myles Merreighn' && (
                  <a
                    href="https://www.linkedin.com/in/mylesmerreighn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-navy-800/50 rounded-2xl p-8 backdrop-blur-lg border border-navy-700">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8">
            Schedule a free consultation to discover how our automation solutions can help your business thrive in the digital age.
          </p>
          <a
            href="https://calendly.com/mylesmerreighn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-all"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}