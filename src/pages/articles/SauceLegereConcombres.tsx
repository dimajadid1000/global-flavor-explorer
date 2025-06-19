
import React from "react";
import Navigation from "../../components/Navigation";

export default function SauceLegereConcombres() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/1c829638-582e-4adc-adfe-bcba6e5e74af.png" 
            alt="Sauce légère pour concombres"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">🥒 Cet été, remplacez la crème par une sauce légère pour sublimer vos concombres</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Avec l'arrivée des beaux jours, les concombres s'invitent dans nos assiettes. Et si, pour une fois, on osait une alternative plus légère à la traditionnelle crème fraîche ?
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧂 Pourquoi repenser la salade de concombre traditionnelle ?</h2>
            <p className="text-muted-foreground">Si la crème apporte une texture onctueuse appréciée, elle contient tout de même environ 30 % de matières grasses. Résultat : la légèreté du concombre est vite alourdie par l'ajout de crème.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">🧀 Skyr & fromage blanc : des alternatives saines et riches en protéines</h2>
            <p className="mb-4">Adoptez des substituts malins, à la fois plus digestes et nourrissants :</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Le skyr :</strong> jusqu'à 20 g de protéines pour 100 g, presque sans matières grasses</li>
              <li><strong>Le fromage blanc :</strong> 7 à 10 g de protéines, léger et onctueux</li>
            </ul>
            <p className="mt-4 text-muted-foreground">Ces alternatives permettent de conserver la gourmandise sans compromis sur l'équilibre nutritionnel.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">🥗 Recette de la sauce légère maison</h2>
              <p className="mb-4 text-muted-foreground">Une sauce simple, rapide et ultra-fraîche à préparer :</p>
              
              <h3 className="text-lg font-medium mb-2 text-primary">🧾 Ingrédients :</h3>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>150 g de skyr ou fromage blanc</li>
                <li>1 c. à café de moutarde</li>
                <li>2 c. à soupe d'huile d'olive</li>
                <li>1 filet de jus de citron</li>
                <li>1 gousse d'ail râpée (ou 1/2 c. à café d'ail en poudre)</li>
                <li>Sel, poivre</li>
                <li>Herbes fraîches : aneth, menthe ou ciboulette, ciselées</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">👨‍🍳 Astuce gourmande :</h3>
              <p className="mb-4">Ajoutez selon vos envies :</p>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Échalotes émincées</li>
                <li>Tranches de saumon ou truite fumée</li>
                <li>Pois chiches pour une version végétarienne complète</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">🌯 Une sauce polyvalente</h3>
              <p className="mb-4">Cette sauce ne se limite pas à la salade de concombre. Elle est parfaite pour :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Accompagner une salade composée</li>
                <li>Garnir un wrap de crudités, crevettes ou tofu</li>
                <li>Servir en dip apéritif avec des légumes croquants</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-center text-muted-foreground">
              Elle se conserve 3 à 4 jours au réfrigérateur dans un récipient hermétique. Idéale pour anticiper vos repas de la semaine ou vos pique-niques improvisés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
