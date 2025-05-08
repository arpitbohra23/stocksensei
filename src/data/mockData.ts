
import { Course, Category, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'instructor',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    instructor: 'Jane Smith',
    instructorId: '2',
    price: 99.99,
    description: 'Learn web development from scratch. This course covers HTML, CSS, JavaScript, React and Node.js with real-world projects.',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
    category: 'Web Development',
    level: 'beginner',
    duration: '40 hours',
    lessons: 120,
    rating: 4.8,
    enrolledStudents: 1250,
    featured: true
  },
  {
    id: '2',
    title: 'Data Science and Machine Learning',
    instructor: 'Robert Johnson',
    instructorId: '4',
    price: 129.99,
    description: 'Master data science, machine learning, and Python with hands-on exercises and real-world case studies.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    category: 'Data Science',
    level: 'intermediate',
    duration: '38 hours',
    lessons: 95,
    rating: 4.9,
    enrolledStudents: 980,
    featured: true
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    instructor: 'Sarah Williams',
    instructorId: '5',
    price: 79.99,
    description: 'Learn the principles of UI/UX design and create stunning user interfaces that deliver exceptional user experiences.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop',
    category: 'Design',
    level: 'beginner',
    duration: '28 hours',
    lessons: 85,
    rating: 4.7,
    enrolledStudents: 850
  },
  {
    id: '4',
    title: 'Advanced JavaScript Patterns',
    instructor: 'Jane Smith',
    instructorId: '2',
    price: 89.99,
    description: 'Dive deep into JavaScript design patterns, performance optimization, and advanced concepts.',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=600&auto=format&fit=crop',
    category: 'Web Development',
    level: 'advanced',
    duration: '25 hours',
    lessons: 72,
    rating: 4.9,
    enrolledStudents: 620
  },
  {
    id: '5',
    title: 'Mobile App Development with React Native',
    instructor: 'Michael Chen',
    instructorId: '6',
    price: 109.99,
    description: 'Build cross-platform mobile apps using React Native that work on both iOS and Android.',
    thumbnail: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=600&auto=format&fit=crop',
    category: 'Mobile Development',
    level: 'intermediate',
    duration: '32 hours',
    lessons: 98,
    rating: 4.6,
    enrolledStudents: 740,
    featured: true
  },
  {
    id: '6',
    title: 'Blockchain Development Fundamentals',
    instructor: 'Alex Thompson',
    instructorId: '7',
    price: 149.99,
    description: 'Learn blockchain development, smart contracts, and build decentralized applications.',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=600&auto=format&fit=crop',
    category: 'Blockchain',
    level: 'intermediate',
    duration: '30 hours',
    lessons: 82,
    rating: 4.7,
    enrolledStudents: 520
  }
];

export const mockCategories: Category[] = [
  { id: '1', name: 'Web Development', courses: 42 },
  { id: '2', name: 'Data Science', courses: 31 },
  { id: '3', name: 'Design', courses: 28 },
  { id: '4', name: 'Mobile Development', courses: 24 },
  { id: '5', name: 'Blockchain', courses: 16 },
  { id: '6', name: 'Cybersecurity', courses: 22 },
  { id: '7', name: 'Business', courses: 35 },
  { id: '8', name: 'Marketing', courses: 29 },
];
