
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export default function SaladeGrecque() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Salade Grecque en Cubes</CardTitle>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>15 min</span>
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
              src="/lovable-uploads/9e7dd654-2b37-4e56-97ec-baebde0664f6.png"
              alt="Salade grecque en cubes"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Beau comme un tableau ! Cette salade grecque revisitée en cubes parfaitement taillés 
                transforme les ingrédients classiques en une œuvre d'art culinaire. La présentation 
                en damier sublime les saveurs méditerranéennes traditionnelles.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li>• 3 tomates cœur de bœuf</li>
                <li>• 1/4 de pastèque</li>
                <li>• 1 concombre</li>
                <li>• 150 g de feta de brebis ou de chèvre</li>
                <li>• 6 cuillères à soupe d'huile d'olive</li>
                <li>• 12 olives de Kalamata</li>
                <li>• 1/2 bouquet de menthe</li>
                <li>• Fleur de sel</li>
                <li>• Poivre</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
              <ol className="space-y-4">
                <li><strong>1.</strong> Rincez les tomates et le concombre. Détaillez les tomates, le concombre, la feta et la pastèque en cubes de taille identique (environ 2 cm de côté pour un résultat optimal).</li>
                
                <li><strong>2.</strong> Rincez, séchez et ciselez finement la menthe fraîche.</li>
                
                <li><strong>3.</strong> Dressez tous les ingrédients en damier, en les alternant harmonieusement, dans quatre assiettes. Créez un motif régulier pour un effet visuel saisissant.</li>
                
                <li><strong>4.</strong> Arrosez généreusement d'huile d'olive, décorez avec les olives de Kalamata, parsemez de menthe ciselée, de fleur de sel et de poivre.</li>
                
                <li><strong>5.</strong> Pour une touche supplémentaire, vous pouvez ajouter de l'oignon rouge émincé très finement.</li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Conseil de Présentation</h3>
                <p>Utilisez un emporte-pièce carré pour obtenir des cubes parfaits. Servez immédiatement pour préserver la fraîcheur et les textures contrastées de chaque ingrédient.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
