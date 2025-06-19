
import React from "react";
import Navigation from "../../components/Navigation";

export default function RavioliMorillesTruffe() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/a7301121-69d8-4430-b49f-3c1bebed1e3f.png" 
            alt="Ravioli aux morilles et à la truffe d'été"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">🍽️ Ravioli aux morilles et à la truffe d'été</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Un plat raffiné, parfumé et délicat, parfait pour un dîner élégant aux saveurs boisées.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted p-4 rounded-lg">
            <div>
              <span className="font-semibold">⏱️ Préparation:</span>
              <p>1h15 (avec repos)</p>
            </div>
            <div>
              <span className="font-semibold">🔥 Cuisson:</span>
              <p>15 min</p>
            </div>
            <div>
              <span className="font-semibold">🍽️ Portions:</span>
              <p>2 personnes</p>
            </div>
            <div>
              <span className="font-semibold">🥗 Type:</span>
              <p>Plat principal raffiné</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧾 Ingrédients</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Pâte fraîche :</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>100 g de farine</li>
                  <li>1 œuf entier</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Farce aux morilles :</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>30 g de morilles séchées (réhydratées)</li>
                  <li>125 g de ricotta</li>
                  <li>25 g de parmesan râpé</li>
                  <li>5 g de truffe d'été râpée</li>
                  <li>Une pincée de noix de muscade</li>
                  <li>Poivre noir</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Sauce :</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>15 g de morilles entières (réhydratées)</li>
                  <li>40 g de beurre</li>
                  <li>Truffe d'été râpée</li>
                  <li>Liquide de trempage des morilles (filtré)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">👨‍🍳 Préparation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Réhydrater les morilles :</h3>
                <p className="text-sm">Faites tremper les morilles dans de l'eau tiède pendant 45 minutes. Filtrez soigneusement le liquide avec un filtre à café ou une passoire fine. Gardez ce jus pour la sauce.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Préparer la pâte :</h3>
                <p className="text-sm">Mélangez la farine et l'œuf jusqu'à obtenir une pâte homogène. Pétrissez quelques minutes, filmez et laissez reposer 30 minutes.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Préparer la farce :</h3>
                <p className="text-sm">Réservez quelques morilles entières pour la sauce. Hachez le reste. Faites revenir les morilles hachées 5 min à feu doux dans un peu d'huile d'olive. Laissez tiédir, puis mélangez-les à la ricotta, au parmesan, à la truffe râpée, au poivre et à une pincée de muscade.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Former les ravioli :</h3>
                <p className="text-sm">Étalez la pâte finement au laminoir. Disposez des petits tas de farce, recouvrez d'une seconde couche de pâte, soudez bien les bords et découpez les ravioli.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Préparer la sauce :</h3>
                <p className="text-sm">Faites fondre doucement le beurre. Ajoutez un peu de truffe râpée et les morilles entières. Ajoutez une louche du jus de trempage, laissez réduire jusqu'à une sauce nappante.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Cuire les ravioli :</h3>
                <p className="text-sm">Plongez les ravioli dans une grande casserole d'eau bouillante salée, 2 à 3 minutes. Égouttez-les délicatement, puis mélangez-les dans la poêle avec la sauce. Servez immédiatement.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-amber-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">🌟 Astuces</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Vous pouvez ajouter un peu de crème dans la sauce pour plus d'onctuosité</li>
            <li>Pour une touche encore plus luxueuse, râpez un peu de truffe fraîche au moment du dressage</li>
            <li>Servez avec un verre de vin blanc sec ou un champagne brut pour sublimer le tout</li>
          </ul>
          <p className="mt-4 text-center italic">Un plat digne d'un restaurant, mais fait maison, à savourer lentement pour en apprécier chaque bouchée 🍄✨🍝</p>
        </div>
      </div>
    </div>
  );
}
