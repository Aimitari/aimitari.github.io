import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/hero-section";
import ProductsSection from "@/components/products-section";
import TeamPreviewSection from "@/components/team-preview-section";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <TeamPreviewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
