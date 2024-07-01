interface FoodRecipe {
  id?: number;
  name: string;
  recipe: string;
  ingredient: string;
  description: string;
  imageUrl: string;
  type: "PIZZA" | "DRINK" | "DESSERT";
}

interface User {
  id?: number;
  name?: string;
  login?: string;
  passwd?: string;
  admin?: boolean;
  blocked?: boolean;
}
