
export const getTotalCalories = (array) =>
  array.reduce(function (prev, cur) {
    return prev + cur.calories;
  }, 0);

  export const getTotalElabTime = (array) =>
  array.reduce(function (prev, cur) {
    return prev + cur.elabTime;
  }, 0);

  export const check = (id, array) => {
    if(array.length !==0 && array.includes(id)){
      return "recipeCard_save_button"
    }else{
      return "recipeCard_save_buttonSaved"
    }
  }

