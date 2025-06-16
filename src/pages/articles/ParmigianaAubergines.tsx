
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export default function ParmigianaAubergines() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Parmigiana di Melanzane</CardTitle>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>45 min</span>
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
              src="/lovable-uploads/3d08a949-701f-4bad-b0b6-52b946fcf28b.png"
              alt="Parmigiana di melanzane"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                La Parmigiana di Melanzane est un classique de la cuisine italienne du Sud. Ce gratin d'aubergines 
                fondant, avec sa sauce tomate parfumée au basilic et sa mozzarella filante, incarne parfaitement 
                l'art de transformer des ingrédients simples en un plat extraordinaire.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li>• 4 fior di latte (ou mozzarella)</li>
                <li>• 1 gousse d'ail</li>
                <li>• 3 cl d'huile d'olive extra-vierge</li>
                <li>• 600 g de coulis de tomate</li>
                <li>• 3 grosses aubergines</li>
                <li>• 1/2 l d'huile d'arachide</li>
                <li>• 100 g de parmesan râpé</li>
                <li>• Feuilles de basilic</li>
                <li>• Sel et poivre</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
              <ol className="space-y-4">
                <li><strong>1.</strong> Pelez la gousse d'ail et faites-la revenir quelques minutes dans l'huile d'olive, en faisant attention de ne pas trop la colorer. Retirez l'ail, ajoutez le coulis et laissez cuire 20 mn à feu très doux, salez et poivrez en fin de cuisson.</li>
                
                <li><strong>2.</strong> Lavez et coupez les aubergines en tranches d'une épaisseur d'environ 4 mm. Faites-les frire dans l'huile d'arachide à 180° jusqu'à obtenir une couleur bien dorée. Égouttez-les sur du papier absorbant et salez-les pendant qu'elles sont encore chaudes. Préchauffez le four à 200°C/th. 6-7.</li>
                
                <li><strong>3.</strong> Déchirez les feuilles de basilic à la main, en gardant quelques jolies feuilles pour le décor. Coupez le fromage en morceaux.</li>
                
                <li><strong>4.</strong> Dans un plat à four, alternez en couches successives les aubergines frites, la sauce tomate, le fior di latte, le basilic et le parmesan. Répétez l'opération jusqu'à épuisement des ingrédients.</li>
                
                <li><strong>5.</strong> Enfournez et laissez dorer en surface (environ 25-30 minutes). Servez avec du basilic frais.</li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Secret Italien</h3>
                <p>La clé d'une parfaite Parmigiana réside dans la qualité des aubergines : choisissez-les fermes et brillantes. Faites-les dégorger avec du sel avant la cuisson pour éliminer l'amertume.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
