// import { useContext } from 'react';

import { UserContext, useUser } from './context/User';
import { Route, Switch } from "react-router-dom";

import SplashPage from "./pages/SplashPage"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import BiometricPage from "./pages/BiometricPage"
import MealPlanPage from "./pages/MealPlanPage"
import IngredientPage from "./pages/IngredientPage"
import RecipePage from './pages/RecipePage'

import "./App.scss";

function App() {
  // const { logout } = useContext(UserContext);


  const userContextData = useUser();
  return (
    <UserContext.Provider value={userContextData}>
    <div className="App">
        {/* <button onClick={()=>logout()}>logout</button> */}
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/biometric">
            <BiometricPage />
          </Route>
          <Route exact path="/mealPlan">
            <MealPlanPage />
          </Route>
          <Route exact path="/ingredients/:ingredientId">
            <IngredientPage />
          </Route>
          <Route exact path="/recipe/:recipeId">
            <RecipePage />
          </Route>
        </Switch>
    </div>
        </UserContext.Provider>
  );
}

export default App;
