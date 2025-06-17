
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GuedillesVegetaliennes() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Guédilles végétaliennes</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des guédilles savoureuses à base de tofu et cœurs de palmier qui imitent parfaitement la texture du poisson.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                20 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                8 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Facile
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/9e7dd654-2b37-4e56-97ec-baebde0664f6.png" 
              alt="Guédilles végétaliennes"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Pour la garniture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Cœurs de palmier égouttés - 1 boîte de 398 ml</li>
                  <li>• Tofu extra ferme pressé - 1 bloc de 450 g (1 lb)</li>
                  <li>• Poivron rouge grillé en pot - 1</li>
                  <li>• Feuille d'algue nori en lanières - ½</li>
                  <li>• Branche de céleri - 1</li>
                  <li>• Oignon vert - 1</li>
                  <li>• Mayonnaise végétalienne - 60 ml (¼ tasse)</li>
                  <li>• Jus de citron - 15 ml (1 c. à soupe)</li>
                  <li>• Sirop d'érable - 15 ml (1 c. à soupe)</li>
                  <li>• Moutarde de Dijon - 10 ml (2 c. à thé)</li>
                  <li>• Paprika doux - 5 ml (1 c. à thé)</li>
                  <li>• Sel de céleri - 2,5 ml (½ c. à thé)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pour les pains et le service</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Beurre végétalien fondu - 30 ml (2 c. à soupe)</li>
                  <li>• Sirop d'érable - 15 ml (1 c. à soupe)</li>
                  <li>• Pains à hot-dog - 8</li>
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
                  <h3 className="font-semibold mb-3">Pour la garniture :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Coupez les cœurs de palmier en tronçons et épongez le tofu pour retirer l'excédent d'eau.</li>
                    <li><strong>2.</strong> Épongez le poivron rouge grillé et coupez-le grossièrement. Coupez l'algue nori en lanières fines.</li>
                    <li><strong>3.</strong> Coupez grossièrement le céleri et l'oignon vert en tronçons.</li>
                    <li><strong>4.</strong> Mettez tous les ingrédients dans le bol d'un robot culinaire.</li>
                    <li><strong>5.</strong> Pulsez 5 à 6 reprises jusqu'à ce qu'ils soient réduits en gros morceaux (ne pas trop mixer).</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Pour les pains briochés et le service :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Dans un petit bol, mélangez le beurre fondu et le sirop d'érable.</li>
                    <li><strong>2.</strong> À l'aide d'un pinceau, badigeonnez l'extérieur et l'intérieur des pains.</li>
                    <li><strong>3.</strong> Dans une poêle à feu moyen, faites griller les pains de chaque côté jusqu'à ce qu'ils soient dorés.</li>
                    <li><strong>4.</strong> Répartissez la garniture dans les pains. Servez immédiatement.</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Plats principaux</Badge>
            <Badge>Sandwichs</Badge>
            <Badge>Végétalien</Badge>
            <Badge>Rapide</Badge>
            <Badge>Repas facile</Badge>
            <Badge>Été</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
