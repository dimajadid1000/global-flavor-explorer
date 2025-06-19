
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
import SaladeRoquetteAvocatBleuets from "./pages/articles/SaladeRoquetteAvocatBleuets";
import SandwichArcEnCielTofu from "./pages/articles/SandwichArcEnCielTofu";
import SandwichMuffuletta from "./pages/articles/SandwichMuffuletta";
import TofuSoyeuxTomatesBasilic from "./pages/articles/TofuSoyeuxTomatesBasilic";
import LimonadeRhubarbe from "./pages/articles/LimonadeRhubarbe";
import BoissonPechesGingembre from "./pages/articles/BoissonPechesGingembre";
import SaladeMelonBurrataPesto from "./pages/articles/SaladeMelonBurrataPesto";
import TarteChocolatFramboises from "./pages/articles/TarteChocolatFramboises";
import SauceLegereConcombres from "./pages/articles/SauceLegereConcombres";
import ChorizoLegumesEte from "./pages/articles/ChorizoLegumesEte";
import SaladeQuinoaLegumesFeta from "./pages/articles/SaladeQuinoaLegumesFeta";
import BrochettesCrevettesGrillees from "./pages/articles/BrochettesCrevettesGrillees";
import GratinLegumesRicotta from "./pages/articles/GratinLegumesRicotta";
import BrochettesPouletMiel from "./pages/articles/BrochettesPouletMiel";
import BrochettesFruitsMielCannelle from "./pages/articles/BrochettesFruitsMielCannelle";
import RavioliMorillesTruffe from "./pages/articles/RavioliMorillesTruffe";

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
          {/* Nouvelles recettes */}
          <Route path="/articles/salade-melon-burrata-pesto" element={<SaladeMelonBurrataPesto />} />
          <Route path="/articles/tarte-chocolat-framboises" element={<TarteChocolatFramboises />} />
          <Route path="/articles/sauce-legere-concombres" element={<SauceLegereConcombres />} />
          <Route path="/articles/chorizo-legumes-ete" element={<ChorizoLegumesEte />} />
          <Route path="/articles/salade-quinoa-legumes-feta" element={<SaladeQuinoaLegumesFeta />} />
          <Route path="/articles/brochettes-crevettes-grillees" element={<BrochettesCrevettesGrillees />} />
          <Route path="/articles/gratin-legumes-ricotta" element={<GratinLegumesRicotta />} />
          <Route path="/articles/brochettes-poulet-miel" element={<BrochettesPouletMiel />} />
          <Route path="/articles/brochettes-fruits-miel-cannelle" element={<BrochettesFruitsMielCannelle />} />
          <Route path="/articles/ravioli-morilles-truffe" element={<RavioliMorillesTruffe />} />
          {/* Articles individuels - gardant les liens originaux */}
          <Route path="/articles/salade-concombres-ecrases" element={<SaladeConcombresEcrases />} />
          <Route path="/articles/guedilles-vegetaliennes" element={<GuedillesVegetaliennes />} />
          <Route path="/articles/salade-roquette-avocat-bleuets" element={<SaladeRoquetteAvocatBleuets />} />
          <Route path="/articles/sandwich-arc-en-ciel-tofu" element={<SandwichArcEnCielTofu />} />
          <Route path="/articles/sandwich-muffuletta" element={<SandwichMuffuletta />} />
          <Route path="/articles/tofu-soyeux-tomates-basilic" element={<TofuSoyeuxTomatesBasilic />} />
          <Route path="/articles/limonade-rhubarbe" element={<LimonadeRhubarbe />} />
          <Route path="/articles/boisson-peches-gingembre" element={<BoissonPechesGingembre />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
