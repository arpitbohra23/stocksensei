
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Expand Your Knowledge & Skills
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-90">
              Access hundreds of interactive courses from expert instructors in programming, design, business, and more.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                  Browse Courses
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Join for Free
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <form className="flex items-center">
                <Search className="text-white/70 w-5 h-5 flex-shrink-0 mr-3" />
                <input 
                  type="text"
                  placeholder="What do you want to learn today?"
                  className="bg-transparent border-none outline-none flex-grow text-white placeholder-white/70"
                />
                <Button size="sm" className="bg-white text-brand-blue hover:bg-gray-100">
                  Search
                </Button>
              </form>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                alt="Students learning" 
                className="rounded-lg shadow-xl object-cover"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">100K+ Students</p>
                    <p className="text-gray-500 text-sm">Worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">500+ Courses</p>
                    <p className="text-gray-500 text-sm">In all categories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
