
import React from "react";
import Navigation from "../../components/Navigation";

export default function SaladeQuinoaLegumesFeta() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/31569dfc-59d4-4e0a-94ba-1a4b2beaef2f.png" 
            alt="Salade de quinoa aux légumes d'été grillés et féta"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">🥗 Salade de quinoa aux légumes d'été grillés et féta</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Une salade tiède ou froide, pleine de couleurs, de textures et de saveurs méditerranéennes.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted p-4 rounded-lg">
            <div>
              <span className="font-semibold">⏱️ Préparation:</span>
              <p>15 min</p>
            </div>
            <div>
              <span className="font-semibold">🔥 Cuisson:</span>
              <p>20 min</p>
            </div>
            <div>
              <span className="font-semibold">🍽️ Type:</span>
              <p>Entrée ou plat léger</p>
            </div>
            <div>
              <span className="font-semibold">👥 Portions:</span>
              <p>4 personnes</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🧾 Ingrédients</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>200 g de quinoa</li>
              <li>100 g de féta</li>
              <li>1 aubergine</li>
              <li>1 poivron jaune</li>
              <li>2 petites courgettes</li>
              <li>200 g de tomates cerises</li>
              <li>5 c. à soupe d'huile d'olive</li>
              <li>1 citron</li>
              <li>1 gousse d'ail</li>
              <li>4 tiges de basilic frais</li>
              <li>Pignons de pin (facultatif)</li>
              <li>Sel, poivre</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">👨‍🍳 Préparation</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm"><strong>1.</strong> Préchauffez votre four à 200°C.</p>
              </div>
              
              <div>
                <p className="text-sm"><strong>2. Préparez les légumes :</strong></p>
                <p className="text-sm ml-4">Lavez l'aubergine, les courgettes, le poivron et les tomates cerises. Retirez les extrémités et pépins si besoin, puis coupez tous les légumes en morceaux, sauf les tomates.</p>
              </div>

              <div>
                <p className="text-sm"><strong>3. Sur une plaque de cuisson :</strong></p>
                <p className="text-sm ml-4">Étalez les légumes, ajoutez sel et poivre, puis versez 3 c. à soupe d'huile d'olive. Enfournez pour 20 minutes. Ajoutez les pignons de pin 5 minutes avant la fin de cuisson si vous le souhaitez.</p>
              </div>

              <div>
                <p className="text-sm"><strong>4.</strong> Pendant ce temps, faites cuire le quinoa selon les indications du paquet, égouttez et laissez tiédir.</p>
              </div>

              <div>
                <p className="text-sm"><strong>5. Préparez la vinaigrette :</strong></p>
                <p className="text-sm ml-4">Dans un grand saladier, mélangez le jus de citron, 2 c. à soupe d'huile d'olive, la gousse d'ail râpée, du sel et du poivre.</p>
              </div>

              <div>
                <p className="text-sm"><strong>6. Assemblez la salade :</strong></p>
                <p className="text-sm ml-4">Ajoutez le quinoa tiède à la vinaigrette et mélangez bien. Incorporez les légumes rôtis, les feuilles de basilic ciselées, et émiettez la féta par-dessus. Servez la salade tiède ou froide selon votre préférence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">🌟 Astuce bonus</h2>
          <p>Ajoutez quelques zestes de citron pour une touche encore plus fraîche, ou remplacez la féta par de la mozzarella pour varier les plaisirs.</p>
        </div>
      </div>
    </div>
  );
}
