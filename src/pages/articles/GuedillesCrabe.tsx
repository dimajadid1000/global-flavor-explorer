
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GuedillesCrabe() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Guédilles au crabe des neiges et aux légumes croquants</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des guédilles fraîches et savoureuses au crabe des neiges avec une mayonnaise citronnée et des légumes croquants.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                30 minutes
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
              src="/lovable-uploads/68633abb-65c6-4d9b-ae53-c2ccea419908.png" 
              alt="Guédilles au crabe des neiges"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  Ingrédients pour la mayonnaise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Mayonnaise - 125 ml (½ tasse)</li>
                  <li>• Citron - 1, le zeste râpé finement</li>
                  <li>• Sauce piquante - Au goût</li>
                  <li>• Sel et poivre - Au goût</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ingrédients pour les guédilles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Radis de couleurs variées - 4</li>
                  <li>• Branches de céleri - 2</li>
                  <li>• Aneth ciselé - 45 ml (3 c. à soupe)</li>
                  <li>• Ciboulette - 45 ml (3 c. à soupe)</li>
                  <li>• Jus de citron - 30 ml (2 c. à soupe)</li>
                  <li>• Huile d'olive - 15 ml (1 c. à soupe)</li>
                  <li>• Pains à hot-dog briochés - 6</li>
                  <li>• Feuilles de laitue Boston - 6</li>
                  <li>• Chair de crabe des neiges - 450 g (1 lb)</li>
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
                  <h3 className="font-semibold mb-3">Pour la mayonnaise :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Dans un bol, mélangez au fouet tous les ingrédients. Salez et poivrez. Couvrez et réfrigérez.</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Pour les guédilles :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Dans un autre bol, mélangez les radis, le céleri, l'aneth, la ciboulette, le jus de citron et l'huile. Salez et poivrez.</li>
                    <li><strong>2.</strong> Tartinez l'extérieur des pains de 30 ml (2 c. à soupe) de la mayonnaise.</li>
                    <li><strong>3.</strong> Dans une grande poêle antiadhésive à feu moyen, grillez les pains de chaque côté.</li>
                    <li><strong>4.</strong> Tartinez l'intérieur des pains du reste de la mayonnaise. Garnissez des feuilles de laitue et du crabe.</li>
                    <li><strong>5.</strong> Répartissez la garniture de radis. Servez aussitôt.</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Plats principaux</Badge>
            <Badge>Fruits de mer</Badge>
            <Badge>Été</Badge>
            <Badge>Printemps</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
