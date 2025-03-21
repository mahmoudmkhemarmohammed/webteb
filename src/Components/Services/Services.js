import { Container } from "react-bootstrap";
import "./Services.css";
import CardFc from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faKitMedical,
  faMartiniGlass,
  faStethoscope,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { sr } from "../..";
const Services = () => {
  const myRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  let counter = 0;
  const handelChecking = () => {
    if(myRef.current != null) {
      if (counter === 0) {
        rightRef.current.style.opacity = ".4";
      } else {
        rightRef.current.style.opacity = "1";
      }
      if (counter === 75) {
        leftRef.current.style.opacity = ".4";
      } else {
        leftRef.current.style.opacity = "1";
      }
    }
  };
  useEffect(() => {
    handelChecking()
    sr.reveal(".services .container .text" , {origin: "left"})
    sr.reveal(".services .container .box-card .box" , {origin: "right"})
  });
  const translateLeft = () => {
    if (counter < 75) {
      counter += 25;
      myRef.current.style.translate = `-${counter}%`;
      handelChecking();
    }
  };
  const translateRight = () => {
    if (counter > 0) {
      counter -= 25;
      myRef.current.style.translate = `-${counter}%`;
      handelChecking();
    }
  };
  return (
    <div className="services">
      <Container>
        <div className="text">
          <h3>Services</h3>
          <h2>We Cover A Big Variety Of Medical Services</h2>
          <p>
            We provide the special tips and advice’s of heath care treatment and
            high level of best.
          </p>
          <Link className="btn btn-primary" to={"/services"}>All Services</Link>
        </div>
        <div className="box-card">
          <FontAwesomeIcon
            onClick={translateLeft}
            className="left"
            icon={faAngleLeft}
            ref={leftRef}
          />
          <FontAwesomeIcon
            onClick={translateRight}
            className="right"
            icon={faAngleRight}
            ref={rightRef}
          />
          <div className="box" ref={myRef}>
            <CardFc
              foawe={
                <FontAwesomeIcon
                  icon={faStethoscope}
                  style={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    padding: "20px",
                    color: "#565acf",
                    backgroundColor: "#eaeaf396",
                    borderRadius: "10px",
                  }}
                />
              }
              title="Diagnostics"
              desc="We provide the special tips and advice’s of heath care treatment and high level of best."
            />
            <CardFc
              foawe={
                <FontAwesomeIcon
                  icon={faMartiniGlass}
                  style={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    padding: "20px",
                    color: "#565acf",
                    backgroundColor: "#eaeaf396",
                    borderRadius: "10px",
                  }}
                />
              }
              title="Treament"
              desc="We provide the special tips and advice’s of heath care treatment and high level of best."
            />
            <CardFc
              foawe={
                <FontAwesomeIcon
                  icon={faKitMedical}
                  style={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    padding: "20px",
                    color: "#565acf",
                    backgroundColor: "#eaeaf396",
                    borderRadius: "10px",
                  }}
                />
              }
              title="Surgery"
              desc="We provide the special tips and advice’s of heath care treatment and high level of best."
            />
            <CardFc
              foawe={
                <FontAwesomeIcon
                  icon={faTaxi}
                  style={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    padding: "20px",
                    color: "#565acf",
                    backgroundColor: "#eaeaf396",
                    borderRadius: "10px",
                  }}
                />
              }
              title="Emergency"
              desc="We provide the special tips and advice’s of heath care treatment and high level of best."
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Services;
