import React from 'react';
import { FileText, Video, Download } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-navy-800 p-6 rounded-lg">
            <FileText className="h-8 w-8 text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">
              Whitepapers
            </h2>
            <p className="text-gray-400 mb-4">
              In-depth research and analysis on business automation trends.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Browse Whitepapers →
            </a>
          </div>
          <div className="bg-navy-800 p-6 rounded-lg">
            <Video className="h-8 w-8 text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">
              Webinars
            </h2>
            <p className="text-gray-400 mb-4">
              Watch our expert-led sessions on automation strategies.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              View Webinars →
            </a>
          </div>
          <div className="bg-navy-800 p-6 rounded-lg">
            <Download className="h-8 w-8 text-blue-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">
              Case Studies
            </h2>
            <p className="text-gray-400 mb-4">
              Real-world examples of successful automation implementations.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Download Studies →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}