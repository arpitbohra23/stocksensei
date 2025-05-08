
import React from 'react';
import { MonitorPlay, Award, BookOpen } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose EduSpace</h2>
          <p className="text-gray-600 mt-4">
            Our platform offers a range of features designed to provide you with the best online learning experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="inline-flex items-center justify-center bg-brand-blue/10 w-16 h-16 rounded-full mb-6">
              <MonitorPlay className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">HD Video Courses</h3>
            <p className="text-gray-600">
              Access high-quality video content with clear explanations and demonstrations to enhance your learning experience.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="inline-flex items-center justify-center bg-brand-purple/10 w-16 h-16 rounded-full mb-6">
              <Award className="w-8 h-8 text-brand-purple" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Certificates</h3>
            <p className="text-gray-600">
              Receive certificates upon course completion to showcase your skills and knowledge to potential employers.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="inline-flex items-center justify-center bg-brand-teal/10 w-16 h-16 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-brand-teal" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry experts with years of practical experience in their respective fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
