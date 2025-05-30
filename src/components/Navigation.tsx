
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/2a93a8b8-bbdf-495c-887e-4313c8c516f2.png" 
              alt="Kingglad Group Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-kingglad-charcoal">Kingglad Group</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-kingglad-charcoal hover:text-kingglad-green"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors">Home</Link>
            <Link to="/about" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors">About</Link>
            <div className="relative group">
              <span className="text-kingglad-charcoal hover:text-kingglad-green transition-colors cursor-pointer">
                Services
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 hidden group-hover:block">
                <Link to="/realty" className="block px-4 py-2 text-kingglad-charcoal hover:bg-kingglad-green hover:text-white">Kingglad Realty</Link>
                <Link to="/auto" className="block px-4 py-2 text-kingglad-charcoal hover:bg-kingglad-green hover:text-white">Kingglad Auto</Link>
                <Link to="/suites" className="block px-4 py-2 text-kingglad-charcoal hover:bg-kingglad-green hover:text-white">Kingglad Suites</Link>
                <Link to="/oil" className="block px-4 py-2 text-kingglad-charcoal hover:bg-kingglad-green hover:text-white">Kingglad Oil</Link>
                <Link to="/agric" className="block px-4 py-2 text-kingglad-charcoal hover:bg-kingglad-green hover:text-white">Kingglad Agric</Link>
              </div>
            </div>
            <Link to="/portfolio" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors">Contact</Link>
          </div>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <div className="space-y-2 pl-4">
                <div className="font-medium text-kingglad-charcoal">Services:</div>
                <Link to="/realty" className="block text-kingglad-charcoal hover:text-kingglad-green transition-colors" onClick={() => setIsMenuOpen(false)}>Kingglad Realty</Link>
                <Link to="/auto" className="block text-kingglad-charcoal hover:text-kingglad-green transition-colors" onClick={() => setIsMenuOpen(false)}>Kingglad Auto</Link>
                <Link to="/suites" className="block text-kingglad-charcoal hover:text-kingglad-green transition-colors" onClick={() => setIsMenuOpen(false)}>Kingglad Suites</Link>
                <Link to="/oil" className="block text-kingglad-charcoal hover:text-kingglad-green transition-colors" onClick={() => setIsMenuOpen(false)}>Kingglad Oil</Link>
                <Link to="/agric" className="block text-kingglad-charcoal hover:text-kingglad-green transition-colors" onClick={() => setIsMenuOpen(false)}>Kingglad Agric</Link>
              </div>
              <Link to="/portfolio" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
              <Link to="/contact" className="text-kingglad-charcoal hover:text-kingglad-green transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
