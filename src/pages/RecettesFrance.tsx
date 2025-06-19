
import React from "react";
import { recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import Navigation from "../components/Navigation";
import { Recipe } from "../data/recipes";

const frenchRecipes = recipes.filter(recipe => recipe.cuisine === "French");

// Articles supplémentaires français
const additionalFrenchArticles = [
  {
    id: 'salade-melon-burrata-pesto',
    title: 'Salade melon et burrata farcie au pesto',
    image: '/lovable-uploads/62a70f81-e27b-48a8-9271-2e012de4457c.png',
    description: 'Un plat frais, élégant et ultra-gourmand, parfait pour l\'été.',
    prepTime: '20 min',
    link: '/articles/salade-melon-burrata-pesto'
  },
  {
    id: 'tarte-chocolat-framboises',
    title: 'Tarte au chocolat et framboises de Laurent Mariotte',
    image: '/lovable-uploads/4a9522cb-242d-40a1-84c2-7cc6bfcf6d18.png',
    description: 'Un dessert fondant, fruité et absolument irrésistible pour l\'été.',
    prepTime: '30 min + 1h de repos',
    link: '/articles/tarte-chocolat-framboises'
  },
  {
    id: 'sauce-legere-concombres',
    title: 'Sauce légère pour sublimer vos concombres',
    image: '/lovable-uploads/1c829638-582e-4adc-adfe-bcba6e5e74af.png',
    description: 'Une alternative plus légère à la traditionnelle crème fraîche.',
    prepTime: '5 min',
    link: '/articles/sauce-legere-concombres'
  },
  {
    id: 'chorizo-legumes-ete',
    title: 'Chorizo rôti aux légumes d\'été',
    image: '/lovable-uploads/84c0b43a-d32f-4d47-887b-de3a59f1ac14.png',
    description: 'Une recette express et savoureuse, parfaite pour un repas convivial.',
    prepTime: '15 min',
    link: '/articles/chorizo-legumes-ete'
  },
  {
    id: 'salade-quinoa-legumes-feta',
    title: 'Salade de quinoa aux légumes d\'été grillés et féta',
    image: '/lovable-uploads/31569dfc-59d4-4e0a-94ba-1a4b2beaef2f.png',
    description: 'Une salade tiède ou froide, pleine de couleurs et de saveurs méditerranéennes.',
    prepTime: '15 min',
    link: '/articles/salade-quinoa-legumes-feta'
  },
  {
    id: 'brochettes-crevettes-grillees',
    title: 'Brochettes de crevettes grillées',
    image: '/lovable-uploads/78af5888-ace3-4df7-990c-166403805999.png',
    description: 'Saines, rapides et délicieusement parfumées au citron et au paprika.',
    prepTime: '10 min',
    link: '/articles/brochettes-crevettes-grillees'
  },
  {
    id: 'gratin-legumes-ricotta',
    title: 'Gratin de légumes grillés à la ricotta',
    image: '/lovable-uploads/7161a781-3d22-473c-97b5-e47b286f6dbc.png',
    description: 'Un plat léger, coloré et fondant, parfait pour accompagner vos repas d\'été.',
    prepTime: '15 min',
    link: '/articles/gratin-legumes-ricotta'
  },
  {
    id: 'brochettes-poulet-miel',
    title: 'Brochettes de poulet au miel et épices',
    image: '/lovable-uploads/98101daf-50b2-4cea-908c-d7d458a4fff0.png',
    description: 'Des brochettes savoureuses et parfumées, idéales pour vos barbecues.',
    prepTime: '20 min',
    link: '/articles/brochettes-poulet-miel'
  },
  {
    id: 'brochettes-fruits-miel-cannelle',
    title: 'Brochettes de fruits grillés au miel et à la cannelle',
    image: '/lovable-uploads/cbdbcab3-f35e-4085-850a-fdf3d108667f.png',
    description: 'Une touche sucrée, légère et fruitée, parfaite pour finir un repas d\'été.',
    prepTime: '10 min',
    link: '/articles/brochettes-fruits-miel-cannelle'
  },
  {
    id: 'ravioli-morilles-truffe',
    title: 'Ravioli aux morilles et à la truffe d\'été',
    image: '/lovable-uploads/a7301121-69d8-4430-b49f-3c1bebed1e3f.png',
    description: 'Un plat raffiné, parfumé et délicat, parfait pour un dîner élégant.',
    prepTime: '1h15',
    link: '/articles/ravioli-morilles-truffe'
  },
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
