
export type User = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
};

export type Course = {
  id: string;
  title: string;
  instructor: string;
  instructorId: string;
  price: number;
  description: string;
  thumbnail: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  lessons: number;
  rating: number;
  enrolledStudents: number;
  featured?: boolean;
};

export type CartItem = {
  courseId: string;
  title: string;
  price: number;
  thumbnail: string;
};

export type Category = {
  id: string;
  name: string;
  courses: number;
};
