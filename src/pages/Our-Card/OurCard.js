import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./OurCard.css";
const OurCard = (props) => {
  return (
    <div className="our-card">
      <div className="img">
        <img src={props.src} alt="our-card" />
      </div>
      <div className="text">
        <h3>{props.name}</h3>
        <span>{props.span}</span>
        <div className="linkes">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};
export default OurCard;