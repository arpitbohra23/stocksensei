
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { mockMentors } from '@/data/mockData';
import { Clock, CheckCircle, Calendar as CalendarIcon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  
  const mentor = mockMentors.find(m => m.id === id);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [topic, setTopic] = useState('');
  const [goals, setGoals] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const handleBookSession = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to book a session with this mentor.",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }
    
    if (!selectedDate || !selectedTime || !topic.trim()) {
      toast({
        title: "Incomplete booking",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking successful!",
        description: `Your session with ${mentor.name} has been booked for ${selectedDate.toLocaleDateString()} at ${selectedTime}.`,
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to={`/mentors/${mentor.id}`} className="text-bull-red hover:underline">
                &larr; Back to Mentor Profile
              </Link>
              <h1 className="text-3xl font-bold mt-2">Book a Session with {mentor.name}</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mentor Info */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={mentor.avatar} 
                    alt={mentor.name} 
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.title}</p>
                  </div>
                </div>
                
                <div className="border-t border-b py-4 my-4">
                  <div className="flex justify-between items-center">
                    <span>Session Rate</span>
                    <span className="font-bold text-bull-red">${mentor.hourlyRate}/hr</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>60 minute session</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Video call via Zoom</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Personalized advice</span>
                  </div>
                </div>
              </div>
              
              {/* Booking Form */}
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="font-bold text-lg mb-4">Select Date & Time</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                        disabled={(date) => date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                      />
                    </div>
                    
                    <div>
                      {selectedDate ? (
                        <div>
                          <h4 className="font-medium mb-3">Available times for {selectedDate.toLocaleDateString()}</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((slot, index) => (
                              <Button
                                key={index}
                                variant={selectedTime === slot.time ? "default" : "outline"}
                                className={`${slot.available ? "" : "opacity-50 cursor-not-allowed"}`}
                                disabled={!slot.available}
                                onClick={() => setSelectedTime(slot.time)}
                              >
                                {slot.time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          <div className="text-center">
                            <CalendarIcon className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                            <p>Please select a date</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Session Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="topic" className="block font-medium mb-1">
                        What would you like to discuss? <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., Technical Analysis, Risk Management, Trade Review"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="goals" className="block font-medium mb-1">
                        What are your goals for this session?
                      </label>
                      <Textarea
                        id="goals"
                        value={goals}
                        onChange={(e) => setGoals(e.target.value)}
                        placeholder="Describe what you hope to achieve from this session"
                        rows={4}
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        onClick={handleBookSession} 
                        className="w-full" 
                        size="lg"
                        disabled={!selectedDate || !selectedTime || !topic.trim() || isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : `Book Session for $${mentor.hourlyRate}`}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookingPage;
