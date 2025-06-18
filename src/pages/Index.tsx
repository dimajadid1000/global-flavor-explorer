
import React, { useState, useMemo } from "react";
import { recipes, Recipe, Cuisine } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import FilterBar from "../components/FilterBar";
import Navigation from "../components/Navigation";

const ALL_CUISINES = Array.from(new Set(recipes.map(r => r.cuisine))) as Cuisine[];

export default function Index() {
  const [search, setSearch] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

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

  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <Navigation />
      <header className="w-full max-w-7xl mx-auto py-8 mb-6 px-4 flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold leading-tight mb-1">World Cuisine Recipe Explorer</h1>
        <p className="text-lg text-muted-foreground mb-2">
          <span className="font-medium">Discover, search, and try top recipes from more than 20 famous cuisines around the globe!</span>
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
                onClick={setSelectedRecipe}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-400 text-xl">No recipes found...</div>
          )}
        </div>
        {/* MODAL */}
        {selectedRecipe && (
          <RecipeModal
            recipe={selectedRecipe}
            open={!!selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
      </main>
      <footer className="mt-12 mb-3 w-full text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} World Cuisine. Global recipes for everyone.
      </footer>
    </div>
  );
}
