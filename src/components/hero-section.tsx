import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Users, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-medical rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-hero rounded-full blur-3xl opacity-10 animate-float" style={{
      animationDelay: '1s'
    }}></div>

      <div className="container-medical relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-medical/10 border border-primary/20">
              <span className="text-primary font-medium text-sm">Transforming Healthcare Globally</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">
                  Smart Medical
                </span>
                <br />
                <span className="text-foreground">Diagnostics for</span>
                <br />
                <span className="text-foreground">One Billion Lives</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Making medical diagnostics more <strong>Accurate, Affordable, and Accessible</strong> through 
                AI-enabled smart solutions for diabetes and cardiovascular management.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Accurate</div>
                  <div className="text-sm text-muted-foreground">AI-Powered Precision</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Affordable</div>
                  <div className="text-sm text-muted-foreground">Cost-Effective Solutions</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Accessible</div>
                  <div className="text-sm text-muted-foreground">Global Reach</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:info@aimitari.com?subject=Demo%20Request&body=Hello%20AImitari%20Team%2C%0A%0AI%20am%20interested%20in%20scheduling%20a%20demo%20of%20your%20AI-enabled%20smart%20medical%20solutions.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0AThank%20you.">
                <Button size="lg" className="btn-medical group">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              
              <div className="relative">
                <video 
                  className="w-full max-w-md h-48 rounded-lg shadow-medical cursor-pointer hover:shadow-lg transition-shadow"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  onClick={(e) => {
                    const video = e.target as HTMLVideoElement;
                    if (video.requestFullscreen) {
                      video.requestFullscreen();
                      video.muted = false;
                      video.currentTime = 0;
                      video.play();
                    }
                  }}
                >
                  <source src="https://www.aimitari.com/intro-29-01-2025.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/50 rounded-full p-3">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">1B+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">Global</div>
                <div className="text-sm text-muted-foreground">Coverage</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative z-10">
              <img src={heroImage} alt="AI-powered medical diagnostics technology" className="w-full h-auto rounded-2xl shadow-medical" />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-soft animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-medical"></div>
                  <span className="text-sm font-medium">AI Analysis Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-soft animate-float" style={{
              animationDelay: '1.5s'
            }}>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">Tailored</div>
                  <div className="text-xs text-muted-foreground">Diagnostics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;