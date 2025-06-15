import React, { useState, useMemo } from "react";
import { recipes, Recipe, Cuisine } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import FilterBar from "../components/FilterBar";
import { useLanguage } from "../contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

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

// On cherche la recette mise en avant "Tajine de poulet aux citrons confits"
const FEATURED_RECIPE_ID = "tajine-poulet-citrons";
const FEATURED_RECIPE = {
  id: FEATURED_RECIPE_ID,
  name: "Tajine de poulet aux citrons confits",
  cuisine: "Moroccan",
  image: "https://images.unsplash.com/photo-1519864600265-d6023eff6507?auto=format&fit=crop&w=600&q=80",
  description:
    "Un incontournable de la cuisine marocaine, savoureux et parfumé au citron confit et olives.",
  tags: ["Familial", "Traditionnel"],
};

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

  // Trouver la recette “Tajine de poulet aux citrons confits”
  const featured = recipes.find(r =>
    r.name.toLowerCase().includes("tajine") && r.name.toLowerCase().includes("citron")
  );

  return (
    <div className={`min-h-screen w-full bg-background flex flex-col ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <header className="w-full max-w-7xl mx-auto py-6 mb-2 px-4 flex flex-col items-center gap-2">
        {/* header intentionally kept empty (as user requested earlier) */}
      </header>
      {/* Section d’intro + filtres rapides */}
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
        {/* Recette mise en avant: SUPPRIMÉE */}
      </section>
      {/* Filtres classiques */}
      <main className="w-full max-w-7xl mx-auto px-4 flex-1">
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
