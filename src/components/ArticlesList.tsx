
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Article } from '@/types/article';
import { Edit, Trash2 } from 'lucide-react';

interface ArticlesListProps {
  articles: Article[];
  onEdit: (article: Article) => void;
  onDelete: (id: string) => void;
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles, onEdit, onDelete }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="space-y-4">
      {articles.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-gray-500">Aucun article trouvé</p>
          </CardContent>
        </Card>
      ) : (
        articles.map((article) => (
          <Card key={article.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <Badge variant="secondary">
                      Créé: {formatDate(article.createdAt)}
                    </Badge>
                    {article.updatedAt > article.createdAt && (
                      <Badge variant="outline">
                        Modifié: {formatDate(article.updatedAt)}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onEdit(article)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDelete(article.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 line-clamp-3">
                {article.content.substring(0, 200)}
                {article.content.length > 200 && '...'}
              </p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default ArticlesList;
