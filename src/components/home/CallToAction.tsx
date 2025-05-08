
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-bear-black">
      <div className="container mx-auto px-4">
        <div className="gradient-bg rounded-2xl p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bull-bear-pattern opacity-10"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Master the Markets?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of traders who are already learning with StockSensei. Start your journey today!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-bull-red hover:bg-gray-100">
                  Browse Courses
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Sign Up for Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
