import { Input, Textarea, Grid, Button, Dropdown } from "@nextui-org/react";
import React, { useState } from "react";
import CustomIngredientInput from "../CustomIngredientInput/CustomIngredientInput";
import IngredientModal from "../IngredientModal/IngredientModal";
import styles from "./CreateRecipe.module.css";
import { LineItem, RecipeContent } from "./CreateRecipe.types";


const CreateRecipe = () => {
  const submitForm = () => {};

  const [recipe, setRecipe] = useState<RecipeContent>({
    fermentables: [],
  });

  return (
    <div className={styles.Container}>
      <div className={styles.CreateContainer}>
        <form onSubmit={submitForm}>
          <h3>About</h3>
          <Grid.Container gap={2}>
            <Grid md={12} xl={12}>
              <Input
                bordered
                type="text"
                step=".01"
                label="Recipe Name"
                onChange={(e) =>
                  setRecipe({ ...recipe, recipeName: e.target.value })
                }
              />
            </Grid>
            <Grid>
              <Textarea
                bordered
                label="Description"
                onChange={(e) =>
                  setRecipe({ ...recipe, description: e.target.value })
                }
              />
            </Grid>
          </Grid.Container>
          <h3>Fermentables</h3>
          <Grid.Container gap={2}>
            <Grid md={12}>
              <IngredientModal buttonText="Add Fermentable">
                Add fermentables here
                <CustomIngredientInput
                  setRecipe={setRecipe}
                  recipe={recipe}
                  ingredientType="fermentable"
                />
                {recipe.fermentables?.map((item: LineItem, index) => (
                  <p key={index}>{item.name} x {item.quantity}</p>
                ))}
              </IngredientModal>
            </Grid>
          </Grid.Container>
          <h3>Hops</h3>
          <Grid.Container gap={2}>
            <Grid md={12}>
              <IngredientModal buttonText="Add Hop">
                Add hops here
              </IngredientModal>
            </Grid>
          </Grid.Container>
          <h3>Yeast</h3>
          <Grid.Container gap={2}>
            <Grid md={12}>
              <IngredientModal buttonText="Add Yeast">
                Add yeast here
              </IngredientModal>
            </Grid>
          </Grid.Container>
        </form>
      </div>
      <div>
        <Grid>
          <Button.Group>
            <Button disabled>Scale</Button>
            <Button style={{ backgroundColor: "#001b3f", fontWeight: "bold" }}>
              Save
            </Button>
          </Button.Group>
        </Grid>
        <Grid>
          <h3>Recipe Stats</h3>
          <h2>Recipe name: {recipe.recipeName}</h2>
          <p>Recipe name: {recipe.description}</p>
        </Grid>
      </div>
    </div>
  );
};

export default CreateRecipe;
