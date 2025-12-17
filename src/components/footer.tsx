import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo.png";
import { Linkedin, Mail, MapPin, Heart } from "lucide-react";
const Footer = () => {
  const footerLinks = {
    company: [{
      name: "Our Team",
      path: "/team"
    }],
    solutions: [{
      name: "Products",
      path: "/products"
    }]
  };
  return <footer className="bg-muted/50 border-t border-border">
      {/* Main Footer */}
      <div className="container-medical py-16">
        <div className="flex justify-center">
          {/* Company Info */}
          <div className="max-w-md space-y-6 text-center">
            <Link to="/" className="inline-block hover:opacity-80 transition-smooth">
              <img src={logo} alt="AImitari MedTech - Medically Yours" className="h-48 w-auto" />
            </Link>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming healthcare through AI-enabled smart medical solutions. 
              Making diagnostics more accurate, affordable, and accessible for one billion lives globally.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@aimitari.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>3 Mount Elizabeth Hospital #14-15, Singapore 228510</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/company/aimitari-medtech-pte-ltd" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:info@aimitari.com">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 AImitari MedTech PTE. LTD. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for global healthcare</span>
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">MED1CALLY Y0URS</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;