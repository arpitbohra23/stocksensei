
import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import RegisterForm from '@/components/auth/RegisterForm';
import { useAuth } from '@/context/AuthContext';

const Register = () => {
  const { user } = useAuth();
  
  // If user is already logged in, redirect to homepage
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <MainLayout>
      <div className="min-h-screen py-12 flex items-center justify-center">
        <RegisterForm />
      </div>
    </MainLayout>
  );
};

export default Register;
