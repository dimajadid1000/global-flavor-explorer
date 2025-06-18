
import React from "react";

export default function SandwichMuffuletta() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <img 
          src="/lovable-uploads/6467ea51-304e-48a2-b63a-238760f0861b.png"
          alt="Sandwich Muffuletta"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        
        <h1 className="text-4xl font-bold mb-4">Sandwich Muffuletta</h1>
        
        <div className="flex gap-4 mb-6">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">30 min</span>
          <span className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-sm">4 portions</span>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8">
          Le sandwich emblématique de la Nouvelle-Orléans, garni de charcuteries italiennes et d'une salade d'olives traditionnelle sur pain muffuletta.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                1 pain muffuletta rond
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Jambon italien tranché
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Salami italien
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Mortadelle
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Fromage provolone
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Salade d'olives mélangées
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
                <span>Coupez le pain en deux horizontalement.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <span>Étalez généreusement la salade d'olives.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <span>Superposez les charcuteries et le fromage.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</span>
                <span>Refermez et pressez 30 minutes avant de servir.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
