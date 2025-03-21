import { Button, Container, Form } from "react-bootstrap";
import HeadingComponents from "../Heading-Components/HeadingComponents";
import { useEffect } from "react";
import { sr } from "../..";
const BookingPage = () => {
  useEffect(() => {
    sr.reveal(".booking-page .container .bok-form" , {origin: "bottom"})
  })
  return (
    <>
      <HeadingComponents title="Booking" />
      <div className="booking-page">
        <Container className="d-flex justify-content-center align-items-center pt-lg-5 pb-lg-5">
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
          </div>
        </Container>
      </div>
    </>
  );
};
export default BookingPage;
