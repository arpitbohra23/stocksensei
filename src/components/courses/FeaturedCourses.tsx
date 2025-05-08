
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '@/types';
import CourseCard from './CourseCard';
import { ArrowRight } from 'lucide-react';

interface FeaturedCoursesProps {
  courses: Course[];
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ courses }) => {
  // Filter to only featured courses or take first 3
  const featuredCourses = courses
    .filter(course => course.featured)
    .slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <p className="text-gray-600 mt-2">Explore our most popular courses</p>
          </div>
          <Link 
            to="/courses" 
            className="flex items-center text-brand-blue hover:underline font-medium"
          >
            View All Courses <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
