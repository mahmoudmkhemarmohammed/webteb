import { Container } from "react-bootstrap";
import "./Home.css";
import Sticker from "../Sticker/Sticker";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { sr } from "../..";
const Home = () => {
  useEffect(() => {
    sr.reveal(".home .container .text p" , {origin: "bottom" , delay: 1000})
    sr.reveal(".home .container .text h2 , .home .container .text a" , {origin: "left"})
    sr.reveal(".home .container .img img", {origin: "bottom"})
  })
  return (
    <div className="home">
      <Container>
        <div className="text">
          <p>We Provide All Health Care Solution</p>
          <h2>Protect Your Health And Take Care To Of Your Health</h2>
          <Link to={"about"} >Read More</Link>
          <Sticker
            clasNam="moayen"
            sticker={require("../../assets/imges/download.png")}
            alt="mos"
          />
          <Sticker clasNam="mos" sticker={require("../../assets/imges/mos.png")} alt="mos" />
          <Sticker clasNam="cir2" sticker={require("../../assets/imges/cir2.png")} alt="cir2" />
        </div>
        <div className="img">
          <Sticker sticker={require("../../assets/imges/doc.png")} alt="doc" />
          <Sticker
            clasNam="liner"
            sticker={require("../../assets/imges/liner.png")}
            alt="line"
          />
          <Sticker clasNam="x" sticker={require("../../assets/imges/circle.png")} alt="x" />
        </div>
      </Container>
    </div>
  );
};
export default Home;
