
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export default function SaladePommesDeTerre() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Salade de Pommes de Terre et Radis</CardTitle>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>30 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>5 personnes</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat size={20} />
                <span>Facile</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <img
              src="/lovable-uploads/041d3ac5-0ef7-4973-9e16-921d3802f78d.png"
              alt="Salade de pommes de terre et radis"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Une salade printanière qui marie la douceur des pommes de terre nouvelles au croquant 
                rafraîchissant des radis roses. Cette recette simple et colorée peut facilement être 
                transformée en plat principal en ajoutant deux ou trois œufs durs émiettés.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li>• 1 kg de petites pommes de terre</li>
                <li>• Une douzaine de radis roses ronds</li>
                <li>• 70 g de câpres</li>
                <li>• 1 cuillère à soupe de moutarde à l'ancienne</li>
                <li>• 1 cuillère à soupe de miel</li>
                <li>• 4 cuillères à soupe d'huile d'olive</li>
                <li>• 2 cuillères à soupe de vinaigre de cidre</li>
                <li>• Quelques brins de basilic frais (nain si possible)</li>
                <li>• Sel et poivre</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
              <ol className="space-y-4">
                <li><strong>1.</strong> Placez les pommes de terre dans une grande casserole remplie d'eau froide salée. Portez à ébullition et laissez cuire 10 à 15 mn. Vérifiez la cuisson des pommes de terre avec la lame d'un couteau : elles doivent être tendres mais encore fermes. Égouttez-les et laissez-les tiédir.</li>
                
                <li><strong>2.</strong> Pendant la cuisson des pommes de terre, rincez soigneusement les radis et coupez-les en fines rondelles à la mandoline pour une régularité parfaite. Réservez.</li>
                
                <li><strong>3.</strong> Préparez la vinaigrette : mélangez la moutarde à l'ancienne avec le miel dans un bol. Incorporez progressivement l'huile d'olive et le vinaigre de cidre en fouettant. Assaisonnez avec le sel et le poivre selon votre goût. Goûtez et ajustez l'assaisonnement si nécessaire.</li>
                
                <li><strong>4.</strong> Coupez les pommes de terre tièdes en deux et placez-les dans un grand saladier. Ajoutez les rondelles de radis et les câpres.</li>
                
                <li><strong>5.</strong> Versez la vinaigrette sur la salade et mélangez délicatement pour bien enrober tous les ingrédients. Parsemez de feuilles de basilic frais ciselées. Mélangez une dernière fois et servez.</li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Conseil de Chef</h3>
                <p>Pour un plat plus consistant, ajoutez 2-3 œufs durs émiettés. La salade se bonifie en repos : préparez-la 30 minutes avant de servir pour que les saveurs se mélangent.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
