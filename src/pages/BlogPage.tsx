import React from 'react';

export default function BlogPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-navy-800 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400"
              alt="Blog post"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-2">
                The Future of Business Automation
              </h2>
              <p className="text-gray-400 mb-4">
                Explore how AI is transforming business operations and what it means for your company.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}