import React from "react";
import { Recipe } from "../data/recipes";
import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  recipe: Recipe;
};

const cuisineColors: Record<string, string> = {
  Italian: "bg-red-100 text-red-700",
  French: "bg-blue-100 text-blue-700",
  Chinese: "bg-yellow-100 text-yellow-700",
  Japanese: "bg-pink-100 text-pink-700",
  Indian: "bg-orange-100 text-orange-700",
  Mexican: "bg-lime-100 text-lime-700",
  American: "bg-gray-100 text-gray-700",
  Thai: "bg-teal-100 text-teal-700",
  Spanish: "bg-amber-100 text-amber-700",
  "Middle Eastern": "bg-cyan-100 text-cyan-700",
  Greek: "bg-indigo-100 text-indigo-700",
  Korean: "bg-fuchsia-100 text-fuchsia-700",
  Vietnamese: "bg-green-100 text-green-700",
  Brazilian: "bg-purple-100 text-purple-700",
  Ethiopian: "bg-stone-100 text-stone-700",
  Turkish: "bg-emerald-100 text-emerald-800",
  Moroccan: "bg-rose-100 text-rose-700",
  Russian: "bg-blue-200 text-blue-900",
  German: "bg-yellow-200 text-yellow-800",
  Swedish: "bg-sky-100 text-sky-700",
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="relative rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-200 cursor-pointer overflow-hidden flex flex-col items-stretch hover-scale"
      aria-label={`Open details for ${recipe.name}`}
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full aspect-video object-cover"
        loading="lazy"
      />
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span
            className={`px-3 py-0.5 rounded-full text-xs font-semibold capitalize ${
              cuisineColors[recipe.cuisine] || "bg-gray-100 text-gray-700"
            }`}
          >
            {recipe.cuisine}
          </span>
          <ChefHat size={18} className="text-yellow-400 mr-1" />
        </div>
        <h3 className="font-bold text-md mb-1 truncate">{recipe.name}</h3>
        <p className="text-sm text-gray-500 flex-1 truncate">{recipe.description}</p>
        <div className="flex gap-2 mt-4">
          {recipe.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="bg-muted rounded text-xs px-2 py-0.5 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
