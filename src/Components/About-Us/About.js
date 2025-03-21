import { Container } from "react-bootstrap";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faFire, faTaxi, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import Sticker from "../Sticker/Sticker";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { sr } from "../..";
const About = (props) => {
  useEffect(() => {
    sr.reveal(".about .container .img" , {origin:"bottom"})
    sr.reveal(".about .container .text" , {origin:"bottom" , delay: 1000})
    sr.reveal(".about .container .text h3" , {origin:"top" , delay: 1500})
  })
  return (
    <div className="about" style={{paddingTop: props.top , paddingBottom: props.bottom}}>
      <Container>
        <div className="img">
          <div>
          <Sticker sticker={require("../../assets/imges/pic-1.ad1ed7ee8284087fe9ee.jpg")} alt="about"/>
          </div>
          <div>
          <Sticker sticker={require("../../assets/imges/pic-2.0593bc2fd8a13cf8c19f.jpg")} alt="about"/>
          </div>
          <div>
          <Sticker clasNam="three" sticker={require("../../assets/imges/pic-3.fa689b1037dbf69567a3.jpg")} alt="about"/>
          </div>
          <div className="box">
            20 <span>Year Experience</span>
          </div>
          <Sticker clasNam="moayen" sticker={require("../../assets/imges/cir2.png")} alt="mos"/>
          <Sticker clasNam="cr" sticker={require("../../assets/imges/liner.png")} alt="cr"/>
          <Sticker clasNam="cir2" sticker={require("../../assets/imges/cr.png")} alt="cir2"/>
        </div>
        <div className="text">
          <h3>About Us</h3>
          <h2>The Great Place Of Medical Hospital Center</h2>
          <p>
            We provide the special tips and advice’s of heath care treatment and
            high level of best technology involve in the our hospital.
          </p>
          <div className="ser">
            <div><FontAwesomeIcon icon={faTaxi} /><span>Emergency Help</span></div>
            <div><FontAwesomeIcon icon={faBed} /><span>Qualified Doctors</span></div>
            <div><FontAwesomeIcon icon={faFire} /><span>Best Professionals</span></div>
            <div><FontAwesomeIcon icon={faUserDoctor} /><span>Medical Treatment</span></div>
          </div>
          <Link className="btn btn-primary" to={"/about"} style={{"background":"#565acf"}}>Read More</Link>
          <Sticker clasNam="moayen" sticker={require("../../assets/imges/download.png")} alt="mos"/>
          <Sticker clasNam="cr" sticker={require("../../assets/imges/cr.png")} alt="cr"/>
          <Sticker clasNam="cir2" sticker={require("../../assets/imges/circle.png")} alt="cir2"/>
        </div>
      </Container>
    </div>
  );
};
export default About;
