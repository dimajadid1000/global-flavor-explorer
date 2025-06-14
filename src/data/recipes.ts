export type Cuisine =
  | "Italian"
  | "French"
  | "Chinese"
  | "Japanese"
  | "Indian"
  | "Mexican"
  | "American"
  | "Thai"
  | "Spanish"
  | "Middle Eastern"
  | "Greek"
  | "Korean"
  | "Vietnamese"
  | "Brazilian"
  | "Ethiopian"
  | "Turkish"
  | "Moroccan"
  | "Russian"
  | "German"
  | "Swedish";

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
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
    description: "Classic Roman pasta with pancetta, eggs, parmesan, and black pepper.",
    ingredients: [
      "400g spaghetti",
      "150g pancetta",
      "2 large eggs",
      "1/2 cup parmesan cheese",
      "Fresh cracked black pepper",
      "Salt"
    ],
    steps: [
      "Nkefftou pasta until al dente.",
      "Fry pancetta until crispy.",
      "Whisk eggs and parmesan.",
      "Combine drained spaghetti, pancetta, and egg mixture quickly.",
      "Season with black pepper and serve."
    ],
    tags: ["Pasta", "Classic", "Quick"],
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 2,
  },
  {
    id: "beef-bourguignon",
    name: "Beef Bourguignon",
    cuisine: "French",
    country: "France",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=500&q=80",
    description: "Rich beef stew slow-cooked with red wine, mushrooms, and bacon.",
    ingredients: [
      "1kg beef chuck",
      "200g bacon",
      "2 carrots",
      "1 onion",
      "2 cups red wine",
      "200g mushrooms",
      "2 tbsp flour",
      "2 cloves garlic",
      "Thyme, bay leaf, salt, pepper"
    ],
    steps: [
      "Sear beef and bacon.",
      "Add vegetables and cook.",
      "Add wine and herbs. Simmer for 2-3 hours.",
      "Add mushrooms at end.",
      "Serve hot with bread or potatoes."
    ],
    tags: ["Stew", "Classic", "Comfort"],
    prepTime: "30 min",
    cookTime: "2.5 hr",
    servings: 4,
  },
  {
    id: "kung-pao-chicken",
    name: "Kung Pao Chicken",
    cuisine: "Chinese",
    country: "China",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=500&q=80",
    description: "Spicy Sichuan stir-fry with chicken, peanuts, and chili peppers.",
    ingredients: [
      "500g chicken breast",
      "100g peanuts",
      "8 dried chilies",
      "2 tbsp soy sauce",
      "2 tbsp rice vinegar",
      "2 tsp Sichuan peppercorns",
      "1 bell pepper",
      "2 scallions"
    ],
    steps: [
      "Marinate and stir-fry chicken.",
      "Add peppers and chilies, stir fry.",
      "Add peanuts, sauce, and peppercorns.",
      "Toss everything together and serve."
    ],
    tags: ["Spicy", "Stir-Fry", "Quick"],
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
    cuisine: "Moroccan",
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
