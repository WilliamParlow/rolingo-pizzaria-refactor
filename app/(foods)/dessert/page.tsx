"use client";

import EmptyContainer from "@/components/EmptyContainer/intex";
import FoodRecipe from "@/components/FoodRecipe";
import { db } from "@/services/db";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";

const DessertPage: React.FC = () => {
  const desserts: FoodRecipe[] =
    useLiveQuery(() =>
      db.foodRecipes?.where("type").equalsIgnoreCase("DESSERT").toArray()
    ) || [];
  return desserts?.length ? (
    <div className="grid grid-cols-1 gap-4">
      {desserts.map((dessert) => (
        <FoodRecipe key={dessert.id} foodRecipe={dessert} />
      ))}
    </div>
  ) : (
    <EmptyContainer />
  );
};

export default DessertPage;
