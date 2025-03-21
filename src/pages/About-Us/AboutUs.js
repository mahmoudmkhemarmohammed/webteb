import "./AboutUs.css";
import About from "../../Components/About-Us/About";
import Testimonial from "../../Components/Testimonial/Testimonial";
import LatestNews from "../../Components/Latest-News/LatestNews";
import HeadingComponents from "../Heading-Components/HeadingComponents";
import { Container } from "react-bootstrap";
import OurCard from "../Our-Card/OurCard";
import Sticker from "../../Components/Sticker/Sticker";
import { useEffect } from "react";
import { sr } from "../..";
const AboutUs = () => {
  useEffect(() => {
    sr.reveal(".cards-boxed .container .box .c-box" , {interval: 400})
    sr.reveal(".our-doctor .container .text" , {origin: "bottom" , interval: 400})
  })
  return (
    <>
      <HeadingComponents title="About-Us" />
      <About top="80px" bottom="80px" />
      <CardsBox />
      <OurDoctor />
      <Testimonial />
      <LatestNews />
    </>
  );
};
const CardsBox = () => {
  return (
    <div className="cards-boxed">
      <Container>
        <div className="box">
          <Card
            number="800"
            title="Satisfied Client"
            description="Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."
          />
          <Card
            number="250"
            title="Doctors"
            description="Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."
          />
          <Card
            number="120"
            title="years with you"
            description="Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."
          />
          <Card
            number="400"
            title="Awards"
            description="Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."
          />
        </div>
      </Container>
    </div>
  );
};
const OurDoctor = () => {
  return (
    <div className="our-doctor">
      <Container>
        <div className="text">
          <h3>Our Doctor</h3>
          <h2>Meet Best Doctors</h2>
        </div>
        <div className="our-card-box">
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
          sticker={require("../../assets/imges/mos.png")}
          alt="x"
          position="absolute"
          left="-10%"
          top="30%"
          animation="rot 8s linear infinite"
          width="fit-content"
          height="fit-content"
          rounded="0"
        />
        <Sticker
          clasNam="x"
          sticker={require("../../assets/imges/transOrang.png")}
          alt="x"
          position="absolute"
          right="-10%"
          bottom="0%"
          animation="transtop 1.7s linear infinite"
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
          bottom="0%"
          animation="transtop 1.7s linear infinite"
          width="fit-content"
          height="fit-content"
          rounded="0"
        />
      </Container>
    </div>
  );
};
const Card = (props) => {
  return (
    <div className="c-box">
      <h2>{props.number}</h2>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};
export default AboutUs;
export { Card, CardsBox , OurDoctor };
