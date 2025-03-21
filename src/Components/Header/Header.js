import {
  faBars,
  faChevronRight,
  faClose,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  const myRef = useRef();
  const mySearch = useRef();
  const handelSearch = () => {
    document.querySelector(".search-header").style.left = "0";
  };
  const handelClick = () => {
    setShow(!show);
  };
  useEffect(() => {
    document.querySelectorAll("header .container-fluid a").forEach((a) => {
      a.addEventListener("click", () => {
        setShow(false);
      });
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 25) {
        myRef.current.style.background = "#FFF";
      } else {
        myRef.current.style.background = "transparent";
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setShow(false);
      } else if (e.key === "Backspace") {
        setShow(false);
      }
    });
  }, []);
  return (
    <header ref={myRef}>
      <Container fluid>
        <div className="logo">
          <img src={require("../../assets/imges/logo.png")} alt="logo" />
        </div>
        <ul className={show ? "show" : ""}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            Pages +
            <div className="list">
              <div>
                <Link to={"/about"}>About Us</Link>
                <Link to={"/our-team"}>Our Team</Link>
                <Link to={"/faqs"}>FAQ's</Link>
                <Link to={"/booking"}>Booking</Link>
                <Link to={"/login"}>login / Register</Link>
              </div>
            </div>
          </li>
          <li>
            Servicis +
            <div className="list">
              <div>
                <Link to={"/services"}>Services</Link>
                <Link to={"/services-details"}>Services Detail</Link>
              </div>
            </div>
          </li>
          <li>
            Blog +
            <div className="list">
              <div>
                <Link to={"/blog"}>Blog</Link>
                <Link to={"/"}>Blog Detail (<span>Soon</span>)</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
        <div className="boxed">
          <div className="search">
            <FontAwesomeIcon
              icon={faSearch}
              ref={mySearch}
              onClick={handelSearch}
            />
          </div>
          <div className="call">
            <FontAwesomeIcon icon={faPhone} />
            (+20) 9398387184
          </div>
          <Link to={"/contact-us"}>Contact Us <FontAwesomeIcon icon={faChevronRight} /></Link>
          <div className="bars" onClick={handelClick}>
            <FontAwesomeIcon icon={show ? faClose : faBars} />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
