
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export default function LasagnesCourgettes() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Lasagnes aux Courgettes et Feta</CardTitle>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>55 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>6 personnes</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat size={20} />
                <span>Intermédiaire</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <img
              src="/lovable-uploads/8d6ad858-5b8c-4165-b345-bece66e7d9a8.png"
              alt="Lasagnes aux courgettes et feta"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Ces lasagnes aux courgettes et feta offrent une version estivale et méditerranéenne du plat italien classique. 
                La combinaison du mascarpone crémeux, de la feta salée et des courgettes grillées crée un équilibre parfait 
                entre fraîcheur et gourmandise.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li>• 5 courgettes (vertes et/ou jaunes)</li>
                <li>• 250 g de mascarpone</li>
                <li>• 200 g de feta</li>
                <li>• 100 g de roquette</li>
                <li>• 4 brins d'origan frais (ou basilic)</li>
                <li>• 2 citrons bio</li>
                <li>• Huile d'olive</li>
                <li>• 80 g de pignons toastés</li>
                <li>• 8-10 feuilles de lasagnes sans précuisson</li>
                <li>• 1 burrata</li>
                <li>• Fleur de sel et poivre</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
              <ol className="space-y-4">
                <li><strong>1.</strong> Rincez les courgettes puis coupez-les finement sur la longueur avec une mandoline. Laissez-les dégorger dans un plat, entre deux feuilles de papier absorbant avec du sel entre les couches, pendant 20 mn.</li>
                
                <li><strong>2.</strong> Placez le mascarpone et la feta émiettée dans une poêle sur feu doux. Quand tout commence à fondre, ajoutez la roquette en deux fois afin de bien l'intégrer. Parsemez d'origan haché et du zeste des citrons. Mélangez et arrêtez le feu. Versez un filet d'huile d'olive et poivrez selon votre goût.</li>
                
                <li><strong>3.</strong> Préchauffez le four à 180 °C/th. 6. Passez délicatement les courgettes par 2 ou 3 sous un filet d'eau afin de retirer l'excédent de sel puis tapotez-les dans un linge propre pour les sécher.</li>
                
                <li><strong>4.</strong> Chauffez un peu d'huile d'olive dans une poêle et faites dorer légèrement les courgettes de chaque côté. Réservez.</li>
                
                <li><strong>5.</strong> Versez une fine couche du mélange mascarpone/feta dans le fond d'un plat. Déposez dessus une couche de courgettes. Recouvrez de feuilles de lasagnes. Puis à nouveau le mélange mascarpone/feta puis les courgettes que vous parsemez de pignons et enfin une couche de lasagnes. Continuez ainsi et terminez avec une couche de courgettes.</li>
                
                <li><strong>6.</strong> Enfournez pour 35 mn. Juste avant de servir, coupez la burrata en deux, déposez-la dessus et poivrez.</li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Astuce du Chef</h3>
                <p>Pour une version encore plus savoureuse, ajoutez quelques tomates cerises coupées en deux lors du montage. Elles apporteront une note acidulée qui se marie parfaitement avec la feta.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
