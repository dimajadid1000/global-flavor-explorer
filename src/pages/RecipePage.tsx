
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { recipes } from "../data/recipes";
import { ChevronLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export default function RecipePage() {
  const { recipeId } = useParams();
  const recipe = recipes.find(r => r.id === recipeId);
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div className="max-w-2xl mx-auto mt-20 text-center text-xl text-red-400">
        <div>{t("noRecipes")}</div>
        <button
          className="mt-8 underline text-primary"
          onClick={() => navigate("/")}
        >
          &larr; {t("allCuisines")}
        </button>
      </div>
    );
  }

  const isArabic = language === "ar";

  return (
    <div className={`min-h-screen w-full bg-background flex flex-col px-4 pt-8 ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-3xl w-full mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-4 text-muted-foreground hover:text-primary transition">
          <ChevronLeft /> {t("allCuisines")}
        </Link>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-1">{recipe.name}</CardTitle>
            <div className="text-muted-foreground">{recipe.cuisine} - {recipe.country}</div>
          </CardHeader>
          <CardContent>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="rounded-lg w-full max-h-72 object-cover mb-6"
              loading="lazy"
            />
            <p className="mb-4">{recipe.description}</p>
            <div className="flex flex-wrap gap-4 text-sm mb-4">
              <span className="bg-muted rounded px-3 py-1">{t("prep")}: {recipe.prepTime}</span>
              <span className="bg-muted rounded px-3 py-1">{t("cook")}: {recipe.cookTime}</span>
              <span className="bg-muted rounded px-3 py-1">{t("servings")}: {recipe.servings}</span>
            </div>
            <h2 className="font-semibold text-lg mb-2">{t("ingredients")}</h2>
            <ul className="list-disc pl-6 mb-4">
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <h2 className="font-semibold text-lg mb-2">{t("instructions")}</h2>
            <ol className="list-decimal pl-6 space-y-2">
              {recipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <div className="flex gap-2 mt-6 flex-wrap">
              {recipe.tags.map(tag => (
                <span key={tag} className="bg-muted text-muted-foreground rounded px-2 py-0.5 text-xs">{tag}</span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
