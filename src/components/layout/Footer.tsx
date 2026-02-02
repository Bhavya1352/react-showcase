import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialIcons = [
    { Icon: Facebook, label: "Facebook" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Youtube, label: "Youtube" },
    { Icon: Linkedin, label: "Linkedin" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#f1eee2] to-[#efece6]">
      {/* App Download Section */}
      <div className="bg-gradient-to-r from-green-50 via-lime-50 to-green-50 py-16 lg:py-20 border-b border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center lg:text-left max-w-xl">
              <motion.h2 
                className="font-heading text-3xl lg:text-4xl font-bold text-forest mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Download Amrutam Ayurveda App Now
              </motion.h2>
              <motion.p 
                className="text-muted-foreground mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                The Amrutam Ayurveda App is your one-stop app for all things Ayurveda. Expert Doctors advising, the webshop, this app has added benefits.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Access to Practitioners",
                  "Free E-book Library",
                  "Green Clinic Mile Radius",
                  "AI-Dosha Detection"
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex items-center gap-2 text-sm">
                    <motion.span 
                      className="w-8 h-8 rounded-full bg-gradient-linear text-white flex items-center justify-center font-bold"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      ✓
                    </motion.span>
                    <span className="text-forest font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div 
                className="flex justify-center lg:justify-start gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.05, y: -2 }}
                />
                <motion.img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.05, y: -2 }}
                />
              </motion.div>
            </div>
            <motion.div 
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-64 h-auto">
                <motion.div 
                  className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-4 transform rotate-3"
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-warm rounded-2xl p-4 shadow-elegant transform -rotate-3">
                    <div className="text-center py-8">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-linear rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-3xl">📱</span>
                      </motion.div>
                      <p className="text-sm text-muted-foreground font-semibold">App Preview</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-xl font-bold text-forest mb-6">Get in Touch</h3>
            <p className="text-sm text-muted-foreground mb-4 font-medium">Support.amrutam@gmail.com</p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="w-4 h-4 mt-1 shrink-0 text-primary" />
              <span>Amrutam Pharmaceuticals Pvt Ltd, Chitragupta Ganj, Nai Sadak, Lashkar, Gwalior - 474001</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91-9713171999</span>
            </div>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, label }, idx) => (
                <motion.a 
                  key={label}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gradient-linear text-white flex items-center justify-center hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Information Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-xl font-bold text-forest mb-6">Information</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Terms and Conditions", path: "/terms" },
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Shipping and Returns Policy", path: "/shipping" },
                { label: "International Delivery", path: "/international" },
              ].map((link) => (
                <motion.li 
                  key={link.path}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-xl font-bold text-forest mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Shop", path: "/shop" },
                { label: "Herbs Library", path: "/herbs" },
                { label: "Blog", path: "/blog" },
                { label: "Find Doctors", path: "/doctors" },
                { label: "Forum", path: "/forum" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <motion.li 
                  key={link.path}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-xl font-bold text-forest mb-6">Subscribe to our Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-6">Get wellness tips and exclusive offers!</p>
            <motion.div 
              className="flex gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-primary/20 focus:border-primary"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-linear hover:shadow-lg text-white shrink-0 font-semibold">
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-primary/10 mt-16 pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-medium">© {new Date().getFullYear()} Amrutam. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
