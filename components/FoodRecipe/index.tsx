import { NO_IMAGE_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FoodRecipeProps {
  foodRecipe: FoodRecipe;
}

const FoodRecipe: React.FC<FoodRecipeProps> = ({ foodRecipe }) => {
  return (
    <div className="flex flex-col p-2 shadow rounded-lg bg-white">
      <Image
        src={foodRecipe.imageUrl || NO_IMAGE_URL}
        alt={foodRecipe.name || ""}
        width={300}
        height={300}
        className="w-full h-96 rounded-lg max-h-56"
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mt-2">
          {foodRecipe.name}
        </h2>
        <div className="my-2">
          <span className="border w-full block"></span>
        </div>
        <div className="text-sm">
          <p>{foodRecipe.description}</p>
        </div>
        <Link href={`/food-recipe/${foodRecipe?.id}`} className="cursor-pointer text-center w-full py-2 mt-4 bg-[#3cc844] rounded-md text-white text-sm hover:bg-[#3dd966] transition duration-200">
          Ver Receita
        </Link>
      </div>
    </div>
  );
};

export default FoodRecipe;
