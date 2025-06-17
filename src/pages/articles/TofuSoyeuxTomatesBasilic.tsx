
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TofuSoyeuxTomatesBasilic() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Tofu soyeux aux tomates et au basilic</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un plat asiatique frais et savoureux avec tofu soyeux, tomates cerises et une sauce légèrement épicée au gochujang.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                2-4 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Très facile
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/868a4d4c-e1cd-4892-9df9-b5f38f117d80.png" 
              alt="Tofu soyeux aux tomates et basilic"
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
                <li>• Oignon vert haché - 1</li>
                <li>• Gousses d'ail hachées - 2</li>
                <li>• Sauce soya - 15 ml (1 c. à soupe)</li>
                <li>• Vinaigre de riz - 15 ml (1 c. à soupe)</li>
                <li>• Sirop d'érable - 15 ml (1 c. à soupe)</li>
                <li>• Huile d'olive - 15 ml (1 c. à soupe)</li>
                <li>• Pâte de piment gochujang - 2,5 ml (½ c. à thé)</li>
                <li>• Graines de sésame - 15 ml (1 c. à soupe)</li>
                <li>• Tomates cerises coupées en 4 - ½ chopine (1 tasse)</li>
                <li>• Basilic frais en chiffonnade - 30 ml (2 c. à soupe)</li>
                <li>• Tofu soyeux - 1 bloc de 300 g (⅔ lb)</li>
                <li>• Huile d'olive pour décorer - 1 filet (facultatif)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li><strong>1.</strong> Dans un petit bol, mettez l'oignon vert, l'ail, la sauce soya, le vinaigre de riz, le sirop d'érable, l'huile d'olive, la pâte de piment gochujang et les graines de sésame. Mélangez bien.</li>
                <li><strong>2.</strong> Ajoutez les tomates cerises et le basilic, puis mélangez de nouveau.</li>
                <li><strong>3.</strong> Retirez doucement le tofu soyeux de son emballage et déposez-le sur un linge propre et sec pour l'éponger.</li>
                <li><strong>4.</strong> Transférez-le dans une assiette de service creuse.</li>
                <li><strong>5.</strong> Garnissez le tofu du mélange de tomates. Arrosez d'un filet d'huile d'olive et parsemez de basilic frais, si désiré.</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes et astuces</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Tofu soyeux :</strong> Le tofu soyeux se vend généralement dans une barquette de plastique. À l'épicerie, vous le trouverez près des autres tofus, dans la section réfrigérée du rayon fruits et légumes.</p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Accompagnements</Badge>
            <Badge>Salades</Badge>
            <Badge>Repas facile</Badge>
            <Badge>Rapide</Badge>
            <Badge>Asiatique</Badge>
            <Badge>Végétalien</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
