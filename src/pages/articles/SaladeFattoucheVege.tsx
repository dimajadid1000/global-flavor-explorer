
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SaladeFattoucheVege() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Salade fattouche végé</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une salade méditerranéenne fraîche et colorée avec tofu mariné au zaatar et pain pita grillé.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                35 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                4 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Facile
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/2ec2e95e-06b8-4a00-a983-90683d7f6594.png" 
              alt="Salade fattouche végé"
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
                <li>• Tofu ferme - 300 g</li>
                <li>• Pain pita - 2 pains</li>
                <li>• Laitue romaine - 1 grosse</li>
                <li>• Tomates - 3 moyennes</li>
                <li>• Concombres - 2</li>
                <li>• Radis - 6</li>
                <li>• Oignon rouge - 1/2</li>
                <li>• Persil plat frais - 1 bouquet</li>
                <li>• Menthe fraîche - 30 g</li>
                <li>• Sumac - 10 ml</li>
                <li>• Zaatar - 15 ml</li>
                <li>• Huile d'olive - 90 ml</li>
                <li>• Jus de citron - 60 ml</li>
                <li>• Ail - 2 gousses</li>
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
                <li><strong>1.</strong> Coupez le tofu en cubes et marinez-le avec zaatar, huile d'olive, sel et poivre pendant 20 minutes.</li>
                <li><strong>2.</strong> Grillez le pain pita jusqu'à ce qu'il soit doré et cassant. Cassez-le en morceaux irréguliers.</li>
                <li><strong>3.</strong> Préparez tous les légumes : coupez la laitue, les tomates en quartiers, les concombres et radis en rondelles.</li>
                <li><strong>4.</strong> Émincez finement l'oignon rouge, hachez le persil et la menthe.</li>
                <li><strong>5.</strong> Préparez la vinaigrette avec le jus de citron, l'ail pressé, l'huile d'olive et le sumac.</li>
                <li><strong>6.</strong> Faites dorer le tofu mariné dans une poêle antiadhésive.</li>
                <li><strong>7.</strong> Mélangez tous les ingrédients, ajoutez le pain pita au dernier moment et servez immédiatement.</li>
              </ol>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Végétarien</Badge>
            <Badge>Méditerranéen</Badge>
            <Badge>Salade</Badge>
            <Badge>Santé</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
