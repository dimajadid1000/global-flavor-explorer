
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
              Une salade colorée et savoureuse aux tortellinis, parfaite pour les repas d'été et les pique-niques.
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
              src="/lovable-uploads/7b92cadc-9e75-419c-a907-ea4109852971.png" 
              alt="Salade antipasto"
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
                  <li>• Tortellinis au fromage - 1 paquet d'environ 350 g</li>
                  <li>• Oignon rouge, petit - 1</li>
                  <li>• Cœurs d'artichauts - 1 boîte de 398 ml</li>
                  <li>• Poivrons rouges grillés marinés - 1 contenant de 340 ml</li>
                  <li>• Perles de bocconcini - 1 contenant de 200 g</li>
                  <li>• Olives Kalamata tranchées - 60 ml (¼ tasse)</li>
                  <li>• Huile d'olive - 30 ml (2 c. à soupe)</li>
                  <li>• Vinaigre de vin rouge - 30 ml (2 c. à soupe)</li>
                  <li>• Fines herbes séchées à l'italienne - 5 ml (1 c. à thé)</li>
                  <li>• Flocons de piments forts - 5 ml (1 c. à thé)</li>
                  <li>• Concombre libanais - 4</li>
                  <li>• Tomates cerises - 250 ml (1 tasse)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Valeurs nutritives (par portion)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Calories: 571</div>
                  <div>Protéines: 17 g</div>
                  <div>Lipides: 25 g</div>
                  <div>Glucides: 62 g</div>
                  <div>Fibres: 6 g</div>
                  <div>Sodium: 543 mg</div>
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
                <li><strong>1.</strong> Portez une grande casserole d'eau à ébullition. Faites cuire les tortellinis selon les indications sur l'emballage.</li>
                <li><strong>2.</strong> Pendant ce temps, hachez finement l'oignon. Égouttez les cœurs d'artichauts et les poivrons, puis coupez-les en morceaux. Déposez dans un grand contenant hermétique.</li>
                <li><strong>3.</strong> Égouttez les bocconcinis et ajoutez-les dans le contenant.</li>
                <li><strong>4.</strong> Ajoutez les olives, l'huile, le vinaigre, les fines herbes et les flocons de piment. Poivrez généreusement.</li>
                <li><strong>5.</strong> Égouttez les tortellinis et rincez-les à l'eau froide. Déposez-les dans le contenant et mélangez bien.</li>
                <li><strong>6.</strong> Coupez les concombres en dés et les tomates en 2. Répartissez-les sur les pâtes, sans mélanger.</li>
                <li><strong>7.</strong> Réfrigérez si vous préparez à l'avance. Mélangez seulement au moment de servir.</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes et astuces</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Alternative aux bocconcinis :</strong> Vous pouvez remplacer les bocconcinis par des lupins, une légumineuse qui surprend par sa texture croquante et coûte environ 3 fois moins cher.</p>
                <p><strong>Conservation :</strong> Se conserve 5 jours au réfrigérateur et ne se congèle pas.</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Plats principaux</Badge>
            <Badge>Salades</Badge>
            <Badge>Italienne</Badge>
            <Badge>Week-end au chalet</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
