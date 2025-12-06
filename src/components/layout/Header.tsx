import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "AI Health Assistant", path: "/ai-health-assistant" },
  { name: "Find Doctors", path: "/doctors" },
  { name: "Lab Tests", path: "/lab-tests" },
  { name: "Shop", path: "/shop" },
  { name: "Forum", path: "/forum" },
  { name: "About Us", path: "/about" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>Welcome to AMRUTAM — Authentic Ayurvedic Wellness</span>
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-dark inline-flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            Try Instant Free Call Now
          </Button>
        </div>
      </div>

      <div className="border-b border-border bg-[#faf7ee] shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <img src="/favicon.svg" alt="Amrutam" className="h-8" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative mx-3 text-base font-normal text-[#2e3a25] transition-colors ${
                    location.pathname === link.path
                      ? "after:w-full after:h-[2px] after:bg-[#3A643B] after:absolute after:-bottom-1 after:left-0 pb-1"
                      : "hover:opacity-80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Premium search box */}
              <div className="hidden md:flex bg-white rounded-full px-4 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.06)] items-center gap-3">
                <Search className="text-primary w-5 h-5" />
                <input className="flex-1 outline-none text-sm bg-transparent" placeholder="Search products..." />
              </div>
              <Link to="/cart" className="p-2 rounded-full hover:bg-muted transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>
              <Link to="/profile" className="p-2 rounded-full hover:bg-muted transition-colors">
                <User className="w-5 h-5" />
              </Link>
              <Link to="/login">
                <Button className="hidden sm:inline-flex bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full mt-4 bg-primary hover:bg-primary-dark">Login</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
