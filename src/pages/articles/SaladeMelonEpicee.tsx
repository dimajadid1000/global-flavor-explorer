
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SaladeMelonEpicee() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Salade de melon d'eau épicée</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une salade rafraîchissante et surprenante qui mélange le sucré du melon avec la fraîcheur de la feta et l'épice du Tajín.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                4 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Très facile
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/041d3ac5-0ef7-4973-9e16-921d3802f78d.png" 
              alt="Salade de melon d'eau épicée"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  Ingrédients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Melon d'eau en cubes - 1 L (4 tasses)</li>
                  <li>• Fromage feta émietté - 90 g (½ tasse)</li>
                  <li>• Assaisonnement Tajín - 7,5 ml (½ c. à soupe)</li>
                  <li>• Tiges d'estragon frais - 2 (facultatif)</li>
                  <li>• Lime - 1</li>
                  <li>• Pistaches naturelles hachées - 125 ml (½ tasse)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Valeurs nutritives (par portion)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Calories: 140</div>
                  <div>Protéines: 6 g</div>
                  <div>Lipides: 9 g</div>
                  <div>Glucides: 13 g</div>
                  <div>Fibres: 1 g</div>
                  <div>Sodium: 389 mg</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li><strong>1.</strong> Dans un grand bol, déposez le melon d'eau, le feta, l'assaisonnement Tajín et l'estragon, si désiré.</li>
                <li><strong>2.</strong> Zestez la lime au-dessus du bol, puis pressez-la. Mélangez le tout.</li>
                <li><strong>3.</strong> Répartissez les pistaches sur la salade et servez.</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes et astuces</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Assaisonnement Tajín :</strong> C'est un mélange de lime, de piments doux et de sel de mer. On le trouve à l'épicerie, dans l'allée des produits mexicains ou dans la section des épices.</p>
                <p><strong>Conservation :</strong> Cette recette est meilleure préparée à la dernière minute, mais se conserve 2 jours au réfrigérateur.</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Bouchées et entrées</Badge>
            <Badge>Salades</Badge>
            <Badge>Sans gluten</Badge>
            <Badge>Rapide</Badge>
            <Badge>Pique-nique</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
