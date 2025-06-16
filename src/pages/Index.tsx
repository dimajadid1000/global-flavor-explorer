
import React, { useState, useMemo } from "react";
import { recipes, Recipe, Cuisine } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import FilterBar from "../components/FilterBar";
import { useLanguage } from "../contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, BookOpen } from "lucide-react";

// Catégories rapides des filtres
const QUICK_FILTERS = [
  { label: "Française", type: "cuisine", value: "Française" },
  { label: "Italienne", type: "cuisine", value: "Italienne" },
  { label: "Marocaine", type: "cuisine", value: "Marocaine" },
  { label: "Indienne", type: "cuisine", value: "Indienne" },
  { label: "Végétarien", type: "tag", value: "Végétarien" },
  { label: "Desserts", type: "tag", value: "Desserts" },
  { label: "Rapide", type: "tag", value: "Rapide" },
  { label: "Économique", type: "tag", value: "Économique" },
];

// Articles de recettes françaises
const FRENCH_ARTICLES = [
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
  },
  {
    title: "Parmigiana d'Aubergines",
    description: "Le classique italien revisité avec des aubergines fondantes",
    image: "/lovable-uploads/4f508374-776e-49cd-b5b2-4747ee89831b.png",
    link: "/articles/parmigiana-aubergines",
    time: "60 min"
  },
  {
    title: "Caponata d'Aubergines",
    description: "Un délice végétarien à servir pendant toute la belle saison",
    image: "/lovable-uploads/041d3ac5-0ef7-4973-9e16-921d3802f78d.png",
    link: "/articles/caponata-aubergines",
    time: "90 min"
  },
  {
    title: "Rillettes de Radis au Chèvre",
    description: "Des rillettes ultra-fraîches pour révolutionner l'apéritif",
    image: "/lovable-uploads/3d08a949-701f-4bad-b0b6-52b946fcf28b.png",
    link: "/articles/rillettes-radis",
    time: "10 min"
  },
  {
    title: "Gaspacho de Courgettes au Curcuma",
    description: "Un délice sans cuisson ni prise de tête",
    image: "/lovable-uploads/6b4fa233-9631-43c4-b999-7b1680a1e024.png",
    link: "/articles/gaspacho-courgettes-curcuma",
    time: "5 min"
  },
  {
    title: "Salade de Pommes de Terre et Radis",
    description: "Une salade fraîche et croquante parfaite pour l'été",
    image: "/lovable-uploads/868a4d4c-e1cd-4892-9df9-b5f38f117d80.png",
    link: "/articles/salade-pommes-de-terre",
    time: "30 min"
  },
  {
    title: "Œufs Mollets et Salade du Balcon",
    description: "Des œufs parfaits avec une salade de jeunes pousses",
    image: "/lovable-uploads/b657a537-6e2f-48f9-bbb9-483761224225.png",
    link: "/articles/oeufs-mollets",
    time: "18 min"
  },
  {
    title: "Sundae Maison",
    description: "Un dessert gourmand et équilibré fait maison",
    image: "/lovable-uploads/5113a2f2-d43d-40c0-a73a-13c1d73abb48.png",
    link: "/articles/sundae-maison",
    time: "10 min"
  }
];

const ALL_CUISINES = Array.from(new Set(recipes.map(r => r.cuisine))) as Cuisine[];

export default function Index() {
  const [search, setSearch] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [quickFilter, setQuickFilter] = useState<{ type: string; value: string } | null>(null);
  const { t, language } = useLanguage();
  const navigate = useNavigate();

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
          <h2 className="text-2xl font-bold text-primary mb-1">Bienvenue sur <span className="text-secondary-foreground italic">Cuisine avec Astuce</span> !</h2>
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

      {/* Section Articles de Recettes Françaises */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
            <BookOpen className="w-8 h-8" />
            Nos Articles de Recettes Françaises
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Découvrez nos recettes détaillées avec photos et astuces
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {FRENCH_ARTICLES.map((article, index) => (
            <Link
              key={index}
              to={article.link}
              className="group bg-white dark:bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
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
          ))}
        </div>
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
        &copy; {new Date().getFullYear()} World Cuisine. {t("footer")}
      </footer>
    </div>
  );
}
