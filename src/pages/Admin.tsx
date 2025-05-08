
import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { useAuth } from '@/context/AuthContext';
import { mockCourses } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { PlusCircle, Edit, Trash2, Users, BarChart, FileText } from 'lucide-react';

const Admin = () => {
  const { user } = useAuth();
  
  // Redirect if user is not logged in or not an instructor/admin
  if (!user || user.role === 'student') {
    return <Navigate to="/" replace />;
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Course
          </Button>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-center">Students</TableHead>
                    <TableHead className="text-center">Rating</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.title}</TableCell>
                      <TableCell>{course.category}</TableCell>
                      <TableCell>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          course.level === 'beginner' ? 'bg-green-100 text-green-800' : 
                          course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">${course.price.toFixed(2)}</TableCell>
                      <TableCell className="text-center">{course.enrolledStudents}</TableCell>
                      <TableCell className="text-center">{course.rating.toFixed(1)}</TableCell>
                      <TableCell>
                        <div className="flex justify-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="students" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold flex items-center">
                  <Users className="mr-2" />
                  Enrolled Students
                </h2>
                <Button variant="outline">Export Data</Button>
              </div>
              <p className="text-gray-600 mb-4">
                Manage your students, track their progress, and communicate with them.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Total Students</h3>
                  <p className="text-3xl font-bold">2,547</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Active This Month</h3>
                  <p className="text-3xl font-bold">1,245</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Completion Rate</h3>
                  <p className="text-3xl font-bold">68%</p>
                </div>
              </div>
              <p className="text-center text-gray-600">
                Detailed student management interface coming soon.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold flex items-center">
                  <BarChart className="mr-2" />
                  Analytics & Reports
                </h2>
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
              </div>
              <p className="text-gray-600 mb-4">
                View detailed reports on course performance, revenue, and student engagement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Revenue This Month</h3>
                  <p className="text-3xl font-bold">$12,845</p>
                  <p className="text-green-600 text-sm">↑ 12% from last month</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">New Enrollments</h3>
                  <p className="text-3xl font-bold">342</p>
                  <p className="text-green-600 text-sm">↑ 8% from last month</p>
                </div>
              </div>
              <p className="text-center text-gray-600">
                Detailed analytics dashboard coming soon.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Admin;
