
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: 'https://i.pravatar.cc/300?img=1',
      bio: 'Former education director with 15+ years of experience.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Content Officer',
      image: 'https://i.pravatar.cc/300?img=5',
      bio: 'Expert in curriculum development and educational technology.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://i.pravatar.cc/300?img=11',
      bio: 'Software engineer with a passion for e-learning platforms.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Instructor Success',
      image: 'https://i.pravatar.cc/300?img=9',
      bio: 'Helps instructors create engaging and effective courses.'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduSpace</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to provide quality education that's accessible, affordable, and effective.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, EduSpace began with a simple idea: to make quality education accessible to everyone, regardless of location or background.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, John Smith, experienced firsthand the challenges of accessing quality education in remote areas. This inspired him to create a platform where anyone could learn from the world's best instructors.
              </p>
              <p className="text-gray-600">
                Today, EduSpace has grown to serve over 100,000 students worldwide, offering courses in everything from web development to business management, all taught by industry experts.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" 
                alt="EduSpace team meeting" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-medium text-brand-blue">Founded in 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            To empower individuals through quality education that's accessible, affordable, and aligned with real-world skills that employers value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center bg-brand-blue/10 w-16 h-16 rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Content</h3>
              <p className="text-gray-600">
                We maintain high standards for all courses, ensuring you receive the best education possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center bg-brand-purple/10 w-16 h-16 rounded-full mb-6">
                <Users className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                Join a supportive community of learners and instructors from around the world.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center bg-brand-teal/10 w-16 h-16 rounded-full mb-6">
                <Award className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Recognition</h3>
              <p className="text-gray-600">
                Earn certificates that are recognized by employers and institutions globally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center bg-yellow-100 w-16 h-16 rounded-full mb-6">
                <GraduationCap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-gray-600">
                We regularly update our courses to ensure they reflect current industry trends and practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Our diverse team of educators, technologists, and industry experts are passionate about creating the best learning experience for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-brand-blue mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
