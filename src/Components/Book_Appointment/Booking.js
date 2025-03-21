import { Container } from "react-bootstrap";
import BookingCop from "./BookingCop";
import "./Booking.css";
import Sticker from "../Sticker/Sticker";
import { useEffect } from "react";
import { sr } from "../..";
const Booking = () => {
  useEffect(() => {
    sr.reveal(".booking .container .bok-form")
    sr.reveal(".booking .container .img img" , {origin: "bottom"})
  })
  return (
    <div className="booking">
      <Container>
        <BookingCop />
        <div className="img">
          <Sticker sticker={require("../../assets/imges/2.png")} alt="phone" />
          <Sticker
            sticker={require("../../assets/imges/women.eb5c49c523f7d6240d33.png")}
            alt="women"
          />
        </div>
      </Container>
    </div>
  );
};
export default Booking;
