
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export default function OeufsMollets() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Œufs Mollets et Salade du Balcon</CardTitle>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>18 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>4 personnes</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat size={20} />
                <span>Facile</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <img
              src="/lovable-uploads/b657a537-6e2f-48f9-bbb9-483761224225.png"
              alt="Œufs mollets et salade du balcon"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Il est simple de cultiver fleurs comestibles, épinards, aromatiques, chou mizuna ou mâche 
                sur un balcon et même sur un rebord de fenêtre. Cette recette célèbre les micro-pousses 
                et jeunes feuilles que vous pouvez faire pousser chez vous pour des salades ultra-fraîches.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li>• 200 g d'un mélange de jeunes pousses (pissenlit, capucine, livèche, oxalis...)</li>
                <li>• 4 œufs frais</li>
                <li>• 1 cuillère à soupe de vinaigre de vin</li>
                <li>• 2 cuillères à soupe d'huile d'olive</li>
                <li>• 2 cuillères à soupe d'huile de cameline</li>
                <li>• 4 tranches de pain au levain</li>
                <li>• 20 g de beurre salé mou</li>
                <li>• 1 poignée de graines de sarrasin torréfiées (kasha)</li>
                <li>• Fleur de sel</li>
                <li>• Poivre</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
              <ol className="space-y-4">
                <li><strong>1.</strong> Rincez délicatement et égouttez soigneusement les jeunes pousses dans une passoire fine. Séchez-les en tapotant avec du papier absorbant.</li>
                
                <li><strong>2.</strong> Faites bouillir de l'eau dans une casserole et faites cuire les œufs exactement 8 minutes pour obtenir des œufs mollets parfaits. Plongez-les immédiatement dans de l'eau froide pour stopper la cuisson et faciliter l'écalage.</li>
                
                <li><strong>3.</strong> Préparez la vinaigrette dans un bol. Mélangez le vinaigre de vin avec une pincée de sel puis incorporez progressivement l'huile d'olive et l'huile de cameline. Poivrez selon votre goût.</li>
                
                <li><strong>4.</strong> Tartinez généreusement de beurre salé les tranches de pain au levain. Vous pouvez les faire légèrement griller si vous le souhaitez.</li>
                
                <li><strong>5.</strong> Écalez délicatement les œufs mollets. Mélangez la salade de jeunes pousses avec la vinaigrette juste avant de servir.</li>
                
                <li><strong>6.</strong> Dressez dans des assiettes creuses : disposez la salade assaisonnée, posez un œuf coupé en deux au centre et une tranche de pain beurré. Parsemez de graines de sarrasin torréfiées et de fleur de sel. Servez sans attendre.</li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Jardin de Balcon</h3>
                <p>Cultivez vos propres pousses ! Semez radis, roquette, mâche dans des jardinières. En 2-3 semaines, vous aurez des micro-pousses pleines de saveur et de vitamines.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
