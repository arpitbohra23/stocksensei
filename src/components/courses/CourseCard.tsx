
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '@/types';
import { Star, Clock, BookOpen, Users } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      courseId: course.id,
      title: course.title,
      price: course.price,
      thumbnail: course.thumbnail
    });
  };

  return (
    <div className="course-card bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <Link to={`/courses/${course.id}`}>
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-48 object-cover"
          />
        </Link>
        {course.featured && (
          <span className="absolute top-2 right-2 bg-brand-teal text-white text-sm font-medium px-3 py-1 rounded-full">
            Featured
          </span>
        )}
        <div className="absolute bottom-2 left-2 flex items-center bg-black/50 rounded-full px-2 py-1">
          <Star className="text-yellow-400 w-4 h-4 mr-1" />
          <span className="text-white text-sm font-medium">{course.rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            course.level === 'beginner' ? 'bg-green-100 text-green-800' : 
            course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'
          }`}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </span>
          <span className="text-gray-500 text-sm">{course.category}</span>
        </div>
        
        <Link to={`/courses/${course.id}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-brand-blue transition-colors line-clamp-2">
            {course.title}
          </h3>
        </Link>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center mr-4">
            <BookOpen className="w-4 h-4 mr-1" />
            {course.lessons} lessons
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {course.enrolledStudents.toLocaleString()}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="font-bold text-lg">${course.price.toFixed(2)}</div>
          <div>
            {isInCart(course.id) ? (
              <Link to="/cart">
                <Button variant="outline" size="sm">View in Cart</Button>
              </Link>
            ) : (
              <Button size="sm" onClick={handleAddToCart}>Add to Cart</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
