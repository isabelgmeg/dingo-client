import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

import logo from "../assets/dingo_logo.png";

import "../styles/login.scss";

export default function LoginPage() {
  return (
    <div className="login_container">
      <div className="login_content">
        <Link className="login_container_logo" to="/">
          <img className="login_container_logo_image" src={logo} alt={logo} />
        </Link>
        <h1>Sign In</h1>
      <LoginForm />
        <div className="login_container_register">
        <span className="login_container_question">Dont have an account?</span>
      <Link to="/register">
        <a className="login_container_link" href="/register">
          Register
        </a>
      </Link>
      </div>
        </div>
    </div>
  );
}
