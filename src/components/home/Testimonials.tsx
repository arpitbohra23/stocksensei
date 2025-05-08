
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Brown',
      role: 'Software Developer',
      avatar: 'https://i.pravatar.cc/150?img=11',
      content: 'The web development bootcamp was exactly what I needed to transition careers. The instructor was knowledgeable and the course content was up-to-date with current industry standards.',
      rating: 5
    },
    {
      id: 2,
      name: 'Emily Johnson',
      role: 'Data Analyst',
      avatar: 'https://i.pravatar.cc/150?img=5',
      content: 'I found the data science course extremely valuable. The practical exercises helped me apply what I was learning directly to my job. Highly recommend!',
      rating: 5
    },
    {
      id: 3,
      name: 'David Wilson',
      role: 'UX Designer',
      avatar: 'https://i.pravatar.cc/150?img=12',
      content: 'The UI/UX design course provided great insights into user psychology and design principles. It has completely transformed how I approach my design projects.',
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
          <p className="text-gray-600 mt-4">
            Discover how our courses have helped students advance their careers and achieve their goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    size={16}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <Avatar>
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </Avatar>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
