import { useState } from "react";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/ProductCard";
import { CategoryChip } from "@/components/ui/CategoryChip";
import { Input } from "@/components/ui/input";

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
    name: "Amrutam Kuntal Care Hair Spa | Do it yourself Hair Treatment",
    description: "A powerful Ayurvedic hair spa treatment for healthy scalp",
    price: 649,
    originalPrice: 799,
    rating: 4.5,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400",
  },
  {
    id: "2",
    name: "Amrutam Kuntal Care Herbal Shampoo | Healing Hair Care",
    description: "Natural herbal shampoo for lustrous hair",
    price: 395,
    originalPrice: 450,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400",
  },
  {
    id: "3",
    name: "Amrutam Nari Sondarya Malt | Complete Care For Women",
    description: "Holistic wellness supplement for women's health",
    price: 499,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400",
  },
  {
    id: "4",
    name: "Amrutam Golden Glow Face Pack | Natural Radiance",
    description: "Herbal face pack for glowing skin",
    price: 549,
    originalPrice: 699,
    rating: 4.7,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400",
  },
  {
    id: "5",
    name: "Amrutam Digestive Churna | Ayurvedic Digestive Aid",
    description: "Traditional churna for better digestion",
    price: 299,
    rating: 4.4,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400",
  },
  {
    id: "6",
    name: "Amrutam Joint Care Oil | Pain Relief",
    description: "Ayurvedic oil for joint pain and muscle relief",
    price: 425,
    originalPrice: 525,
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1600428877878-1a0ff561571c?w=400",
  },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-beige to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-12 lg:py-16 relative">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-forest text-center mb-8">
            Store
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 bg-card border-border rounded-full text-base"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <CategoryChip
                key={cat.label}
                icon={cat.icon}
                label={cat.label}
                isActive={activeCategory === cat.label}
                onClick={() => setActiveCategory(cat.label)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-background py-8 lg:py-12">
        <div className="container mx-auto px-4">
          {/* Summer Collection */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-bold text-forest">Summer Collection</h2>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 3).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>

          {/* Bestsellers */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-bold text-forest">Bestsellers</h2>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(3, 6).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
