import { createContext, useContext } from "react";
import { RecipeContent } from "../components/CreateRecipe/CreateRecipe.types";

const RecipeContext = createContext({
  cmsContent: {} as Partial<RecipeContent>,
});

const RecipeContextProvider = ({
  children,
  value = {} as Partial<RecipeContent>,
}: {
  children: React.ReactNode;
  value?: Partial<RecipeContent>;
}) => {
  return (
    <RecipeContext.Provider value={{ cmsContent: {} }}>
      {children}
    </RecipeContext.Provider>
  );
};

const useRecipeContextState = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useCmsContextStateState must be used within a CmsContent");
  }
  return context;
};

const Debug = () => {
  const { cmsContent } = useRecipeContextState();
  return <pre>{JSON.stringify(cmsContent || {}, null, 2)}</pre>;
};

export { RecipeContextProvider, Debug, useRecipeContextState };
