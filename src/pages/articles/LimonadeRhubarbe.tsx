
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function LimonadeRhubarbe() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Limonade à la rhubarbe</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une boisson rafraîchissante et originale parfaite pour l'été, avec le goût acidulé unique de la rhubarbe.
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
              src="/lovable-uploads/6b4fa233-9631-43c4-b999-7b1680a1e024.png" 
              alt="Limonade à la rhubarbe"
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
                <li>• Tiges de rhubarbe coupées en petits morceaux - 675 g (1 ½ lb)</li>
                <li>• Eau fraîche - 1 L (4 tasses)</li>
                <li>• Sucre - 150 ml (⅔ tasse)</li>
                <li>• Sel - 1 pincée</li>
                <li>• Bicarbonate de soude - 1 ml (¼ c. à thé)</li>
                <li>• Limes - 6, divisées</li>
                <li>• Glaçons - Quantité suffisante</li>
                <li>• Eau pétillante - Au goût</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li><strong>1.</strong> Mettez la rhubarbe, l'eau, le sucre, le sel et le bicarbonate dans une casserole.</li>
                <li><strong>2.</strong> Portez le tout à ébullition, réduisez le feu au minimum et laissez compoter la rhubarbe 10 minutes.</li>
                <li><strong>3.</strong> Filtrez le liquide à l'aide d'un tamis fin muni d'une étamine (coton à fromage).</li>
                <li><strong>4.</strong> Réfrigérez le sirop jusqu'à ce qu'il soit bien froid.</li>
                <li><strong>5.</strong> Pressez le jus de 4 limes dans un pichet, ajoutez le sirop de rhubarbe et mélangez bien.</li>
                <li><strong>6.</strong> Coupez les limes restantes en quartiers, mettez-en quelques-uns dans la limonade et conservez le reste pour le service.</li>
                <li><strong>7.</strong> Pour servir : versez de la limonade dans un verre, ajoutez des glaçons, de l'eau pétillante au goût et 1 quartier de lime.</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes et astuces</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Ajustement du sucre :</strong> Ajustez la quantité de sucre selon l'acidité de la rhubarbe et votre goût personnel.</p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Boissons et cocktails</Badge>
            <Badge>Sans gluten</Badge>
            <Badge>Pique-nique</Badge>
            <Badge>Été</Badge>
            <Badge>Rafraîchissant</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
