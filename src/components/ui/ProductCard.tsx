import { Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  onAddToCart?: () => void;
  onClick?: () => void;
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
  onAddToCart,
  onClick,
}: ProductCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      style={{
        background: 'white',
        borderRadius: '16px',
        padding: '18px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
        border: '1px solid #e7e3d5'
      }}
      className="group hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
      whileTap={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden bg-beige" style={{ height: '240px', width: '100%', borderRadius: '12px' }}>
          <img
            src={image}
            alt={name}
            style={{
              height: '240px',
              width: '100%',
              borderRadius: '12px',
              objectFit: 'cover'
            }}
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-3 sm:p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-heading text-base sm:text-lg font-semibold text-forest line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm sm:text-[15px] font-normal tracking-wide text-gray-700 mt-1 line-clamp-2">{description}</p>

        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 sm:w-4 sm:h-4 ${
                i < Math.floor(rating)
                  ? "text-ayurveda-orange fill-ayurveda-orange"
                  : "text-muted"
              }`}
            />
          ))}
          <span className="text-xs sm:text-sm text-muted-foreground ml-1">({reviews})</span>
        </div>

        <div className="flex items-center justify-between mt-3 sm:mt-4">
          <div>
            <span className="text-base sm:text-lg font-semibold text-brown">₹{price}</span>
            {originalPrice && (
              <span className="text-xs sm:text-sm text-muted-foreground line-through ml-1 sm:ml-2">
                ₹{originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={onAddToCart}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-dark transition-colors"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
