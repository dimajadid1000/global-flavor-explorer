
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useArticles } from '@/hooks/useArticles';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleForm from '@/components/ArticleForm';
import ArticlesList from '@/components/ArticlesList';
import { Article } from '@/types/article';
import { LogOut, Plus, FileText } from 'lucide-react';

const Admin: React.FC = () => {
  const { logout, currentUser } = useAuth();
  const { articles, loading, createArticle, updateArticle, deleteArticle } = useArticles();
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | undefined>();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
    }
  };

  const handleCreateArticle = () => {
    setEditingArticle(undefined);
    setShowForm(true);
  };

  const handleEditArticle = (article: Article) => {
    setEditingArticle(article);
    setShowForm(true);
  };

  const handleFormSubmit = async (data: { title: string; content: string }) => {
    if (editingArticle) {
      await updateArticle(editingArticle.id, data);
    } else {
      await createArticle(data);
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingArticle(undefined);
  };

  const handleDeleteArticle = async (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      await deleteArticle(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold">Administration</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Connecté en tant que {currentUser?.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={handleCreateArticle}
                  className="w-full"
                  disabled={showForm}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Nouvel article
                </Button>
                <div className="text-sm text-gray-600">
                  <p><strong>{articles.length}</strong> article(s) total</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {showForm ? (
              <ArticleForm
                article={editingArticle}
                onSubmit={handleFormSubmit}
                onCancel={handleFormCancel}
              />
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-6">Mes Articles</h2>
                {loading ? (
                  <Card>
                    <CardContent className="text-center py-8">
                      <p>Chargement des articles...</p>
                    </CardContent>
                  </Card>
                ) : (
                  <ArticlesList
                    articles={articles}
                    onEdit={handleEditArticle}
                    onDelete={handleDeleteArticle}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
