import { Input, Textarea, Grid } from "@nextui-org/react";
import React from "react";

const CreateRecipe = () => {
  const submitForm = () => {};
  return (
    <>
      <form onSubmit={submitForm}>
        <h3>About</h3>
        <Grid.Container gap={2}>
          <Grid md={12}>
            <Input
              bordered
              type="text"
              step=".01"
              label="Recipe Name"
              //   onChange={(e) => setOriginalGravity(parseFloat(e.target.value))}
            />
            </Grid>
            <Grid>
            <Textarea bordered label="Description" />
            
          </Grid>
        </Grid.Container>
        <h3>Fermentables</h3>
        <Grid.Container gap={2}>
          <Grid md={12}>
            
            
          </Grid>
        </Grid.Container>
      </form>
    </>
  );
};

export default CreateRecipe;
