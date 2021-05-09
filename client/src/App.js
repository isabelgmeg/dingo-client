import { Route, Link } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import logo from "./assets/dingo_logo.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="splash_container">
        <div className="splash_content">
        <Link className="splash_container_logo" to="/">
          <img classNmae="splash_container_logo_image" src={logo} alt={logo} />
        </Link>
        <h1>Getting Healthy made easy</h1>
        <Link className="splash_container_button" to="/register">
          <button className="splash_container_registerButton">
            Register!🔥
          </button>
        </Link>
        <Link to="/login">
        <a className="splash_container_link" href="/login">Sign in</a>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default App;
