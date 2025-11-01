import { SideMenu } from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { categories } from "@/data/products";

const AboutProducts = () => {
  const navigate = useNavigate();

  const categoryDescriptions = {
    "Chocolate Chip": "Our signature cookies loaded with premium chocolate chunks",
    "Oatmeal": "Wholesome cookies made with hearty oats and quality ingredients",
    "Sugar Cookies": "Classic buttery cookies perfect for any celebration",
    "Double Chocolate": "For chocolate lovers - rich, decadent, and irresistible",
    "Specialty": "Gourmet creations featuring unique flavors and premium toppings"
  };

  return (
    <div className="min-h-screen bg-background">
      <SideMenu />
      
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">About Our Products</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Quality Ingredients</h2>
          <p className="text-muted-foreground mb-4">
            Every cookie we bake starts with the finest ingredients. We use organic flour, 
            cage-free eggs, real butter, and premium chocolate. No artificial flavors, 
            colors, or preservatives ever make it into our recipes.
          </p>
        </Card>

        <h3 className="text-xl font-semibold mb-4">Our Cookie Categories</h3>
        <div className="space-y-4">
          {categories.filter(c => c !== "All").map((category) => (
            <Card key={category} className="p-4">
              <h4 className="font-bold text-lg mb-2 text-accent">{category}</h4>
              <p className="text-muted-foreground">
                {categoryDescriptions[category as keyof typeof categoryDescriptions]}
              </p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AboutProducts;
