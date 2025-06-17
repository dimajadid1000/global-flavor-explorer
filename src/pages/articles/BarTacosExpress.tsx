
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
              Des tacos rapides et savoureux pour toute la famille avec une variété de garnitures fraîches.
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
              src="/lovable-uploads/3248262d-ad8d-408f-9195-a08d7e882db7.png" 
              alt="Bar à tacos express"
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
                <li>• Tortillas de maïs ou de blé - 12</li>
                <li>• Boeuf haché - 500 g</li>
                <li>• Haricots noirs en conserve - 1 boîte</li>
                <li>• Tomates - 3 moyennes</li>
                <li>• Laitue iceberg - 1</li>
                <li>• Fromage cheddar râpé - 200 g</li>
                <li>• Avocat - 2</li>
                <li>• Crème sure - 250 ml</li>
                <li>• Salsa - 250 ml</li>
                <li>• Oignon rouge - 1</li>
                <li>• Coriandre fraîche - 1 bouquet</li>
                <li>• Lime - 2</li>
                <li>• Cumin - 5 ml</li>
                <li>• Paprika - 5 ml</li>
                <li>• Poudre d'ail - 2,5 ml</li>
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
                <li><strong>1.</strong> Faites revenir le boeuf haché dans une poêle avec les épices (cumin, paprika, poudre d'ail). Assaisonnez et réservez.</li>
                <li><strong>2.</strong> Réchauffez les haricots noirs égouttés avec un peu de cumin.</li>
                <li><strong>3.</strong> Préparez tous les accompagnements : coupez les tomates en dés, émincez la laitue, hachez l'oignon rouge et la coriandre.</li>
                <li><strong>4.</strong> Préparez le guacamole en écrasant les avocats avec du jus de lime, sel et poivre.</li>
                <li><strong>5.</strong> Réchauffez les tortillas dans une poêle sèche ou au micro-ondes.</li>
                <li><strong>6.</strong> Disposez tous les ingrédients dans des bols séparés pour que chacun compose ses tacos.</li>
                <li><strong>7.</strong> Servez avec des quartiers de lime et laissez chacun garnir ses tacos selon ses goûts.</li>
              </ol>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Mexicain</Badge>
            <Badge>Familial</Badge>
            <Badge>Rapide</Badge>
            <Badge>Personnalisable</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
