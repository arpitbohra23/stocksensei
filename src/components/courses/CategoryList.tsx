
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/types';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Discover courses across various categories to enhance your skills and knowledge
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/courses?category=${encodeURIComponent(category.name.toLowerCase())}`}
              key={category.id}
              className="bg-gray-50 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow flex flex-col items-center justify-center"
            >
              <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
              <p className="text-gray-500 text-sm">{category.courses} courses</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
