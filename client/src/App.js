import { Route, Link } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import Picture from "./components/Picture.jsx";
import logo from "./assets/dingo_logo.png";

import "./App.css";


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
