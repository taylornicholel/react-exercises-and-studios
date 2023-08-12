import recipedata from "./recipe.json";

function RecipeName() {
  const recipeName = recipedata.map((recipe) => { // make sure that recipe is not being mixed as a global and local variable
    return <h1 key={recipe.name}>{recipe.name}</h1>;
  }) 
  return  ( // recipedata;
    <div>
      {recipeName}; 
    </div>
  );
}

export default RecipeName;

//import return the name of the recipe as a level 1 header