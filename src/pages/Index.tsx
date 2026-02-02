import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { motion } from "framer-motion";
import { ArrowRight, Feather, Droplets, Sparkles, Heart, GitCommitHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data - in a real app, this would come from an API
const featuredProducts = [
  {
    id: "1",
    name: "Kuntal Care Hair Spa",
    description: "Nourishing hair mask for soft and shiny hair.",
    price: 599,
    originalPrice: 799,
    rating: 4.9,
    reviews: 128,
    image: "/item1.webp",
    category: "Hair Care",
  },
  {
    id: "2",
    name: "Amrutam Face Clean-up",
    description: "For a brighter and even skin tone.",
    price: 899,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 98,
    image: "/item2.jpg",
    category: "Skin Care",
  },
  {
    id: "3",
    name: "Amrutam Nari Sondarya Malt",
    description: "Complete care for women's health and wellness.",
    price: 499,
    rating: 4.9,
    reviews: 210,
    image: "/item4.jpg",
    category: "Wellness",
  },
  {
    id: "4",
    name: "Golden Glow Face Pack",
    description: "Herbal face pack for a natural, radiant glow.",
    price: 549,
    originalPrice: 699,
    rating: 4.7,
    reviews: 178,
    image: "/item5.jpg",
    category: "Skin Care",
  },
];

const categories = [
    { name: "Hair Care", image: "/hair/hair1.jpg", path: "/shop" },
    { name: "Skin Care", image: "/skin/skin1.jpg", path: "/shop" },
    { name: "Immunity", image: "/immunity/immun1.jpg", path: "/shop" },
    { name: "Digestion", image: "/digestion/digestion1.jpg", path: "/shop" },
  ];
  

const testimonials = [
  {
    quote: "Amrutam's products have completely transformed my hair. I've never felt more confident!",
    author: "Priya S.",
    location: "Mumbai",
  },
  {
    quote: "The authenticity and purity of the ingredients are what I love most. My skin has never been clearer.",
    author: "Rajiv M.",
    location: "Delhi",
  },
  {
    quote: "Finally, an Ayurvedic brand that is both traditional and convenient for modern life. Highly recommended!",
    author: "Ananya K.",
    location: "Bangalore",
  },
];

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: "url(/ingridents.jpg)" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 px-4"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            Authentic Ayurveda for Modern Wellness
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-light"
          >
            Rediscover balance and vitality with our 100% natural, doctor-formulated Ayurvedic recipes.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg h-14 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Explore The Shop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-forest mb-4">Shop by Concern</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-16 text-lg">
              Whatever your concern, we have a solution. Made with the purest ingredients and years of Ayurvedic wisdom.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, idx) => (
              <Link to={category.path} key={category.name}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="group rounded-2xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow duration-300 h-80"
                >
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white font-heading">{category.name}</h3>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-[#faf7ee] to-[#f5f3ed]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-forest mb-4">Our Bestsellers</h2>
            <div className="w-20 h-1 bg-gradient-linear mx-auto rounded-full"></div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={cardVariants} whileHover="hover">
                <ProductCard
                  {...product}
                  onAddToCart={() => {}}
                  onClick={() => {}}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/shop">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 hover:text-primary-dark rounded-full px-10 h-12 text-lg font-semibold transition-all duration-300 hover:shadow-lg">
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-background via-[#faf7ee] to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial opacity-20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-forest mb-4">The Amrutam Promise</h2>
            <div className="w-20 h-1 bg-gradient-linear mx-auto rounded-full"></div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Feather, title: "100% Natural", desc: "Our products are made from the purest ingredients, free from any harmful chemicals." },
              { icon: Droplets, title: "Doctor-Formulated", desc: "Expertly crafted by Ayurvedic doctors for your specific health needs." },
              { icon: Sparkles, title: "Authentic Recipes", desc: "We follow ancient Ayurvedic texts to provide you with time-tested remedies." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="flex flex-col items-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 glow-effect-hover"
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-linear flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-forest mb-3 font-heading">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-[#f1eee2] to-[#faf7ee]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-forest mb-4">What Our Community Says</h2>
            <div className="w-20 h-1 bg-gradient-linear mx-auto rounded-full"></div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-primary/10 backdrop-blur-sm"
              >
                <motion.div 
                  className="text-5xl text-primary/30 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  "
                </motion.div>
                <p className="text-muted-foreground italic mb-6 text-lg leading-relaxed">{testimonial.quote}</p>
                <h4 className="font-bold text-forest text-lg font-heading">{testimonial.author}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Health Assistant CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-[#faf7ee]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-50 via-lime-50 to-green-50 rounded-3xl p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-xl border border-green-100/50 backdrop-blur-sm"
          >
            <div className="max-w-lg text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold font-heading text-forest mb-6"
              >
                Unsure what to choose?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                Let our AI Health Assistant guide you. Get personalized recommendations based on your unique needs and dosha type.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link to="/ai-health-assistant">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark rounded-full h-14 px-10 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Try Our AI Assistant
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className="relative h-64 w-64 lg:h-80 lg:w-80 flex-shrink-0"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <GitCommitHorizontal className="w-64 h-64 lg:w-80 lg:h-80 text-primary/20" />
              </motion.div>
              <Heart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32 text-primary opacity-80 animate-float" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
