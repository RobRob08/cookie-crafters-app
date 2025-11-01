import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-accent uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="font-semibold text-lg mt-1 mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
          <Button onClick={() => addToCart(product)} size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};
