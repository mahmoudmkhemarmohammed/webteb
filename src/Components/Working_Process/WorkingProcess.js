import { Container } from "react-bootstrap";
import "./WorkingProcess.css";
import Sticker from "../Sticker/Sticker";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { sr } from "../..";
const Card = (props) => {
  useEffect(() => {
    sr.reveal(".working .container .heading h2" , {origin:"top"})
    sr.reveal(".working .container .heading h3" , {origin:"top" , delay: 700})
    sr.reveal(".working .container .cards .card" , {origin:"bottom" , delay: 700})
  })
  return (
    <div className={`card ${props.clasNam}`}>
      <h2>{props.num}</h2>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <Link to={"/contact-us"} className="cssbuttons-io-button">
        Read More
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </Link>
      <span></span>
    </div>
  );
};
const WorkingProcess = () => {
  return (
    <div className="working">
      <Container>
        <div className="heading">
          <h3>Working Process</h3>
          <h2>How we works?</h2>
        </div>
        <div className="cards" style={{ position: "relative" }}>
          <Card
            num="01"
            title="Make Appointmnet"
            desc="It is a long established fact that a reader will be distracted by the readable content of."
          />
          <Card
            clasNam="active"
            num="02"
            title="Take Treatment"
            desc="It is a long established fact that a reader will be distracted by the readable content of."
          />
          <Card
            num="03"
            title="Registration"
            desc="It is a long established fact that a reader will be distracted by the readable content of."
          />
          <Sticker
            clasNam="moayen"
            sticker={require("../../assets/imges/download.png")}
            alt="mos"
            position="absolute"
            left="-5%"
            animation="transtop 1.7s linear infinite"
          />
          <Sticker
            clasNam="mos"
            sticker={require("../../assets/imges/mos.png")}
            alt="mos"
            position="absolute"
            left="-7%"
            top="2%"
            animation="rot 8s linear infinite"
          />
          <Sticker
            clasNam="cir2"
            sticker={require("../../assets/imges/cir2.png")}
            alt="mos"
            position="absolute"
            left="-10%"
            bottom="0"
            animation="transtop 1.7s linear infinite"
          />
          <Sticker
            clasNam="liner"
            sticker={require("../../assets/imges/liner.png")}
            alt="line"
            position="absolute"
            right="-5%"
            top="1%"
            animation="transtop 1.7s linear infinite"
          />
          <Sticker
            clasNam="x"
            sticker={require("../../assets/imges/circle.png")}
            alt="x"
            position="absolute"
            right="-9%"
            top="50%"
            animation="rot 8s linear infinite"
          />
          <Sticker
            clasNam="x"
            sticker={require("../../assets/imges/cr.png")}
            alt="x"
            position="absolute"
            right="-3%"
            bottom="2%"
            animation="transtop 1.7s linear infinite"
          />
        </div>
      </Container>
    </div>
  );
};
export default WorkingProcess;
