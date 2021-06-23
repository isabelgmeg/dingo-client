import { Link } from "react-router-dom";

import "./LinkProfileButton.scss"

export default function LinkProfileButton(props) {
  const { section, image, sectionText } = props;

  return (
    <div className="linkButton">
      <div className="linkButton_text">
        <p className="linkButton_text_section">{sectionText}</p>
        <Link to={`/profile/${section}`} className="linkButton_text_link">
          <p className="linkButton_text_link_text">Go there! </p>
        </Link>
      </div>
      <div className="linkButton_container">
          <img src={image} alt="linkButton_container_image" />
      </div>
    </div>
  );
}
