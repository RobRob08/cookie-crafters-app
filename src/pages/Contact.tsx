import { SideMenu } from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <SideMenu />
      
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have questions, feedback, or special requests? We'd love to hear from you!
          </p>
        </Card>

        <div className="grid gap-4 mb-6">
          <Card className="p-4 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </Card>

          <Card className="p-4 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">hello@cookiehaven.com</p>
            </div>
          </Card>

          <Card className="p-4 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">
                123 Baker Street, Sweet Town, ST 12345
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input placeholder="Your Name" required />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" required />
            </div>
            <div>
              <Input placeholder="Subject" required />
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={5} required />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default Contact;
