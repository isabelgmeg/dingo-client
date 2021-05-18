
import { Link } from "react-router-dom";

import logo from "../assets/dingo_logo.png";

import RegisterForm from "../components/RegisterForm/RegisterForm";
import "../styles/register.scss";

export default function RegisterPage() {

  return (
    <div className="register_container">
      <div className="register_content">
        <Link className="register_container_logo" to="/">
          <img
            className="register_container_logo_image"
            src={logo}
            alt={logo}
          />
        </Link>
        <h1>Register</h1>
        <RegisterForm />
        <div className="register_container_register">
          <span className="register_container_question">
            Already registered?
          </span>
          <Link to="/login">
            <span className="register_container_link" href="/login">
              Sign in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
