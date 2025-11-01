import { SideMenu } from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <SideMenu />
      
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {cart.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Button onClick={() => navigate("/")}>Start Shopping</Button>
          </Card>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 border border-border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <span className="font-bold text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 sticky bottom-0">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              <Button className="w-full mb-2" size="lg">
                Proceed to Checkout
              </Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>
                Clear Cart
              </Button>
            </Card>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;
