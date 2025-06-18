
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RecettesFrance from "./pages/RecettesFrance";
import SaladeConcombresEcrases from "./pages/articles/SaladeConcombresEcrases";
import GuedillesVegetaliennes from "./pages/articles/GuedillesVegetaliennes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recettes" element={<RecettesFrance />} />
          <Route path="/recettes/france" element={<RecettesFrance />} />
          {/* Articles individuels - gardant les liens originaux */}
          <Route path="/articles/salade-concombres-ecrases" element={<SaladeConcombresEcrases />} />
          <Route path="/articles/guedilles-vegetaliennes" element={<GuedillesVegetaliennes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
