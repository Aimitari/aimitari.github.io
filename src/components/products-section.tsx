import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Smartphone, Brain, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
const ProductsSection = () => {
  const products = [{
    icon: Heart,
    title: "Telecardia ECG & Telemedicine Systems",
    description: "Making ECG as simple as taking blood pressure. Portable 12-channel electrocardiograph with rapid transmission.",
    features: ["15-second acquisition", "No disposable electrodes", "Bluetooth transmission", "350+ ECG traces per charge"],
    status: "Market Ready",
    category: "Cardiovascular"
  }, {
    icon: Activity,
    title: "AImitari Ankle Foot Orthoses (A2FO)",
    description: "Designed to restore confidence in every step. Built on science, proven in motion.",
    features: ["85% ankle torque reduction", "20% less walking effort", "Premium carbon fiber", "European certified"],
    status: "Market Ready",
    category: "Mobility"
  }, {
    icon: Brain,
    title: "FormeBuds Intelligent Earbuds",
    description: "AI-based sleep and brain health monitoring earbuds with brainwave synchronization technology.",
    features: ["Brainwave synchronization", "Sleep quality tracking", "Mental care monitoring", "Comfortable all-night wear"],
    status: "Development",
    category: "Wearables"
  }];
  const capabilities = [{
    icon: Smartphone,
    title: "Standardisation for Better Data Quality",
    description: "Powering decisions with Real-time Intelligence"
  }, {
    icon: TrendingUp,
    title: "Smarter, Non-invasive Diagnostics",
    description: "Redefine what's possible in Point of Care"
  }, {
    icon: Users,
    title: "Personalised Insights that Tailor Treatment",
    description: "Turn complexity into simplicity and clarity"
  }];
  return <>
    <section className="section-padding bg-gradient-medical">
      <div className="container-medical">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 border-white/20 text-white">
            Our Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            AI-Enabled Smart Medical Solutions
          </h2>
          <p className="text-lg text-white/90">
            Comprehensive portfolio of innovative medical technologies designed to transform 
            diabetes and cardiovascular care globally.
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => <Card key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm shadow-soft hover:shadow-medical transition-smooth animate-fade-in border border-white/20" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-white/90">
                  {capability.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/30">
      <div className="container-medical">
        {/* Product Portfolio */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Market Ready Solutions
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From research and development to strategic partnerships, our holistic pipeline 
              delivers comprehensive healthcare solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => <Card key={index} className="group hover:shadow-medical transition-smooth animate-scale-in bg-gradient-card flex flex-col" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-gradient-medical rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <product.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge variant={product.status === "Available" ? "default" : product.status === "Market Ready" ? "secondary" : "outline"}>
                        {product.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-2 mb-4 min-h-[120px]">
                      {product.features.map((feature, idx) => <div key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>)}
                    </div>
                  </div>
                  <Link to={`/products/${index === 0 ? 'cardiovascular' : index === 1 ? 'a2fo' : 'earbuds'}`} className="block">
                    <Button variant="outline" className="w-full btn-outline-medical group">
                      Learn More
                      <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-medical rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Healthcare?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Discover how our AI-enabled solutions can revolutionize patient care in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@aimitari.com?subject=Demo%20Request&body=Hello%20AImitari%20Team%2C%0A%0AI%20am%20interested%20in%20scheduling%20a%20demo%20of%20your%20AI-enabled%20smart%20medical%20solutions.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0AThank%20you.">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Request Demo
              </Button>
            </a>
            <Link to="/products">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>;
};
export default ProductsSection;