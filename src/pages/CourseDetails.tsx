
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockCourses } from '@/data/mockData';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { 
  Clock, 
  BookOpen, 
  Users, 
  CheckCircle,
  Star,
  ShieldCheck,
  Award,
  FileText,
  Video,
  Download
} from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, isInCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const course = mockCourses.find(course => course.id === id);
  
  if (!course) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses">
            <Button>Browse All Courses</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      courseId: course.id,
      title: course.title,
      price: course.price,
      thumbnail: course.thumbnail
    });
  };

  const handleEnrollNow = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    // Add to cart and navigate to checkout
    if (!isInCart(course.id)) {
      handleAddToCart();
    }
    navigate('/cart');
  };

  // Mock curriculum data
  const curriculum = [
    {
      section: 'Getting Started',
      lessons: [
        { title: 'Introduction to the Course', duration: '10:23', preview: true },
        { title: 'Setting Up Your Environment', duration: '15:45', preview: true },
        { title: 'Course Overview', duration: '08:12', preview: false }
      ]
    },
    {
      section: 'Core Concepts',
      lessons: [
        { title: 'Understanding the Fundamentals', duration: '24:18', preview: false },
        { title: 'Key Principles Explained', duration: '18:32', preview: false },
        { title: 'Practical Examples', duration: '22:47', preview: false },
        { title: 'Common Challenges and Solutions', duration: '19:56', preview: false }
      ]
    },
    {
      section: 'Advanced Topics',
      lessons: [
        { title: 'Deep Dive into Advanced Concepts', duration: '31:05', preview: false },
        { title: 'Working with Complex Scenarios', duration: '27:14', preview: false },
        { title: 'Best Practices and Optimization', duration: '25:33', preview: false }
      ]
    },
    {
      section: 'Projects and Conclusion',
      lessons: [
        { title: 'Building Your First Project', duration: '45:12', preview: false },
        { title: 'Final Project Walkthrough', duration: '38:29', preview: false },
        { title: 'Next Steps and Resources', duration: '12:18', preview: false }
      ]
    }
  ];

  // Calculate total duration and lessons
  const totalLessons = curriculum.reduce(
    (sum, section) => sum + section.lessons.length, 
    0
  );
  
  return (
    <MainLayout>
      {/* Course Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                course.level === 'beginner' ? 'bg-green-500' : 
                course.level === 'intermediate' ? 'bg-yellow-500' : 
                'bg-red-500'
              }`}>
                {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{course.title}</h1>
              
              <p className="text-lg text-gray-300 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-400"}
                      fill={i < Math.floor(course.rating) ? "currentColor" : "none"}
                      size={18}
                    />
                  ))}
                </div>
                <span className="font-medium">{course.rating.toFixed(1)}</span>
                <span className="text-gray-300">({course.enrolledStudents} students)</span>
              </div>
              
              <div className="mb-6">
                <span className="font-medium">Created by </span>
                <Link to={`/instructor/${course.instructorId}`} className="text-brand-blue">
                  {course.instructor}
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <span>{course.enrolledStudents.toLocaleString()} students</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-900">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white">
                      <Video className="mr-2 h-5 w-5" />
                      Watch Preview
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold">${course.price.toFixed(2)}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full"
                      onClick={handleEnrollNow}
                    >
                      Enroll Now
                    </Button>
                    
                    {isInCart(course.id) ? (
                      <Link to="/cart">
                        <Button variant="outline" className="w-full">
                          View in Cart
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <h4 className="font-medium">This course includes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Video className="mr-2 h-4 w-4 text-gray-500" />
                        <span>{course.duration} on-demand video</span>
                      </li>
                      <li className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-gray-500" />
                        <span>10 articles</span>
                      </li>
                      <li className="flex items-center">
                        <Download className="mr-2 h-4 w-4 text-gray-500" />
                        <span>15 downloadable resources</span>
                      </li>
                      <li className="flex items-center">
                        <ShieldCheck className="mr-2 h-4 w-4 text-gray-500" />
                        <span>Full lifetime access</span>
                      </li>
                      <li className="flex items-center">
                        <Award className="mr-2 h-4 w-4 text-gray-500" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview">
            <TabsList className="w-full border-b mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="flex">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Learning objective {item} for this course</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Course Description</h3>
                <div className="prose max-w-none">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
                    nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl 
                    nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl 
                    aliquam nisl, eget aliquam nisl nisl eget nisl.
                  </p>
                  <p>
                    Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, 
                    eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
                    tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                  </p>
                  <h4>Who this course is for:</h4>
                  <ul>
                    <li>Beginners who want to learn {course.category}</li>
                    <li>Professionals looking to upgrade their skills</li>
                    <li>Anyone interested in {course.category.toLowerCase()} career opportunities</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Basic computer skills</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Internet connection</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Willingness to learn</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">Course Content</h3>
                <div className="text-gray-600">
                  {curriculum.length} sections • {totalLessons} lectures • {course.duration} total length
                </div>
              </div>
              
              <div className="space-y-4">
                {curriculum.map((section, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 flex justify-between items-center">
                      <h4 className="font-bold">{section.section}</h4>
                      <span className="text-gray-600 text-sm">
                        {section.lessons.length} lectures
                      </span>
                    </div>
                    <div className="divide-y">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div 
                          key={lessonIndex} 
                          className="p-4 flex items-center justify-between hover:bg-gray-50"
                        >
                          <div className="flex items-center">
                            <Video className="h-4 w-4 mr-3 text-gray-500" />
                            <span>
                              {lesson.title}
                              {lesson.preview && (
                                <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                  Preview
                                </span>
                              )}
                            </span>
                          </div>
                          <span className="text-gray-500 text-sm">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="instructor">
              <div className="flex items-start space-x-6">
                <img 
                  src={`https://i.pravatar.cc/150?img=${parseInt(course.instructorId)}`} 
                  alt={course.instructor}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{course.instructor}</h3>
                  <p className="text-gray-600 mb-4">Expert in {course.category}</p>
                  <div className="flex space-x-4 mb-4">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 w-5 h-5 mr-1" />
                      <span>4.8 Instructor Rating</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="text-gray-500 w-5 h-5 mr-1" />
                      <span>15,432 Students</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="text-gray-500 w-5 h-5 mr-1" />
                      <span>12 Courses</span>
                    </div>
                  </div>
                  <div className="prose max-w-none">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
                      nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl 
                      nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt.
                    </p>
                    <p>
                      Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, 
                      eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
                      tincidunt, nisl nisl aliquam nisl.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Student Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-300"}
                            fill={i < Math.floor(course.rating) ? "currentColor" : "none"}
                            size={20}
                          />
                        ))}
                      </div>
                      <span className="ml-2 font-medium">{course.rating.toFixed(1)} course rating</span>
                      <span className="ml-2 text-gray-500">• {course.enrolledStudents} students</span>
                    </div>
                  </div>
                  
                  <Button variant="outline">Write a Review</Button>
                </div>
                
                {/* Sample reviews */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={`https://i.pravatar.cc/150?img=${20 + i}`}
                        alt={`Student ${i}`}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-medium">Student Name {i}</h4>
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, j) => (
                              <Star 
                                key={j} 
                                className={j < 5 - i % 2 ? "text-yellow-400" : "text-gray-300"}
                                fill={j < 5 - i % 2 ? "currentColor" : "none"}
                                size={16}
                              />
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm">2 weeks ago</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
                      nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl 
                      nisl eget nisl. Great course, highly recommended!
                    </p>
                  </div>
                ))}
                
                <div className="text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
};

export default CourseDetails;
