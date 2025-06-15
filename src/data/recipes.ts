export type Cuisine =
  | "Italienne"
  | "Française"
  | "Chinoise"
  | "Japonaise"
  | "Indienne"
  | "Mexicaine"
  | "Américaine"
  | "Thaïlandaise"
  | "Espagnole"
  | "Moyen-Orientale"
  | "Grecque"
  | "Coréenne"
  | "Vietnamienne"
  | "Brésilienne"
  | "Éthiopienne"
  | "Turque"
  | "Marocaine"
  | "Russe"
  | "Allemande"
  | "Suédoise";

export interface Recipe {
  id: string;
  name: string;
  cuisine: Cuisine;
  country: string;
  image: string;    // Public URL or Unsplash
  description: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
}

export const recipes: Recipe[] = [
  {
    id: "spaghetti-carbonara",
    name: "Spaghetti à la Carbonara",
    cuisine: "Italienne",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
    description: "Un plat de pâtes romain classique avec de la pancetta, des œufs, du parmesan et du poivre noir.",
    ingredients: [
      "400g de spaghetti",
      "150g de pancetta",
      "2 gros œufs",
      "1/2 tasse de parmesan râpé",
      "Poivre noir fraîchement moulu",
      "Sel"
    ],
    steps: [
      "Cuire les pâtes jusqu'à ce qu'elles soient al dente.",
      "Faire frire la pancetta jusqu'à ce qu'elle soit croustillante.",
      "Fouetter les œufs et le parmesan.",
      "Mélanger rapidement les spaghetti égouttés, la pancetta et le mélange d'œufs.",
      "Assaisonner de poivre noir et servir."
    ],
    tags: ["Pâtes", "Classique", "Rapide"],
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 2,
  },
  {
    id: "beef-bourguignon",
    name: "Bœuf Bourguignon",
    cuisine: "Française",
    country: "France",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=500&q=80",
    description: "Un riche ragoût de bœuf mijoté lentement avec du vin rouge, des champignons et du lard.",
    ingredients: [
      "1kg de bœuf à braiser (paleron, macreuse)",
      "200g de lardons",
      "2 carottes",
      "1 oignon",
      "2 tasses de vin rouge (Bourgogne de préférence)",
      "200g de champignons de Paris",
      "2 c.à.s. de farine",
      "2 gousses d'ail",
      "Thym, laurier, sel, poivre"
    ],
    steps: [
      "Faire dorer le bœuf et les lardons.",
      "Ajouter les légumes et faire revenir.",
      "Ajouter le vin et les herbes. Laisser mijoter 2 à 3 heures.",
      "Ajouter les champignons à la fin.",
      "Servir chaud avec du pain ou des pommes de terre."
    ],
    tags: ["Ragoût", "Classique", "Réconfortant"],
    prepTime: "30 min",
    cookTime: "2.5 hr",
    servings: 4,
  },
  {
    id: "kung-pao-chicken",
    name: "Poulet Kung Pao",
    cuisine: "Chinoise",
    country: "China",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=500&q=80",
    description: "Un sauté épicé du Sichuan avec du poulet, des cacahuètes et des piments.",
    ingredients: [
      "500g de blanc de poulet",
      "100g de cacahuètes",
      "8 piments séchés",
      "2 c.à.s. de sauce soja",
      "2 c.à.s. de vinaigre de riz",
      "2 c.à.c. de grains de poivre du Sichuan",
      "1 poivron",
      "2 oignons nouveaux (ciboules)"
    ],
    steps: [
      "Faire mariner puis sauter le poulet.",
      "Ajouter les poivrons et les piments, faire sauter.",
      "Ajouter les cacahuètes, la sauce et le poivre du Sichuan.",
      "Mélanger le tout et servir."
    ],
    tags: ["Épicé", "Sauté", "Rapide"],
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 2,
  },
  // ... 30 more recipes from different countries/cuisines for demo purposes.
  // For brevity, imagine a realistic selection here (Japanese sushi, American burger, Greek moussaka, etc.)
  // More recipes can be easily imported or extended in this array by user later.
  {
    id: "couscous",
    name: "Couscous",
    cuisine: "Marocaine",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
    description: "Un plat marocain traditionnel à base de semoule, légumes variés et viande mijotée, parfait pour les grands repas de famille.",
    ingredients: [
      "500g de semoule de couscous",
      "500g d’agneau (ou de poulet)",
      "4 carottes",
      "3 courgettes",
      "2 navets",
      "1 oignon",
      "400g de pois chiches",
      "1 poignée de raisins secs",
      "1 c.à.s. de concentré de tomate",
      "1 c.à.c. de cumin",
      "1 c.à.c. de cannelle",
      "1 c.à.c. de paprika",
      "Sel et poivre",
      "Huile d’olive"
    ],
    steps: [
      "Faire revenir la viande et l’oignon émincé dans un grand faitout avec un peu d’huile.",
      "Ajouter les épices, le sel et le concentré de tomate. Bien mélanger.",
      "Couvrir d’eau, puis ajouter pois chiches et carottes en morceaux. Faire mijoter 40 min.",
      "Ajouter les navets, courgettes, raisins secs et poursuivre la cuisson 20 min.",
      "Préparer la semoule selon les indications du paquet. L'égrainer avec un peu d’huile d’olive.",
      "Servir la viande et légumes sur la semoule, arroser de bouillon."
    ],
    tags: ["Traditionnel", "Familial", "Légumes"],
    prepTime: "30 min",
    cookTime: "1 h 20",
    servings: 6,
  },
];
