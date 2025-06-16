
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export default function GalettesVegetariennes() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Galettes Végétariennes aux Pois Chiches et Légumes Grillés</CardTitle>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>50 min</span>
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
              src="/lovable-uploads/7b92cadc-9e75-419c-a907-ea4109852971.png"
              alt="Galettes végétariennes aux pois chiches"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Un plat d'été 100% barbecue qui célèbre les saveurs végétariennes ! Ces galettes savoureuses 
                aux pois chiches accompagnées de légumes grillés colorés constituent un repas complet et équilibré, 
                parfait pour les soirées estivales en plein air.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
              
              <h3 className="text-xl font-medium mb-3">Pour les galettes :</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                <li>• 500 g de pois chiches cuits</li>
                <li>• 100 g d'amandes ou de pignons de pin</li>
                <li>• 100 g de feta</li>
                <li>• 4 cuillères à soupe de Maïzena</li>
                <li>• 1 cuillère à soupe de persil haché</li>
                <li>• 2 cuillères à soupe de sauce soja</li>
                <li>• 1 cuillère à soupe de cumin</li>
                <li>• 2 cuillères à soupe de sésame</li>
                <li>• 1 oignon</li>
                <li>• 1 gousse d'ail</li>
                <li>• 1 petit œuf</li>
                <li>• 2 cuillères à soupe de farine</li>
                <li>• 300 g d'épinards</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Pour la sauce :</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                <li>• 300 g de yaourt de brebis à la grecque</li>
                <li>• 150 g de tahini</li>
                <li>• Le jus d'un citron jaune</li>
                <li>• 1 cuillère à soupe de ciboulette hachée</li>
                <li>• 1 cuillère à soupe de sésame</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Pour les légumes :</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li>• 2 poivrons rouges</li>
                <li>• 2 poivrons jaunes</li>
                <li>• 2 courgettes</li>
                <li>• 4 oignons</li>
                <li>• 2 têtes d'ail</li>
                <li>• Huile d'olive</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
              <ol className="space-y-4">
                <li><strong>1.</strong> Préparez les galettes : rincez et séchez les pois chiches, puis mixez-les avec les amandes ou les pignons, la feta, le persil, la sauce soja, le cumin, le sésame, l'oignon et l'ail pelés et hachés. Incorporez ensuite l'œuf, puis la farine et la Maïzena. Salez et poivrez. Le mélange doit être consistant, mais encore souple.</li>
                
                <li><strong>2.</strong> Dans une poêle, faites tomber les épinards lavés et essorés dans un filet d'huile d'olive. Pressez-les, puis hachez-les et incorporez-les au mélange des galettes. Réservez 45 mn au frais.</li>
                
                <li><strong>3.</strong> Préparez la sauce en mélangeant le yaourt de brebis avec le tahini. Ajoutez le jus de citron, salez et poivrez. Saupoudrez la sauce de ciboulette et de sésame. Réservez.</li>
                
                <li><strong>4.</strong> Rincez les légumes. Taillez les poivrons en quartiers, épépinez-les. Coupez les courgettes en tranches de 2 cm d'épaisseur. Pelez les oignons avant de les couper en 2 grosses tranches dans l'épaisseur. Coupez les têtes d'ail en deux dans l'épaisseur.</li>
                
                <li><strong>5.</strong> Huilez le barbecue ou la plancha, puis faites cuire les légumes arrosés d'un filet d'huile d'olive (tranches vers le feu pour les oignons et l'ail) pendant 10 à 20 mn et les galettes 10 à 12 mn. Servez le tout avec la sauce au tahini.</li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Astuce Barbecue</h3>
                <p>Pour éviter que les galettes se cassent, façonnez-les bien compactes et laissez-les reposer au frais. Huilez généreusement la grille avant la cuisson.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
