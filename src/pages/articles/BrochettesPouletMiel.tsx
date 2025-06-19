
import React from "react";
import Navigation from "../../components/Navigation";

export default function BrochettesPouletMiel() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/78af5888-ace3-4df7-990c-166403805999.png" 
            alt="Brochettes de poulet au miel"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">🍗 Brochettes de poulet au miel et épices</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Des brochettes savoureuses et parfumées, parfaites pour vos grillades d'été.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted p-4 rounded-lg">
            <div>
              <span className="font-semibold">⏱️ Préparation:</span>
              <p>15 min</p>
            </div>
            <div>
              <span className="font-semibold">⏲️ Marinade:</span>
              <p>30 min</p>
            </div>
            <div>
              <span className="font-semibold">🔥 Cuisson:</span>
              <p>12-15 min</p>
            </div>
            <div>
              <span className="font-semibold">🍽️ Portions:</span>
              <p>4 personnes</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧾 Ingrédients</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>600 g de blanc de poulet</li>
              <li>3 c. à soupe de miel</li>
              <li>2 c. à soupe d'huile d'olive</li>
              <li>1 c. à soupe de sauce soja</li>
              <li>1 c. à café de paprika</li>
              <li>1 c. à café de cumin</li>
              <li>1 gousse d'ail hachée</li>
              <li>Le jus d'un citron</li>
              <li>Sel et poivre</li>
              <li>Pics à brochettes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">👨‍🍳 Préparation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Préparer le poulet :</h3>
                <p className="text-sm">Coupez le blanc de poulet en cubes réguliers d'environ 3 cm de côté.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Préparer la marinade :</h3>
                <p className="text-sm">Dans un grand bol, mélangez le miel, l'huile d'olive, la sauce soja, le paprika, le cumin, l'ail haché, le jus de citron, le sel et le poivre.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Mariner le poulet :</h3>
                <p className="text-sm">Ajoutez les cubes de poulet dans la marinade, mélangez bien pour que tous les morceaux soient enrobés. Laissez mariner au réfrigérateur pendant au moins 30 minutes.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Monter les brochettes :</h3>
                <p className="text-sm">Enfilez les cubes de poulet sur les pics, en laissant un petit espace entre chaque morceau pour une cuisson uniforme.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Cuisson :</h3>
                <p className="text-sm">Faites griller les brochettes 12-15 minutes au barbecue ou à la plancha, en les retournant régulièrement et en les badigeonnant avec le reste de marinade.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Service :</h3>
                <p className="text-sm">Servez chaud avec du riz, des légumes grillés ou une salade fraîche.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-amber-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">🌟 Conseils</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Veillez à ne pas trop cuire le poulet pour qu'il reste moelleux</li>
            <li>Vous pouvez ajouter des morceaux de poivron ou d'oignon entre les cubes de poulet</li>
            <li>Pour plus de saveur, laissez mariner plusieurs heures ou toute une nuit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
