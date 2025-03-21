import { Container } from "react-bootstrap";
import HeadingComponents from "../Heading-Components/HeadingComponents";
import OurCard from "../Our-Card/OurCard";
import { useEffect } from "react";
import { sr } from "../..";

const OurTeam = () => {
  useEffect(() => {
    sr.reveal(".our-card-box .our-card" , {origin: "bottom" , interval: 400})
  })
  return (
    <>
      <HeadingComponents title="Our Team" />
      <Container>
        <div className="our-card-box" style={{ padding: "60px 0" }}>
          <OurCard
            src={require("../../assets/imges/our-card-1.jpg")}
            name="Dr. Mahfuz Riad"
            span="Chiropractor"
          />
          <OurCard
            src={require("../../assets/imges/our-card-2.jpg")}
            name="Dr. Addition Smith"
            span="Dentist"
          />
          <OurCard
            src={require("../../assets/imges/our-card-3.jpg")}
            name="Dr. David Benjamin"
            span="Cardiologist"
          />
          <OurCard
            src={require("../../assets/imges/our-card-4.jpg")}
            name="Dr. Addition Smith"
            span="Dentist"
          />
          <OurCard
            src={require("../../assets/imges/our-card-5.jpg")}
            name="Dr. Mahfuz Riad"
            span="Chiropractor"
          />
          <OurCard
            src={require("../../assets/imges/our-card-6.jpg")}
            name="Dr. David Benjamin"
            span="Cardiologist"
          />
        </div>
      </Container>
    </>
  );
};
export default OurTeam;
