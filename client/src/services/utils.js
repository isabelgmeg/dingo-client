
export const getTotalCalories = (array) =>
  array.reduce(function (prev, cur) {
    return prev + cur.calories;
  }, 0);

  export const getTotalElabTime = (array) =>
  array.reduce(function (prev, cur) {
    return prev + cur.elabTime;
  }, 0);


