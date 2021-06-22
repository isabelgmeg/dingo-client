import { Link } from "react-router-dom";

import "./LinkProfileButton.scss"

export default function LinkProfileButton(props) {
  const { section, image, sectionText } = props;

  return (
    <div className="profile_buttonSection">
      <div className="profile_buttonSection_text">
        <p>{sectionText}</p>
        <Link to={`/profile/${section}`} className="profile_buttonSection_text_button">
          <p className="profile_buttonSection_text_button">Go there! </p>
        </Link>
      </div>
      <div className={`profile_buttonSection_image`}>
          <img src={image} alt="sectionText" />
      </div>
    </div>
  );
}
