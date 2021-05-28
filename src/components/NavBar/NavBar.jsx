import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/User";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo_noname.png";

import "./NavBar.scss";

export default function NavBar() {
  const { logout } = useContext(UserContext);

  return (
    <div className="navBar_container">
      <Link className="navBar_container_logo" to="/biometric">
        <img className="navBar_container_logo_image" src={logo} alt={logo} />
      </Link>
      <div className="navBar_container_list">
        <Link className="navBar_container_list_link" to="/mealPlan">
          <FontAwesomeIcon
            icon={faUtensils}
            className="navBar_container_list_icon"
          />
        </Link>

        <Link className="navBar_container_list_link" to="/recipes">
          <FontAwesomeIcon
            icon={faHamburger}
            className="navBar_container_list_icon"
          />
        </Link>

        <Link className="navBar_container_list_link" to="/profile">
          <FontAwesomeIcon
            icon={faIdCard}
            className="navBar_container_list_icon"
          />
        </Link>
        <Link className="navBar_container_list_link" to="/login">
          <FontAwesomeIcon
            className="navBar_container_list_icon"
            icon={faSignOutAlt}
            onClick={logout}
          />
        </Link>
      </div>
    </div>
  );
}
