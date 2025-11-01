import { useState } from "react";
import { SideMenu } from "@/components/SideMenu";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/cookie-hero.jpg";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <SideMenu />
      
      {/* Header with Cart */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cookie Haven
          </h1>
          <Button 
            variant="outline" 
            size="icon" 
            className="relative"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="h-5 w-5" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-48 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Delicious cookies" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-3xl font-bold text-primary-foreground drop-shadow-lg">
            Freshly Baked Daily
          </h2>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-6">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
