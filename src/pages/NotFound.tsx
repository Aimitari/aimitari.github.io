import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
      <Card className="max-w-lg w-full bg-gradient-card shadow-medical">
        <CardContent className="pt-12 pb-8 text-center">
          <div className="mb-8">
            <div className="text-8xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
              404
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-medical w-full sm:w-auto group">
                <Home className="mr-2 h-4 w-4" />
                Go to Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="btn-outline-medical w-full sm:w-auto">
                <Search className="mr-2 h-4 w-4" />
                View Products
              </Button>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Quick Links:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/team" className="text-primary hover:underline">Our Team</Link>
              <Link to="/contact" className="text-primary hover:underline">Contact Us</Link>
              <Link to="/products" className="text-primary hover:underline">Products</Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
