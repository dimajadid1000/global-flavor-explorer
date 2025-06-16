
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export default function CaponataAubergines() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Caponata Facile Aubergine et Tomate</CardTitle>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>1h45</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>6 personnes</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat size={20} />
                <span>Facile</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <img
              src="/lovable-uploads/6b4fa233-9631-43c4-b999-7b1680a1e024.png"
              alt="Caponata d'aubergines et tomates"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Un délice végétarien à servir pendant toute la belle saison. Cette caponata sicilienne 
                traditionnelle mélange harmonieusement les saveurs aigres-douces typiques de la Méditerranée. 
                Parfaite chaude, tiède ou froide, elle accompagne idéalement vos repas d'été.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li>• 1,5 kg d'aubergines</li>
                <li>• 1 poignée de gros sel</li>
                <li>• 800 g de tomates concassées</li>
                <li>• 5 gousses d'ail pelées et hachées</li>
                <li>• 1 courgette</li>
                <li>• 1 poivron rouge</li>
                <li>• 4 branches de céleri</li>
                <li>• 1 bouquet de basilic</li>
                <li>• 100 g de câpres égouttées</li>
                <li>• 200 g d'olives vertes</li>
                <li>• 50 g d'amandes hachées</li>
                <li>• 1/2 verre de vinaigre de vin</li>
                <li>• 2 cuillères à soupe de sucre</li>
                <li>• Huile d'olive</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
              <ol className="space-y-4">
                <li><strong>1.</strong> Lavez et coupez les aubergines en dés et mélangez-les avec le gros sel. Laissez-les dégorger 1 h minimum dans une passoire. Pressez-les pour éliminer l'eau.</li>
                
                <li><strong>2.</strong> Pendant ce temps, faites cuire à feu doux et à couvert les tomates et l'ail avec 2 c. à soupe d'huile pendant 1h. Lavez le poivron et la courgette et coupez-les en dés, émincez les branches de céleri (sans les feuilles).</li>
                
                <li><strong>3.</strong> Faites revenir les aubergines dans une grande cocotte huilée pendant 10 mn. Ajoutez la courgette et le poivron, laissez revenir 5 mn, puis le céleri, laissez revenir 5 mn, et enfin la tomate cuite, salez, poivrez et laissez mijoter le tout encore 15 mn à feu doux.</li>
                
                <li><strong>4.</strong> Enfin, ajoutez le vinaigre, le sucre, les câpres et les olives. Laissez mijoter 15 mn supplémentaires.</li>
                
                <li><strong>5.</strong> Servez chaud, tiède ou froid, avec des feuilles de basilic ciselées et les amandes hachées.</li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Tradition Sicilienne</h3>
                <p>La caponata se bonifie avec le temps. Préparez-la la veille pour que tous les arômes se mélangent parfaitement. Elle se conserve plusieurs jours au réfrigérateur.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
