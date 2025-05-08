
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MentorCard from '@/components/mentors/MentorCard';
import { mockMentors } from '@/data/mockData';
import { Search, Filter } from 'lucide-react';

const Mentors = () => {
  const [search, setSearch] = useState('');
  const [filteredMentors, setFilteredMentors] = useState(mockMentors);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  
  // Handle search and filtering
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filtered = mockMentors.filter(mentor => {
      const matchesSearch = search.trim() === '' || 
        mentor.name.toLowerCase().includes(search.toLowerCase()) ||
        mentor.bio.toLowerCase().includes(search.toLowerCase()) ||
        mentor.specialties.some(s => s.toLowerCase().includes(search.toLowerCase()));
        
      const matchesSpecialties = selectedSpecialties.length === 0 || 
        selectedSpecialties.some(s => mentor.specialties.includes(s));
        
      return matchesSearch && matchesSpecialties;
    });
    
    setFilteredMentors(filtered);
  };

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty) 
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };
  
  // Extract all unique specialties
  const allSpecialties = Array.from(
    new Set(mockMentors.flatMap(mentor => mentor.specialties))
  );

  return (
    <MainLayout>
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect with Elite Trading Mentors
            </h1>
            <p className="text-xl text-gray-300">
              Book 1:1 sessions with professional traders or enroll in their specialized courses
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="md:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4">Find Your Mentor</h3>
                
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search mentors..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pr-10"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2" type="submit">
                      <Search size={18} className="text-gray-500" />
                    </button>
                  </div>
                </form>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Filter size={16} className="mr-2" />
                    Specialties
                  </h4>
                  <div className="space-y-2">
                    {allSpecialties.map((specialty) => (
                      <div key={specialty} className="flex items-center">
                        <input
                          type="checkbox"
                          id={specialty}
                          checked={selectedSpecialties.includes(specialty)}
                          onChange={() => toggleSpecialty(specialty)}
                          className="mr-2"
                        />
                        <label htmlFor={specialty}>{specialty}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearch('');
                    setSelectedSpecialties([]);
                    setFilteredMentors(mockMentors);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
            
            {/* Mentor Listings */}
            <div className="md:w-3/4">
              <div className="mb-6">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList>
                    <TabsTrigger value="all">All Mentors</TabsTrigger>
                    <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
                    <TabsTrigger value="newest">Newest</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredMentors.map((mentor) => (
                        <MentorCard key={mentor.id} mentor={mentor} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="top-rated" className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredMentors
                        .sort((a, b) => b.rating - a.rating)
                        .map((mentor) => (
                          <MentorCard key={mentor.id} mentor={mentor} />
                        ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="newest" className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredMentors
                        .sort((a, b) => new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime())
                        .map((mentor) => (
                          <MentorCard key={mentor.id} mentor={mentor} />
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Mentors;
