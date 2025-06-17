
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SaladeNicoise() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Salade niçoise</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un grand classique de la cuisine française avec des ingrédients frais et une vinaigrette parfumée.
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
              src="/lovable-uploads/467fe776-4199-43ae-866f-468ee145f60b.png" 
              alt="Salade niçoise"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  Vinaigrette
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Huile d'olive extra vierge - 125 ml (½ tasse)</li>
                  <li>• Vinaigre de vin rouge - 30 ml (2 c. à soupe)</li>
                  <li>• Ciboulette ciselée - 30 ml (2 c. à soupe)</li>
                  <li>• Persil haché - 15 ml (1 c. à soupe)</li>
                  <li>• Sel et poivre du moulin - Au goût</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Salade</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Grosses tomates bien mûres - 2</li>
                  <li>• Pommes de terre grelots jaunes - 12</li>
                  <li>• Haricots verts parés - 225 g (½ lb)</li>
                  <li>• Gros œufs tempérés - 4</li>
                  <li>• Mesclun - 1 L (4 tasses)</li>
                  <li>• Poivron vert - 1</li>
                  <li>• Olives noires dans l'huile - 20</li>
                  <li>• Thon dans l'huile - 2 boîtes de 170 g</li>
                  <li>• Petits radis - 4</li>
                  <li>• Tranches d'oignon rouge mariné - Au goût</li>
                  <li>• Basilic ciselé - Au goût</li>
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
                  <h3 className="font-semibold mb-3">Vinaigrette :</h3>
                  <p>Dans un bol, fouettez tous les ingrédients et assaisonnez. Réservez au frais.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Salade :</h3>
                  <ol className="space-y-3">
                    <li><strong>1.</strong> Salez les quartiers de tomate avec le gros sel et faites-les dégorger 15 minutes dans un tamis. Rincez et épongez.</li>
                    <li><strong>2.</strong> Faites cuire les pommes de terre dans l'eau froide salée jusqu'à tendreté. Refroidissez dans un bain d'eau froide.</li>
                    <li><strong>3.</strong> Blanchissez les haricots dans l'eau bouillante salée jusqu'à ce qu'ils soient légèrement craquants. Refroidissez dans l'eau glacée.</li>
                    <li><strong>4.</strong> Faites cuire les œufs 6 minutes dans l'eau bouillante à partir du premier bouillon. Refroidissez dans l'eau glacée et pelez. Coupez en 4.</li>
                    <li><strong>5.</strong> Assaisonnez la salade d'huile d'olive, sel et poivre. Disposez au fond de l'assiette.</li>
                    <li><strong>6.</strong> Disposez harmonieusement tous les ingrédients sur la salade. Versez la vinaigrette et servez.</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Lunchs</Badge>
            <Badge>Salades</Badge>
            <Badge>Sans gluten</Badge>
            <Badge>Grands classiques</Badge>
            <Badge>Pique-nique</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
