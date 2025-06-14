import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import RecipePage from "./pages/RecipePage";
import Home from "./pages/Home";
import Recettes from "./pages/Recettes";
import AstucesCuisine from "./pages/AstucesCuisine";
import GuidesPratiques from "./pages/GuidesPratiques";
import Ingredients101 from "./pages/Ingredients101";
import PlansDeRepas from "./pages/PlansDeRepas";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import Boutique from "./pages/Boutique";
import MainNav from "@/components/MainNav";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          {/* NAVIGATION BAR */}
          <MainNav />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recettes" element={<Recettes />} />
            <Route path="/recettes/:cuisine" element={<Recettes />} />
            <Route path="/recettes/petit-dejeuner" element={<Recettes />} />
            <Route path="/recettes/dejeuners-diners" element={<Recettes />} />
            <Route path="/recettes/desserts" element={<Recettes />} />
            <Route path="/recettes/boissons" element={<Recettes />} />
            <Route path="/recettes/vegetarien" element={<Recettes />} />
            <Route path="/astuces" element={<AstucesCuisine />} />
            <Route path="/astuces/:section" element={<AstucesCuisine />} />
            <Route path="/guides" element={<GuidesPratiques />} />
            <Route path="/ingredients" element={<Ingredients101 />} />
            <Route path="/plans-repas" element={<PlansDeRepas />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/recipes/:recipeId" element={<RecipePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
