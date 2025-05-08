
import React from 'react';
import { Users, GraduationCap, BookOpen, Star } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-brand-blue" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">100K+</h3>
            <p className="text-gray-600 mt-1">Students</p>
          </div>
          
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-brand-purple" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600 mt-1">Courses</p>
          </div>
          
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <BookOpen className="w-6 h-6 text-brand-teal" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">12K+</h3>
            <p className="text-gray-600 mt-1">Lessons</p>
          </div>
          
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">4.8</h3>
            <p className="text-gray-600 mt-1">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
