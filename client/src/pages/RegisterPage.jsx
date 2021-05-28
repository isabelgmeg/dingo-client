
import { Link, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from '../context/User'
import logo from "../assets/dingo_logo.png";

import RegisterForm from "../components/RegisterForm/RegisterForm";
import "../styles/register.scss";

export default function RegisterPage() {
  const { user } = useContext(UserContext);

  return (
    <div className="register_container">
        { user ? (<Redirect push to="/biometric"/>) : (<Redirect push to="/register"/>)}

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
