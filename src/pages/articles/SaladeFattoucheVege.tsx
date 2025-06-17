
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
              Une salade méditerranéenne colorée avec tofu mariné au zaatar et pain pita grillé croustillant.
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
              src="/lovable-uploads/5113a2f2-d43d-40c0-a73a-13c1d73abb48.png" 
              alt="Salade fattouche végé"
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
                  <li>• Pitas - 2</li>
                  <li>• Tofu mariné au zaatar - 1 bloc de 350 à 450 g</li>
                  <li>• Citron - 1</li>
                  <li>• Huile d'olive - 30 ml (2 c. à soupe)</li>
                  <li>• Grosse pomme de laitue romaine - 1</li>
                  <li>• Concombres libanais - 3</li>
                  <li>• Radis - 4 ou 5</li>
                  <li>• Tomates cerises - 500 ml (2 tasses)</li>
                  <li>• Menthe fraîche - 60 ml (¼ tasse)</li>
                  <li>• Sumac moulu - 5 ml (1 c. à thé)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Valeurs nutritives (par portion)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Calories: 393</div>
                  <div>Protéines: 19 g</div>
                  <div>Lipides: 24 g</div>
                  <div>Glucides: 28 g</div>
                  <div>Fibres: 4 g</div>
                  <div>Sodium: 249 mg</div>
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
                <li><strong>1.</strong> Préchauffez le four à 200 °C (400 °F). Placez la grille au centre.</li>
                <li><strong>2.</strong> Déposez les pitas directement sur la grille du four et faites-les cuire 8 à 10 minutes jusqu'à ce qu'ils soient dorés et secs. Laissez tiédir et cassez en morceaux.</li>
                <li><strong>3.</strong> Dans un grand poêlon antiadhésif à feu moyen-vif, sans matière grasse, déposez le tofu mariné et réduisez à feu moyen-doux. Faites cuire 15 à 20 minutes jusqu'à ce qu'il soit doré, en remuant régulièrement.</li>
                <li><strong>4.</strong> Pressez le citron directement au-dessus d'un saladier. Versez l'huile, poivrez généreusement et ajoutez une pincée de sel. Mélangez.</li>
                <li><strong>5.</strong> Coupez grossièrement la laitue. Tranchez finement les concombres et les radis. Coupez les tomates cerises en deux.</li>
                <li><strong>6.</strong> Ajoutez les légumes dans le saladier et mélangez pour bien les enrober de vinaigrette.</li>
                <li><strong>7.</strong> Hachez grossièrement la menthe. Déposez le tofu grillé sur la salade. Récupérez les graines de sésame du poêlon.</li>
                <li><strong>8.</strong> Garnissez de menthe, de morceaux de pitas grillés et saupoudrez de sumac. Servez.</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes et astuces</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Pitas secs :</strong> Cette recette est parfaite pour donner une seconde vie à vos pitas qui sont devenus un peu secs.</p>
                <p><strong>Conservation :</strong> Cette recette est meilleure préparée à la dernière minute.</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Plats principaux</Badge>
            <Badge>Salades</Badge>
            <Badge>Végétarien</Badge>
            <Badge>Méditerranéenne</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
