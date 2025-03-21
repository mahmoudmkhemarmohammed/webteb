import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Sticker from "../Sticker/Sticker";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { sr } from "../..";
const Footer = () => {
  useEffect(() => {
    sr.reveal("footer .container .row .col .box .head" , {origin: "bottom" , delay: 800})
    sr.reveal("footer .container .row .col .box .body , footer .container .end , footer .container .row .col .box .foot" , {origin: "bottom"})
  })
  return (
    <footer>
      <Container>
      <Sticker
            clasNam="liner"
            sticker={require("../../assets/imges/liner.png")}
            alt="line"
            position="absolute"
            right="-8%"
            top="25%"
            animation="transtop 1.7s linear infinite"
          />
          <Sticker
            clasNam="x"
            sticker={require("../../assets/imges/cr.png")}
            alt="x"
            position="absolute"
            left="-8%"
            top="50%"
            animation="transtop 1.2s linear infinite"
          />
          <Sticker
            clasNam="x"
            sticker={require("../../assets/imges/cir2.png")}
            alt="x"
            position="absolute"
            right="-8%"
            bottom="20%"
            animation="rot 8s linear infinite"
          />
        <Row sm md={2} lg={4}>
          <Col>
            <div className="box">
              <div className="head">
                <img src={require("../../assets/imges/logo.png")} alt="logo" />
              </div>
              <div className="body">
                <p>
                  Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                  dolore smod tempor incididunt ut labore et.
                </p>
              </div>
              <div className="foot">
                <FontAwesomeIcon icon={faPhone} />
                <div className="call">
                  <h3>Contact Us</h3>
                  <h2>+0239488493</h2>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="box">
              <div className="head">
                <h3>Quick Links</h3>
              </div>
              <div className="body">
                <ul>
                  <li><Link to={"/about"}>About Us</Link></li>
                  <li><Link to={"/services"}>Services</Link></li>
                  <li><Link to={"/booking"}>Booking</Link></li>
                  <li><Link to={"/faqs"}>Faq's</Link></li>
                  <li><Link to={"/blog"}>Blogs</Link></li>
                  <li><Link to={"/our-team"}>Our Team</Link></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className="box">
              <div className="head">
                <h3>Our Services</h3>
              </div>
              <div className="body">
                <ul>
                  <li><Link to={"/services-details"}>Dental Care</Link></li>
                  <li><Link to={"/services-details"}>Cardiac Clinic</Link></li>
                  <li><Link to={"/services-details"}>Message Therapy</Link></li>
                  <li><Link to={"/services-details"}>Cardiology</Link></li>
                  <li><Link to={"/services-details"}>Precise Diogonsic</Link></li>
                  <li><Link to={"/services-details"}>Abmbulance Services</Link></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className="box">
              <div className="head">
                <h3>Subcribe</h3>
              </div>
              <div className="body">
                <Form.Control type="text" placeholder="Email Eddress" />
                <Button>Subcribe Now</Button>
              </div>
              <div className="foot">
                <Sticker sticker={require("../../assets/imges/facbook.png")} />
                <Sticker sticker={require("../../assets/imges/tewiter.png")} />
                <Sticker sticker={require("../../assets/imges/instgram.png")}/>
                <Sticker sticker={require("../../assets/imges/linkedin.png")}/>
              </div>
            </div>
          </Col>
        </Row>
        <div className="end">
            <p>Made With Love By <span>Mahmoud Mkhemar</span></p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
