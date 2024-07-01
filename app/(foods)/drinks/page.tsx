"use client";

import EmptyContainer from "@/components/EmptyContainer/intex";
import FoodRecipe from "@/components/FoodRecipe";
import { db } from "@/services/db";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";

const DrinksPage: React.FC = () => {
  const drinks: FoodRecipe[] =
    useLiveQuery(() =>
      db.foodRecipes?.where("type").equalsIgnoreCase("DRINK").toArray()
    ) || [];
  return drinks?.length ? (
    <div className="grid grid-cols-1 gap-4">
      {drinks.map((drink) => (
        <FoodRecipe key={drink.id} foodRecipe={drink} />
      ))}
    </div>
  ) : (
    <EmptyContainer />
  );
};

export default DrinksPage;
