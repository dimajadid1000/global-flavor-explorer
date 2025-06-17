
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SaladeAntipasto() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Salade antipasto</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une salade colorée aux tortellinis, parfaite pour l'été avec tous les saveurs de l'antipasto italien.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                25 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                6 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Facile
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/148fba96-6cba-4516-8888-c01be02ba53a.png" 
              alt="Salade antipasto"
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
                <li>• Tortellinis aux trois fromages - 500 g</li>
                <li>• Tomates cerises - 250 g</li>
                <li>• Mozzarella bocconcini - 200 g</li>
                <li>• Salami ou jambon italien - 150 g</li>
                <li>• Olives vertes et noires - 100 g</li>
                <li>• Poivrons rouges grillés - 2</li>
                <li>• Coeurs d'artichauts marinés - 150 g</li>
                <li>• Basilic frais - 30 g</li>
                <li>• Huile d'olive - 60 ml</li>
                <li>• Vinaigre balsamique - 30 ml</li>
                <li>• Ail - 1 gousse</li>
                <li>• Sel et poivre - Au goût</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li><strong>1.</strong> Faites cuire les tortellinis selon les instructions de l'emballage. Égouttez et rincez à l'eau froide.</li>
                <li><strong>2.</strong> Coupez les tomates cerises en deux, égouttez les bocconcinis et coupez-les en deux également.</li>
                <li><strong>3.</strong> Coupez le salami en lanières, les poivrons en lamelles et égouttez les artichauts.</li>
                <li><strong>4.</strong> Préparez la vinaigrette en mélangeant l'huile d'olive, le vinaigre balsamique et l'ail pressé. Assaisonnez.</li>
                <li><strong>5.</strong> Mélangez tous les ingrédients dans un grand saladier, arrosez de vinaigrette et parsemez de basilic frais.</li>
                <li><strong>6.</strong> Laissez reposer 30 minutes au frais avant de servir pour que les saveurs se mélangent.</li>
              </ol>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Salade</Badge>
            <Badge>Italien</Badge>
            <Badge>Été</Badge>
            <Badge>Pique-nique</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
