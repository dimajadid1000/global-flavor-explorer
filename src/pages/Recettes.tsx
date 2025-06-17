
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";

// Articles de recettes françaises - LES 18 NOUVEAUX ARTICLES
const FRENCH_ARTICLES = [
  {
    title: "Salade de pâtes à la bruschetta",
    description: "Une salade-repas à 5 ingrédients, simple et savoureuse",
    image: "/lovable-uploads/8d6ad858-5b8c-4165-b345-bece66e7d9a8.png",
    link: "/articles/salade-pates-bruschetta",
    time: "20 min"
  },
  {
    title: "Guédilles au crabe des neiges",
    description: "Des guédilles fraîches avec légumes croquants et mayonnaise citronnée",
    image: "/lovable-uploads/9e7dd654-2b37-4e56-97ec-baebde0664f6.png",
    link: "/articles/guedilles-crabe",
    time: "30 min"
  },
  {
    title: "Salade antipasto",
    description: "Une salade colorée aux tortellinis, parfaite pour l'été",
    image: "/lovable-uploads/7b92cadc-9e75-419c-a907-ea4109852971.png",
    link: "/articles/salade-antipasto",
    time: "25 min"
  },
  {
    title: "Salade niçoise",
    description: "Le grand classique français avec vinaigrette parfumée",
    image: "/lovable-uploads/4f508374-776e-49cd-b5b2-4747ee89831b.png",
    link: "/articles/salade-nicoise",
    time: "45 min"
  },
  {
    title: "Salade de melon d'eau épicée",
    description: "Rafraîchissante et surprenante avec feta et épices",
    image: "/lovable-uploads/041d3ac5-0ef7-4973-9e16-921d3802f78d.png",
    link: "/articles/salade-melon-epicee",
    time: "10 min"
  },
  {
    title: "Tartines aux tomates et prosciutto",
    description: "Des tartines méditerranéennes aux saveurs authentiques",
    image: "/lovable-uploads/3d08a949-701f-4bad-b0b6-52b946fcf28b.png",
    link: "/articles/tartines-tomates-prosciutto",
    time: "20 min"
  },
  {
    title: "Sandwichs bánh mì",
    description: "Authentiques sandwichs vietnamiens avec poulet effiloché",
    image: "/lovable-uploads/6b4fa233-9631-43c4-b999-7b1680a1e024.png",
    link: "/articles/sandwich-banh-mi",
    time: "45 min"
  },
  {
    title: "Ramen froid",
    description: "Un ramen rafraîchissant parfait pour l'été",
    image: "/lovable-uploads/868a4d4c-e1cd-4892-9df9-b5f38f117d80.png",
    link: "/articles/ramen-froid",
    time: "30 min"
  },
  {
    title: "Bar à tacos express",
    description: "Des tacos rapides et savoureux pour toute la famille",
    image: "/lovable-uploads/b657a537-6e2f-48f9-bbb9-483761224225.png",
    link: "/articles/bar-tacos-express",
    time: "25 min"
  },
  {
    title: "Salade fattouche végé",
    description: "Salade méditerranéenne avec tofu mariné au zaatar",
    image: "/lovable-uploads/5113a2f2-d43d-40c0-a73a-13c1d73abb48.png",
    link: "/articles/salade-fattouche-vege",
    time: "35 min"
  },
  {
    title: "Salade de concombres écrasés",
    description: "Salade asiatique rafraîchissante et épicée",
    image: "/lovable-uploads/041d3ac5-0ef7-4973-9e16-921d3802f78d.png",
    link: "/articles/salade-concombres-ecrases",
    time: "15 min"
  },
  {
    title: "Guédilles végétaliennes",
    description: "Alternative végétalienne savoureuse au classique",
    image: "/lovable-uploads/9e7dd654-2b37-4e56-97ec-baebde0664f6.png",
    link: "/articles/guedilles-vegetaliennes",
    time: "20 min"
  },
  {
    title: "Salade roquette, avocat et bleuets",
    description: "Salade raffinée avec vinaigrette à la lavande",
    image: "/lovable-uploads/4306d701-cc79-4903-8214-b171651fed22.png",
    link: "/articles/salade-roquette-avocat-bleuets",
    time: "15 min"
  },
  {
    title: "Sandwichs arc-en-ciel au tofu",
    description: "Sandwichs colorés et nutritifs aux légumes variés",
    image: "/lovable-uploads/7b92cadc-9e75-419c-a907-ea4109852971.png",
    link: "/articles/sandwich-arc-en-ciel-tofu",
    time: "45 min"
  },
  {
    title: "Sandwich muffuletta",
    description: "Le célèbre sandwich de La Nouvelle-Orléans",
    image: "/lovable-uploads/4f508374-776e-49cd-b5b2-4747ee89831b.png",
    link: "/articles/sandwich-muffuletta",
    time: "6 heures"
  },
  {
    title: "Tofu soyeux aux tomates et basilic",
    description: "Plat asiatique frais avec sauce légèrement épicée",
    image: "/lovable-uploads/868a4d4c-e1cd-4892-9df9-b5f38f117d80.png",
    link: "/articles/tofu-soyeux-tomates-basilic",
    time: "10 min"
  },
  {
    title: "Limonade à la rhubarbe",
    description: "Boisson rafraîchissante et originale pour l'été",
    image: "/lovable-uploads/6b4fa233-9631-43c4-b999-7b1680a1e024.png",
    link: "/articles/limonade-rhubarbe",
    time: "25 min"
  },
  {
    title: "Boisson aux pêches et au gingembre",
    description: "Boisson estivale délicieuse aux pêches juteuses",
    image: "/lovable-uploads/5113a2f2-d43d-40c0-a73a-13c1d73abb48.png",
    link: "/articles/boisson-peches-gingembre",
    time: "30 min"
  }
];

// Articles originaux
const ORIGINAL_FRENCH_ARTICLES = [
  {
    title: "Lasagnes aux Courgettes et Feta",
    description: "Une version estivale et légère des lasagnes traditionnelles",
    image: "/lovable-uploads/8d6ad858-5b8c-4165-b345-bece66e7d9a8.png",
    link: "/articles/lasagnes-courgettes",
    time: "45 min"
  },
  {
    title: "Salade Grecque en Cubes",
    description: "Beau comme un tableau ! Une présentation originale de la salade grecque",
    image: "/lovable-uploads/9e7dd654-2b37-4e56-97ec-baebde0664f6.png",
    link: "/articles/salade-grecque",
    time: "15 min"
  },
  {
    title: "Galettes Végétariennes",
    description: "Un plat d'été 100% barbecue aux pois chiches et légumes grillés",
    image: "/lovable-uploads/7b92cadc-9e75-419c-a907-ea4109852971.png",
    link: "/articles/galettes-vegetariennes",
    time: "50 min"
  },
  {
    title: "Parmigiana d'Aubergines",
    description: "Le classique italien revisité avec des aubergines fondantes",
    image: "/lovable-uploads/4f508374-776e-49cd-b5b2-4747ee89831b.png",
    link: "/articles/parmigiana-aubergines",
    time: "60 min"
  },
  {
    title: "Caponata d'Aubergines",
    description: "Un délice végétarien à servir pendant toute la belle saison",
    image: "/lovable-uploads/041d3ac5-0ef7-4973-9e16-921d3802f78d.png",
    link: "/articles/caponata-aubergines",
    time: "90 min"
  },
  {
    title: "Rillettes de Radis au Chèvre",
    description: "Des rillettes ultra-fraîches pour révolutionner l'apéritif",
    image: "/lovable-uploads/3d08a949-701f-4bad-b0b6-52b946fcf28b.png",
    link: "/articles/rillettes-radis",
    time: "10 min"
  },
  {
    title: "Gaspacho de Courgettes au Curcuma",
    description: "Un délice sans cuisson ni prise de tête",
    image: "/lovable-uploads/6b4fa233-9631-43c4-b999-7b1680a1e024.png",
    link: "/articles/gaspacho-courgettes-curcuma",
    time: "5 min"
  },
  {
    title: "Salade de Pommes de Terre et Radis",
    description: "Une salade fraîche et croquante parfaite pour l'été",
    image: "/lovable-uploads/868a4d4c-e1cd-4892-9df9-b5f38f117d80.png",
    link: "/articles/salade-pommes-de-terre",
    time: "30 min"
  },
  {
    title: "Œufs Mollets et Salade du Balcon",
    description: "Des œufs parfaits avec une salade de jeunes pousses",
    image: "/lovable-uploads/b657a537-6e2f-48f9-bbb9-483761224225.png",
    link: "/articles/oeufs-mollets",
    time: "18 min"
  },
  {
    title: "Sundae Maison",
    description: "Un dessert gourmand et équilibré fait maison",
    image: "/lovable-uploads/5113a2f2-d43d-40c0-a73a-13c1d73abb48.png",
    link: "/articles/sundae-maison",
    time: "10 min"
  }
];

export default function Recettes() {
  const { cuisine } = useParams();
  
  // Affichage spécial pour la France
  if (cuisine === "france") {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Recettes Françaises</h1>
        
        {/* Section Nouveaux Articles Français */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
              <BookOpen className="w-6 h-6" />
              Nos Nouveaux Articles Français
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Les 18 dernières recettes françaises ajoutées
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
            {FRENCH_ARTICLES.map((article, index) => (
              <Link
                key={index}
                to={article.link}
                className="group bg-white dark:bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {article.time}
                    </Badge>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section Articles Français Originaux */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
              <BookOpen className="w-6 h-6" />
              Articles Français Classiques
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nos recettes françaises traditionnelles
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
            {ORIGINAL_FRENCH_ARTICLES.map((article, index) => (
              <Link
                key={index}
                to={article.link}
                className="group bg-white dark:bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {article.time}
                    </Badge>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // Affichage général pour les autres cuisines
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recettes</h1>
      
      <div className="border-t pt-8">
        <p className="text-center text-gray-600 dark:text-gray-400">
          Sélectionnez un pays/cuisine dans le menu de navigation pour afficher les recettes correspondantes, 
          ou retournez à la <Link to="/" className="text-primary hover:underline">page d'accueil</Link> pour voir toutes nos recettes.
        </p>
      </div>
    </div>
  );
}
