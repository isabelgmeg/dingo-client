import { UserContext, useUser } from './context/User';
import { Route, Switch } from "react-router-dom";

import SplashPage from "./pages/SplashPage"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import BiometricPage from "./pages/BiometricPage"

import "./App.scss";

function App() {
  const userContextData = useUser();
  return (
    <UserContext.Provider value={userContextData}>
    <div className="App">
      <div className="main">
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

        </Switch>
      </div>
    </div>
        </UserContext.Provider>
  );
}

export default App;
