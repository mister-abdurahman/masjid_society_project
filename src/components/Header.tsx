import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Prayer Times', path: '/prayer-times' },
    { name: 'Activities', path: '/activities' },
    { name: 'Education', path: '/education' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-brand-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-brand-accent p-2 rounded-full">
            <Heart className="w-6 h-6 text-brand-primary" fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight leading-tight">Muslim Society</span>
            <span className="text-xs text-brand-accent uppercase tracking-widest font-semibold">& Community Masjid</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-brand-accent",
                  isActive ? "text-brand-accent" : "text-brand-secondary/90"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="btn-primary bg-brand-accent text-brand-primary hover:bg-white transition-colors"
          >
            Donate Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-brand-primary/95 backdrop-blur-sm border-t border-brand-accent/20 flex flex-col p-4 space-y-4 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "text-lg font-medium py-2 border-b border-white/10",
                  isActive ? "text-brand-accent" : "text-white"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/donate"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center mt-4"
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
