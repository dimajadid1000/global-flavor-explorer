
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SaladeRoquetteAvocatBleuets() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition">
          <ChevronLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <article className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Salade de roquette, avocat et bleuets</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une salade raffinée aux saveurs estivales avec une vinaigrette citronnée à la lavande qui surprend et délecte.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                15 minutes
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                2 portions
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                Facile
              </Badge>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/4306d701-cc79-4903-8214-b171651fed22.png" 
              alt="Salade de roquette, avocat et bleuets"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Pour la vinaigrette</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Huile d'olive - 45 ml (3 c. à soupe)</li>
                  <li>• Jus de citron - 30 ml (2 c. à soupe)</li>
                  <li>• Miel - 5 ml (1 c. à thé)</li>
                  <li>• Fleurs de lavande séchées - 2,5 à 3,5 ml (½ à ¾ c. à thé)</li>
                  <li>• Sel de mer fin - 2,5 ml (½ c. à thé)</li>
                  <li>• Poivre du moulin - Au goût</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pour la salade</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Roquette - 60 g (4 tasses)</li>
                  <li>• Bleuets - 130 g (1 tasse)</li>
                  <li>• Avocat finement tranché - 1</li>
                  <li>• Citron - ½, le jus seulement</li>
                  <li>• Feta émiettée ou fromage de chèvre - 70 g (⅔ tasse)</li>
                  <li>• Fleurs de ciboulette hachées - 2 (facultatif)</li>
                  <li>• Petites feuilles de basilic - Quelques-unes</li>
                  <li>• Pistaches non salées concassées - Au goût</li>
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
                  <h3 className="font-semibold mb-3">Pour la vinaigrette :</h3>
                  <p>Dans un pot Mason ou un contenant hermétique, mettez tous les ingrédients. Fermez le couvercle et agitez le pot.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Pour la salade :</h3>
                  <ol className="space-y-2">
                    <li><strong>1.</strong> Disposez la roquette dans une grande assiette de service. Ajoutez les bleuets.</li>
                    <li><strong>2.</strong> Arrosez les tranches d'avocat de jus de citron pour éviter qu'elles noircissent et ajoutez-les à la salade.</li>
                    <li><strong>3.</strong> Parsemez le tout de feta émiettée, de fleurs de ciboulette, de feuilles de basilic et de pistaches concassées.</li>
                    <li><strong>4.</strong> Ajoutez la vinaigrette et servez immédiatement.</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes et astuces</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Lavande :</strong> Vous trouverez la lavande séchée de grade alimentaire dans les magasins d'aliments naturels ou en vrac.</p>
                <p><strong>Alternatives :</strong> Vous pouvez remplacer les bleuets par des mûres sauvages ou des figues fraîches.</p>
                <p><strong>Salade-repas :</strong> Ajoutez du quinoa, du boulgour ou du farro cuit pour créer une salade-repas. Doublez la vinaigrette au besoin.</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            <Badge>Accompagnements</Badge>
            <Badge>Salades</Badge>
            <Badge>Sans gluten</Badge>
            <Badge>Cuisiner pour 2</Badge>
            <Badge>Estival</Badge>
          </div>
        </article>
      </div>
    </div>
  );
}
