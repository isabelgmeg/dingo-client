//   recipeId={recipe._id}
//   recipeName={recipe.name}
//   ingredientsInfo={recipe.ingredientsInfo}
//   elabTime={recipe.elabTime}
//   carbs={recipe.carbs}
//   proteins={recipe.proteins}
//   calories={recipe.calories}
//   instructions={recipe.instructions}
//   picture={recipe.picture}

export const getTotalCalories = (array) =>
  array.reduce(function (prev, cur) {
    return prev + cur.calories;
  }, 0);

  export const getTotalElabTime = (array) =>
  array.reduce(function (prev, cur) {
    return prev + cur.elabTime;
  }, 0);



