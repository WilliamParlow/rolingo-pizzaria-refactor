import Dexie, { type EntityTable } from "dexie";

const db = new Dexie("RolingoDatabase") as Dexie & {
  foodRecipes: EntityTable<FoodRecipe, "id">;
};

db.version(1).stores({
  foodRecipes: "++id, name, recipe, ingredient, description, imageUrl, type",
});

export { db };
