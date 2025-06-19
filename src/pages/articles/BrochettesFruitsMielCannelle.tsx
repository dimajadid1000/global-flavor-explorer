
import React from "react";
import Navigation from "../../components/Navigation";

export default function BrochettesFruitsMielCannelle() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/cbdbcab3-f35e-4085-850a-fdf3d108667f.png" 
            alt="Brochettes de fruits grillés au miel et à la cannelle"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">🍢 Brochettes de fruits grillés au miel et à la cannelle</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Une touche sucrée, légère et fruitée, parfaite pour finir un repas d'été en beauté.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted p-4 rounded-lg">
            <div>
              <span className="font-semibold">⏱️ Préparation:</span>
              <p>10 min</p>
            </div>
            <div>
              <span className="font-semibold">🔥 Cuisson:</span>
              <p>6 min</p>
            </div>
            <div>
              <span className="font-semibold">🍽️ Portions:</span>
              <p>4 personnes</p>
            </div>
            <div>
              <span className="font-semibold">🥗 Type:</span>
              <p>Dessert léger et fruité</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧾 Ingrédients</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>1 ananas</li>
              <li>2 pêches</li>
              <li>2 kiwis</li>
              <li>2 cuillères à soupe de miel</li>
              <li>1 cuillère à café de cannelle</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">👨‍🍳 Préparation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Préparer les fruits :</h3>
                <p className="text-sm">Épluchez l'ananas et les kiwis, dénoyautez les pêches. Coupez tous les fruits en morceaux de taille moyenne.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Monter les brochettes :</h3>
                <p className="text-sm">Enfilez les morceaux de fruits sur des piques en bois ou en métal, en alternant les couleurs.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Assaisonner :</h3>
                <p className="text-sm">Badigeonnez les brochettes de miel à l'aide d'un pinceau, puis saupoudrez-les de cannelle.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Griller :</h3>
                <p className="text-sm">Faites griller les brochettes environ 3 minutes de chaque côté, au barbecue ou à la poêle grill.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Servir :</h3>
                <p className="text-sm">Dégustez-les tièdes, telles quelles ou avec une boule de glace à la vanille pour les plus gourmands.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">🌟 Astuces</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Vous pouvez ajouter de la banane ou des fraises selon vos envies</li>
              <li>Pour plus de fraîcheur, servez avec un peu de menthe ciselée</li>
              <li>Pensez à faire tremper les piques en bois 10 min dans l'eau avant pour éviter qu'ils ne brûlent</li>
            </ul>
          </div>

          <div className="text-center text-muted-foreground italic">
            Ces brochettes sont l'exemple parfait d'un dessert sain, rapide et convivial, à savourer entre amis ou en famille sous le soleil ☀️🍍🍑🥝
          </div>
        </div>
      </div>
    </div>
  );
}
