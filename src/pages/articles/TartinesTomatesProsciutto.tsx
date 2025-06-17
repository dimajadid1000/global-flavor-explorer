
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TartinesTomatesProsciutto() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Tartines aux tomates, aux olives et au prosciutto</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des tartines méditerranéennes savoureuses avec tomates fraîches, olives et prosciutto fondant.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                20 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                2-4 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Facile
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/9f4007ab-4c2c-4ec4-afb1-1af7745d1083.png" 
              alt="Tartines aux tomates et prosciutto"
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
                <li>• Feuilles de persil plat ciselées - 10 g (¼ tasse)</li>
                <li>• Huile d'olive - 45 ml (3 c. à soupe)</li>
                <li>• Olives noires dénoyautées et hachées - 15 ml (1 c. à soupe)</li>
                <li>• Filets d'anchois hachés - 3</li>
                <li>• Citron coupé en quartiers - 1</li>
                <li>• Grosse tomate bien mûre - 1</li>
                <li>• Pâte de tomates - 10 ml (2 c. à thé)</li>
                <li>• Minibaguette de pain ciabatta - 1</li>
                <li>• Gousse d'ail pelée - 1</li>
                <li>• Fines tranches de prosciutto - 100 g (3 ½ oz)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li><strong>1.</strong> Dans un petit bol, mélangez le persil avec 15 ml (1 c. à soupe) de l'huile, les olives et les anchois. Poivrez et arrosez du jus d'un quartier de citron. Réservez.</li>
                <li><strong>2.</strong> Dans une assiette creuse, râpez la tomate. Compostez la pelure. Égouttez au besoin. Ajoutez la pâte de tomates. Salez, poivrez et mélangez bien. Réservez.</li>
                <li><strong>3.</strong> À l'aide d'un pinceau, badigeonnez l'intérieur de la baguette du reste de l'huile.</li>
                <li><strong>4.</strong> Dans une grande poêle à feu moyen-élevé, grillez les tranches de pain, côté coupé vers le bas, en pressant légèrement jusqu'à ce qu'elles soient bien dorées et croustillantes.</li>
                <li><strong>5.</strong> Frottez le pain grillé de la gousse d'ail. Répartissez le mélange de tomates. Garnissez du mélange d'olives et des tranches de prosciutto.</li>
                <li><strong>6.</strong> Parsemez de feuilles de persil déchirées. Coupez en morceaux et servez avec les quartiers de citron.</li>
              </ol>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Bouchées et entrées</Badge>
            <Badge>Sandwichs</Badge>
            <Badge>Repas facile</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
