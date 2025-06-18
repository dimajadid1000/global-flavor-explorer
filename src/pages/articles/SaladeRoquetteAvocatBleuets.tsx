
import React from "react";

export default function SaladeRoquetteAvocatBleuets() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <img 
          src="/lovable-uploads/bd360db0-227b-40e6-bdb8-1fea95d51580.png"
          alt="Salade Roquette Avocat Bleuets"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        
        <h1 className="text-4xl font-bold mb-4">Salade Roquette Avocat Bleuets</h1>
        
        <div className="flex gap-4 mb-6">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">10 min</span>
          <span className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-sm">4 portions</span>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8">
          Une salade fraîche et colorée alliant la peppeur de la roquette, la douceur de l'avocat et l'éclat des bleuets pour un mélange parfait de saveurs et de textures.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                100g de roquette fraîche
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                2 avocats mûrs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                150g de bleuets frais
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                50g de fromage de chèvre
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                2 cuillères à soupe d'huile d'olive
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                1 cuillère à soupe de vinaigre balsamique
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
                <span>Lavez et essorez la roquette.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <span>Coupez les avocats en tranches.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <span>Disposez la roquette dans un saladier.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</span>
                <span>Ajoutez les avocats, bleuets et fromage émietté.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">5</span>
                <span>Assaisonnez avec l'huile et le vinaigre.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
