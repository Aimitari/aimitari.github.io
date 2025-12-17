import Navigation from "@/components/ui/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Moon, Activity, Zap, CheckCircle, Waves } from "lucide-react";
import formebudsDevice from "@/assets/formebuds-device.jpg";

const ProductEarbuds = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
          <div className="container-medical">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                FormeBuds
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                FormeBuds Intelligent Earbuds
              </h1>
              <p className="text-2xl font-semibold opacity-95 mb-4">
                DB BEATS - Brainwave Synchronization Sound
              </p>
              <p className="text-xl opacity-90 mb-4">
                AI-based sleep and brain health monitoring earbuds
              </p>
              <p className="text-lg opacity-85 mb-8">
                Essential item for deep sleep with comfortable all-night wear
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:sales@aimitari.com?subject=Pricing%20Request%20-%20FormeBuds%20Intelligent%20Earbuds&body=Hello%20AImitari%20Sales%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20pricing%20for%20the%20FormeBuds%20Intelligent%20Earbuds.%0A%0APlease%20provide%20details%20at%20your%20earliest%20convenience.%0A%0AThank%20you.">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Request Pricing
                  </Button>
                </a>
                <a href="mailto:info@aimitari.com?subject=Demo%20Request&body=Hello%20AImitari%20Team%2C%0A%0AI%20am%20interested%20in%20scheduling%20a%20demo%20of%20your%20AI-enabled%20smart%20medical%20solutions.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0AThank%20you.">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Schedule Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="section-padding">
          <div className="container-medical">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  AI-Based Customized Sleep Solution
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  FormeBuds combines advanced brainwave synchronization technology with comfortable design 
                  to deliver a personalized sleep and brain health monitoring experience. Using AI-powered 
                  algorithms, the earbuds adapt to your unique brain patterns to optimize sleep quality.
                </p>
                <p className="text-lg text-muted-foreground">
                  Whether you need deep sleep support or mental wellness monitoring throughout the day, 
                  FormeBuds provides the essential tools for brain health management in a comfortable, 
                  wearable form factor.
                </p>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8 flex items-center justify-center">
                <img 
                  src={formebudsDevice} 
                  alt="FormeBuds Intelligent Earbuds - Person wearing earbuds" 
                  className="w-full max-w-md h-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="section-padding bg-muted/30">
          <div className="container-medical">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Key Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced sleep and brain health technology in comfortable earbuds
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <Waves className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Brainwave Synchronization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>DB BEATS technology syncs with your brainwaves</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Promotes natural sleep state transitions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Moon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Sleep Quality Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Monitor sleep stages and quality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI-powered sleep optimization recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Brain Health Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Continuous mental wellness tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mental care monitoring throughout the day</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Comfortable All-Night Wear</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ergonomic design for extended wear</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Soft materials optimized for sleep comfort</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Activity className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">AI Customization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Personalized sound profiles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Adapts to your sleep patterns over time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Variants */}
        <section className="section-padding">
          <div className="container-medical">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Product Variants
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the solution that fits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Moon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">FormeBuds Sleep Edition</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Sleep and brain health care earphones designed for optimal rest and recovery
                  </CardDescription>
                  <ul className="space-y-2 text-muted-foreground text-left">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Brainwave synchronization for deep sleep</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>All-night comfortable wear</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sleep quality analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Brid.zzz Mental Care Edition</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Mental wellness monitoring earbuds for daily mental health management
                  </CardDescription>
                  <ul className="space-y-2 text-muted-foreground text-left">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>3x daily mental care monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mental wellness tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Stress management support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-medical text-white">
          <div className="container-medical text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact our team to learn more about pricing, implementation, and how FormeBuds 
              can transform your sleep and brain health monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sales@aimitari.com?subject=Sales%20Inquiry%20-%20FormeBuds%20Intelligent%20Earbuds&body=Hello%20AImitari%20Sales%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20FormeBuds%20Intelligent%20Earbuds%20for%20my%20organization.%0A%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you.">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Contact Sales
                </Button>
              </a>
              <a href="/FormeBuds_Brochure.pdf" download="AImitari_FormeBuds_Brochure.pdf">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductEarbuds;
