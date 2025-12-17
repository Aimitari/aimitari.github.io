import Navigation from "@/components/ui/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Zap, Shield, Clock, CheckCircle, Bluetooth } from "lucide-react";
import telecardiaDevice from "@/assets/telecardia-device.png";

const ProductCardiovascular = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
          <div className="container-medical">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Telecardia ECG
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Telecardia ECG & Telemedicine Systems
              </h1>
              <p className="text-2xl font-semibold opacity-95 mb-4">
                Making ECG as simple as taking blood pressure
              </p>
              <p className="text-xl opacity-90 mb-8">
                This device, patented by Parsys, allows healthcare professionals to quickly acquire and transmit a patient's electrocardiogram without the constraints of a conventional device. Telecardia is portable, compact and lightweight, with fixed thoracic electrodes, without consumables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:sales@aimitari.com?subject=Pricing%20Request%20-%20Telecardia%20ECG%20%26%20Telemedicine%20Systems&body=Hello%20AImitari%20Sales%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20pricing%20for%20the%20Telecardia%20ECG%20%26%20Telemedicine%20Systems.%0A%0APlease%20provide%20details%20at%20your%20earliest%20convenience.%0A%0AThank%20you.">
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
        <section className="section-padding bg-muted/30">
          <div className="container-medical">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  12-Channel Electrocardiograph
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Telecardia is a Class IIA 12-channel electrocardiograph (ECG) device designed for temporary use. 
                  It provides comprehensive cardiac monitoring with fixed thoracic electrodes and deployable arms, 
                  eliminating the need for disposable electrodes.
                </p>
                <p className="text-lg text-muted-foreground">
                  The device is portable, compact (210mm x 100mm x 50mm), and lightweight (500g), making it ideal 
                  for healthcare professionals who need reliable ECG acquisition in various clinical settings.
                </p>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <img 
                  src={telecardiaDevice} 
                  alt="Telecardia ECG device being held by healthcare professional" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="section-padding">
          <div className="container-medical">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Key Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced ECG technology designed for clinical excellence and ease of use
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Rapidity of Transmission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Acquisition in 15 seconds</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automatic transmission via Bluetooth®</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Activity className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Comfort in Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital display for easy reading</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Long life Lithium battery (350+ ECG traces)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Ease of Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>No disposable electrodes required</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Minimal wired connectivity</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="section-padding">
          <div className="container-medical">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Technical Specifications
              </h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          General Characteristics
                        </h3>
                        <ul className="space-y-2 text-muted-foreground ml-7">
                          <li>• Type: 12-channel ECG for temporary use</li>
                          <li>• Class: IIA medical device</li>
                          <li>• No disposable electrodes</li>
                          <li>• Bluetooth® transmission</li>
                          <li>• Autonomy: 350+ ECG traces</li>
                          <li>• Recharge time: 3 hours</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Mechanical Characteristics
                        </h3>
                        <ul className="space-y-2 text-muted-foreground ml-7">
                          <li>• Dimensions: 210mm x 100mm x 50mm</li>
                          <li>• Weight: 500g</li>
                          <li>• Protection: IP22 (case), IP21 (base)</li>
                          <li>• Fixed electrodes: VN-V1-V2-V3-V4-V5-V6</li>
                          <li>• Wired electrodes: R, L, F (limb forceps)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Electrical Characteristics
                        </h3>
                        <ul className="space-y-2 text-muted-foreground ml-7">
                          <li>• 12 derivations: D1-D3, Avr-Avf, V1-V6</li>
                          <li>• Input impedance: 10 MΩ</li>
                          <li>• Bandwidth: 0.05 Hz to 150Hz</li>
                          <li>• Linearity: 0.01%</li>
                          <li>• Sensitivity: 4608 pt/mV</li>
                          <li>• Sampling frequency: 539 pt/s</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Certifications
                        </h3>
                        <ul className="space-y-2 text-muted-foreground ml-7">
                          <li>• CE 0459 certified</li>
                          <li>• ISO 13485:2016 certified</li>
                          <li>• Compliant with 93/42/CE</li>
                          <li>• MDR2017/745 compliant</li>
                          <li>• Operating temp: +10°C to +35°C</li>
                          <li>• Storage temp: -10°C to +50°C</li>
                        </ul>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact our team to learn more about pricing, implementation, and how Telecardia ECG 
              can transform your cardiovascular monitoring capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sales@aimitari.com?subject=Sales%20Inquiry%20-%20Telecardia%20ECG%20%26%20Telemedicine%20Systems&body=Hello%20AImitari%20Sales%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20the%20Telecardia%20ECG%20%26%20Telemedicine%20Systems%20for%20my%20organization.%0A%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you.">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Contact Sales
                </Button>
              </a>
              <a href="/Telecardia_Brochure.pdf" download="AImitari_Telecardia_Brochure.pdf">
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

export default ProductCardiovascular;
