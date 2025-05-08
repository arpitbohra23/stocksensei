
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import CourseCard from '@/components/courses/CourseCard';
import { mockMentors, mockCourses } from '@/data/mockData';
import { Star, Clock, Calendar as CalendarIcon, MessageSquare, Award, Calendar as BookIcon } from 'lucide-react';

const MentorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  
  const mentor = mockMentors.find(m => m.id === id);
  const mentorCourses = mockCourses.filter(c => c.instructorId === id);
  
  if (!mentor) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mentor Not Found</h1>
          <p className="text-gray-600 mb-8">The mentor you're looking for doesn't exist or has been removed.</p>
          <Link to="/mentors">
            <Button>Browse All Mentors</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  // Generate available time slots for the selected date
  const generateTimeSlots = () => {
    if (!selectedDate) return [];
    
    const slots = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        slots.push({
          time: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
          available: Math.random() > 0.3 // Randomly mark some slots as unavailable
        });
      }
    }
    
    return slots;
  };
  
  const timeSlots = generateTimeSlots();

  return (
    <MainLayout>
      {/* Mentor Header */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/4 flex justify-center">
              <img 
                src={mentor.avatar} 
                alt={mentor.name} 
                className="w-40 h-40 rounded-full object-cover border-4 border-bull-red"
              />
            </div>
            
            <div className="md:w-3/4 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
              <p className="text-xl text-gray-300 mb-4">{mentor.title}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-yellow-400 w-5 h-5 mr-1" />
                  <span className="font-medium">{mentor.rating.toFixed(1)}</span>
                  <span className="text-gray-300 ml-1">({mentor.reviewCount} reviews)</span>
                </div>
                
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-1" />
                  <span>{mentor.experience} Years Experience</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>{mentor.availability}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {mentor.specialties.map((specialty, index) => (
                  <span 
                    key={index} 
                    className="text-sm px-3 py-1 rounded-full bg-bull-red/20 border border-bull-red/30"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-2xl font-bold text-bull-red">${mentor.hourlyRate}/hr</div>
                <Link to={`/book/${mentor.id}`}>
                  <Button size="lg" className="bg-bull-red text-white hover:bg-red-700">
                    Book 1:1 Session
                  </Button>
                </Link>
                <Link to={`/message/${mentor.id}`}>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mentor Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="courses">Courses ({mentorCourses.length})</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">About {mentor.name}</h2>
                    <div className="prose max-w-none">
                      <p>{mentor.bio}</p>
                      <p>
                        With {mentor.experience} years of experience in trading, {mentor.name} specializes 
                        in {mentor.specialties.join(', ')}. They have helped hundreds of students master 
                        the markets and develop profitable trading strategies.
                      </p>
                      <h3>Trading Philosophy</h3>
                      <p>
                        {mentor.name}'s trading philosophy centers around risk management, technical analysis, 
                        and market psychology. Their teachings emphasize disciplined trading and consistent strategy application.
                      </p>
                      <h3>Teaching Approach</h3>
                      <p>
                        Students appreciate {mentor.name}'s hands-on mentoring style, with personalized feedback 
                        and real-world examples. Sessions include live market analysis and trade breakdown to ensure 
                        practical understanding.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <h3 className="font-bold text-lg mb-4">Expertise</h3>
                    <ul className="space-y-2">
                      {mentor.specialties.map((specialty, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-bull-red rounded-full mr-2"></span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-4">Languages</h3>
                    <div className="space-y-2">
                      {mentor.languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span>{lang.name}</span>
                          <span className="text-sm text-gray-500">{lang.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="courses">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">{mentor.name}'s Courses</h2>
                <p className="text-gray-600">
                  Learn directly from {mentor.name} through these comprehensive trading courses
                </p>
              </div>
              
              {mentorCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mentorCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium text-xl mb-2">No courses available</h3>
                  <p className="text-gray-600 mb-6">
                    This mentor hasn't published any courses yet. Check back later or book a 1:1 session.
                  </p>
                  <Link to={`/book/${mentor.id}`}>
                    <Button>Book a Session</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Student Reviews</h2>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={i < Math.floor(mentor.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            size={20}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{mentor.rating.toFixed(1)}</span>
                      <span className="ml-1 text-gray-500">• {mentor.reviewCount} reviews</span>
                    </div>
                  </div>
                  
                  {/* Sample reviews */}
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-b pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                      <div className="flex items-center mb-4">
                        <img 
                          src={`https://i.pravatar.cc/150?img=${20 + i}`}
                          alt={`Student ${i}`}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-medium">Trading Student {i + 1}</h4>
                          <div className="flex items-center">
                            <div className="flex mr-2">
                              {[...Array(5)].map((_, j) => (
                                <Star 
                                  key={j} 
                                  className={j < 5 - i % 2 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                  size={16}
                                />
                              ))}
                            </div>
                            <span className="text-gray-500 text-sm">{i + 1} week{i !== 0 ? 's' : ''} ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        {i % 2 === 0 ? 
                          `${mentor.name} provided exceptional insights during our session. Their analysis of market trends and personalized trading advice was incredibly helpful. I've already seen improvements in my trading results!` :
                          `Great mentor with deep market knowledge. ${mentor.name} helped me understand complex trading patterns and develop a solid risk management strategy. Highly recommended for anyone serious about trading.`
                        }
                      </p>
                    </div>
                  ))}
                  
                  <div className="text-center mt-6">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Select a Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </div>
                
                <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-4">
                    {selectedDate ? (
                      <>Available times for {selectedDate.toLocaleDateString()}</>
                    ) : (
                      <>Select a date to view available times</>
                    )}
                  </h3>
                  
                  {selectedDate ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map((slot, index) => (
                        <Button
                          key={index}
                          variant={slot.available ? "outline" : "ghost"}
                          className={`${slot.available ? "" : "opacity-50 cursor-not-allowed"}`}
                          disabled={!slot.available}
                        >
                          {slot.time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-48 text-gray-500">
                      <div className="text-center">
                        <CalendarIcon className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                        <p>Please select a date to see available time slots</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedDate && (
                    <div className="mt-6 text-center">
                      <Button size="lg">
                        <BookIcon className="mr-2 h-4 w-4" />
                        Book Session
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
};

export default MentorDetail;
