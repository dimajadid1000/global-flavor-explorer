
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export default function SundaeMaison() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Sundae Maison</CardTitle>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>10 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>1 personne</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat size={20} />
                <span>Très facile</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <img
              src="/lovable-uploads/5113a2f2-d43d-40c0-a73a-13c1d73abb48.png"
              alt="Sundae maison"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                J'ai imaginé ce dessert pour mon amoureux. Plutôt que d'aller au fast-food, 
                je préfère préparer des versions saines de plats qui le sont parfois bien moins ! 
                Voici un sundae gourmand et équilibré qui transforme un simple yaourt en dessert irrésistible.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li>• 1 yaourt bio (fromage blanc, nature ou yaourt végétal)</li>
                <li>• 1 carré de chocolat noir (minimum 75 % de cacao)</li>
                <li>• Quelques gouttes de lait au choix</li>
                <li>• Quelques cacahuètes non salées</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
              <ol className="space-y-4">
                <li><strong>1.</strong> Placez le yaourt au congélateur 2 heures avant le moment du dessert. Cette étape est cruciale pour obtenir la texture de crème glacée.</li>
                
                <li><strong>2.</strong> Au moment de servir, écrasez quelques cacahuètes non salées dans un mortier ou avec le plat d'un couteau pour obtenir des morceaux de taille irrégulière.</li>
                
                <li><strong>3.</strong> Faites fondre délicatement le chocolat noir au bain-marie ou au micro-ondes (par intervalles de 30 secondes) avec un peu de lait pour obtenir une sauce onctueuse.</li>
                
                <li><strong>4.</strong> Sortez le yaourt du congélateur et disposez-le dans un petit bol. Fouettez-le énergiquement avec une petite cuillère pour obtenir un aspect et une texture similaires à une crème glacée.</li>
                
                <li><strong>5.</strong> Versez généreusement le chocolat fondu chaud sur le yaourt glacé et parsemez immédiatement de cacahuètes concassées. Dégustez sans attendre pour profiter du contraste entre le chocolat chaud et le yaourt glacé.</li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Variantes Gourmandes</h3>
                <p>Vous pouvez varier les plaisirs en remplaçant les cacahuètes par des amandes grillées, des noisettes ou même des fruits rouges. Pour les amateurs, ajoutez une pincée de fleur de sel sur le chocolat chaud.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
