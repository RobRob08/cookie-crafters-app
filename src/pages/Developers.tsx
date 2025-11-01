import { SideMenu } from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Code, Zap, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Developers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SideMenu />
      
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Developers</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Technical Information</h2>
          <p className="text-muted-foreground">
            This app was built using modern web technologies to deliver a native mobile 
            experience with the flexibility of web development.
          </p>
        </Card>

        <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
        <div className="space-y-4">
          <Card className="p-4 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">React + TypeScript</h3>
              <p className="text-sm text-muted-foreground">
                Built with React 18 and TypeScript for type-safe, component-based development
              </p>
            </div>
          </Card>

          <Card className="p-4 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Smartphone className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Capacitor</h3>
              <p className="text-sm text-muted-foreground">
                Cross-platform native runtime for iOS and Android deployment
              </p>
            </div>
          </Card>

          <Card className="p-4 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Vite + Tailwind CSS</h3>
              <p className="text-sm text-muted-foreground">
                Lightning-fast build tool with utility-first CSS framework
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-6 mt-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-semibold mb-2">Development Team</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Created with ❤️ by the Cookie Haven development team
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Cookie Haven. All rights reserved.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default Developers;
