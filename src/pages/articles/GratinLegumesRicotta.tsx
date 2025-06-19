
import React from "react";
import Navigation from "../../components/Navigation";

export default function GratinLegumesRicotta() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/7161a781-3d22-473c-97b5-e47b286f6dbc.png" 
            alt="Gratin de légumes grillés à la ricotta"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">🥘 Gratin de légumes grillés à la ricotta</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Un plat léger, coloré et fondant, parfait pour accompagner vos repas d'été.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted p-4 rounded-lg">
            <div>
              <span className="font-semibold">⏱️ Préparation:</span>
              <p>15 min</p>
            </div>
            <div>
              <span className="font-semibold">🔥 Cuisson:</span>
              <p>20 min</p>
            </div>
            <div>
              <span className="font-semibold">🍽️ Portions:</span>
              <p>4 personnes</p>
            </div>
            <div>
              <span className="font-semibold">🥗 Type:</span>
              <p>Accompagnement</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧾 Ingrédients</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>2 aubergines</li>
              <li>2 courgettes</li>
              <li>2 tomates</li>
              <li>1 oignon rouge</li>
              <li>1 c. à soupe d'huile d'olive</li>
              <li>100 g de ricotta</li>
              <li>1 c. à café d'herbes de Provence</li>
              <li>Sel et poivre</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">👨‍🍳 Préparation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Préparer les légumes :</h3>
                <p className="text-sm">Lavez les aubergines, les courgettes et les tomates. Épluchez l'oignon rouge. Coupez tous les légumes en tranches fines.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Assaisonner et griller :</h3>
                <p className="text-sm">Disposez les tranches de légumes sur une plaque ou un plat. Badigeonnez-les d'huile d'olive, puis saupoudrez d'herbes de Provence, de sel et de poivre. Faites griller chaque face 5 minutes au barbecue, à la poêle grill ou dans un four en mode grill.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Monter le gratin :</h3>
                <p className="text-sm">Disposez les légumes grillés en couches dans un plat à gratin. Répartissez des petites cuillerées de ricotta entre les couches ou sur le dessus.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Cuisson finale :</h3>
                <p className="text-sm">Enfournez 10 minutes à 180°C pour faire gratiner légèrement.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">🌟 Astuces</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Ajoutez un filet de miel ou quelques pignons de pin pour un petit twist sucré-croquant</li>
              <li>Vous pouvez aussi remplacer la ricotta par de la mozzarella ou du fromage de chèvre frais</li>
              <li>Ce gratin se déguste aussi bien chaud que tiède, voire froid en accompagnement d'un barbecue</li>
            </ul>
          </div>

          <div className="text-center text-muted-foreground italic">
            Un plat ensoleillé et ultra-simple, idéal pour mettre en valeur les légumes de saison ☀️🍆🍅
          </div>
        </div>
      </div>
    </div>
  );
}
