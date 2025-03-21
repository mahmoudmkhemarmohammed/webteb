import { Button, Form } from "react-bootstrap";
import Sticker from "../Sticker/Sticker";

const BookingCop = () => {
  return (
    <div className="bok-form">
      <div className="heading">
        <h2>Book Appointment</h2>
      </div>
      <Form.Select size="lg">
        <option>Select Department</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </Form.Select>
      <br />
      <Form.Select size="lg">
        <option>Select Doctor</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </Form.Select>
      <br />
      <Form.Select size="lg">
        <option>Small select</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </Form.Select>
      <Form.Control
        type="number"
        id="number"
        aria-describedby="number"
        size="lg"
        style={{ marginTop: "20px" }}
        placeholder="Phone Number"
      ></Form.Control>
      <Form.Control
        type="date"
        id="date"
        aria-describedby="date"
        size="lg"
        style={{ marginTop: "20px" }}
      ></Form.Control>
      <Button
        variant="warning"
        style={{
          background: "#f17732",
          color: "#FFF",
          padding: "15px 30px",
          fontSize: "15px",
          marginTop: "20px",
        }}
      >
        Appointment Now
      </Button>
      <Sticker
        position="absolute"
        left="-40%"
        top="10%"
        animation="transtop 1.7s linear infinite"
        clasNam="moayen"
        sticker={require("../../assets/imges/liner.png")}
        alt="mos"
      />
      <Sticker
        position="absolute"
        left="-50%"
        top="60%"
        animation="transtop 1.7s linear infinite"
        clasNam="moayen"
        sticker={require("../../assets/imges/circle.png")}
        alt="mos"
      />
      <Sticker
        position="absolute"
        left="-30%"
        bottom="0"
        animation="transtop 1.7s linear infinite"
        clasNam="moayen"
        sticker={require("../../assets/imges/mos.png")}
        alt="mos"
      />
      <Sticker
        position="absolute"
        left="-25%"
        bottom="40%"
        animation="transtop 1.7s linear infinite"
        clasNam="moayen"
        sticker={require("../../assets/imges/download.png")}
        alt="mos"
      />
      <Sticker
        position="absolute"
        right="-25%"
        bottom="40%"
        animation="transtop 1.7s linear infinite"
        clasNam="moayen"
        sticker={require("../../assets/imges/cr.png")}
        alt="mos"
      />
      <Sticker
        position="absolute"
        right="-200%"
        top="10%"
        animation="transtop 1.7s linear infinite"
        clasNam="moayen"
        sticker={require("../../assets/imges/liner2.png")}
        alt="mos"
      />
      <Sticker
        position="absolute"
        right="-200%"
        top="60%"
        animation="transtop 1.7s linear infinite"
        clasNam="moayen"
        sticker={require("../../assets/imges/heart.png")}
        alt="mos"
      />
      <Sticker
        position="absolute"
        right="-72%"
        bottom="50%"
        animation="transtop 1.7s linear infinite"
        clasNam="moayen"
        sticker={require("../../assets/imges/location.png")}
        alt="mos"
      />
      <Sticker
        position="absolute"
        right="-132%"
        bottom="10%"
        animation="transtop 1.7s linear infinite"
        clasNam="moayen"
        sticker={require("../../assets/imges/sett.png")}
        alt="mos"
      />
    </div>
  );
};
export default BookingCop;
