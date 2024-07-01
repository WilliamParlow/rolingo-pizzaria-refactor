"use client";

import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import { db } from "@/services/db";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddFoodRecipePage: React.FC = () => {
  const [foodRecipe, setFoodRecipe] = useState<FoodRecipe>({
    name: "",
    description: "",
    imageUrl: "",
    ingredient: "",
    recipe: "",
    type: "PIZZA",
  });

  const resetFields = () => {
    setFoodRecipe({
      name: "",
      description: "",
      imageUrl: "",
      ingredient: "",
      recipe: "",
      type: "PIZZA",
    });
  };

  const handleAddRecipe = async () => {
    if (isAllFieldsValid()) {
      try {
        toast
          .promise(db.foodRecipes?.add(foodRecipe), {
            loading: "Salvando receita...",
            success: <b>Receita salva com sucesso!</b>,
            error: <b>Não foi possível salvar a receita.</b>,
          })
          .then(() => resetFields());
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleFieldChange = (field: string, value: string) => {
    setFoodRecipe((prev) => ({ ...prev, [field]: value }));
  };

  const isAllFieldsValid = () => {
    return (
      foodRecipe?.name &&
      foodRecipe?.description &&
      foodRecipe?.imageUrl &&
      foodRecipe?.ingredient &&
      foodRecipe?.recipe &&
      foodRecipe?.type
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Adicionar Receita</h1>
      <SelectField
        label="Tipo de receita"
        options={[
          { label: "Pizza", value: "PIZZA" },
          { label: "Bebida", value: "DRINK" },
          { label: "Sobremesa", value: "DESSERT" },
        ]}
        value={foodRecipe.type}
        onChange={(e) => handleFieldChange("type", e.target.value)}
      />
      <InputField
        label="Nome da Receita"
        value={foodRecipe.name}
        onChange={(e) => handleFieldChange("name", e.target.value)}
      />
      <InputField
        label="Descrição"
        value={foodRecipe.description}
        onChange={(e) => handleFieldChange("description", e.target.value)}
      />
      <InputField
        label="Ingredientes"
        value={foodRecipe.ingredient}
        onChange={(e) => handleFieldChange("ingredient", e.target.value)}
      />
      <InputField
        label="Modo de Preparo"
        value={foodRecipe.recipe}
        onChange={(e) => handleFieldChange("recipe", e.target.value)}
      />
      <InputField
        label="Link da Imagem"
        value={foodRecipe.imageUrl}
        onChange={(e) => handleFieldChange("imageUrl", e.target.value)}
      />
      <button
        className="w-full py-3 mt-4 bg-[#3cc844] rounded-md text-white text-sm hover:bg-[#3dd966] transition duration-200"
        onClick={handleAddRecipe}
      >
        Salvar
      </button>
    </div>
  );
};

export default AddFoodRecipePage;
