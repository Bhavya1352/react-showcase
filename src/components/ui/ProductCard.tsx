import { Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
}

export const ProductCard = ({
  id,
  name,
  description,
  price,
  originalPrice,
  rating,
  reviews,
  image,
}: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-beige">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-heading text-lg font-semibold text-forest line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? "text-ayurveda-orange fill-ayurveda-orange"
                  : "text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({reviews})</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg font-semibold text-brown">₹{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                ₹{originalPrice}
              </span>
            )}
          </div>
          <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-dark transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
