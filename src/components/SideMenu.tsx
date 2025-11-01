import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, History, Package, ShoppingCart, Info, Code, Mail, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import userAvatar from "@/assets/user-avatar.jpg";

export const SideMenu = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    { icon: History, label: "Company History", path: "/history" },
    { icon: Package, label: "About Our Products", path: "/products" },
    { icon: ShoppingCart, label: "Cart", path: "/cart" },
    { icon: Info, label: "About the App", path: "/about" },
    { icon: Code, label: "Developers", path: "/developers" },
    { icon: Mail, label: "Contact Us", path: "/contact" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <div className="flex flex-col h-full">
          {/* User Profile Section */}
          <div className="p-6 bg-gradient-to-br from-primary to-accent">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-foreground">
                <img src={userAvatar} alt="User" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">{user?.name || "Guest"}</h3>
                <p className="text-sm text-primary-foreground/90">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 py-4">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-6 py-3 h-auto font-normal hover:bg-muted"
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-border">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full justify-start"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
