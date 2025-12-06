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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: "url(/ingridents.jpg)" }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Authentic Ayurveda for Modern Wellness
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Rediscover balance and vitality with our 100% natural, doctor-formulated Ayurvedic recipes.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg h-12 px-8 rounded-full">
              Explore The Shop
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading text-forest mb-4">Shop by Concern</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
            Whatever your concern, we have a solution. Made with the purest ingredients and years of Ayurvedic wisdom.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link to={category.path} key={category.name}>
                <motion.div
                  className="group rounded-xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <img src={category.image} alt={category.name} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">{category.name}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-[#faf7ee]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-forest text-center mb-12">Our Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => {}}
                onClick={() => {}}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 hover:text-primary-dark rounded-full px-8">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-forest text-center mb-12">The Amrutam Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Feather className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">100% Natural</h3>
              <p className="text-muted-foreground">Our products are made from the purest ingredients, free from any harmful chemicals.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">Doctor-Formulated</h3>
              <p className="text-muted-foreground">Expertly crafted by Ayurvedic doctors for your specific health needs.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">Authentic Recipes</h3>
                <p className="text-muted-foreground">We follow ancient Ayurvedic texts to provide you with time-tested remedies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#f1eee2]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-forest text-center mb-12">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-md text-center"
              >
                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                <h4 className="font-bold text-forest">{testimonial.author}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Health Assistant CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-100 to-lime-100 rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-forest mb-4">Unsure what to choose?</h2>
              <p className="text-lg text-muted-foreground mb-6">Let our AI Health Assistant guide you. Get personalized recommendations based on your unique needs and dosha type.</p>
              <Link to="/ai-health-assistant">
                <Button size="lg" className="bg-primary hover:bg-primary-dark rounded-full h-12 px-8">
                    Try Our AI Assistant
                </Button>
              </Link>
            </div>
            <div className="relative h-48 w-48 lg:h-64 lg:w-64 flex-shrink-0">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                <Heart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-28 lg:h-28 text-primary opacity-80" />
                <GitCommitHorizontal className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-64 lg:h-64 text-primary/40 animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;