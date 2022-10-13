import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import {
  CustomIngredientInputProps,
  IngredientState,
} from "./CustomIngredientInput.types";

const CustomIngredientInput = ({
  setRecipe,
  recipe,
  ingredientType,
}: CustomIngredientInputProps) => {
  const [state, setState] = useState<IngredientState>({});

  const handleClick = () => {
    switch (ingredientType) {
      case "fermentable": {
        setRecipe({
          ...recipe,
          fermentables: recipe.fermentables?.concat([
            { name: state.name!, quantity: state.amount! },
          ]),
        });
      }
    }
  };
  return (
    <>
      <Input
        bordered
        type="text"
        label="Recipe Name"
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <Input
        bordered
        type="number"
        step=".01"
        label="Amount"
        onChange={(e) =>
          setState({ ...state, amount: parseFloat(e.target.value) })
        }
      />
      <Button
        style={{ backgroundColor: "#001b3f", fontWeight: "bold" }}
        onClick={handleClick}
      >
        Save
      </Button>
    </>
  );
};

export default CustomIngredientInput;
