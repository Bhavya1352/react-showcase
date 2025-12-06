import { useState, useRef, useEffect } from "react";
import { Search, ChevronRight, ChevronLeft, Play, X, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/ProductCard";
import { CategoryChip } from "@/components/ui/CategoryChip";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const categories = [
  { icon: "🌿", label: "All" },
  { icon: "💇", label: "Hair" },
  { icon: "✨", label: "Skin" },
  { icon: "🍵", label: "Digestion" },
  { icon: "🦴", label: "Bones" },
  { icon: "❤️", label: "Immunity" },
  { icon: "➕", label: "More" },
];

const products = [
  {
    id: "1",
    name: "Premium Ayurvedic Supplement",
    description: "Natural herbal blend for complete wellness and vitality",
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 234,
    image: "/item1.webp",
    category: "Immunity",
  },
  {
    id: "1.5",
    name: "Herbal Skin Care Kit",
    description: "Complete ayurvedic skincare solution for radiant complexion",
    price: 749,
    originalPrice: 999,
    rating: 4.7,
    reviews: 189,
    image: "/item2.jpg",
    category: "Skin",
  },
  {
    id: "2",
    name: "Amrutam Kuntal Care Herbal Shampoo | Healing Hair Care",
    description: "Natural herbal shampoo for lustrous hair",
    price: 395,
    originalPrice: 450,
    rating: 4.8,
    reviews: 203,
    image: "/item3.jpg",
    category: "Hair",
  },
  {
    id: "3",
    name: "Amrutam Nari Sondarya Malt | Complete Care For Women",
    description: "Holistic wellness supplement for women's health",
    price: 499,
    rating: 4.6,
    reviews: 89,
    image: "/item4.jpg",
    category: "Immunity",
  },
  {
    id: "4",
    name: "Amrutam Golden Glow Face Pack | Natural Radiance",
    description: "Herbal face pack for glowing skin",
    price: 549,
    originalPrice: 699,
    rating: 4.7,
    reviews: 178,
    image: "/item5.jpg",
    category: "Skin",
  },
  {
    id: "5",
    name: "Amrutam Digestive Churna | Ayurvedic Digestive Aid",
    description: "Traditional churna for better digestion",
    price: 299,
    rating: 4.4,
    reviews: 245,
    image: "/item,jpg",
    category: "Digestion",
  },
  {
    id: "6",
    name: "Amrutam Joint Care Oil | Pain Relief",
    description: "Ayurvedic oil for joint pain and muscle relief",
    price: 425,
    originalPrice: 525,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "Bones",
  },
  {
    id: "7",
    name: "Amrutam Hair Growth Oil | Natural Hair Care",
    description: "Premium ayurvedic oil for healthy hair growth and nourishment",
    price: 349,
    originalPrice: 449,
    rating: 4.8,
    reviews: 267,
    image: "/hair/hair1.jpg",
    category: "Hair",
  },
  {
    id: "8",
    name: "Amrutam Herbal Hair Mask | Deep Conditioning",
    description: "Intensive hair mask with natural herbs for damaged hair repair",
    price: 299,
    rating: 4.7,
    reviews: 189,
    image: "/hair/hair2.jpg",
    category: "Hair",
  },
  {
    id: "9",
    name: "Amrutam Anti-Dandruff Shampoo | Pure Ayurveda",
    description: "Natural shampoo to combat dandruff and scalp issues",
    price: 275,
    originalPrice: 325,
    rating: 4.6,
    reviews: 145,
    image: "/hair/hair3",
    category: "Hair",
  },
  {
    id: "10",
    name: "Amrutam Hair Serum | Frizz Control & Shine",
    description: "Lightweight serum for smooth, frizz-free and shiny hair",
    price: 399,
    rating: 4.9,
    reviews: 203,
    image: "/hair/hair4",
    category: "Hair",
  },
  {
    id: "11",
    name: "Amrutam Hair Color | Natural Henna Based",
    description: "Chemical-free hair color using pure henna and natural herbs",
    price: 199,
    originalPrice: 249,
    rating: 4.5,
    reviews: 98,
    image: "/hair/hair5",
    category: "Hair",
  },
  {
    id: "12",
    name: "Amrutam Vitamin C Face Serum | Brightening",
    description: "Natural vitamin C serum for radiant and glowing skin",
    price: 599,
    originalPrice: 749,
    rating: 4.8,
    reviews: 234,
    image: "/skin/skin1.jpg",
    category: "Skin",
  },
  {
    id: "13",
    name: "Amrutam Neem Face Wash | Acne Control",
    description: "Pure neem-based face wash for acne-prone skin",
    price: 225,
    rating: 4.7,
    reviews: 189,
    image: "/skin/skin2.jpg",
    category: "Skin",
  },
  {
    id: "14",
    name: "Amrutam Turmeric Face Pack | Anti-Inflammatory",
    description: "Natural turmeric pack for reducing inflammation and blemishes",
    price: 349,
    originalPrice: 449,
    rating: 4.6,
    reviews: 156,
    image: "/skin/skin3.jpg",
    category: "Skin",
  },
  {
    id: "15",
    name: "Amrutam Aloe Vera Gel | Soothing & Hydrating",
    description: "Pure aloe vera gel for skin hydration and soothing",
    price: 199,
    rating: 4.9,
    reviews: 278,
    image: "/skin/skin4.jpg",
    category: "Skin",
  },
  {
    id: "16",
    name: "Amrutam Rose Water Toner | Balancing",
    description: "Natural rose water toner for pH balance and skin refreshment",
    price: 175,
    originalPrice: 225,
    rating: 4.5,
    reviews: 145,
    image: "/skin/skin5.jpg",
    category: "Skin",
  },
  {
    id: "17",
    name: "Amrutam Triphala Powder | Digestive Health",
    description: "Traditional triphala formulation for complete digestive wellness",
    price: 299,
    originalPrice: 349,
    rating: 4.7,
    reviews: 198,
    image: "/digestion/digestion1.jpg",
    category: "Digestion",
  },
  {
    id: "18",
    name: "Amrutam Ginger Tea | Digestive Soother",
    description: "Organic ginger tea for nausea relief and digestion support",
    price: 149,
    rating: 4.6,
    reviews: 167,
    image: "/digestion/digestion2.jpg",
    category: "Digestion",
  },
  {
    id: "19",
    name: "Amrutam Ajwain Seeds | Gas Relief",
    description: "Natural ajwain seeds for bloating and gas discomfort",
    price: 89,
    originalPrice: 129,
    rating: 4.8,
    reviews: 234,
    image: "/digestion/digestion3.jpg",
    category: "Digestion",
  },
  {
    id: "20",
    name: "Amrutam Hingvastak Churna | Indigestion Relief",
    description: "Classical ayurvedic formula for indigestion and bloating",
    price: 225,
    rating: 4.5,
    reviews: 145,
    image: "/digestion/digestion4.jpg",
    category: "Digestion",
  },
  {
    id: "21",
    name: "Amrutam Peppermint Oil | Digestive Comfort",
    description: "Pure peppermint oil for soothing digestive discomfort",
    price: 349,
    originalPrice: 399,
    rating: 4.9,
    reviews: 178,
    image: "/digestion/digestion5.jpg",
    category: "Digestion",
  },
  {
    id: "22",
    name: "Amrutam Giloy Juice | Immunity Booster",
    description: "Pure giloy stem juice for natural immunity enhancement",
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviews: 312,
    image: "/immunity/immun1.jpg",
    category: "Immunity",
  },
  {
    id: "23",
    name: "Amrutam Ashwagandha Capsules | Stress Relief",
    description: "Premium ashwagandha capsules for immunity and stress management",
    price: 399,
    rating: 4.7,
    reviews: 245,
    image: "/immunity/immun2.jpg",
    category: "Immunity",
  },
  {
    id: "24",
    name: "Amrutam Chyawanprash | Daily Immunity",
    description: "Traditional chyawanprash for overall immunity and vitality",
    price: 499,
    originalPrice: 599,
    rating: 4.9,
    reviews: 456,
    image: "/immunity/immun3.jpg",
    category: "Immunity",
  },
  {
    id: "25",
    name: "Amrutam Turmeric Curcumin | Anti-Inflammatory",
    description: "High-potency curcumin capsules for immunity and joint health",
    price: 349,
    rating: 4.6,
    reviews: 198,
    image: "/immunity/immun4.jpg",
    category: "Immunity",
  },
  {
    id: "26",
    name: "Amrutam Vitamin C Tablets | Immune Support",
    description: "Natural vitamin C with amla for enhanced immune function",
    price: 199,
    originalPrice: 249,
    rating: 4.8,
    reviews: 267,
    image: "/immunity/immun5.jpg",
    category: "Immunity",
  },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { toast } = useToast();
  const summerScrollRef = useRef<HTMLDivElement>(null);
  const bestsellerScrollRef = useRef<HTMLDivElement>(null);
  const shortsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show welcome popup after a short delay
    const timer = setTimeout(() => {
      setShowWelcomePopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Shuffle function to randomize array
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Shuffle products when "All" category is selected
  const displayProducts = activeCategory === "All" ? shuffleArray(filteredProducts) : filteredProducts;

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative bg-premium overflow-hidden" style={{backgroundImage: 'url(/store.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(1.15) blur(1px)'}}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 -top-20 w-[300px] h-[300px] bg-[#E7DCC8] rounded-full blur-3xl opacity-30" />
          <div className="absolute -right-8 bottom-8 w-[220px] h-[220px] bg-[#F6EFD9] rounded-full blur-3xl opacity-25" />
        </div>
        <div className="container mx-auto px-4 pt-10 pb-5">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold tracking-tight text-center mb-6 sm:mb-8 mt-2 sm:mt-4"
          >
            Store
          </motion.h1>

          {/* Premium Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="flex items-center gap-3 h-12 sm:h-14 rounded-full bg-[#F1F1F1] px-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <Search className="text-primary w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-base bg-transparent"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Categories */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-background py-4 relative"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-items-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {categories.map((cat, index) => (
              <motion.div
                key={cat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                <CategoryChip
                  icon={cat.icon}
                  label={cat.label}
                  isActive={activeCategory === cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-background pt-4 pb-8 lg:pb-12"
      >
        <div className="container mx-auto px-4">
          {/* Products Collection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollLeft(summerScrollRef)}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollRight(summerScrollRef)}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            <motion.div
              ref={summerScrollRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {displayProducts.slice(0, 6).map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-[80vw] sm:w-72 md:w-80"
                >
                  <ProductCard
                    {...product}
                    onAddToCart={() => handleAddToCart(product.name)}
                    onClick={() => handleProductClick(product)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bestsellers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-primaryDark/90">Bestsellers</h2>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {displayProducts.slice(3, 6).map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard
                    {...product}
                    onAddToCart={() => handleAddToCart(product.name)}
                    onClick={() => handleProductClick(product)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Ayurvedic Shorts Videos */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-background py-8 lg:py-12"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-xl font-semibold text-primaryDark/90 text-center mb-8"
          >
            Ayurvedic Shorts
          </motion.h2>
          <div className="hidden md:flex items-center justify-end mb-6">
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollLeft(shortsScrollRef)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollRight(shortsScrollRef)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
          <div className="relative overflow-hidden w-full max-w-5xl mx-auto px-4">
            <motion.div
              ref={shortsScrollRef}
              className="flex gap-4 sm:gap-8 overflow-x-auto pb-4 scrollbar-hide"
            >
              {[
                { id: 1, title: "5 Min Yoga for Digestion", thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=500&fit=crop", duration: "5:23" },
                { id: 2, title: "Herbal Tea Benefits", thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=500&fit=crop", duration: "3:45" },
                { id: 3, title: "Ayurvedic Morning Routine", thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=500&fit=crop", duration: "7:12" },
                { id: 4, title: "Natural Hair Care Tips", thumbnail: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=300&h=500&fit=crop", duration: "4:56" },
                { id: 5, title: "Skin Glow Secrets", thumbnail: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&h=500&fit=crop", duration: "6:34" },
                // Duplicate for seamless loop
                { id: 6, title: "5 Min Yoga for Digestion", thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=500&fit=crop", duration: "5:23" },
                { id: 7, title: "Herbal Tea Benefits", thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=500&fit=crop", duration: "3:45" },
                { id: 8, title: "Ayurvedic Morning Routine", thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=500&fit=crop", duration: "7:12" },
                { id: 9, title: "Natural Hair Care Tips", thumbnail: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=300&h=500&fit=crop", duration: "4:56" },
                { id: 10, title: "Skin Glow Secrets", thumbnail: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&h=500&fit=crop", duration: "6:34" },
              ].map((video, index) => (
                <motion.div
                  key={video.id}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-36 sm:w-44 bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="relative aspect-[3/4] bg-beige">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Customer Reviews Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="bg-background py-8 lg:py-12"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-xl font-semibold text-primaryDark/90 text-center mb-12"
          >
            What Our Customers Say
          </motion.h2>

          {/* Reviews Grid - Mobile Friendly */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: 1,
                name: "Priya Sharma",
                location: "Mumbai",
                rating: 5,
                review: "AMRUTAM products have transformed my skin! The natural ingredients work wonders.",
                date: "2 weeks ago",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
              },
              {
                id: 2,
                name: "Rajesh Kumar",
                location: "Delhi",
                rating: 5,
                review: "Excellent quality ayurvedic supplements. Felt the difference in my energy levels within days.",
                date: "1 month ago",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
              },
              {
                id: 3,
                name: "Anjali Patel",
                location: "Ahmedabad",
                rating: 5,
                review: "The hair care products are amazing! My hair has never been this healthy and shiny.",
                date: "3 weeks ago",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
              },
              {
                id: 4,
                name: "Vikram Singh",
                location: "Jaipur",
                rating: 5,
                review: "Traditional ayurveda with modern convenience. Highly recommend their digestive supplements.",
                date: "1 week ago",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
              },
              {
                id: 5,
                name: "Sneha Reddy",
                location: "Hyderabad",
                rating: 5,
                review: "Best ayurvedic oils for joint pain relief. Highly effective and natural!",
                date: "5 days ago",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
              },
              {
                id: 6,
                name: "Arun Joshi",
                location: "Pune",
                rating: 5,
                review: "The immunity boosters are fantastic. My family uses them regularly now.",
                date: "2 days ago",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
              }
            ].map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.8 + index * 0.1,
                  ease: "easeOut"
                }}
                className="bg-card rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-forest text-sm sm:text-base truncate">{review.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-ayurveda-orange fill-ayurveda-orange"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-3 italic text-sm sm:text-base leading-relaxed">"{review.review}"</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Welcome Popup */}
      <Dialog open={showWelcomePopup} onOpenChange={setShowWelcomePopup}>
        <DialogContent className="w-[95vw] max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-heading text-forest">
              Welcome to AMRUTAM
            </DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video bg-beige rounded-xl overflow-hidden">
            <img
              src="/pop.jpg"
              alt="Welcome to AMRUTAM"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Welcome to AMRUTAM</h3>
              <p className="text-sm">Discover the ancient wisdom of Ayurveda for modern wellness. Experience natural healing with our premium herbal products.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Product Quick View Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="w-[95vw] max-w-2xl">
          {selectedProduct && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-square bg-beige rounded-xl overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-heading font-bold text-forest">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-muted-foreground">{selectedProduct.description}</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-brown">₹{selectedProduct.price}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        ₹{selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        handleAddToCart(selectedProduct.name);
                        setSelectedProduct(null);
                      }}
                      className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground py-3 px-6 rounded-lg font-medium"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="px-6 py-3 border border-border rounded-lg hover:bg-muted"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
