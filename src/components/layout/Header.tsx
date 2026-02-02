import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "Health Assistant", path: "/ai-health-assistant", icon: "🤖" },
  { name: "Find Doctors", path: "/doctors", icon: "👨⚕️" },
  { name: "Lab Tests", path: "/lab-tests", icon: "🧪" },
  { name: "Shop", path: "/shop", icon: "🛒" },
  { name: "Forum", path: "/forum", icon: "💬" },
  { name: "About Us", path: "/about", icon: "ℹ️" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-linear text-primary-foreground py-3 px-4 text-center text-sm shadow-md"
      >
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="font-semibold">Welcome to AMRUTAM — Authentic Ayurvedic Wellness</span>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-dark/20 font-semibold">
              Try Instant Free Call Now
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="border-b border-primary/10 bg-gradient-to-r from-[#faf7ee] via-[#faf7ee] to-[#f5f3ed] shadow-sm backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>

              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <motion.img 
                  src="/favicon.svg" 
                  alt="Amrutam" 
                  className="h-8" 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`relative mx-3 text-base font-medium text-[#2e3a25] transition-colors flex items-center gap-2 group ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    <span className="text-lg group-hover:scale-125 transition-transform duration-300">{link.icon}</span>
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-linear rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/login">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="hidden sm:inline-flex bg-gradient-linear hover:shadow-lg text-primary-foreground rounded-full px-8 font-semibold transition-all duration-300">
                    Login
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-primary/10 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3 font-medium ${
                      location.pathname === link.path
                        ? "bg-gradient-linear text-white"
                        : "hover:bg-primary/5 text-[#2e3a25]"
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full mt-4 bg-gradient-linear hover:shadow-lg text-primary-foreground font-semibold">Login</Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </motion.div>
    </header>
  );
};
