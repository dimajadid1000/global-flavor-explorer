
import React from "react";

export default function SandwichArcEnCielTofu() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <img 
          src="/lovable-uploads/77db422a-a0e4-4e63-99d6-7108132af098.png"
          alt="Sandwich Arc-en-ciel au Tofu"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        
        <h1 className="text-4xl font-bold mb-4">Sandwich Arc-en-ciel au Tofu</h1>
        
        <div className="flex gap-4 mb-6">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">25 min</span>
          <span className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-sm">2 portions</span>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8">
          Un sandwich coloré et nutritif au tofu mariné, garni de légumes frais multicolores pour un repas équilibré et savoureux.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                200g de tofu ferme
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                4 tranches de pain complet
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Chou rouge râpé
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Carotte râpée
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Avocat en tranches
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Épinards frais
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
                <span>Marinez le tofu coupé en tranches.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <span>Faites griller le tofu dans une poêle.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <span>Toastez légèrement le pain.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</span>
                <span>Assemblez en alternant les couleurs des légumes.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
