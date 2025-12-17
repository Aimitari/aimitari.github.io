import Navigation from "@/components/ui/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Award, Users, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const Team = () => {
  const teamMembers = [{
    name: "Dr. Lim Boon Huat",
    role: "Executive Chairman",
    specialization: "Public & Private Sector Leadership",
    experience: "30+ years",
    education: "Professor of Business at STI",
    bio: "More than 30 years of leadership experience in both Public and Private sectors. Appointments include Professor of Business at STI, Founder and Managing Director of Rohde & Schwarz and Centre Director at Singapore EDBI in Germany.",
    achievements: ["Professor at STI", "Former MD at Rohde & Schwarz", "Centre Director at Singapore EDBI"],
    location: "Singapore",
    photo: "/assets/team/lim-boon-huat.jpg"
  }, {
    name: "Rajashekar Durai",
    role: "Chief Executive Officer",
    specialization: "R&D & Product Development",
    experience: "25+ years",
    education: "Engineering & Product Development",
    bio: "More than 25 years of R&D and Product development experience building & assembling teams to bring the best entrepreneurial spirit resulting in an optimal and innovative solution/product with a stronger customer focus.",
    achievements: ["Product Development Leader", "Team Building Expert", "Innovation Driver"],
    location: "Singapore",
    photo: "/assets/team/rajashekar-durai.jpg"
  }, {
    name: "Ben Lim",
    role: "Chief Technology Officer",
    specialization: "Semiconductor & Electronics",
    experience: "20+ years",
    education: "R&D and Product Development",
    bio: "More than 20 years of R&D, Product development and Marketing experience. Specialize in semiconductor advanced packaging, assembly materials, power electronics and hard-disk media industry.",
    achievements: ["Semiconductor Expert", "Advanced Packaging Specialist", "Power Electronics Innovation"],
    location: "Singapore",
    photo: "/assets/team/ben-lim.jpg"
  }, {
    name: "Dr. T. Ravintharan",
    role: "Chief Medical Officer",
    specialization: "Hand Surgery & Advanced Laparoscopy",
    experience: "30+ years",
    education: "Senior Consultant Surgeon",
    bio: "Senior Consultant Surgeon- Hand-Oncological-General-Advanced Laparoscopic Surgery with over 30 years experience at Mount Elizabeth Hospital in Singapore.",
    achievements: ["Senior Consultant Surgeon", "30+ Years Clinical Experience", "Mount Elizabeth Hospital"],
    location: "Singapore",
    photo: "/assets/team/ravintharan.jpg"
  }];
  const advisors = [{
    name: "Sebastian Zilliacus",
    role: "Advisor",
    expertise: "Tech Startups & International BD",
    affiliation: "20+ years driving tech startups to successful listings. Expertise in social networks, e-commerce, international BD",
    photo: "/assets/team/sebastian-zilliacus.jpg"
  }, {
    name: "Anup Pradhan",
    role: "Advisor",
    expertise: "Deep AI/ML & Cloud Computing",
    affiliation: "25+ years leveraging deep technical and research expertise. Deep AI/ML, cloud computing, data warehousing systems and big data workflow architecture",
    photo: "/assets/team/anup-pradhan.jpg"
  }, {
    name: "Alexander Gummenscheimer",
    role: "Advisor",
    expertise: "Medical R&D & Investments",
    affiliation: "Entrepreneurial experience across medical, R&D and investments. Expertise in finance, investments management, market mapping and value-creating strategies",
    photo: "/assets/team/alex-gummenscheimer.jpg"
  }, {
    name: "Russell Woo",
    role: "Advisor",
    expertise: "Strategic Partnerships & Growth",
    affiliation: "Strategic partnerships and product-led/scalable growth in healthcare, fitness, and public sector. Expertise in data-driven strategies to solve commercial challenges and drive business results",
    photo: "/assets/team/russell-woo.jpg"
  }];
  const medicalExperts = [{
    name: "Dr. K. Narayanan",
    role: "Medical Domain Expert",
    expertise: "Nephrology & Transplant",
    affiliation: "Senior Consultant Nephrologist and Transplant Physician. 25+ years of experience, supervising 5000+ Dialysis sessions and establishments, 28 Dialysis centres",
    photo: "/assets/team/narayanan.jpg"
  }, {
    name: "Dr. Varun Reddy",
    role: "Medical Domain Expert",
    expertise: "Orthopaedics & Surgical Research",
    affiliation: "15+ years of surgical and medical research experience. Specializes in orthopaedics, hand, trauma and plastic surgery"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container-medical">
            <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
              <Badge variant="outline" className="mb-4">
                Our Team
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Pragmatic & Innovative{" "}
                <span className="text-primary">
                  Medical-Engineering Team
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Decades of combined expertise in engineering, healthcare, and medical innovation. 
                Our multidisciplinary team addresses chronic challenges and drives breakthrough solutions for global health.
              </p>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">135+</div>
                <div className="text-sm text-muted-foreground">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">12</div>
                <div className="text-sm text-muted-foreground">Industry Experts</div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section-padding">
          <div className="container-medical">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Our leaders bring world-class expertise from leading medical institutions, 
                technology companies, and healthcare organizations.
              </p>
              <a href="https://www.aimitari.com/founders-29-01-2025.mp4" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-medical">
                  Meet the Leadership Team
                </Button>
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => <Card key={index} className="group hover:shadow-medical transition-smooth animate-fade-in bg-gradient-card" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-primary mb-2">
                          {member.role}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{member.specialization}</Badge>
                          <Badge variant="outline">{member.experience}</Badge>
                        </div>
                        <div className="flex space-x-2">
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
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>{member.education}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{member.location}</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">Career Highlights:</div>
                      <div className="grid grid-cols-1 gap-1">
                        {member.achievements.map((achievement, idx) => <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {achievement}
                          </div>)}
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="section-padding bg-muted/30">
          <div className="container-medical">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Advisors
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Distinguished advisors providing strategic guidance and industry expertise 
                to accelerate our mission of transforming global healthcare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advisors.map((advisor, index) => <Card key={index} className="text-center p-6 bg-gradient-card shadow-soft hover:shadow-medical transition-smooth animate-scale-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="pt-6">
                    <img 
                      src={advisor.photo} 
                      alt={advisor.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {advisor.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {advisor.role}
                    </p>
                    <Badge variant="outline" className="mb-3">
                      {advisor.expertise}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {advisor.affiliation}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Medical Domain Experts */}
        <section className="section-padding">
          <div className="container-medical">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Medical Domain Experts
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Renowned medical specialists providing clinical expertise and ensuring our solutions 
                meet the highest standards of medical practice and patient care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {medicalExperts.map((expert, index) => <Card key={index} className="text-center p-6 bg-gradient-card shadow-soft hover:shadow-medical transition-smooth animate-scale-in" style={{
              animationDelay: `${index * 0.15}s`
            }}>
                  <CardContent className="pt-6">
                    {expert.photo && (
                      <img 
                        src={expert.photo} 
                        alt={expert.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 mx-auto mb-4"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {expert.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {expert.role}
                    </p>
                    <Badge variant="outline" className="mb-3">
                      {expert.expertise}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {expert.affiliation}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-medical">
            <div className="text-center max-w-3xl mx-auto p-8 bg-gradient-medical rounded-2xl text-white">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-lg opacity-90 mb-6">
                We are always looking for passionate individuals who want to transform healthcare. Join our team and help us make medical diagnostics more accessible globally.
              </p>
              <div className="flex justify-center">
                <a href="mailto:info@aimitari.com">
                  <Button size="lg" variant="outline" className="border-white text-primary bg-white">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Team;
