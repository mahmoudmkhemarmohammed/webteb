import { Container } from "react-bootstrap";
import HeadingComponents from "../Heading-Components/HeadingComponents";
import Sticker from "../../Components/Sticker/Sticker";
import { Link } from "react-router-dom";
import "./Login.css"
import { useEffect } from "react";
import { sr } from "../..";
const Login = () => {
  useEffect(() => {
    sr.reveal(".login-box")
  })
  return (
    <>
      <HeadingComponents title="Login" />
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
                <input type="text" placeholder="Username" name="user" />
                <input type="password" placeholder="Password" name="pass" />
                <Link to={"/"}>Login</Link>
                <p>Dont have any account?</p>
                <Link to={"/register"}>Register</Link>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
};
export default Login;
