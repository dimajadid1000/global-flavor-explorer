
import React from "react";
import { recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import Navigation from "../components/Navigation";
import { Recipe } from "../data/recipes";

const frenchRecipes = recipes.filter(recipe => recipe.cuisine === "French");

// Articles supplémentaires français
const additionalFrenchArticles = [
  {
    id: 'salade-concombres-ecrases',
    title: 'Salade de Concombres Écrasés',
    image: '/lovable-uploads/e2b28d1c-8ceb-4890-8199-c02e574c57f8.png',
    description: 'Une salade fraîche et croquante de concombres écrasés aux saveurs asiatiques.',
    prepTime: '15 min',
    link: '/articles/salade-concombres-ecrases'
  },
  {
    id: 'guedilles-vegetaliennes',
    title: 'Guédilles Végétaliennes',
    image: '/lovable-uploads/03dfc7f0-4938-4a4a-8cb5-44e8108cce37.png',  
    description: 'Des guédilles savoureuses et végétaliennes, parfaites pour un repas léger.',
    prepTime: '20 min',
    link: '/articles/guedilles-vegetaliennes'
  },
  {
    id: 'salade-roquette-avocat-bleuets',
    title: 'Salade Roquette Avocat Bleuets',
    image: '/lovable-uploads/9d7a3ff0-1c17-4e99-9d30-64f18948fc3b.png',
    description: 'Une salade colorée et nutritive avec roquette, avocat et bleuets.',
    prepTime: '10 min',
    link: '/articles/salade-roquette-avocat-bleuets'
  },
  {
    id: 'sandwich-arc-en-ciel-tofu',
    title: 'Sandwich Arc-en-ciel au Tofu',
    image: '/lovable-uploads/77cd53a3-e529-4c9d-ba1c-a0053dcfa249.png',
    description: 'Un sandwich coloré et savoureux garni de tofu et légumes variés.',
    prepTime: '25 min',
    link: '/articles/sandwich-arc-en-ciel-tofu'
  },
  {
    id: 'sandwich-muffuletta',
    title: 'Sandwich Muffuletta',
    image: '/lovable-uploads/8b1f9a8d-790b-44ce-ae06-c56141880db1.png',
    description: 'Le célèbre sandwich italien-américain avec ses saveurs méditerranéennes.',
    prepTime: '30 min',
    link: '/articles/sandwich-muffuletta'
  },
  {
    id: 'tofu-soyeux-tomates-basilic',
    title: 'Tofu Soyeux Tomates Basilic',
    image: '/lovable-uploads/b2424c58-7301-4d84-a883-de38ff7c0149.png',
    description: 'Un plat végétarien délicieux avec tofu soyeux, tomates fraîches et basilic.',
    prepTime: '20 min',
    link: '/articles/tofu-soyeux-tomates-basilic'
  },
  {
    id: 'limonade-rhubarbe',
    title: 'Limonade à la Rhubarbe',
    image: '/lovable-uploads/7400d9f6-0db8-41a9-9df6-d590e3921af2.png',
    description: 'Une boisson rafraîchissante et originale à base de rhubarbe.',
    prepTime: '15 min',
    link: '/articles/limonade-rhubarbe'
  },
  {
    id: 'boisson-peches-gingembre',
    title: 'Boisson Pêches Gingembre',
    image: '/lovable-uploads/ea73ae02-8379-49c0-aa47-f64963f92562.png',
    description: 'Une boisson désaltérante aux pêches et gingembre, parfaite pour l\'été.',
    prepTime: '10 min',
    link: '/articles/boisson-peches-gingembre'
  }
];

export default function RecettesFrance() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Dernières Recettes</h1>
          <p className="text-lg text-muted-foreground">
            Découvrez nos recettes les plus récentes et savoureuses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {frenchRecipes.map((recipe: Recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onClick={() => {}} />
          ))}
          
          {additionalFrenchArticles.map((article) => (
            <div key={article.id} className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{article.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary">{article.prepTime}</span>
                  <a 
                    href={article.link}
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Voir la recette →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
