
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function RamenFroid() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Ramen froid</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un ramen rafraîchissant parfait pour l'été avec du poisson frais et une sauce savoureuse.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                30 minutes
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
              src="/lovable-uploads/d709aee5-5e67-4d34-8db7-b7a35a77a50c.png" 
              alt="Ramen froid"
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
                <li>• Nouilles ramen - 450 g (1 lb)</li>
                <li>• Bouillon de poulet - 250 ml (1 tasse)</li>
                <li>• Sauce soya à faible teneur en sodium - 180 ml (¾ tasse)</li>
                <li>• Mirin - 75 ml (⅓ tasse)</li>
                <li>• Vinaigre de riz - 75 ml (⅓ tasse)</li>
                <li>• Huile de sésame grillé - 2,5 ml (½ c. à thé)</li>
                <li>• Ail haché - 5 ml (1 c. à thé)</li>
                <li>• Saumon ou thon frais en tranches - 340 g (¾ lb)</li>
                <li>• Oignons verts ciselés - 3</li>
                <li>• Graines de sésame - Au goût</li>
                <li>• Carotte en julienne - 1</li>
                <li>• Edamames - Au goût</li>
                <li>• Oignons frits croustillants - Au goût</li>
                <li>• Huile de chili rouge - Au goût</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li><strong>1.</strong> Faites cuire les nouilles selon les instructions. Une fois cuites, rincez-les à l'eau fraîche et mettez-les dans un bol d'eau glacée jusqu'à refroidissement complet.</li>
                <li><strong>2.</strong> Dans un bol, mélangez le bouillon de poulet, la sauce soya, le mirin, le vinaigre de riz, l'huile de sésame et l'ail haché.</li>
                <li><strong>3.</strong> Faites chauffer la sauce au micro-ondes jusqu'à ébullition. Mettez au congélateur 15 minutes jusqu'à ce qu'elle soit froide.</li>
                <li><strong>4.</strong> Dans des bols à ramen, versez environ 60 ml (¼ tasse) de sauce et ajoutez un petit monticule de nouilles froides.</li>
                <li><strong>5.</strong> Placez des tranches de saumon sur les nouilles. Garnissez d'oignons verts, graines de sésame, carottes, edamames et oignons frits.</li>
                <li><strong>6.</strong> Terminez par un filet d'huile de chili rouge. Servez avec un bol de sauce à part pour tremper.</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes et astuces</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Alternative au mirin :</strong> Vous pouvez remplacer le mirin par 60 ml (¼ tasse) de saké mélangé avec 15 ml (1 c. à soupe) de sucre.</p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Plats principaux</Badge>
            <Badge>Potages et soupes</Badge>
            <Badge>Manger en famille</Badge>
            <Badge>Repas facile</Badge>
            <Badge>Été</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
