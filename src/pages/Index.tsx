
import React, { useState, useMemo } from "react";
import { recipes, Recipe, Cuisine } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import FilterBar from "../components/FilterBar";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Catégories rapides des filtres
const QUICK_FILTERS = [
  { label: "Française", type: "cuisine", value: "Française" },
  { label: "Italienne", type: "cuisine", value: "Italienne" },
  { label: "Indienne", type: "cuisine", value: "Indienne" },
  { label: "Asiatique", type: "cuisine", value: "Asiatique" },
  { label: "Végétarien", type: "tag", value: "Végétarien" },
  { label: "Desserts", type: "tag", value: "Desserts" },
  { label: "Rapide", type: "tag", value: "Rapide" },
  { label: "Économique", type: "tag", value: "Économique" },
];

// Tous les articles avec les bonnes images et liens
const ALL_ARTICLES = [
  {
    title: "Salade de pâtes à la bruschetta",
    description: "Une salade-repas à 5 ingrédients, simple et savoureuse",
    image: "/lovable-uploads/8d6ad858-5b8c-4165-b345-bece66e7d9a8.png",
    link: "/articles/salade-pates-bruschetta",
    time: "20 min"
  },
  {
    title: "Guédilles au crabe des neiges",
    description: "Des guédilles fraîches avec légumes croquants et mayonnaise citronnée",
    image: "/lovable-uploads/9e7dd654-2b37-4e56-97ec-baebde0664f6.png",
    link: "/articles/guedilles-crabe",
    time: "30 min"
  },
  {
    title: "Salade antipasto",
    description: "Une salade colorée aux tortellinis, parfaite pour l'été",
    image: "/lovable-uploads/7b92cadc-9e75-419c-a907-ea4109852971.png",
    link: "/articles/salade-antipasto",
    time: "25 min"
  },
  {
    title: "Salade niçoise",
    description: "Le grand classique français avec vinaigrette parfumée",
    image: "/lovable-uploads/4f508374-776e-49cd-b5b2-4747ee89831b.png",
    link: "/articles/salade-nicoise",
    time: "45 min"
  },
  {
    title: "Salade de melon d'eau épicée",
    description: "Rafraîchissante et surprenante avec feta et épices",
    image: "/lovable-uploads/041d3ac5-0ef7-4973-9e16-921d3802f78d.png",
    link: "/articles/salade-melon-epicee",
    time: "10 min"
  },
  {
    title: "Tartines aux tomates et prosciutto",
    description: "Des tartines méditerranéennes aux saveurs authentiques",
    image: "/lovable-uploads/3d08a949-701f-4bad-b0b6-52b946fcf28b.png",
    link: "/articles/tartines-tomates-prosciutto",
    time: "20 min"
  },
  {
    title: "Sandwichs bánh mì",
    description: "Authentiques sandwichs vietnamiens avec poulet effiloché",
    image: "/lovable-uploads/6b4fa233-9631-43c4-b999-7b1680a1e024.png",
    link: "/articles/sandwich-banh-mi",
    time: "45 min"
  },
  {
    title: "Ramen froid",
    description: "Un ramen rafraîchissant parfait pour l'été",
    image: "/lovable-uploads/868a4d4c-e1cd-4892-9df9-b5f38f117d80.png",
    link: "/articles/ramen-froid",
    time: "30 min"
  },
  {
    title: "Bar à tacos express",
    description: "Des tacos rapides et savoureux pour toute la famille",
    image: "/lovable-uploads/b657a537-6e2f-48f9-bbb9-483761224225.png",
    link: "/articles/bar-tacos-express",
    time: "25 min"
  },
  {
    title: "Salade fattouche végé",
    description: "Salade méditerranéenne avec tofu mariné au zaatar",
    image: "/lovable-uploads/5113a2f2-d43d-40c0-a73a-13c1d73abb48.png",
    link: "/articles/salade-fattouche-vege",
    time: "35 min"
  },
  {
    title: "Salade de concombres écrasés",
    description: "Salade asiatique rafraîchissante et épicée",
    image: "/lovable-uploads/041d3ac5-0ef7-4973-9e16-921d3802f78d.png",
    link: "/articles/salade-concombres-ecrases",
    time: "15 min"
  },
  {
    title: "Guédilles végétaliennes",
    description: "Alternative végétalienne savoureuse au classique",
    image: "/lovable-uploads/9e7dd654-2b37-4e56-97ec-baebde0664f6.png",
    link: "/articles/guedilles-vegetaliennes",
    time: "20 min"
  },
  {
    title: "Salade roquette, avocat et bleuets",
    description: "Salade raffinée avec vinaigrette à la lavande",
    image: "/lovable-uploads/4306d701-cc79-4903-8214-b171651fed22.png",
    link: "/articles/salade-roquette-avocat-bleuets",
    time: "15 min"
  },
  {
    title: "Sandwichs arc-en-ciel au tofu",
    description: "Sandwichs colorés et nutritifs aux légumes variés",
    image: "/lovable-uploads/7b92cadc-9e75-419c-a907-ea4109852971.png",
    link: "/articles/sandwich-arc-en-ciel-tofu",
    time: "45 min"
  },
  {
    title: "Sandwich muffuletta",
    description: "Le célèbre sandwich de La Nouvelle-Orléans",
    image: "/lovable-uploads/4f508374-776e-49cd-b5b2-4747ee89831b.png",
    link: "/articles/sandwich-muffuletta",
    time: "6 heures"
  },
  {
    title: "Tofu soyeux aux tomates et basilic",
    description: "Plat asiatique frais avec sauce légèrement épicée",
    image: "/lovable-uploads/868a4d4c-e1cd-4892-9df9-b5f38f117d80.png",
    link: "/articles/tofu-soyeux-tomates-basilic",
    time: "10 min"
  },
  {
    title: "Limonade à la rhubarbe",
    description: "Boisson rafraîchissante et originale pour l'été",
    image: "/lovable-uploads/6b4fa233-9631-43c4-b999-7b1680a1e024.png",
    link: "/articles/limonade-rhubarbe",
    time: "25 min"
  },
  {
    title: "Boisson aux pêches et au gingembre",
    description: "Boisson estivale délicieuse aux pêches juteuses",
    image: "/lovable-uploads/5113a2f2-d43d-40c0-a73a-13c1d73abb48.png",
    link: "/articles/boisson-peches-gingembre",
    time: "30 min"
  },
  {
    title: "Lasagnes aux Courgettes et Feta",
    description: "Une version estivale et légère des lasagnes traditionnelles",
    image: "/lovable-uploads/8d6ad858-5b8c-4165-b345-bece66e7d9a8.png",
    link: "/articles/lasagnes-courgettes",
    time: "45 min"
  },
  {
    title: "Salade Grecque en Cubes",
    description: "Beau comme un tableau ! Une présentation originale de la salade grecque",
    image: "/lovable-uploads/9e7dd654-2b37-4e56-97ec-baebde0664f6.png",
    link: "/articles/salade-grecque",
    time: "15 min"
  },
  {
    title: "Galettes Végétariennes",
    description: "Un plat d'été 100% barbecue aux pois chiches et légumes grillés",
    image: "/lovable-uploads/7b92cadc-9e75-419c-a907-ea4109852971.png",
    link: "/articles/galettes-vegetariennes",
    time: "50 min"
  }
];

const ALL_CUISINES = Array.from(new Set(recipes.map(r => r.cuisine))) as Cuisine[];

export default function Index() {
  const [search, setSearch] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [quickFilter, setQuickFilter] = useState<{ type: string; value: string } | null>(null);
  const { t, language } = useLanguage();

  // Gestion des filtres avec quickFilter
  const filteredRecipes = useMemo(() => {
    let list = recipes;
    if (search.trim()) {
      list = list.filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.ingredients.some(ing => ing.toLowerCase().includes(search.toLowerCase()))
      );
    }
    if (cuisineFilter) {
      list = list.filter(r => r.cuisine === cuisineFilter);
    }
    if (quickFilter) {
      if (quickFilter.type === "cuisine") {
        list = list.filter(r => r.cuisine === quickFilter.value);
      } else if (quickFilter.type === "tag") {
        list = list.filter(r => r.tags.some(tag =>
          tag.toLowerCase() === quickFilter.value.toLowerCase()
        ));
      }
    }
    return list;
  }, [search, cuisineFilter, quickFilter]);

  // Pour l'arabe, direction droite à gauche
  const isArabic = language === "ar";

  return (
    <div className={`min-h-screen w-full bg-background flex flex-col ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <header className="w-full max-w-7xl mx-auto py-6 mb-2 px-4 flex flex-col items-center gap-2">
        {/* header intentionally kept empty (as user requested earlier) */}
      </header>

      {/* Section d'intro + filtres rapides */}
      <section className="w-full bg-white/80 dark:bg-sidebar shadow rounded-lg mb-8 px-4 py-6 mx-auto max-w-5xl animate-fade-in flex flex-col gap-5">
        {/* Bloc texte intro */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-primary mb-1">Bienvenue sur <span className="text-secondary-foreground italic">Cuisine et Astuce</span> !</h2>
          <div className="text-base sm:text-lg text-gray-700 dark:text-gray-200">
            Ici, on cuisine avec le cœur et de bonnes idées.<br />
            Découvrez des <span className="font-semibold text-primary">recettes faciles</span>, des <span className="font-semibold text-primary">astuces pratiques</span> et un <span className="font-semibold text-primary">tour du monde des saveurs</span> !
          </div>
        </div>
        {/* Barre de filtres rapides */}
        <nav className="flex flex-wrap gap-2 justify-center mt-2 ">
          {QUICK_FILTERS.map((filter, idx) => (
            <Button
              key={filter.label}
              variant={
                quickFilter?.value === filter.value ? "default" : "outline"
              }
              size="sm"
              onClick={() =>
                setQuickFilter(
                  quickFilter?.value === filter.value ? null : filter
                )
              }
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
          {quickFilter && (
            <Button
              variant="ghost"
              size="sm"
              className="ml-2"
              onClick={() => setQuickFilter(null)}
            >
              Réinitialiser
            </Button>
          )}
        </nav>
      </section>

      {/* Section Derniers Articles avec Carrousel */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
            <BookOpen className="w-8 h-8" />
            Derniers Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Découvrez nos dernières recettes et créations culinaires
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {ALL_ARTICLES.map((article, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <Link
                  to={article.link}
                  className="group bg-white dark:bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 block h-full"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {article.time}
                      </Badge>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Filtres classiques */}
      <main className="w-full max-w-7xl mx-auto px-4 flex-1">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-primary mb-2">Toutes nos Recettes</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explorez notre collection complète de recettes du monde entier
          </p>
        </div>
        
        <FilterBar
          cuisines={ALL_CUISINES}
          value={search}
          onSearch={v => {
            setSearch(v);
            setQuickFilter(null);
          }}
          cuisineFilter={cuisineFilter}
          onCuisineChange={c => {
            setCuisineFilter(c);
            setQuickFilter(null);
          }}
        />
        {/* GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7"
        >
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-400 text-xl">{t("noRecipes")}</div>
          )}
        </div>
      </main>
      <footer className="mt-12 mb-3 w-full text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Cuisine et Astuce. {t("footer")}
      </footer>
    </div>
  );
}
