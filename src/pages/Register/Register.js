import { Container } from "react-bootstrap";
import HeadingComponents from "../Heading-Components/HeadingComponents";
import { Link } from "react-router-dom";
import Sticker from "../../Components/Sticker/Sticker";
import { useEffect } from "react";
import { sr } from "../..";
const Register = () => {
  useEffect(() => {
    sr.reveal(".login-box" , {origin: "bottom"})
  })
    return(
        <>
        <HeadingComponents title="Register" />
        <section className="login-section">
        <Container>
          <form className="login-box">
            <div className="logo">
              <Sticker
                sticker={require("../../assets/imges/logo.png")}
                alt="logo"
              />
            </div>
            <div className="inputs">
                <input type="text" placeholder="Name" name="name" />
                <input type="email" placeholder="Email" name="Email" />
                <input type="text" placeholder="Username" name="user" />
                <input type="password" placeholder="Password" name="pass" />
                <Link to={"/"}>Register Now</Link>
                <p>Dont have any account?</p>
                <Link to={"/login"}>Login</Link>
            </div>
          </form>
        </Container>
      </section>
        </>
    )
}
export default Register;