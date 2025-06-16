
import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  orderBy, 
  query 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Article, CreateArticleData } from '@/types/article';
import { useToast } from '@/hooks/use-toast';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchArticles = async () => {
    try {
      const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const articlesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as Article[];
      setArticles(articlesData);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les articles",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createArticle = async (data: CreateArticleData) => {
    try {
      const now = new Date();
      await addDoc(collection(db, 'articles'), {
        ...data,
        createdAt: now,
        updatedAt: now,
      });
      toast({
        title: "Succès",
        description: "Article créé avec succès",
      });
      fetchArticles();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de créer l'article",
        variant: "destructive",
      });
    }
  };

  const updateArticle = async (id: string, data: Partial<CreateArticleData>) => {
    try {
      await updateDoc(doc(db, 'articles', id), {
        ...data,
        updatedAt: new Date(),
      });
      toast({
        title: "Succès",
        description: "Article mis à jour avec succès",
      });
      fetchArticles();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour l'article",
        variant: "destructive",
      });
    }
  };

  const deleteArticle = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'articles', id));
      toast({
        title: "Succès",
        description: "Article supprimé avec succès",
      });
      fetchArticles();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'article",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return {
    articles,
    loading,
    createArticle,
    updateArticle,
    deleteArticle,
    refetch: fetchArticles,
  };
};
