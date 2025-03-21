import React from 'react';
import { Clock, Users, DollarSign, Zap } from 'lucide-react';

export default function Painpoints() {
  return (
    <div className="bg-navy-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Inefficiency is Costing Businesses Millions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Modern businesses waste significant time and money on repetitive, manual tasks. Without automation, companies struggle with:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-navy-700/50 rounded-2xl p-8 backdrop-blur-lg border border-navy-600">
            <Clock className="h-12 w-12 text-blue-400 mb-6" />
            <div className="text-3xl font-bold text-white mb-4">38%</div>
            <p className="text-gray-300">
              of your team's workday is lost to manual tasks that generate no revenue
            </p>
          </div>

          <div className="bg-navy-700/50 rounded-2xl p-8 backdrop-blur-lg border border-navy-600">
            <Users className="h-12 w-12 text-blue-400 mb-6" />
            <div className="text-3xl font-bold text-white mb-4">82%</div>
            <p className="text-gray-300">
              of businesses are losing customers due to slow follow-ups and delayed responses
            </p>
          </div>

          <div className="bg-navy-700/50 rounded-2xl p-8 backdrop-blur-lg border border-navy-600">
            <DollarSign className="h-12 w-12 text-blue-400 mb-6" />
            <div className="text-3xl font-bold text-white mb-4">$5T</div>
            <p className="text-gray-300">
              wasted annually through inefficient processes and avoidable errors
            </p>
          </div>

          <div className="bg-navy-700/50 rounded-2xl p-8 backdrop-blur-lg border border-navy-600">
            <Zap className="h-12 w-12 text-blue-400 mb-6" />
            <div className="text-3xl font-bold text-white mb-4">78%</div>
            <p className="text-gray-300">
              of customers choose the first company that responds to their inquiry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}