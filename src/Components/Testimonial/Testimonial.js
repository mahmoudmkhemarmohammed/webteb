import "./Testimonial.css";
import { Container } from "react-bootstrap";
import Sticker from "../Sticker/Sticker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { sr } from "../..";
const Testimonial = () => {
  let counter = 0;
  const myRef = useRef();
  const handelLeft = () => {
    if (counter < 100) {
      counter += 14.4;
      myRef.current.style.translate = `-${counter}%`;
      if (counter > 86.4) {
        counter = 0;
        myRef.current.style.translate = `-${counter}%`;
      }
    }
  };
  const handelRight = () => {
    if (counter > 0) {
      counter -= 14.4;
      myRef.current.style.translate = `-${counter}%`;
    }
  };
  useEffect(() => {
    sr.reveal(".testimonial .container .text h3" , {origin: "bottom"})
    sr.reveal(".testimonial .container .text h2" , {origin: "bottom" , delay: 1000})
    sr.reveal(".testimonial .container .box .img , .testimonial .container .box .box-slider" , {origin: "bottom" , delay: 500})
  })
  return (
    <div className="testimonial">
      <Container>
        <div className="text">
          <h3>Testimonial</h3>
          <h2>See What Are The Patients Saying About us</h2>
        </div>
        <div className="box">
          <div className="img">
            <Sticker sticker={require("../../assets/imges/home-img.png")} alt="" />
            <Sticker sticker={require("../../assets/imges/doc1.jpg")} alt="" />
            <Sticker sticker={require("../../assets/imges/doc2.jpg")} alt="" />
            <Sticker sticker={require("../../assets/imges/doc3.jpg")} alt="" />
            <Sticker sticker={require("../../assets/imges/doc4.jpg")} alt="" />
            <Sticker sticker={require("../../assets/imges/doc5.jpg")} alt="" />
            <Sticker sticker={require("../../assets/imges/doc6.jpg")} alt="" />
            <Sticker
              clasNam="x"
              sticker={require("../../assets/imges/mos.png")}
              alt="x"
              position="absolute"
              left="-3%"
              top="2%"
              animation="rot 6s linear infinite"
            />
            <Sticker
              clasNam="x"
              sticker={require("../../assets/imges/cr.png")}
              alt="x"
              position="absolute"
              right="-3%"
              top="2%"
              animation="transtop 1.7s linear infinite"
            />
            <Sticker
              clasNam="x"
              sticker={require("../../assets/imges/circle.png")}
              alt="x"
              position="absolute"
              right="-3%"
              bottom="2%"
              animation="transtop 1.7s linear infinite"
            />
            <Sticker
              clasNam="x"
              sticker={require("../../assets/imges/cir2.png")}
              alt="x"
              position="absolute"
              left="0"
              bottom="2%"
              animation="transtop 1.7s linear infinite"
            />
            <Sticker
              clasNam="x"
              sticker={require("../../assets/imges/download.png")}
              alt="x"
              position="absolute"
              right="-210%"
              top="0"
              animation="transtop 1.7s linear infinite"
              width="fit-content"
              height="fit-content"
              rounded="0"
            />
            <Sticker
              clasNam="x"
              sticker={require("../../assets/imges/mos.png")}
              alt="x"
              position="absolute"
              right="-215%"
              top="50%"
              animation="rot 8s linear infinite"
              width="fit-content"
              height="fit-content"
              rounded="0"
            />
          </div>
          <div className="box-slider">
            <div className="icon">
              <FontAwesomeIcon icon={faArrowLeft} onClick={handelLeft} />
              <FontAwesomeIcon icon={faArrowRight} onClick={handelRight} />
            </div>
            <div className="slider" ref={myRef}>
              <div className="col">
                <p>
                  Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                  dolore smod tempor incididunt ut labore et Lorem ipsum is
                  dolor sit amet, csectetur adipiscing elit, dolore smod tempor
                  incididunt ut labore et.
                </p>
                <h3>Johan Deo</h3>
                <h5>Patitnt</h5>
              </div>
              <div className="col">
                <p>
                  Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                  dolore smod tempor incididunt ut labore et Lorem ipsum is
                  dolor sit amet, csectetur adipiscing elit, dolore smod tempor
                  incididunt ut labore et.
                </p>
                <h3>Johan Deo</h3>
                <h5>Patitnt</h5>
              </div>
              <div className="col">
                <p>
                  Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                  dolore smod tempor incididunt ut labore et Lorem ipsum is
                  dolor sit amet, csectetur adipiscing elit, dolore smod tempor
                  incididunt ut labore et.
                </p>
                <h3>Johan Deo</h3>
                <h5>Patitnt</h5>
              </div>
              <div className="col">
                <p>
                  Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                  dolore smod tempor incididunt ut labore et Lorem ipsum is
                  dolor sit amet, csectetur adipiscing elit, dolore smod tempor
                  incididunt ut labore et.
                </p>
                <h3>Johan Deo</h3>
                <h5>Patitnt</h5>
              </div>
              <div className="col">
                <p>
                  Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                  dolore smod tempor incididunt ut labore et Lorem ipsum is
                  dolor sit amet, csectetur adipiscing elit, dolore smod tempor
                  incididunt ut labore et.
                </p>
                <h3>Johan Deo</h3>
                <h5>Patitnt</h5>
              </div>
              <div className="col">
                <p>
                  Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                  dolore smod tempor incididunt ut labore et Lorem ipsum is
                  dolor sit amet, csectetur adipiscing elit, dolore smod tempor
                  incididunt ut labore et.
                </p>
                <h3>Johan Deo</h3>
                <h5>Patitnt</h5>
              </div>
              <div className="col">
                <p>
                  Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                  dolore smod tempor incididunt ut labore et Lorem ipsum is
                  dolor sit amet, csectetur adipiscing elit, dolore smod tempor
                  incididunt ut labore et.
                </p>
                <h3>Johan Deo</h3>
                <h5>Patitnt</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;