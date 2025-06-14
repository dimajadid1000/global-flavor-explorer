
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en" | "ar";

type Dictionary = Record<string, string>;

const dictionaries: Record<Language, Dictionary> = {
  fr: {
    siteTitle: "Explorateur de Recettes du Monde",
    subtitle: "Découvrez, cherchez et essayez les meilleures recettes de plus de 20 cuisines célèbres à travers le monde !",
    searchPlaceholder: "Recherchez des recettes, des ingrédients...",
    allCuisines: "Toutes les cuisines",
    prep: "préparation",
    cook: "cuisson",
    servings: "personnes",
    ingredients: "Ingrédients",
    instructions: "Instructions",
    noRecipes: "Aucune recette trouvée...",
    footer: "Recettes du monde pour tous.",
    language: "Langue",
  },
  en: {
    siteTitle: "World Cuisine Recipe Explorer",
    subtitle: "Discover, search, and try top recipes from more than 20 famous cuisines around the globe!",
    searchPlaceholder: "Search for recipes, ingredients...",
    allCuisines: "All Cuisines",
    prep: "prep",
    cook: "cook",
    servings: "servings",
    ingredients: "Ingredients",
    instructions: "Instructions",
    noRecipes: "No recipes found...",
    footer: "Global recipes for everyone.",
    language: "Language",
  },
  ar: {
    siteTitle: "مستكشف وصفات المأكولات العالمية",
    subtitle: "اكتشف وابحث وجرب أفضل الوصفات من أكثر من 20 مطبخًا شهيرًا حول العالم!",
    searchPlaceholder: "ابحث عن وصفات أو مكونات...",
    allCuisines: "كل المطابخ",
    prep: "تحضير",
    cook: "طبخ",
    servings: "حصص",
    ingredients: "المكونات",
    instructions: "طريقة التحضير",
    noRecipes: "لا توجد وصفات...",
    footer: "وصفات عالمية للجميع.",
    language: "اللغة",
  },
};

interface LanguageContextValue {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");
  const t = (key: string) => dictionaries[language][key] || key;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
