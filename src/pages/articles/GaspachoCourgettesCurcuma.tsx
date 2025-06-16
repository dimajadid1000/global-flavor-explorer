
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export default function GaspachoCourgettesCurcuma() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Gaspacho de Courgette au Curcuma</CardTitle>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>5 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>4 personnes</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat size={20} />
                <span>Très facile</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <img
              src="/lovable-uploads/868a4d4c-e1cd-4892-9df9-b5f38f117d80.png"
              alt="Gaspacho de courgettes au curcuma"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Un délice sans cuisson ni prise de tête ! Ce gaspacho original aux courgettes jaunes 
                et au curcuma apporte une note dorée et parfumée à vos entrées estivales. 
                Frais, vitaminé et prêt en quelques minutes, il incarne la simplicité gourmande.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li>• 500 g de courgettes jaunes</li>
                <li>• 1 oignon nouveau</li>
                <li>• 2 brins de thym frais</li>
                <li>• 2 brins de basilic</li>
                <li>• 5 cl d'huile d'olive vierge extra</li>
                <li>• 2 cl de vinaigre balsamique</li>
                <li>• 1 citron</li>
                <li>• 1 cuillère à café de curcuma</li>
                <li>• 10 cl d'eau</li>
                <li>• 1 pincée de sel</li>
                <li>• 1 pincée de poivre noir moulu</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
              <ol className="space-y-4">
                <li><strong>1.</strong> Rincez soigneusement les courgettes et coupez-les en tronçons. Émincez finement l'oignon nouveau.</li>
                
                <li><strong>2.</strong> Lavez et effeuillez délicatement le thym et le basilic. Pressez le citron pour en extraire le jus.</li>
                
                <li><strong>3.</strong> Réservez quelques feuilles de basilic et de thym ainsi que quelques rondelles d'oignon pour la décoration finale.</li>
                
                <li><strong>4.</strong> Mixez finement tous les ingrédients restants : courgettes, oignon, herbes, huile d'olive, vinaigre balsamique, jus de citron, curcuma et eau. Assaisonnez avec le sel et le poivre.</li>
                
                <li><strong>5.</strong> Placez le gaspacho au frais pendant au moins 1 heure pour qu'il soit bien frappé.</li>
                
                <li><strong>6.</strong> Servez bien frais dans des bols ou des verres, agrémenté de quelques gouttes d'huile d'olive, des feuilles de basilic et thym réservées, et des rondelles d'oignon nouveau.</li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Bienfaits du Curcuma</h3>
                <p>Le curcuma, en plus de donner une belle couleur dorée, apporte ses propriétés anti-inflammatoires. Ajoutez une pincée de poivre noir pour optimiser son absorption.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
