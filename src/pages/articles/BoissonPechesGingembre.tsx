
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BoissonPechesGingembre() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Boisson aux pêches et au gingembre</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une boisson estivale délicieuse et rafraîchissante aux pêches juteuses et au gingembre piquant.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                30 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                4-6 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Facile
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/5113a2f2-d43d-40c0-a73a-13c1d73abb48.png" 
              alt="Boisson aux pêches et au gingembre"
              className="w-full h-full object-cover"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChefHat className="w-5 h-5" />
                Ingrédients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Pêches coupées en gros morceaux - 4, divisées</li>
                <li>• Cassonade - 90 ml (6 c. à soupe)</li>
                <li>• Feuilles de menthe - 6, et plus pour le service</li>
                <li>• Tranches de gingembre - 4 ou 5</li>
                <li>• Sel - 1 pincée</li>
                <li>• Eau pétillante - 1 L (4 tasses)</li>
                <li>• Soda au gingembre (ginger ale) - 250 ml (1 tasse), ou plus au goût</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li><strong>1.</strong> Dans une casserole, mettez 2 pêches coupées en morceaux, la cassonade et 500 ml (2 tasses) d'eau.</li>
                <li><strong>2.</strong> Portez le tout à ébullition et retirez la casserole du feu.</li>
                <li><strong>3.</strong> Laissez les pêches macérer dans le sirop 15 minutes avant de le filtrer.</li>
                <li><strong>4.</strong> Réfrigérez le sirop jusqu'à ce qu'il soit froid.</li>
                <li><strong>5.</strong> Dans un pichet, mettez le sirop, les morceaux de pêches restants, la menthe, le gingembre et le sel. Mélangez le tout.</li>
                <li><strong>6.</strong> Ajoutez l'eau pétillante et le ginger ale.</li>
                <li><strong>7.</strong> Servez la boisson avec des glaçons et des feuilles de menthe.</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes et astuces</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Version alcoolisée :</strong> Pour une version alcoolisée, ajoutez 15 ml (½ oz) de Schnapps aux pêches et 30 ml (1 oz) de rhum dans chaque verre.</p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Boissons et cocktails</Badge>
            <Badge>Sans gluten</Badge>
            <Badge>Pique-nique</Badge>
            <Badge>Été</Badge>
            <Badge>Fruité</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
