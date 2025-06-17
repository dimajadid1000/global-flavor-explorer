
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SaladePatesBruschetta() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Salade de pâtes à la bruschetta</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bien que tous les chemins mènent à Rome, avec cette salade-repas à 5 ingrédients, le chemin de la simplicité est de loin notre préféré!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                20 minutes
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
              src="/lovable-uploads/c495ffc5-d0d8-4ed5-99b6-18b5bf939508.png" 
              alt="Salade de pâtes à la bruschetta"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  Ingrédients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Farfalles - 1 boîte de 450 g</li>
                  <li>• Basilic frais - 250 ml (1 tasse)</li>
                  <li>• Haricots rouges - 1 boîte de 540 ml (19 oz)</li>
                  <li>• Perles de bocconcini - 1 contenant de 250 ml</li>
                  <li>• Bruschetta - 2 contenants de 340 g</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Valeurs nutritives (par portion)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Calories: 558</div>
                  <div>Protéines: 19 g</div>
                  <div>Lipides: 17 g</div>
                  <div>Glucides: 77 g</div>
                  <div>Fibres: 8 g</div>
                  <div>Sodium: 686 mg</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Préparation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li><strong>1.</strong> Portez une grande casserole d'eau à ébullition. Faites cuire les pâtes selon les indications sur l'emballage.</li>
                <li><strong>2.</strong> Pendant ce temps, hachez le basilic. Rincez et égouttez les haricots. Égouttez les perles de bocconcini.</li>
                <li><strong>3.</strong> Dans un grand bol de service, déposez le basilic, les haricots, le bocconcini et la bruschetta.</li>
                <li><strong>4.</strong> Égouttez les pâtes, rincez à l'eau froide pour les refroidir et déposez-les dans le bol. Mélangez bien et servez.</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes et astuces</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Bruschetta maison :</strong> Si vous avez une recette de bruschetta maison, vous pouvez remplacer les deux contenants du commerce par 750 ml (3 tasses) de bruschetta maison.</p>
                <p><strong>Important :</strong> N'égouttez surtout pas les contenants de bruschetta avant de les ajouter au contenu du bol : c'est ce liquide qui sert de vinaigrette à la salade.</p>
                <p><strong>Conservation :</strong> Se conserve 4 jours au réfrigérateur et ne se congèle pas.</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Plats principaux</Badge>
            <Badge>Salades</Badge>
            <Badge>Italienne</Badge>
            <Badge>Boîtes à lunch</Badge>
            <Badge>Pour les enfants</Badge>
            <Badge>Week-end au chalet</Badge>
            <Badge>Pique-nique</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
