import { SideMenu } from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Smartphone, ShoppingBag, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutApp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SideMenu />
      
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">About the App</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Welcome to Cookie Haven</h2>
          <p className="text-muted-foreground">
            Our mobile app brings the delightful experience of Cookie Haven right to your 
            fingertips. Browse our full selection, customize your order, and have freshly 
            baked cookies delivered to your door.
          </p>
        </Card>

        <div className="space-y-4">
          <Card className="p-4 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Easy Ordering</h3>
              <p className="text-sm text-muted-foreground">
                Browse categories, add items to cart, and checkout in seconds
              </p>
            </div>
          </Card>

          <Card className="p-4 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Real-time Updates</h3>
              <p className="text-sm text-muted-foreground">
                Track your order status and get notifications when your cookies are ready
              </p>
            </div>
          </Card>

          <Card className="p-4 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Save Favorites</h3>
              <p className="text-sm text-muted-foreground">
                Mark your favorite cookies for quick reordering
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-6 mt-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-semibold mb-2">App Version 1.0.0</h3>
          <p className="text-sm text-muted-foreground">
            Built with love using React and Capacitor for the best mobile experience
          </p>
        </Card>
      </main>
    </div>
  );
};

export default AboutApp;
