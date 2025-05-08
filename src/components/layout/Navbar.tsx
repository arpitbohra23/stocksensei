
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  User, 
  Menu, 
  X,
  Search,
  LogOut,
  GraduationCap,
  LayoutDashboard
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Avatar } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would navigate to search results
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap size={32} className="text-brand-blue" />
          <span className="text-xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple text-transparent bg-clip-text">
            EduSpace
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/courses" className="text-gray-600 hover:text-brand-blue transition-colors">
            Courses
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-brand-blue transition-colors">
            Contact
          </Link>
        </div>

        {/* Search Form - Desktop */}
        <form onSubmit={handleSearch} className="hidden md:flex mx-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search for courses..."
              className="w-full pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <Search size={18} className="text-gray-500" />
            </button>
          </div>
        </form>

        {/* Right Side Navigation */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} className="text-gray-600 hover:text-brand-blue transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-0 h-8 w-8">
                  <Avatar>
                    <img src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`} alt={user.name} />
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex items-center gap-2">
                  <User size={16} />
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                {user.role !== 'student' && (
                  <DropdownMenuItem className="flex items-center gap-2">
                    <LayoutDashboard size={16} />
                    <Link to="/admin">Dashboard</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem className="flex items-center gap-2" onClick={() => logout()}>
                  <LogOut size={16} />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-white border-t mt-2">
          <form onSubmit={handleSearch} className="mb-2">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for courses..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <Search size={18} className="text-gray-500" />
              </button>
            </div>
          </form>
          <div className="flex flex-col space-y-3">
            <Link 
              to="/courses" 
              className="text-gray-600 hover:text-brand-blue transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-brand-blue transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-brand-blue transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {!user && (
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
