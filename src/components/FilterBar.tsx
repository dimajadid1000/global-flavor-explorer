
import React from "react";
import { Cuisine } from "../data/recipes";

interface FilterBarProps {
  cuisines: Cuisine[];
  value: string;
  onSearch: (v: string) => void;
  cuisineFilter: string;
  onCuisineChange: (c: string) => void;
}

export default function FilterBar({
  cuisines,
  value,
  onSearch,
  cuisineFilter,
  onCuisineChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8 justify-between w-full">
      <input
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
        placeholder="Search for recipes, ingredients..."
        className="w-full sm:w-80 bg-muted rounded px-4 py-2 text-base outline-none focus:ring-2 focus:ring-primary transition-all"
      />
      <select
        value={cuisineFilter}
        onChange={e => onCuisineChange(e.target.value)}
        className="bg-muted rounded px-3 py-2 text-base outline-none"
      >
        <option value="">All Cuisines</option>
        {cuisines.map(cuisine => (
          <option value={cuisine} key={cuisine}>{cuisine}</option>
        ))}
      </select>
    </div>
  );
}
