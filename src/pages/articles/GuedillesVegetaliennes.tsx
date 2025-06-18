
import React from "react";

export default function GuedillesVegetaliennes() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <img 
          src="/lovable-uploads/03dfc7f0-4938-4a4a-8cb5-44e8108cce37.png"
          alt="Guédilles Végétaliennes"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        
        <h1 className="text-4xl font-bold mb-4">Guédilles Végétaliennes</h1>
        
        <div className="flex gap-4 mb-6">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">20 min</span>
          <span className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-sm">4 portions</span>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8">
          Des guédilles savoureuses et végétaliennes, parfaites pour un repas léger et nutritif. Une alternative délicieuse aux versions traditionnelles.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                4 pains à hot-dog végétaliens
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                200g de protéines végétales texturées
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Mayonnaise végétalienne
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Laitue, tomates, oignons
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Épices au choix
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
                <span>Réhydratez les protéines végétales avec du bouillon chaud.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <span>Assaisonnez et faites revenir dans une poêle.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <span>Réchauffez les pains et garnissez de légumes frais.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</span>
                <span>Ajoutez la mayonnaise végétalienne et servez.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
