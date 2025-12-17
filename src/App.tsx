import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/scroll-to-top";
import BackToTop from "@/components/back-to-top";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Products from "./pages/Products";
import ProductCardiovascular from "./pages/ProductCardiovascular";
import ProductA2FO from "./pages/ProductA2FO";
import ProductEarbuds from "./pages/ProductEarbuds";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/cardiovascular" element={<ProductCardiovascular />} />
          <Route path="/products/a2fo" element={<ProductA2FO />} />
          <Route path="/products/earbuds" element={<ProductEarbuds />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
