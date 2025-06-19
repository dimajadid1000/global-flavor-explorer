
import React from "react";
import Navigation from "../../components/Navigation";

export default function ChorizoLegumesEte() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/84c0b43a-d32f-4d47-887b-de3a59f1ac14.png" 
            alt="Chorizo rôti aux légumes d'été"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">🌶️ Chorizo rôti aux légumes d'été : une recette express et savoureuse</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Envie d'un plat rapide, convivial et gorgé de soleil ? Cette recette de chorizo rôti au four avec légumes d'été est exactement ce qu'il vous faut.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🛒 Ingrédients (pour 3 personnes)</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>3 chorizos (doux ou fort selon préférence)</li>
              <li>1 courgette</li>
              <li>250 g de tomates cerises</li>
              <li>1/2 oignon</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">👨‍🍳 Préparation</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm"><strong>1.</strong> Préchauffez le four à 200°C (chaleur tournante si possible).</p>
              </div>
              
              <div>
                <p className="text-sm"><strong>2. Préparez les légumes :</strong></p>
                <ul className="list-disc list-inside ml-4 text-sm space-y-1">
                  <li>Épluchez et émincez finement le demi-oignon</li>
                  <li>Lavez les tomates cerises</li>
                  <li>Épluchez la courgette et coupez-la en cubes réguliers</li>
                  <li>Disposez les légumes dans un grand plat allant au four</li>
                </ul>
              </div>

              <div>
                <p className="text-sm"><strong>3. Préparez les chorizos :</strong></p>
                <p className="text-sm ml-4">Piquez-les avec la pointe d'un couteau ou une fourchette (3 petits trous par chorizo). Cela permet à la graisse de fondre et d'imprégner les légumes de saveur.</p>
              </div>

              <div>
                <p className="text-sm"><strong>4.</strong> Placez les chorizos entiers sur les légumes dans le plat.</p>
              </div>

              <div>
                <p className="text-sm"><strong>5.</strong> Enfournez pour 30 minutes à 200°C, en remuant les légumes à mi-cuisson pour qu'ils s'enrobent du jus de cuisson.</p>
              </div>

              <div>
                <p className="text-sm"><strong>6.</strong> Servez chaud à la sortie du four, avec un peu de riz ou une tranche de pain rustique.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">🌿 Astuces</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Ajoutez du thym frais ou du basilic avant cuisson pour une touche aromatique</li>
              <li>Variez les légumes : aubergine, poivron ou pommes de terre s'y intègrent parfaitement</li>
              <li>Vous préférez une version plus douce ? Choisissez du chorizo doux, ou au contraire optez pour du chorizo fort pour les amateurs de sensations épicées</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">🍽️ Pourquoi on adore cette recette</h2>
            <ul className="list-none space-y-2">
              <li>✅ Ultra simple et rapide à préparer</li>
              <li>✅ Peu d'ingrédients, mais beaucoup de goût</li>
              <li>✅ Parfaite pour un repas convivial d'été</li>
              <li>✅ Une recette modulable selon les saisons et vos envies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
