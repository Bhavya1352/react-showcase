import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";

const categories = ["All", "Wellness", "Herbs", "Recipes", "Lifestyle", "Remedies"];

const featuredPost = {
  id: "1",
  title: "The Complete Guide to Ayurvedic Morning Routine for Better Health",
  excerpt:
    "Discover the ancient Ayurvedic practices that can transform your mornings and set you up for a day of optimal health and energy.",
  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
  author: "Dr. Priya Sharma",
  date: "December 1, 2024",
  readTime: "8 min read",
  category: "Lifestyle",
};

const posts = [
  {
    id: "2",
    title: "5 Ayurvedic Herbs for Natural Hair Growth",
    excerpt:
      "Learn about the most effective Ayurvedic herbs that have been used for centuries to promote healthy hair growth.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400",
    author: "Dr. Mahima Sharma",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Herbs",
  },
  {
    id: "3",
    title: "Understanding Your Dosha: A Beginner's Guide",
    excerpt:
      "Discover your unique mind-body type and learn how to balance it for optimal health and well-being.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
    author: "Dr. Rajesh Gupta",
    date: "November 25, 2024",
    readTime: "10 min read",
    category: "Wellness",
  },
  {
    id: "4",
    title: "Golden Milk: The Perfect Ayurvedic Bedtime Drink",
    excerpt:
      "Learn how to make the perfect turmeric latte and discover its amazing health benefits.",
    image: "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=400",
    author: "Anita Verma",
    date: "November 22, 2024",
    readTime: "5 min read",
    category: "Recipes",
  },
  {
    id: "5",
    title: "Ayurvedic Remedies for Digestive Health",
    excerpt:
      "Natural solutions for common digestive issues using time-tested Ayurvedic practices.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400",
    author: "Dr. Arun Sharma",
    date: "November 18, 2024",
    readTime: "7 min read",
    category: "Remedies",
  },
  {
    id: "6",
    title: "The Power of Ashwagandha: Benefits and Uses",
    excerpt:
      "Explore the incredible benefits of this adaptogenic herb and how to incorporate it into your daily routine.",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400",
    author: "Dr. Priya Nair",
    date: "November 15, 2024",
    readTime: "8 min read",
    category: "Herbs",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige to-background py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-forest text-center mb-4">
            Ayurveda Blog
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Discover ancient wisdom, wellness tips, and Ayurvedic remedies for a healthier life.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-card rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <Link to={`/blog/${featuredPost.id}`}>
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="aspect-[21/9] lg:aspect-[3/1]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="font-heading text-2xl lg:text-4xl font-bold text-white mb-4 max-w-3xl">
                  {featuredPost.title}
                </h2>
                <p className="text-white/80 mb-4 max-w-2xl hidden sm:block">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-beige py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-forest mb-8">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <article className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all group h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-forest mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
              Load More Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Get the latest Ayurvedic wellness tips, recipes, and exclusive content delivered to
            your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <button className="bg-primary-foreground text-primary px-8 py-2 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
