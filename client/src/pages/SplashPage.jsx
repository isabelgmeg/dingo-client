import { Route, Link } from "react-router-dom";

import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

import logo from "../assets/dingo_logo.png";

import "../styles/splash.scss";


export default function SplashPage (){
    return (
        <div className="splash_container">
        <div className="splash_container_logo">
          
          <Link to="/">
          <img src={logo} alt={logo} />
          </Link>
        </div>
        <h1>Getting Healthy made easy</h1>
        <Route path="/register">
          <button className="splash_container_registerButton">
          <RegisterPage />
          </button>
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>
      </div>
    )
}