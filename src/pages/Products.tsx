import Navigation from "@/components/ui/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Footprints, Headphones, ArrowRight, CheckCircle, Monitor, Heart, Camera, Waves, Droplets, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import systemOverview from "@/assets/system-overview.png";
const Products = () => {
  const strategicProducts = [{
    id: "cardiovascular",
    icon: Activity,
    title: "Telecardia ECG & Telemedicine Systems",
    description: "Making ECG as simple as taking blood pressure. Portable 12-channel electrocardiograph with rapid transmission.",
    features: ["15-second acquisition", "No disposable electrodes", "Bluetooth transmission", "350+ ECG traces per charge"],
    status: "Market Ready",
    category: "Cardiovascular",
    link: "/products/cardiovascular"
  }, {
    id: "a2fo",
    icon: Footprints,
    title: "AImitari Ankle Foot Orthoses (A2FO)",
    description: "Designed to restore confidence in every step. Built on science, proven in motion.",
    features: ["85% ankle torque reduction", "20% less walking effort", "Premium carbon fiber", "European certified"],
    status: "Market Ready",
    category: "Mobility",
    link: "/products/a2fo"
  }, {
    id: "earbuds",
    icon: Headphones,
    title: "FormeBuds Intelligent Earbuds",
    description: "AI-based sleep and brain health monitoring earbuds with brainwave synchronization technology.",
    features: ["Brainwave synchronization", "Sleep quality tracking", "Mental care monitoring", "Comfortable all-night wear"],
    status: "Development",
    category: "Wearables",
    link: "/products/earbuds"
  }];
  const rdProducts = [{
    id: "monitoring-buddy",
    icon: Monitor,
    title: "Monitoring Intelligent Buddy",
    description: "Standardisation Tool for Imaging with Vital Sign Monitoring",
    features: ["Imaging standardisation", "Vital sign tracking", "Real-time monitoring", "Clinical integration"],
    status: "Research",
    category: "Diagnostics"
  }, {
    id: "easy-ecg",
    icon: Heart,
    title: "Easy ECG Intelligent Buddy",
    description: "Effortless Cardiovascular Analysis",
    features: ["Simplified ECG analysis", "AI interpretation", "Quick diagnostics", "User-friendly interface"],
    status: "Research",
    category: "Cardiovascular"
  }, {
    id: "picture-position",
    icon: Camera,
    title: "Picture Position Intelligent Buddy",
    description: "Standardisation Tool for Imaging",
    features: ["Position optimization", "Imaging consistency", "Quality assurance", "Clinical accuracy"],
    status: "Research",
    category: "Diagnostics"
  }, {
    id: "klang-buddy",
    icon: Waves,
    title: "Klang Intelligent Buddy",
    description: "Personalised and Dynamic AV Fistula, CO2/O2 Stroke Volume and Sleep Monitoring",
    features: ["AV fistula monitoring", "Gas exchange tracking", "Sleep analysis", "Personalized insights"],
    status: "Research",
    category: "Monitoring"
  }, {
    id: "fluid-buddy",
    icon: Droplets,
    title: "Fluid Intelligent Buddy",
    description: "Personalised and Dynamic Fluid Monitoring",
    features: ["Fluid balance tracking", "Dynamic monitoring", "Personalized alerts", "Clinical integration"],
    status: "Research",
    category: "Monitoring"
  }, {
    id: "monitoring-suite",
    icon: Laptop,
    title: "Monitoring Intelligent Suite",
    description: "Software tool for diagnostics",
    features: ["Comprehensive diagnostics", "Data visualization", "Clinical workflows", "Integration ready"],
    status: "Research",
    category: "Software"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container-medical">
            <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
              <Badge variant="outline" className="mb-4">
                Our Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                AI-Enabled Smart{" "}
                <span className="text-primary">
                  Medical Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Comprehensive portfolio of innovative medical technologies designed to transform 
                diabetes and cardiovascular care globally.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Products Section */}
        <section className="section-padding">
          <div className="container-medical">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Strategic Development, Sales and Distribution Partnerships
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {strategicProducts.map((product, index) => <Card key={product.id} className="group hover:shadow-medical transition-smooth animate-scale-in bg-gradient-card flex flex-col" style={{
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
                    {product.link && <Link to={product.link} className="block">
                      <Button variant="default" className="w-full group">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>}
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* R&D Products Section */}
        <section className="section-padding bg-muted/20">
          <div className="container-medical">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Research & Development of AI-Enabled Smart Solutions
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {rdProducts.map((product, index) => <Card key={product.id} className="group hover:shadow-medical transition-smooth animate-scale-in bg-gradient-card flex flex-col" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 bg-gradient-medical rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                        <product.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge variant="outline">
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
                      <div className="grid grid-cols-2 gap-2 min-h-[120px]">
                        {product.features.map((feature, idx) => <div key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>)}
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* System Overview Section */}
        <section className="section-padding bg-background">
          <div className="container-medical">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                System Overview
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Integrated ecosystem of intelligent medical devices powered by our MI-Suite 4.0 platform, 
                enabling seamless data collection, analysis, and clinical decision support.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={systemOverview} alt="System Overview - Research & Development of AI-Enabled Smart Solutions showing MI-Buddy, E2I-Buddy, KI-Buddy, P2I-Buddy, and FI-Buddy connected to MI-Suite 4.0" style={{
              maxWidth: '100%',
              width: 'auto'
            }} className="w-full max-w-2xl h-auto rounded-xl shadow-medical" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-medical text-white">
          <div className="container-medical text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Discover how our AI-enabled solutions can revolutionize patient care in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Request Demo
                </Button>
              </Link>
              <Link to="/team">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Products;