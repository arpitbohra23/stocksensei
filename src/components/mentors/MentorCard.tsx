
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Clock } from 'lucide-react';
import { Mentor } from '@/types';

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-bull-red transition-colors">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <img 
            src={mentor.avatar} 
            alt={mentor.name} 
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg mb-1">
                  <Link to={`/mentors/${mentor.id}`} className="hover:text-bull-red">
                    {mentor.name}
                  </Link>
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="font-medium">{mentor.rating.toFixed(1)}</span>
                  </div>
                  <div className="text-sm text-gray-500">{mentor.reviewCount} reviews</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-bull-red">${mentor.hourlyRate}/hr</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-700 mt-3 line-clamp-2 mb-3">
          {mentor.bio}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.specialties.map((specialty, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        <hr className="my-4" />
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {mentor.availability}
          </div>
          
          <div className="space-x-2">
            <Link to={`/mentors/${mentor.id}`}>
              <Button variant="outline" size="sm">View Profile</Button>
            </Link>
            <Link to={`/book/${mentor.id}`}>
              <Button size="sm">Book Session</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
