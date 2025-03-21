import "./Services.css";
import { Container } from "react-bootstrap";
import HeadingComponents from "../Heading-Components/HeadingComponents";
import CardFc from "../../Components/Services/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKitMedical,
  faMartiniGlass,
  faStethoscope,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { CardsBox, OurDoctor } from "../About-Us/AboutUs";
import LatestNews from "../../Components/Latest-News/LatestNews";
import { useEffect } from "react";
import { sr } from "../..";
const ServicesPage = () => {
  useEffect(() => {
    sr.reveal(".serv-page .card" , {origin: "left" , interval: 400});
    sr.reveal(".cards-boxed .container .box .c-box " , {origin: "right" , interval: 400});
    sr.reveal(".our-card-box .our-card" , {origin: "bottom" , interval: 400});
  })
  return (
    <>
      <HeadingComponents title="Services" />
      <div className="services-page" style={{ padding: "100px 0" }}>
        <Container>
          <div className="serv-page">
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
          </div>
        </Container>
      </div>
      <CardsBox />
      <OurDoctor />
      <LatestNews />
    </>
  );
};
export default ServicesPage;
