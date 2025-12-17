import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import logoImage from "@/assets/d0b30b7a-6284-49c8-b469-f5b9462d10c3.jpg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Products",
    path: "/products"
  }, {
    name: "Team",
    path: "/team"
  }];
  const moreLinks: {
    name: string;
    path: string;
  }[] = [];
  return <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 transition-smooth">
      <div className="container-medical bg-white">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-smooth">
            <img alt="AImitari MedTech - Medically Yours" className="h-10 w-auto" src={logoImage} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-smooth hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`}>
                {link.name}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-smooth">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block py-2 text-base font-medium transition-smooth ${isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
                  {link.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;