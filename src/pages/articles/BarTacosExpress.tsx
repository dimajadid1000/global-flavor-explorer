
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BarTacosExpress() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Bar à tacos express</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des tacos rapides et savoureux avec poulet épicé et toutes les garnitures pour plaire à toute la famille.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                25 minutes
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
              src="/lovable-uploads/b657a537-6e2f-48f9-bbb9-483761224225.png" 
              alt="Bar à tacos express"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Pour les tacos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Cassonade - 30 ml (2 c. à soupe)</li>
                  <li>• Assaisonnement au chili - 30 ml (2 c. à soupe)</li>
                  <li>• Sel - 1 ml (¼ c. à thé)</li>
                  <li>• Poitrines de poulet - 2 ou environ 450 g (1 lb)</li>
                  <li>• Petites tortillas de maïs - 12</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pour les garnitures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Tomates moyennes - 3</li>
                  <li>• Coriandre fraîche - 30 ml (2 c. à soupe)</li>
                  <li>• Huile d'olive - 15 ml (1 c. à soupe)</li>
                  <li>• Maïs en grains surgelé, décongelé - Au goût</li>
                  <li>• Avocat en tranches - Au goût</li>
                  <li>• Chou rouge tranché - Au goût</li>
                  <li>• Fromage râpé - Au goût</li>
                  <li>• Yogourt grec nature - Au goût</li>
                  <li>• Oignons verts hachés - Au goût</li>
                  <li>• Quartiers de lime - Au goût</li>
                  <li>• Salsa mexicaine - Au goût</li>
                  <li>• Sauce piquante - Au goût</li>
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
                  <h3 className="font-semibold mb-3">Pour les tacos :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Préchauffez le four à gril (broil). Placez la grille au centre. Tapissez une plaque de papier d'aluminium.</li>
                    <li><strong>2.</strong> Dans un bol moyen, mélangez la cassonade, l'assaisonnement au chili et le sel.</li>
                    <li><strong>3.</strong> Coupez les poitrines de poulet en deux sur l'épaisseur pour une cuisson plus rapide.</li>
                    <li><strong>4.</strong> Enrobez bien le poulet du mélange d'épices et déposez sur la plaque.</li>
                    <li><strong>5.</strong> Faites cuire sous le gril 10 minutes ou jusqu'à ce que le poulet soit doré et bien cuit.</li>
                    <li><strong>6.</strong> Réchauffez les tortillas en les emballant dans un linge humide et en les réchauffant 1 minute au micro-ondes pour 6 tortillas.</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Pour les garnitures :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Coupez les tomates en dés et hachez grossièrement la coriandre.</li>
                    <li><strong>2.</strong> Déposez dans un bol, versez l'huile et mélangez. Poivrez généreusement.</li>
                    <li><strong>3.</strong> Préparez toutes les autres garnitures dans des bols séparés.</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Service :</h3>
                  <p>Tranchez le poulet en biseau et placez au centre de la table avec les tortillas et toutes les garnitures. Chacun assemble ses tacos à son goût.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Valeurs nutritives (par portion)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Calories: 486</div>
                <div>Protéines: 34 g</div>
                <div>Lipides: 7 g</div>
                <div>Glucides: 64 g</div>
                <div>Fibres: 5 g</div>
                <div>Sodium: 599 mg</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Plats principaux</Badge>
            <Badge>Sandwichs</Badge>
            <Badge>Mexicaine</Badge>
            <Badge>Repas facile</Badge>
            <Badge>Rapide</Badge>
            <Badge>Week-end au chalet</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
