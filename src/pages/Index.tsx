import React, { useState, useMemo } from "react";
import { recipes, Recipe, Cuisine } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import FilterBar from "../components/FilterBar";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

const ALL_CUISINES = Array.from(new Set(recipes.map(r => r.cuisine))) as Cuisine[];

export default function Index() {
  const [search, setSearch] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const { t, language } = useLanguage();

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
    return list;
  }, [search, cuisineFilter]);

  // For Arabic, flip app direction
  const isArabic = language === "ar";

  return (
    <div className={`min-h-screen w-full bg-background flex flex-col ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <header className="w-full max-w-7xl mx-auto py-8 mb-6 px-4 flex flex-col items-center gap-2">
        <div className="w-full flex justify-end pb-2">
          <LanguageSwitcher />
        </div>
        <h1 className="text-4xl font-bold leading-tight mb-1 text-center">{t("siteTitle")}</h1>
        <p className="text-lg text-muted-foreground mb-2 text-center">
          <span className="font-medium">{t("subtitle")}</span>
        </p>
      </header>
      <main className="w-full max-w-7xl mx-auto px-4 flex-1">
        <FilterBar
          cuisines={ALL_CUISINES}
          value={search}
          onSearch={setSearch}
          cuisineFilter={cuisineFilter}
          onCuisineChange={setCuisineFilter}
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
