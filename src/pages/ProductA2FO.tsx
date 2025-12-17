import Navigation from "@/components/ui/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Shield, TrendingUp, Heart, CheckCircle, Users } from "lucide-react";
import a2foDevice from "@/assets/a2fo-device.png";
const ProductA2FO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
          <div className="container-medical">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Ankle Foot Orthoses
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AImitari Ankle Foot Orthoses (A2FO)</h1>
              <p className="text-2xl font-semibold opacity-95 mb-4">Designed to restore confidence in every step.</p>
              <p className="text-xl opacity-90 mb-8">Built on science. Proven in motion.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:sales@aimitari.com?subject=Pricing%20Request%20-%20A2FO%20Ankle%20Foot%20Orthoses&body=Hello%20AImitari%20Sales%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20pricing%20for%20the%20AImitari%20A2FO.%0A%0APlease%20provide%20details%20at%20your%20earliest%20convenience.%0A%0AThank%20you.">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Request Pricing
                  </Button>
                </a>
                <a href="mailto:info@aimitari.com?subject=Demo%20Request&body=Hello%20AImitari%20Team%2C%0A%0AI%20am%20interested%20in%20scheduling%20a%20demo%20of%20your%20AI-enabled%20smart%20medical%20solutions.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0AThank%20you.">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white hover:bg-white transition-smooth text-primary"
                  >
                    Schedule Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="section-padding bg-muted/30">
          <div className="container-medical">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Badge variant="secondary" className="mb-4">
                  Advanced Orthotic Technology
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-6">Engineered for Real-World Performance</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Aerospace-Grade Materials</p>
                      <p className="text-sm">Carbon fiber blade construction for optimal strength-to-weight ratio</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Medical-Grade Comfort</p>
                      <p className="text-sm">Premium cushioning system designed for all-day wear</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Clinically Validated</p>
                      <p className="text-sm">Proven to reduce walking effort by up to 20% and ankle torque by 85%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 bg-background rounded-2xl p-4 flex items-center justify-center">
                <img
                  src={a2foDevice}
                  alt="AImitari A2FO Ankle Foot Orthosis with carbon fiber blade and adjustable straps"
                  className="w-1/2 max-w-xs h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="section-padding">
          <div className="container-medical">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Built on Science. Proven in Motion.</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced orthotic technology delivering superior support, energy efficiency, and real-world durability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Superior Support & Stabilisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Stabilises the ankle joint for greater balance and control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reduces ankle torque by up to 85%, relieving strain</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Energy Efficiency in Every Step</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reduces walking effort by up to 20%</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Built for daily endurance, reducing fatigue</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Real-Life Motion Restored</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Supports sit-to-stand, squatting, and stair climbing with ease</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Moves with the body, not against it</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Proven Durability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Withstands 2 million flex cycles at 25° dorsi-flexion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Engineered for long-term performance in real-world use</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Premium Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Aerospace-grade carbon fiber blade for strength and lightness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Medical-grade cushioning for lasting comfort</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding bg-muted/30">
          <div className="container-medical">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Use Cases</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Designed to support diverse mobility needs across multiple patient populations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Neurological (CVA) & MSK Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive support for patients with stroke, cerebrovascular accidents, and musculoskeletal
                    conditions
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Geriatric Mobility Enhancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Improves balance, stability, and confidence for elderly patients to maintain independence
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Rehab & Daily Living</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Supports rehabilitation programs and enhances quality of life for daily activities
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="section-padding">
          <div className="container-medical">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Product Details</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Trusted by customers across Europe</h3>
                      <p className="text-muted-foreground">
                        The A2FO has been rigorously tested and proven effective in real-world clinical settings across
                        European markets.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Certifications
                        </h3>
                        <ul className="space-y-2 text-muted-foreground ml-7">
                          <li>✓ Compliant with European standards</li>
                          <li>✓ Singapore approval in progress</li>
                          <li>✓ Singapore-Germany Collaboration</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Available Sizes
                        </h3>
                        <div className="flex gap-3 ml-7">
                          <Badge variant="secondary">XS</Badge>
                          <Badge variant="secondary">S</Badge>
                          <Badge variant="secondary">M</Badge>
                          <Badge variant="secondary">L</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          <strong>Email:</strong>{" "}
                          <a href="mailto:sales@aimitari.com" className="text-primary hover:underline">
                            sales@aimitari.com
                          </a>
                        </p>
                        <p>
                          <strong>Website:</strong>{" "}
                          <a
                            href="https://www.aimitari.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            www.aimitari.com
                          </a>
                        </p>
                        <p>
                          <strong>Address:</strong> AImitari MedTech Pte Ltd, 3 Mount Elizabeth Hospital #14-15,
                          Singapore 228510
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-medical text-white">
          <div className="container-medical text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ready to restore confidence in every step? Get in touch with our team to learn more about the A2FO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sales@aimitari.com?subject=Sales%20Inquiry%20-%20A2FO%20Ankle%20Foot%20Orthoses&body=Hello%20AImitari%20Sales%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20the%20AImitari%20A2FO%20for%20my%20organization.%0A%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you.">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Contact Sales
                </Button>
              </a>
              <a href="/A2FO_Brochure.pdf" download="AImitari_A2FO_Brochure.pdf">
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
export default ProductA2FO;
