
import React from "react";
import Navigation from "../../components/Navigation";

export default function GuedillesVegetaliennes() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <img 
          src="/lovable-uploads/03dfc7f0-4938-4a4a-8cb5-44e8108cce37.png"
          alt="Guédilles Végétaliennes"
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
        />
        
        <h1 className="text-4xl font-bold mb-4">🥪 Guédilles Végétaliennes</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Des guédilles savoureuses et végétaliennes, parfaites pour un repas léger et nutritif.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted p-4 rounded-lg">
          <div>
            <span className="font-semibold">⏱️ Préparation:</span>
            <p>20 min</p>
          </div>
          <div>
            <span className="font-semibold">🔥 Cuisson:</span>
            <p>10 min</p>
          </div>
          <div>
            <span className="font-semibold">🍽️ Portions:</span>
            <p>4 personnes</p>
          </div>
          <div>
            <span className="font-semibold">🥗 Type:</span>
            <p>Plat léger</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧾 Ingrédients</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>4 pains à hot-dog végétaliens</li>
              <li>200g de protéines végétales texturées</li>
              <li>Mayonnaise végétalienne</li>
              <li>Laitue, tomates, oignons</li>
              <li>Épices au choix</li>
              <li>Bouillon de légumes</li>
              <li>Huile d'olive</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">👨‍🍳 Préparation</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm"><strong>1.</strong> Réhydratez les protéines végétales avec du bouillon chaud pendant 10 minutes.</p>
              </div>
              <div>
                <p className="text-sm"><strong>2.</strong> Assaisonnez et faites revenir dans une poêle avec un peu d'huile d'olive.</p>
              </div>
              <div>
                <p className="text-sm"><strong>3.</strong> Réchauffez les pains et garnissez de légumes frais.</p>
              </div>
              <div>
                <p className="text-sm"><strong>4.</strong> Ajoutez la mayonnaise végétalienne et servez immédiatement.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">🌟 Astuce</h2>
          <p>Vous pouvez ajouter des cornichons ou des oignons caramélisés pour plus de saveur !</p>
        </div>
      </div>
    </div>
  );
}
