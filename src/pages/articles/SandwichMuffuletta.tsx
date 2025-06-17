
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SandwichMuffuletta() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Sandwich muffuletta</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Le célèbre sandwich de La Nouvelle-Orléans avec focaccia maison, charcuteries italiennes et légumes marinés.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                6 heures (avec repos)
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                4-6 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Difficile
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/4f508374-776e-49cd-b5b2-4747ee89831b.png" 
              alt="Sandwich muffuletta"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Pour la focaccia</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Farine tout usage non blanchie - 500 g (3 ½ tasses)</li>
                  <li>• Sel fin - 12 g (2 c. à thé)</li>
                  <li>• Eau tiède - 325 ml (1 ⅓ tasse)</li>
                  <li>• Huile d'olive - 45 ml (3 c. à soupe)</li>
                  <li>• Levure fraîche - 10 g (1 c. à thé)</li>
                  <li>• Thym frais effeuillé - 15 ml (1 c. à soupe)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pour les garnitures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Mayonnaise - 250 ml (1 tasse)</li>
                  <li>• Jardinière de légumes marinée - 250 ml (1 tasse)</li>
                  <li>• Capicollo tranché - 100 g (3,5 oz)</li>
                  <li>• Mortadelle tranchée - 100 g (3,5 oz)</li>
                  <li>• Tapenade d'olives noires - 250 ml (1 tasse)</li>
                  <li>• Poivrons rôtis en lanières - 500 ml (2 tasses)</li>
                  <li>• Salami calabrese tranché - 100 g (3,5 oz)</li>
                  <li>• Fromage provolone tranché - 100 g (3,5 oz)</li>
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
                  <h3 className="font-semibold mb-3">Pour la focaccia :</h3>
                  <ol className="space-y-3">
                    <li><strong>1.</strong> Dans un bol, mélangez la farine avec le sel, puis réservez.</li>
                    <li><strong>2.</strong> Dans un autre bol, mélangez l'eau, l'huile d'olive et la levure. Remuez jusqu'à dissolution de la levure.</li>
                    <li><strong>3.</strong> Ajoutez le mélange de farine et mélangez à la cuillère de bois jusqu'à former une pâte.</li>
                    <li><strong>4.</strong> Couvrez d'un linge humide et laissez reposer 4 heures à température ambiante. Repliez la pâte sur elle-même quelques fois.</li>
                    <li><strong>5.</strong> Couvrez à nouveau et réfrigérez toute une nuit.</li>
                    <li><strong>6.</strong> Divisez la pâte en 2 et mettez dans deux moules à gâteau de 20 cm huilés avec papier parchemin.</li>
                    <li><strong>7.</strong> Versez un filet d'huile sur chaque pâte et étalez légèrement. Laissez reposer 1 heure minimum jusqu'à ce qu'elles doublent.</li>
                    <li><strong>8.</strong> Préchauffez le four à 220 °C (425 °F). Répartissez le thym et salez. Vaporisez d'eau et faites cuire 10 minutes.</li>
                    <li><strong>9.</strong> Diminuez à 200 °C (400 °F) et cuisez 15 minutes supplémentaires. Démoulez et laissez refroidir.</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Pour l'assemblage :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Coupez chaque focaccia en 2 sur l'épaisseur.</li>
                    <li><strong>2.</strong> Tartinez l'intérieur de deux tranches de mayonnaise et répartissez la jardinière de légumes.</li>
                    <li><strong>3.</strong> Ajoutez le capicollo et la mortadelle. Répartissez la tapenade et les poivrons sur les deux autres tranches.</li>
                    <li><strong>4.</strong> Terminez avec le salami et le provolone. Emballez séparément dans une pellicule plastique.</li>
                    <li><strong>5.</strong> Mettez un poids dessus et réfrigérez minimum 2 heures. Coupez en pointes pour servir.</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Plats principaux</Badge>
            <Badge>Sandwichs</Badge>
            <Badge>Italienne</Badge>
            <Badge>Boîtes à lunch</Badge>
            <Badge>Sandwich pressé</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
