import { SideMenu } from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CompanyHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SideMenu />
      
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Company History</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Story</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2010, Cookie Haven started as a small family bakery with a big dream: 
              to bring joy to people's lives through the simple pleasure of a perfectly baked cookie.
            </p>
            
            <p>
              Our journey began in a modest kitchen where our founder, Chef Maria, perfected her 
              grandmother's secret recipes. What started with classic chocolate chip cookies soon 
              expanded to include a wide variety of flavors and styles.
            </p>
            
            <p>
              Today, Cookie Haven has grown into a beloved bakery known for using only the finest 
              ingredients and traditional baking methods. We still make every batch with the same 
              love and care as we did on day one.
            </p>
            
            <p>
              Our commitment to quality has never wavered. We source organic ingredients, use 
              sustainable practices, and continuously innovate while honoring the timeless 
              techniques that make our cookies special.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default CompanyHistory;
