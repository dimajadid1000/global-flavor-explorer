
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SaladeConcombresEcrases() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Salade de concombres écrasés</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une salade asiatique rafraîchissante et épicée aux concombres écrasés, parfaite comme accompagnement.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                15 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                3-4 portions
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
              alt="Salade de concombres écrasés"
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
                <li>• Concombres libanais - 3</li>
                <li>• Sel - 5 ml (1 c. à thé)</li>
                <li>• Sucre - 5 ml (1 c. à thé)</li>
                <li>• Huile rouge épicée - 30 ml (2 c. à soupe)</li>
                <li>• Vinaigre noir - 15 ml (1 c. à soupe)</li>
                <li>• Sauce soya légère - 15 ml (1 c. à soupe)</li>
                <li>• Ail haché finement - 5 ml (1 c. à thé)</li>
                <li>• Huile de sésame grillé - 5 ml (1 c. à thé)</li>
                <li>• Coriandre fraîche hachée - 30 ml (2 c. à soupe)</li>
                <li>• Graines de sésame grillées - 5 ml (1 c. à thé)</li>
                <li>• Arachides rôties et hachées - 5 ml (1 c. à thé) (facultatif)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li><strong>1.</strong> Coupez les extrémités de chaque concombre. Avec un grand couteau de chef ou un couteau chinois, écrasez les concombres et coupez-les en 3 morceaux.</li>
                <li><strong>2.</strong> Mettez les morceaux dans un bol, puis ajoutez le sel et le sucre. Mélangez et laissez les concombres dégorger 5 minutes.</li>
                <li><strong>3.</strong> Dans un tamis, égouttez les concombres et transférez-les dans un grand bol.</li>
                <li><strong>4.</strong> Ajoutez l'huile rouge, le vinaigre noir, la sauce soya, l'ail et l'huile de sésame. Mélangez la salade.</li>
                <li><strong>5.</strong> Garnissez de coriandre, de graines de sésame et d'arachides, si désiré. Servez immédiatement.</li>
              </ol>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Accompagnements</Badge>
            <Badge>Salades</Badge>
            <Badge>Asiatique</Badge>
            <Badge>Rapide</Badge>
            <Badge>Épicé</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
