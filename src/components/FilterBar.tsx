
import React from "react";
import { Cuisine } from "../data/recipes";
import { useLanguage } from "../contexts/LanguageContext";

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
  const { t, language } = useLanguage();

  // For Arabic, flip input direction
  const isArabic = language === "ar";

  return (
    <div className="flex flex-wrap items-center gap-4 mb-8 justify-between w-full">
      <input
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
        placeholder={t("searchPlaceholder")}
        className={`w-full sm:w-80 bg-muted rounded px-4 py-2 text-base outline-none focus:ring-2 focus:ring-primary transition-all ${isArabic ? "text-right" : ""}`}
        dir={isArabic ? "rtl" : "ltr"}
      />
      <select
        value={cuisineFilter}
        onChange={e => onCuisineChange(e.target.value)}
        className="bg-muted rounded px-3 py-2 text-base outline-none"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <option value="">{t("allCuisines")}</option>
        {cuisines.map(cuisine => (
          <option value={cuisine} key={cuisine}>{cuisine}</option>
        ))}
      </select>
    </div>
  );
}
