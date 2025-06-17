
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

// Import des articles existants
import LasagnesCourgettes from "./pages/articles/LasagnesCourgettes";
import SaladeGrecque from "./pages/articles/SaladeGrecque";
import GalettesVegetariennes from "./pages/articles/GalettesVegetariennes";
import ParmigianaAubergines from "./pages/articles/ParmigianaAubergines";
import CaponataAubergines from "./pages/articles/CaponataAubergines";
import RillettesRadis from "./pages/articles/RillettesRadis";
import GaspachoCourgettesCurcuma from "./pages/articles/GaspachoCourgettesCurcuma";
import SaladePommesDeTerre from "./pages/articles/SaladePommesDeTerre";
import OeufsMollets from "./pages/articles/OeufsMollets";
import SundaeMaison from "./pages/articles/SundaeMaison";

// Import des nouveaux articles
import SaladePatesBruschetta from "./pages/articles/SaladePatesBruschetta";
import GuedillesCrabe from "./pages/articles/GuedillesCrabe";
import SaladeAntipasto from "./pages/articles/SaladeAntipasto";
import SaladeNicoise from "./pages/articles/SaladeNicoise";
import SaladeMelonEpicee from "./pages/articles/SaladeMelonEpicee";
import TartinesTomatesProsciutto from "./pages/articles/TartinesTomatesProsciutto";
import SandwichBanhMi from "./pages/articles/SandwichBanhMi";
import RamenFroid from "./pages/articles/RamenFroid";
import BarTacosExpress from "./pages/articles/BarTacosExpress";
import SaladeFattoucheVege from "./pages/articles/SaladeFattoucheVege";
import SaladeConcombresEcrases from "./pages/articles/SaladeConcombresEcrases";
import GuedillesVegetaliennes from "./pages/articles/GuedillesVegetaliennes";
import SaladeRoquetteAvocatBleuets from "./pages/articles/SaladeRoquetteAvocatBleuets";
import SandwichArcEnCielTofu from "./pages/articles/SandwichArcEnCielTofu";
import SandwichMuffuletta from "./pages/articles/SandwichMuffuletta";
import TofuSoyeuxTomatesBasilic from "./pages/articles/TofuSoyeuxTomatesBasilic";
import LimonadeRhubarbe from "./pages/articles/LimonadeRhubarbe";
import BoissonPechesGingembre from "./pages/articles/BoissonPechesGingembre";

import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <AuthProvider>
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
              
              {/* Routes pour les articles existants */}
              <Route path="/articles/lasagnes-courgettes" element={<LasagnesCourgettes />} />
              <Route path="/articles/salade-grecque" element={<SaladeGrecque />} />
              <Route path="/articles/galettes-vegetariennes" element={<GalettesVegetariennes />} />
              <Route path="/articles/parmigiana-aubergines" element={<ParmigianaAubergines />} />
              <Route path="/articles/caponata-aubergines" element={<CaponataAubergines />} />
              <Route path="/articles/rillettes-radis" element={<RillettesRadis />} />
              <Route path="/articles/gaspacho-courgettes-curcuma" element={<GaspachoCourgettesCurcuma />} />
              <Route path="/articles/salade-pommes-de-terre" element={<SaladePommesDeTerre />} />
              <Route path="/articles/oeufs-mollets" element={<OeufsMollets />} />
              <Route path="/articles/sundae-maison" element={<SundaeMaison />} />
              
              {/* Routes pour les nouveaux articles */}
              <Route path="/articles/salade-pates-bruschetta" element={<SaladePatesBruschetta />} />
              <Route path="/articles/guedilles-crabe" element={<GuedillesCrabe />} />
              <Route path="/articles/salade-antipasto" element={<SaladeAntipasto />} />
              <Route path="/articles/salade-nicoise" element={<SaladeNicoise />} />
              <Route path="/articles/salade-melon-epicee" element={<SaladeMelonEpicee />} />
              <Route path="/articles/tartines-tomates-prosciutto" element={<TartinesTomatesProsciutto />} />
              <Route path="/articles/sandwich-banh-mi" element={<SandwichBanhMi />} />
              <Route path="/articles/ramen-froid" element={<RamenFroid />} />
              <Route path="/articles/bar-tacos-express" element={<BarTacosExpress />} />
              <Route path="/articles/salade-fattouche-vege" element={<SaladeFattoucheVege />} />
              <Route path="/articles/salade-concombres-ecrases" element={<SaladeConcombresEcrases />} />
              <Route path="/articles/guedilles-vegetaliennes" element={<GuedillesVegetaliennes />} />
              <Route path="/articles/salade-roquette-avocat-bleuets" element={<SaladeRoquetteAvocatBleuets />} />
              <Route path="/articles/sandwich-arc-en-ciel-tofu" element={<SandwichArcEnCielTofu />} />
              <Route path="/articles/sandwich-muffuletta" element={<SandwichMuffuletta />} />
              <Route path="/articles/tofu-soyeux-tomates-basilic" element={<TofuSoyeuxTomatesBasilic />} />
              <Route path="/articles/limonade-rhubarbe" element={<LimonadeRhubarbe />} />
              <Route path="/articles/boisson-peches-gingembre" element={<BoissonPechesGingembre />} />
              
              {/* Routes d'administration */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
