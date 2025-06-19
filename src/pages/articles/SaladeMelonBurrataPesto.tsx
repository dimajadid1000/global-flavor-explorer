
import React from "react";
import Navigation from "../../components/Navigation";

export default function SaladeMelonBurrataPesto() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/62a70f81-e27b-48a8-9271-2e012de4457c.png" 
            alt="Salade melon et burrata farcie au pesto"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">🥗 Salade melon et burrata farcie au pesto</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Un plat frais, élégant et ultra-gourmand, parfait pour l'été.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted p-4 rounded-lg">
            <div>
              <span className="font-semibold">📄 Catégorie:</span>
              <p>Soupe & Salade</p>
            </div>
            <div>
              <span className="font-semibold">👥 Portions:</span>
              <p>2 personnes</p>
            </div>
            <div>
              <span className="font-semibold">⏱️ Préparation:</span>
              <p>20 minutes</p>
            </div>
            <div>
              <span className="font-semibold">🔥 Difficulté:</span>
              <p>Facile</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧾 Ingrédients</h2>
            
            <h3 className="text-lg font-medium mb-2 text-primary">🧄 Pour le pesto verde maison :</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>50 g d'huile d'olive</li>
              <li>25 g de basilic frais</li>
              <li>25 g de pignons de pin</li>
              <li>25 g de parmesan râpé</li>
              <li>1 gousse d'ail</li>
              <li>Sel, poivre</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 text-primary">🍈 Pour la salade :</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>2 petits melons cantaloup</li>
              <li>2 burratas de 150 g</li>
              <li>45 g de roquette</li>
              <li>40 g de chiffonnade de salami italien</li>
              <li>Quelques feuilles de basilic frais</li>
              <li>2 càs d'huile d'olive</li>
              <li>1 càs de vinaigre balsamique blanc</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">👨‍🍳 Préparation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Préparer le pesto</h3>
                <p className="text-sm">Mixez le basilic, les pignons, le parmesan, l'ail et l'huile d'olive jusqu'à obtention d'une texture lisse. Salez, poivrez, réservez.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Garnir les burratas</h3>
                <p className="text-sm">À l'aide d'une poche à douille fine (ou d'une seringue alimentaire), injectez délicatement un peu de pesto au centre des burratas. Ne les remplissez pas trop pour éviter qu'elles ne se fissurent.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Préparer le melon</h3>
                <p className="text-sm">Coupez les melons en deux, retirez les graines, puis détaillez la chair en billes ou en morceaux.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Dresser les assiettes</h3>
                <p className="text-sm">Sur chaque assiette : Disposez un lit de roquette, ajoutez les morceaux de melon et la chiffonnade de salami, déposez la burrata farcie au centre, terminez avec quelques feuilles de basilic, un filet d'huile d'olive et quelques gouttes de vinaigre balsamique.</p>
              </div>

              <div>
                <h3 className="font-medium text-primary mb-2">Assaisonner et servir</h3>
                <p className="text-sm">Salez, poivrez à votre goût. Servez immédiatement, avec le reste de pesto à disposition.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">🔍 Valeurs nutritionnelles (par portion)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <span className="font-medium">Calories:</span>
              <p>635 kcal</p>
            </div>
            <div>
              <span className="font-medium">Protéines:</span>
              <p>20 g</p>
            </div>
            <div>
              <span className="font-medium">Lipides:</span>
              <p>53 g</p>
            </div>
            <div>
              <span className="font-medium">Glucides:</span>
              <p>26 g</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
