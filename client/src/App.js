import { Route, Link, Switch } from "react-router-dom";

import SplashPage from "./pages/SplashPage"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import Picture from "./components/Picture.jsx";
import logo from "./assets/dingo_logo.png";

import "./App.css";

function App() {
  return (
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

        </Switch>
      </div>
    </div>
  );
}

export default App;
