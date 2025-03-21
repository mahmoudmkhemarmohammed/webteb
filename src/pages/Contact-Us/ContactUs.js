import { Container } from "react-bootstrap";
import HeadingComponents from "../Heading-Components/HeadingComponents";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact-Us.css";
import { useEffect } from "react";
import { sr } from "../..";
const ContactUs = () => {
  useEffect(() => {
    sr.reveal(".contact-us .container .contact-box" , {origin: "bottom"})
  })
  return (
    <>
      <HeadingComponents title="Contact-Us" />
      <div className="contact-us">
        <Container>
          <div className="contact-box">
            <div className="inputs">
              <input type="text" placeholder="Your Name" name="name" />
              <input type="email" placeholder="Email" name="email" />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone Number"
              />
              <select name="department">
                <option value="selecty Department">Selecty Department</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <textarea placeholder="Type Message"></textarea>
              <Link to={"/"}>Submit</Link>
            </div>
            <div className="contact-info">
              <div className="content">
                <h3>Contact Us For Any Informations</h3>
                <h3>
                  <FontAwesomeIcon icon={faLocation} /> Location
                </h3>
                <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                <h3>
                  <FontAwesomeIcon icon={faPhone} /> Email & Phone
                </h3>
                <p>info@yourdomain.com (+68) 120034509</p>
                <h3>
                  <FontAwesomeIcon icon={faEarth} /> Follow Us
                </h3>
                <div className="linkes">
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faLinkedin} />
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default ContactUs;