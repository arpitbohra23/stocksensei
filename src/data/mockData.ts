
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
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
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
    title: 'Complete Stock Trading Fundamentals',
    instructor: 'Sarah Johnson',
    instructorId: '2',
    price: 99.99,
    description: 'Master stock trading from the ground up. This course covers chart analysis, risk management, and proven trading strategies with real market examples.',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
    category: 'Stock Trading',
    level: 'beginner',
    duration: '40 hours',
    lessons: 120,
    rating: 4.8,
    enrolledStudents: 1250,
    featured: true
  },
  {
    id: '2',
    title: 'Advanced Technical Analysis',
    instructor: 'Robert Williams',
    instructorId: '4',
    price: 129.99,
    description: 'Take your chart reading skills to the next level with advanced technical analysis patterns, indicators and trading systems.',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
    category: 'Technical Analysis',
    level: 'intermediate',
    duration: '38 hours',
    lessons: 95,
    rating: 4.9,
    enrolledStudents: 980,
    featured: true
  },
  {
    id: '3',
    title: 'Forex Trading Masterclass',
    instructor: 'Michael Chen',
    instructorId: '5',
    price: 79.99,
    description: 'Learn how to trade currency pairs effectively using fundamental and technical analysis in the world\'s largest financial market.',
    thumbnail: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=600&auto=format&fit=crop',
    category: 'Forex',
    level: 'beginner',
    duration: '28 hours',
    lessons: 85,
    rating: 4.7,
    enrolledStudents: 850
  },
  {
    id: '4',
    title: 'Advanced Options Trading Strategies',
    instructor: 'Sarah Johnson',
    instructorId: '2',
    price: 89.99,
    description: 'Master complex options strategies including spreads, iron condors, and advanced risk management techniques.',
    thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop',
    category: 'Options Trading',
    level: 'advanced',
    duration: '25 hours',
    lessons: 72,
    rating: 4.9,
    enrolledStudents: 620
  },
  {
    id: '5',
    title: 'Cryptocurrency Trading Essentials',
    instructor: 'Alex Thompson',
    instructorId: '6',
    price: 109.99,
    description: 'Learn to trade Bitcoin, Ethereum and other cryptocurrencies successfully with proven strategies for this volatile market.',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop',
    category: 'Cryptocurrency',
    level: 'intermediate',
    duration: '32 hours',
    lessons: 98,
    rating: 4.6,
    enrolledStudents: 740,
    featured: true
  },
  {
    id: '6',
    title: 'Trading Psychology Mastery',
    instructor: 'Emma Rodriguez',
    instructorId: '7',
    price: 149.99,
    description: 'Overcome emotional trading and develop a winning trader\'s mindset with proven psychological techniques used by professional traders.',
    thumbnail: 'https://images.unsplash.com/photo-1579225663317-c0251b4369bc?q=80&w=600&auto=format&fit=crop',
    category: 'Trading Psychology',
    level: 'intermediate',
    duration: '30 hours',
    lessons: 82,
    rating: 4.7,
    enrolledStudents: 520
  }
];

export const mockCategories: Category[] = [
  { id: '1', name: 'Stock Trading', courses: 42 },
  { id: '2', name: 'Technical Analysis', courses: 31 },
  { id: '3', name: 'Forex', courses: 28 },
  { id: '4', name: 'Options Trading', courses: 24 },
  { id: '5', name: 'Cryptocurrency', courses: 16 },
  { id: '6', name: 'Trading Psychology', courses: 22 },
  { id: '7', name: 'Risk Management', courses: 35 },
  { id: '8', name: 'Algorithmic Trading', courses: 29 },
];
