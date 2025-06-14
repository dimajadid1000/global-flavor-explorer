
import React from "react";
import { Recipe } from "../data/recipes";
import { Utensils } from "lucide-react";

type Props = {
  recipe: Recipe;
  open: boolean;
  onClose: () => void;
};

export default function RecipeModal({ recipe, open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="bg-white max-w-2xl w-full rounded-xl shadow-lg relative animate-scale-in overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
          onClick={onClose}
          aria-label="Close"
        >
          <span className="text-lg font-bold">&times;</span>
        </button>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="text-primary" size={22} />
            <h2 className="text-2xl font-bold">{recipe.name}</h2>
            <span className="ml-2 px-3 py-0.5 rounded-full bg-muted text-sm capitalize">{recipe.cuisine}</span>
          </div>
          <p className="mb-3 text-gray-500">{recipe.description}</p>
          <div className="flex gap-4 mb-4">
            <span className="bg-gray-100 rounded px-3 py-1 text-xs">{recipe.prepTime} prep</span>
            <span className="bg-gray-100 rounded px-3 py-1 text-xs">{recipe.cookTime} cook</span>
            <span className="bg-gray-100 rounded px-3 py-1 text-xs">{recipe.servings} servings</span>
          </div>
          <h3 className="font-semibold mb-1">Ingredients</h3>
          <ul className="list-disc ml-5 mb-2">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h3 className="font-semibold mb-1 mt-4">Instructions</h3>
          <ol className="list-decimal ml-5">
            {recipe.steps.map((step, i) => (
              <li key={i} className="mb-1">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

