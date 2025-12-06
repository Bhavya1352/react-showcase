import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer style={{ background: '#f1eee2', padding: '60px 40px' }}>
      {/* App Download Section */}
      <div className="bg-gradient-to-r from-beige to-muted py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-forest mb-4">
                Download Amrutam Ayurveda App Now
              </h2>
              <p className="text-muted-foreground mb-6">
                The Amrutam Ayurveda App is your one-stop app for all things Ayurveda. Expert Doctors advising, the webshop, this app has added benefits.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                  <span>Access to Practitioners</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                  <span>Free E-book Library</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                  <span>Green Clinic Mile Radius</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                  <span>AI-Dosha Detection</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-auto">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-4 transform rotate-3">
                  <div className="bg-card rounded-2xl p-4 shadow-elegant transform -rotate-3">
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <p className="text-sm text-muted-foreground">App Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold text-forest mb-4">Get in Touch</h3>
            <p className="text-sm text-muted-foreground mb-4">Support.amrutam@gmail.com</p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="w-4 h-4 mt-1 shrink-0" />
              <span>Amrutam Pharmaceuticals Pvt Ltd, Chitragupta Ganj, Nai Sadak, Lashkar, Gwalior - 474001</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91-9713171999</span>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="font-heading text-xl font-bold text-forest mb-4">Information</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy for Mobile Apps</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping and Returns Policy</Link></li>
              <li><Link to="/international" className="text-muted-foreground hover:text-primary transition-colors">International Delivery</Link></li>
              <li><Link to="/authenticity" className="text-muted-foreground hover:text-primary transition-colors">For Practitioners, Doctors, and Experts</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold text-forest mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/herbs" className="text-muted-foreground hover:text-primary transition-colors">Herbs Library</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/doctors" className="text-muted-foreground hover:text-primary transition-colors">Find Doctors</Link></li>
              <li><Link to="/forum" className="text-muted-foreground hover:text-primary transition-colors">Forum</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-xl font-bold text-forest mb-4">Subscribe to our Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Get wellness tips and exclusive offers!</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-card border-border"
              />
              <Button className="bg-primary hover:bg-primary-dark shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Amrutam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
