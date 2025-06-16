
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export default function RillettesRadis() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Rillettes de Radis Roses au Chèvre</CardTitle>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>10 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>6 personnes</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat size={20} />
                <span>Très facile</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <img
              src="/lovable-uploads/4f508374-776e-49cd-b5b2-4747ee89831b.png"
              alt="Rillettes de radis roses au chèvre"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Des rillettes ultra-fraîches qui révolutionnent l'apéritif ! Cette recette originale 
                transforme les radis roses en une tartinade crémeuse et parfumée. Le mariage entre 
                le croquant du radis et la douceur des fromages de chèvre crée une symphonie de saveurs.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li>• 1 botte de radis roses</li>
                <li>• 1/2 oignon rouge</li>
                <li>• 80 g de fromage frais</li>
                <li>• 80 g de brocciu</li>
                <li>• 40 g de chèvre frais</li>
                <li>• Le jus d'1 citron</li>
                <li>• Menthe fraîche</li>
                <li>• Sel et poivre</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
              <ol className="space-y-4">
                <li><strong>1.</strong> Lavez soigneusement les radis. Réservez-en quelques-uns pour la décoration finale. Pelez l'oignon rouge et coupez-le grossièrement.</li>
                
                <li><strong>2.</strong> Mixez les radis avec l'oignon, le fromage frais, le brocciu et le chèvre frais pour obtenir une consistance crémeuse mais avec encore quelques petits morceaux pour la texture.</li>
                
                <li><strong>3.</strong> Ajoutez le jus de citron et la menthe lavée et ciselée finement. Salez et poivrez selon votre goût. Mélangez délicatement.</li>
                
                <li><strong>4.</strong> Placez au frais pendant 30 minutes pour que les saveurs se mélangent.</li>
                
                <li><strong>5.</strong> Au moment de servir, coupez les radis réservés en fines lamelles et disposez-les sur les rillettes avec quelques feuilles de menthe fraîche. Dégustez bien frais avec des toasts ou des crackers.</li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Astuce Fraîcheur</h3>
                <p>Pour une version encore plus onctueuse, laissez reposer les rillettes une nuit au réfrigérateur. Vous pouvez remplacer le brocciu par de la ricotta si vous n'en trouvez pas.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
