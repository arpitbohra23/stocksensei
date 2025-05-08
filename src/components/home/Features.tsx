
import React from 'react';
import { MonitorPlay, Award, BookOpen } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white">Why Choose StockSensei</h2>
          <p className="text-gray-400 mt-4">
            Our platform offers a range of features designed to provide you with the best trading education experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl text-center border border-red-500/20">
            <div className="inline-flex items-center justify-center bg-red-500/10 w-16 h-16 rounded-full mb-6">
              <MonitorPlay className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">HD Trading Videos</h3>
            <p className="text-gray-400">
              Access high-quality trading videos with clear market analysis and trading strategy demonstrations.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl text-center border border-red-500/20">
            <div className="inline-flex items-center justify-center bg-red-500/10 w-16 h-16 rounded-full mb-6">
              <Award className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Trading Certification</h3>
            <p className="text-gray-400">
              Earn certificates upon course completion to showcase your trading expertise to potential employers or clients.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl text-center border border-red-500/20">
            <div className="inline-flex items-center justify-center bg-red-500/10 w-16 h-16 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Expert Market Mentors</h3>
            <p className="text-gray-400">
              Learn from professional traders with years of market experience and proven trading strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
