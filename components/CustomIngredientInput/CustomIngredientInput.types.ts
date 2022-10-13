import { RecipeContent } from "../CreateRecipe/CreateRecipe.types";

interface IngredientState {
  name?: string;
  amount?: number;
}

interface CustomIngredientInputProps {
  setRecipe: (state: RecipeContent) => void;
  recipe: RecipeContent;
  ingredientType: "fermentable" | "hop" | "yeast";
}

export type { CustomIngredientInputProps, IngredientState };
