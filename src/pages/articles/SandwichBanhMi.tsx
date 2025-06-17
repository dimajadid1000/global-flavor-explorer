
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
              Des sandwichs vietnamiens authentiques avec poulet effiloché et légumes marinés croquants.
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
              src="/lovable-uploads/f2b4ea1c-a22e-4650-aae1-205214441288.png" 
              alt="Sandwichs bánh mì"
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
                <li>• Baguettes vietnamiennes - 4</li>
                <li>• Poitrines de poulet - 500 g</li>
                <li>• Carottes - 2 moyennes</li>
                <li>• Radis daikon - 200 g</li>
                <li>• Concombre - 1</li>
                <li>• Coriandre fraîche - 1 bouquet</li>
                <li>• Pâté de foie (optionnel) - 100 g</li>
                <li>• Mayonnaise - 60 ml</li>
                <li>• Sauce soja - 30 ml</li>
                <li>• Vinaigre de riz - 60 ml</li>
                <li>• Sucre - 30 g</li>
                <li>• Piments jalapeño - 2</li>
                <li>• Ail - 2 gousses</li>
                <li>• Gingembre - 1 morceau de 2 cm</li>
                <li>• Huile de sésame - 15 ml</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li><strong>1.</strong> Préparez la marinade avec sauce soja, ail et gingembre hachés. Faites mariner le poulet 30 minutes.</li>
                <li><strong>2.</strong> Râpez finement les carottes et le radis. Mélangez avec vinaigre de riz, sucre et sel. Laissez mariner 20 minutes.</li>
                <li><strong>3.</strong> Faites cuire le poulet dans une poêle avec un peu d'huile. Effilochez-le une fois cuit et refroidi.</li>
                <li><strong>4.</strong> Coupez le concombre en bâtonnets fins et émincez les piments.</li>
                <li><strong>5.</strong> Ouvrez les baguettes en gardant un côté attaché. Tartinez de pâté et mayonnaise.</li>
                <li><strong>6.</strong> Garnissez avec poulet effiloché, légumes marinés, concombre, piments et coriandre.</li>
                <li><strong>7.</strong> Servez immédiatement pour conserver le croustillant du pain.</li>
              </ol>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Sandwichs</Badge>
            <Badge>Vietnamien</Badge>
            <Badge>Asiatique</Badge>
            <Badge>Lunch</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
