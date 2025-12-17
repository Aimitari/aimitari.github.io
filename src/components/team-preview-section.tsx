import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
const TeamPreviewSection = () => {
  const teamHighlights = [{
    icon: Briefcase,
    value: "135+",
    label: "Years Combined Experience",
    color: "text-primary"
  }, {
    icon: Users,
    value: "12",
    label: "Industry Experts",
    color: "text-secondary"
  }];
  return <section className="section-padding bg-gradient-to-br from-muted/20 via-background to-muted/20">
      <div className="container-medical">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our{" "}
            <span className="text-primary">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Decades of combined expertise in engineering, healthcare, and medical innovation. 
            Our multidisciplinary team drives breakthrough solutions for global health.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {teamHighlights.map((highlight, index) => <Card key={index} className="text-center p-6 bg-gradient-card shadow-soft hover:shadow-medical transition-smooth animate-scale-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="pt-6">
                <div className={`w-14 h-14 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <highlight.icon className="h-7 w-7 text-white" />
                </div>
                <div className={`text-3xl font-bold ${highlight.color} mb-2`}>
                  {highlight.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {highlight.label}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Team Description */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our leadership team brings world-class expertise from leading medical institutions, 
            technology companies, and healthcare organizations. With backgrounds spanning 
            <strong> medical practice, R&D, product development, and strategic innovation</strong>, 
            we're uniquely positioned to transform global healthcare delivery.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">Leadership Team</h3>
              <p className="text-sm text-muted-foreground">
                C-suite executives with 30+ years experience each
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">Advisory Board</h3>
              <p className="text-sm text-muted-foreground">
                Strategic guidance from industry veterans and sector experts   
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">Medical Experts</h3>
              <p className="text-sm text-muted-foreground">
                Renowned specialists ensuring clinical excellence
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          <Link to="/team">
            <Button size="lg" className="btn-medical group">
              Meet the Team
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default TeamPreviewSection;