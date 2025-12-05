import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Tag } from "lucide-react";

const initialCartItems = [
  {
    id: "1",
    name: "Amrutam Kuntal Care Hair Spa | Do it yourself Hair Treatment",
    size: "100ml",
    price: 649,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200",
  },
  {
    id: "2",
    name: "Amrutam Kuntal Care Herbal Shampoo | Healing Hair Care",
    size: "200ml",
    price: 395,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <Layout>
        <section className="bg-background py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-forest mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/shop">
              <Button className="bg-primary hover:bg-primary-dark">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-beige py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl font-bold text-forest">Shopping Cart</h1>
          <p className="text-muted-foreground mt-2">{cartItems.length} items in your cart</p>
        </div>
      </section>

      <section className="bg-background py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-xl p-4 sm:p-6 border border-border flex gap-4"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-beige shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="font-heading font-semibold text-forest hover:text-primary transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">Size: {item.size}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors shrink-0"
                      >
                        <X className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-lg font-semibold text-brown">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
                <h2 className="font-heading text-xl font-bold text-forest mb-6">
                  Order Summary
                </h2>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Have a coupon?</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-primary">Free</span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-xs text-primary">
                      🎉 You've unlocked free shipping!
                    </p>
                  )}
                  <div className="border-t border-border pt-3 mt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-brown">₹{total.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      (Inclusive of all taxes)
                    </p>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-primary hover:bg-primary-dark py-6 text-lg">
                  Proceed to Checkout
                </Button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground">
                  <div className="text-center">
                    <span className="text-2xl">🔒</span>
                    <p className="text-xs mt-1">Secure Payment</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl">🚚</span>
                    <p className="text-xs mt-1">Fast Delivery</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl">↩️</span>
                    <p className="text-xs mt-1">Easy Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
