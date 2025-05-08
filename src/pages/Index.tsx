
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import FeaturedCourses from '@/components/courses/FeaturedCourses';
import CategoryList from '@/components/courses/CategoryList';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import { mockCourses, mockCategories } from '@/data/mockData';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Stats />
      <FeaturedCourses courses={mockCourses} />
      <CategoryList categories={mockCategories} />
      <Features />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
