interface RecipeContent {
  recipeName?: string;
  description?: string;
  fermentables?: LineItem[];
  hops?: string[];
}

interface LineItem {
    name: string;
    quantity: number;
}

export type { RecipeContent, LineItem };
