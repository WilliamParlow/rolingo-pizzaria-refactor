"use client";

import EmptyContainer from "@/components/EmptyContainer/intex";
import FoodRecipe from "@/components/FoodRecipe";
import { db } from "@/services/db";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";

const PizzaPage: React.FC = () => {
  const pizzas: FoodRecipe[] =
    useLiveQuery(() =>
      db.foodRecipes?.where("type").equalsIgnoreCase("PIZZA").toArray()
    ) || [];
  return pizzas?.length ? (
    <div className="grid grid-cols-1 gap-4">
      {pizzas.map((pizza) => (
        <FoodRecipe key={pizza.id} foodRecipe={pizza} />
      ))}
    </div>
  ) : (
    <EmptyContainer />
  );
};

export default PizzaPage;
