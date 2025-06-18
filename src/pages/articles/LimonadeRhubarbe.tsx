
import React from "react";

export default function LimonadeRhubarbe() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <img 
          src="/lovable-uploads/a7301121-69d8-4430-b49f-3c1bebed1e3f.png"
          alt="Limonade à la Rhubarbe"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        
        <h1 className="text-4xl font-bold mb-4">Limonade à la Rhubarbe</h1>
        
        <div className="flex gap-4 mb-6">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">30 min</span>
          <span className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-sm">6 verres</span>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8">
          Une limonade rafraîchissante et originale à la rhubarbe, parfaite pour les chaudes journées d'été avec sa saveur acidulée unique.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                500g de tiges de rhubarbe
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                150g de sucre
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Jus de 4 citrons
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                1 litre d'eau gazeuse
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Feuilles de menthe
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Glaçons
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
                <span>Coupez la rhubarbe en tronçons et faites cuire avec le sucre.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <span>Mixez et filtrez le sirop de rhubarbe.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <span>Ajoutez le jus de citron et laissez refroidir.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</span>
                <span>Servez avec l'eau gazeuse, menthe et glaçons.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
