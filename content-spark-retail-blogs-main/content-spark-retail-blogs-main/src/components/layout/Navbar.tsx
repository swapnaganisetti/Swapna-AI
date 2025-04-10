
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-blue">Swapna AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium">
              Home
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-brand-blue font-medium">
              Blogs
            </Link>
            <Link to="/create" className="text-gray-700 hover:text-brand-blue font-medium">
              Create
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-brand-blue font-medium">
              Dashboard
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-brand-blue font-medium px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/blogs" 
                className="text-gray-700 hover:text-brand-blue font-medium px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                to="/create" 
                className="text-gray-700 hover:text-brand-blue font-medium px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Create
              </Link>
              <Link 
                to="/dashboard" 
                className="text-gray-700 hover:text-brand-blue font-medium px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
