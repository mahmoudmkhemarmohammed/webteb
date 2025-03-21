import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sticker from "../../Components/Sticker/Sticker";
import { useEffect } from "react";
import { sr } from "../..";
const HeadingComponents = (props) => {
  useEffect(() => {
    sr.reveal(".heading-components .container h2 , .heading-components .container .heading-box")
  })
  return (
    <div className="heading-components">
      <Container>
        <h2>{props.title}</h2>
        <div className="heading-box">
          <div className="icon">
            <FontAwesomeIcon icon={faHome} />
            <Link to={"/"}>Home</Link>
          </div>
          <span>/</span>
          <h5>{props.title}</h5>
        </div>
        <Sticker
          clasNam="x"
          sticker={require("../../assets/imges/mos.png")}
          alt="x"
          position="absolute"
          right="-10%"
          top="30%"
          animation="rot 8s linear infinite"
          width="fit-content"
          height="fit-content"
          rounded="0"
        />
        <Sticker
          clasNam="x"
          sticker={require("../../assets/imges/cir2.png")}
          alt="x"
          position="absolute"
          left="-10%"
          top="30%"
          animation="rot 8s linear infinite"
          width="fit-content"
          height="fit-content"
          rounded="0"
        />
      </Container>
    </div>
  );
};
export default HeadingComponents;