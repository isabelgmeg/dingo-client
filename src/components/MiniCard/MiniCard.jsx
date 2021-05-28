import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import "./MiniCard.scss";

export default function MiniCard({
  recipeId,
  recipeName,
  elabTime,
  calories,
  picture,
}) {
  return (
    <div className="miniCard" key={recipeId}>
      <div className="miniCard_info">
        <div className="miniCard_info_name">
          <p>{recipeName}</p>
        </div>
      </div>
      <div className="miniCard_picture">
        <Link to={`/recipe/${recipeId}`}>
          <img src={picture} alt={recipeName} />
        </Link>
      </div>
      <div className="miniCard_details">
          <span className="miniCard_details_elabTime">
            <FontAwesomeIcon
              icon={faClock}
              className="miniCard_details_elabTime"
            />
            <p>{elabTime} minutes</p>
          </span>
        </div>
      <div className="miniCard_details_calories">
        <p>{calories} Calories</p>
      </div>
    </div>
  );
}
