
import React from "react";
import Navigation from "../../components/Navigation";

export default function BrochettesCrevettesGrillees() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/4a9522cb-242d-40a1-84c2-7cc6bfcf6d18.png" 
            alt="Brochettes de crevettes grillées"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">🍤 Brochettes de crevettes grillées : une recette estivale, simple et savoureuse</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Saines, rapides et délicieusement parfumées au citron et au paprika, ces brochettes sont idéales pour vos barbecues d'été.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted p-4 rounded-lg">
            <div>
              <span className="font-semibold">⏱️ Préparation:</span>
              <p>10 min</p>
            </div>
            <div>
              <span className="font-semibold">⏲️ Marinade:</span>
              <p>30 min</p>
            </div>
            <div>
              <span className="font-semibold">🔥 Cuisson:</span>
              <p>6 min (3 min par face)</p>
            </div>
            <div>
              <span className="font-semibold">🍽️ Portions:</span>
              <p>2 à 3 personnes</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧾 Ingrédients</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>400 g de crevettes décortiquées (crues de préférence)</li>
              <li>2 citrons (jus uniquement)</li>
              <li>2 c. à soupe d'huile d'olive</li>
              <li>1 gousse d'ail pressée</li>
              <li>1 c. à café de paprika</li>
              <li>Sel et poivre</li>
              <li>Quelques brins de persil frais</li>
              <li>Pics à brochettes (en bois ou métal)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">👨‍🍳 Préparation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Préparer la marinade :</h3>
                <p className="text-sm">Dans un grand bol, mélangez le jus des citrons, l'huile d'olive, l'ail pressé, le paprika, le sel et le poivre.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Faire mariner les crevettes :</h3>
                <p className="text-sm">Ajoutez les crevettes dans le bol, mélangez bien pour qu'elles s'enrobent de marinade. Laissez reposer 30 minutes au réfrigérateur.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Monter les brochettes :</h3>
                <p className="text-sm">Piquez les crevettes sur les pics (en les courbant légèrement si elles sont grosses). Si vous utilisez des brochettes en bois, pensez à les tremper dans l'eau 15 min avant pour éviter qu'elles ne brûlent.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Cuisson :</h3>
                <p className="text-sm">Faites griller les brochettes 3 minutes par face, au barbecue, à la plancha ou dans une poêle bien chaude. Les crevettes doivent être bien roses et légèrement dorées.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Service :</h3>
                <p className="text-sm">Disposez les brochettes sur un plat, parsemez de persil frais haché. Servez chaud, avec un quartier de citron à côté.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">🌟 Suggestions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Servez avec du riz, une salade fraîche ou des légumes grillés</li>
            <li>Pour une touche exotique : ajoutez un peu de piment doux ou de curry à la marinade</li>
            <li>Vous pouvez aussi intégrer des morceaux de légumes (poivrons, oignons) entre les crevettes sur les brochettes</li>
          </ul>
          <p className="mt-4 text-center italic">Une recette facile et pleine de soleil à savourer en terrasse ou au jardin 🌿☀️</p>
        </div>
      </div>
    </div>
  );
}
