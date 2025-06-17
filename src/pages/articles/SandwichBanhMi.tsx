
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SandwichBanhMi() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Sandwichs bánh mì</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des sandwichs vietnamiens authentiques avec poulet effiloché, légumes marinés et sauce épicée.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                45 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                6 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Moyen
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/6b4fa233-9631-43c4-b999-7b1680a1e024.png" 
              alt="Sandwichs bánh mì"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Poulet effiloché</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Gousse d'ail - 1</li>
                  <li>• Miel - 30 ml (2 c. à soupe)</li>
                  <li>• Vinaigre de riz - 15 ml (1 c. à soupe)</li>
                  <li>• Huile de sésame grillé - 5 ml (1 c. à thé)</li>
                  <li>• Escalopes de poulet - 450 g (1 lb)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Légumes marinés</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Carottes - 2</li>
                  <li>• Daikon en rubans - 250 ml (1 tasse)</li>
                  <li>• Vinaigre de riz - 125 ml (½ tasse)</li>
                  <li>• Eau - 125 ml (½ tasse)</li>
                  <li>• Sucre - 15 ml (1 c. à soupe)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sauce</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Yogourt grec nature - 150 ml (⅔ tasse)</li>
                  <li>• Sauce chili thaï sucrée - 30 ml (2 c. à soupe)</li>
                  <li>• Sauce piquante sriracha - 5 ml (1 c. à thé)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Garnitures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Concombres libanais - 2</li>
                  <li>• Coriandre fraîche - 125 ml (½ tasse)</li>
                  <li>• Pains à sous-marin de 15 cm - 6</li>
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
                  <h3 className="font-semibold mb-3">Poulet effiloché :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Préchauffez le four à gril (broil). Tapissez une plaque de papier d'aluminium.</li>
                    <li><strong>2.</strong> Hachez l'ail et mélangez avec le miel, vinaigre de riz et huile de sésame dans un grand bol.</li>
                    <li><strong>3.</strong> Enrobez le poulet de marinade et déposez sur la plaque.</li>
                    <li><strong>4.</strong> Faites cuire au four 10-12 minutes jusqu'à cuisson complète. Laissez tiédir.</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Légumes marinés :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Pelez les carottes en rubans avec un économe dans un grand bol.</li>
                    <li><strong>2.</strong> Portez à ébullition le vinaigre, l'eau, le sucre et le sel.</li>
                    <li><strong>3.</strong> Versez sur les légumes et réfrigérez quelques minutes.</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Assemblage :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Mélangez les ingrédients de la sauce.</li>
                    <li><strong>2.</strong> Tranchez les concombres et hachez la coriandre.</li>
                    <li><strong>3.</strong> Coupez les pains et répartissez la sauce. Effilochez le poulet et égouttez les légumes.</li>
                    <li><strong>4.</strong> Garnissez de poulet, légumes marinés, concombres et coriandre. Servez.</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Lunchs</Badge>
            <Badge>Sandwichs</Badge>
            <Badge>Vietnamienne</Badge>
            <Badge>Boîtes à lunch</Badge>
            <Badge>Pique-nique</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
