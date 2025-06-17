
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SandwichArcEnCielTofu() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Sandwichs arc-en-ciel au tofu mariné</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des sandwichs colorés et nutritifs avec tofu mariné et cinq salades de légumes aux couleurs de l'arc-en-ciel.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                45 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                4 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Moyen
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/7b92cadc-9e75-419c-a907-ea4109852971.png" 
              alt="Sandwichs arc-en-ciel au tofu"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Tofu mariné</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Tofu extra ferme - 225 g (½ lb)</li>
                  <li>• Échalote en tranches fines - 1</li>
                  <li>• Jus de cornichons - 75 ml (⅓ tasse)</li>
                  <li>• Paprika fumé - 5 ml (1 c. à thé)</li>
                  <li>• Sel - 1 ml (¼ c. à thé)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Salade jaune</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Poivron jaune tranché - 1 petit</li>
                  <li>• Piments pepperoncini tranchés - 2</li>
                  <li>• Vinaigre du pot de pepperoncini - 10 ml</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Salade orange</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Carottes tranchées finement - 3</li>
                  <li>• Sel - 1 pincée</li>
                  <li>• Huile d'olive - 1 trait</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Salade pourpre</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Feuilles de chou rouge en lanières - 3</li>
                  <li>• Feuilles de radicchio en lanières - 4-5</li>
                  <li>• Réduction de vinaigre balsamique - 15 ml</li>
                  <li>• Graines de fenouil - 2,5 ml (½ c. à thé)</li>
                  <li>• Sel - 1 pincée</li>
                  <li>• Huile d'olive - 1 trait</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Salade verte</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Roquette hachée grossièrement - 750 ml (3 tasses)</li>
                  <li>• Pesto végétalien du commerce - 30 ml (2 c. à soupe)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assemblage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Huile d'olive - 30 ml (2 c. à soupe)</li>
                  <li>• Pains ciabattas - 4</li>
                  <li>• Mayonnaise végétalienne - Quantité suffisante</li>
                  <li>• Sel et poivre - Au goût</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Tofu mariné :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Épongez le tofu et coupez-le en tranches fines avec un économe ou une mandoline.</li>
                    <li><strong>2.</strong> Ajoutez l'échalote, le jus de cornichons, le paprika fumé et le sel. Mélangez et laissez mariner au moins 30 minutes.</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Salades colorées :</h3>
                  <p>Préparez chaque salade dans un bol séparé en mélangeant tous les ingrédients de chaque couleur. Réservez.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Assemblage :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Faites chauffer l'huile dans une poêle à feu moyen-élevé.</li>
                    <li><strong>2.</strong> Coupez les pains en deux et grillez-les face ouverte vers le bas, 3-4 minutes.</li>
                    <li><strong>3.</strong> Sur le côté grillé, mettez de la mayonnaise, salade verte, tofu mariné, salade jaune, orange et pourpre.</li>
                    <li><strong>4.</strong> Salez, poivrez et refermez avec l'autre tranche, côté grillé vers l'intérieur.</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Plats principaux</Badge>
            <Badge>Sandwichs</Badge>
            <Badge>Végétalien</Badge>
            <Badge>Coloré</Badge>
            <Badge>Nutritif</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
