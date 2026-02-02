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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fafaf8 100%)',
        borderRadius: '16px',
        padding: '18px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
        border: '1px solid rgba(58, 100, 59, 0.1)'
      }}
      className="group hover:shadow-[0_12px_40px_rgba(58,100,59,0.15)] hover:-translate-y-3 transition-all duration-300 overflow-hidden cursor-pointer"
      whileHover={{ y: -12 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden bg-gradient-warm" style={{ height: '240px', width: '100%', borderRadius: '12px' }}>
          <motion.img
            src={image}
            alt={name}
            style={{
              height: '240px',
              width: '100%',
              borderRadius: '12px',
              objectFit: 'cover'
            }}
            className="group-hover:scale-110 transition-transform duration-700"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
      <div className="p-3 sm:p-4">
        <Link to={`/product/${id}`}>
          <motion.h3 
            className="font-heading text-base sm:text-lg font-semibold text-forest line-clamp-2 hover:text-primary transition-colors"
            whileHover={{ x: 4 }}
          >
            {name}
          </motion.h3>
        </Link>
        <p className="text-sm sm:text-[15px] font-normal tracking-wide text-gray-700 mt-1 line-clamp-2">{description}</p>

        <motion.div 
          className="flex items-center gap-1 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <Star
                className={`w-3 h-3 sm:w-4 sm:h-4 transition-all ${
                  i < Math.floor(rating)
                    ? "text-ayurveda-orange fill-ayurveda-orange"
                    : "text-muted"
                }`}
              />
            </motion.div>
          ))}
          <span className="text-xs sm:text-sm text-muted-foreground ml-1">({reviews})</span>
        </motion.div>

        <div className="flex items-center justify-between mt-3 sm:mt-4">
          <div>
            <span className="text-base sm:text-lg font-semibold text-gradient">{price ? `₹${price}` : 'Contact'}</span>
            {originalPrice && (
              <span className="text-xs sm:text-sm text-muted-foreground line-through ml-1 sm:ml-2">
                ₹{originalPrice}
              </span>
            )}
          </div>
          <motion.button
            onClick={onAddToCart}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-linear text-primary-foreground flex items-center justify-center hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
