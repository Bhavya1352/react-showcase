import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, Heart, Share2, ChevronDown, Play } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const productImages = [
  "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600",
  "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600",
  "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600",
];

const ingredients = [
  { name: "Oils like Neel", benefit: "Nourishes scalp", image: "/ingridents.jpg" },
  { name: "Bhringraj", benefit: "Promotes hair growth", image: "/ingridents.jpg" },
  { name: "Amla", benefit: "Strengthens roots", image: "/ingridents.jpg" },
  { name: "Brahmi", benefit: "Reduces hair fall", image: "/ingridents.jpg" },
];

const relatedProducts = [
  {
    id: "2",
    name: "Amrutam Kuntal Care Herbal Shampoo",
    description: "Natural herbal shampoo",
    price: 395,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400",
  },
  {
    id: "3",
    name: "Amrutam Nari Sondarya Malt",
    description: "Women's wellness supplement",
    price: 499,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400",
  },
  {
    id: "4",
    name: "Amrutam Golden Glow Face Pack",
    description: "Herbal face pack",
    price: 549,
    rating: 4.7,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400",
  },
];

const reviews = [
  {
    id: 1,
    name: "Priya S.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Excellent product! My hair feels so much healthier after using this for a month. The natural ingredients really work wonders.",
  },
  {
    id: 2,
    name: "Rahul M.",
    rating: 4,
    date: "1 month ago",
    comment: "Good quality product. The packaging was secure and the product was fresh. Seeing visible results in hair texture.",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("100ml");
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: "Product has been added to your cart.",
    });
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-beige py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/shop" className="hover:text-primary">Store</Link>
            <span className="mx-2">/</span>
            <Link to="/shop?category=hair" className="hover:text-primary">Hair Care</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Kuntal Care Hair Spa</span>
          </nav>
        </div>
      </div>

      <section className="bg-background py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 py-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-beige rounded-2xl overflow-hidden">
                <img
                  src={productImages[selectedImage]}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === idx ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info and Reviews */}
            <div className="space-y-6">
              <div>
                <h1 className="font-heading text-2xl lg:text-3xl font-bold text-forest mb-2">
                  Amrutam Kuntal Care Hair Spa | Do it yourself Hair Treatment
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? "text-ayurveda-orange fill-ayurveda-orange" : "text-muted"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(156 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-brown">₹649</span>
                <span className="text-xl text-muted-foreground line-through">₹799</span>
                <span className="text-sm text-accent font-medium">19% off</span>
              </div>

              {/* Size Selection */}
              <div>
                <p className="text-sm font-medium mb-3">Size</p>
                <div className="flex gap-3">
                  {["100ml", "200ml"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="text-sm font-medium mb-3">Quantity</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button onClick={handleAddToCart} className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground py-6 text-lg">
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-lg">
                    Buy Now
                  </Button>
                </div>
                <div className="flex gap-4 justify-center">
                  <button className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-border pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Hair resort SPA has Spa, in a simple DIY at Home hair Root Care. It can greatly
                  improve blood circulation, promote metabolism, keep hair fragrant and lustrous.
                  Suitable for all scalp conditions including dry, oily and sensitive skin. As this
                  DIY at home SPA will repair the hair from Root to Tip.
                </p>
              </div>

              {/* Product Highlights */}
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-beige mb-5">
                <h3 className="font-heading font-semibold text-forest mb-3">✨ Product Highlights</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>100% Natural</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>No Chemicals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Ayurvedic Formula</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Cruelty Free</span>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-xl font-bold text-forest">Reviews and Ratings</h2>
                  <Button variant="outline" size="sm">Write a Review</Button>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold text-forest">4.6</div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? "text-ayurveda-orange fill-ayurveda-orange" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Based on 156 reviews</p>
                  </div>
                </div>
                <div className="relative max-h-96 overflow-y-auto">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30"></div>

                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={review.id} className="relative flex gap-4">
                        {/* Timeline dot */}
                        <div className="relative z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {index + 1}
                        </div>

                        {/* Review content */}
                        <div className="flex-1 bg-card rounded-lg p-4 border border-border shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center font-medium text-primary text-xs">
                              {review.name[0]}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{review.name}</p>
                              <p className="text-xs text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < review.rating
                                    ? "text-ayurveda-orange fill-ayurveda-orange"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-12">
            <Tabs defaultValue="ingredients" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0">
                <TabsTrigger
                  value="ingredients"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                >
                  Key Ingredients
                </TabsTrigger>
                <TabsTrigger
                  value="usage"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                >
                  How to Use
                </TabsTrigger>
                <TabsTrigger
                  value="benefits"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                >
                  Benefits
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ingredients" className="mt-6">
                <div className="flex flex-col sm:flex-row justify-around items-center my-5 gap-8 sm:gap-4">
                  {ingredients.map((ing, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center text-muted-foreground max-w-[150px]">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-3 mx-auto border-2 border-primary/20">
                        <img
                          src={ing.image}
                          alt={ing.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-forest">{ing.name}</h4>
                      <p className="text-sm">{ing.benefit}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="usage" className="mt-6">
                <div className="prose prose-green max-w-none">
                  <ol className="space-y-3 text-muted-foreground">
                    <li>Take required amount of Hair Spa and apply on scalp</li>
                    <li>Massage gently for 10-15 minutes</li>
                    <li>Leave it for 30 minutes</li>
                    <li>Wash with Amrutam Kuntal Care Shampoo</li>
                    <li>Use twice a week for best results</li>
                  </ol>
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="mt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Promotes healthy hair growth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Reduces hair fall and breakage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Nourishes scalp and roots
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Adds natural shine and softness
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>

          {/* Video Section */}
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest mb-6">How to Use</h2>
            <div className="relative aspect-video bg-beige rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                </div>
              </button>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest mb-6">People Also Bought</h2>
            <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide">
              {relatedProducts.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-72">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
