
import React from "react";
import Navigation from "../../components/Navigation";

export default function TarteChocolatFramboises() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/98101daf-50b2-4cea-908c-d7d458a4fff0.png" 
            alt="Tarte au chocolat et framboises de Laurent Mariotte"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">🍫 Tarte au chocolat et framboises de Laurent Mariotte</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Un dessert fondant, fruité et absolument irrésistible pour l'été.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted p-4 rounded-lg">
            <div>
              <span className="font-semibold">👨‍🍳 Difficulté:</span>
              <p>Facile – ⭐⭐⭐</p>
            </div>
            <div>
              <span className="font-semibold">⏱️ Préparation:</span>
              <p>30 min + 1h repos</p>
            </div>
            <div>
              <span className="font-semibold">🔥 Cuisson:</span>
              <p>25 min</p>
            </div>
            <div>
              <span className="font-semibold">🍽️ Portions:</span>
              <p>6 à 8 personnes</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧾 Ingrédients</h2>
            
            <h3 className="text-lg font-medium mb-2 text-primary">Pour la pâte au cacao :</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>200 g de farine</li>
              <li>100 g de beurre doux</li>
              <li>15 g de cacao en poudre non sucré</li>
              <li>50 g de sucre glace</li>
              <li>1 œuf</li>
              <li>1 pincée de sel</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 text-primary">Pour la ganache au chocolat :</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>200 g de chocolat noir à 70 %</li>
              <li>30 cl de crème liquide</li>
              <li>1 càs de miel</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 text-primary">Pour la garniture :</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>500 g de framboises fraîches</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">👨‍🍳 Étapes de préparation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Préparer la pâte au cacao</h3>
                <p className="text-sm">Dans un robot, mélangez la farine, le cacao, le sucre glace et le sel. Ajoutez le beurre en morceaux, mixez jusqu'à obtenir une texture sableuse. Incorporez l'œuf et pétrissez à la main pour former une boule homogène. Filmez et placez au frais 30 minutes.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Préparer la ganache</h3>
                <p className="text-sm">Hachez le chocolat noir. Faites chauffer la crème avec le miel. Versez la crème chaude sur le chocolat, laissez reposer une minute, puis mélangez jusqu'à obtenir une ganache lisse et brillante.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Cuire la pâte</h3>
                <p className="text-sm">Étalez la pâte et foncez un moule à tarte. Précuisez 15 min à 160°C avec des billes de cuisson. Retirez les billes, puis poursuivez la cuisson 10 min. Laissez tiédir.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Assembler la tarte</h3>
                <p className="text-sm">Versez la ganache au chocolat dans le fond de tarte. Disposez les framboises fraîches, pointe vers le haut, en les enfonçant légèrement. Réfrigérez au moins 1 heure avant de servir.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">💬 Astuce du chef</h2>
          <p>Servez cette tarte bien fraîche pour un contraste parfait entre la ganache fondante et la fraîcheur acidulée des framboises. C'est un dessert qui fait toujours sensation, sans effort excessif !</p>
        </div>
      </div>
    </div>
  );
}
