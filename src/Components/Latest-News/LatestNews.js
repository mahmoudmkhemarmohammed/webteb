import { Container } from "react-bootstrap";
import CardNews from "./CardNews";
import "./LatestNews.css"
import { useEffect } from "react";
import { sr } from "../..";
const LatestNews = () => {
  useEffect(() => {
    sr.reveal(".latest-news .container .text" , {origin: "bottom"})
    sr.reveal(".latest-news .container .card-box .cards" , {origin: "bottom", delay: 500, interval: 400})
  })
  return (
    <div className="latest-news">
      <Container>
        <div className="text">
            <h3>Latest News</h3>
            <h2>Our Latest News</h2>
        </div>
        <div className="card-box">
          <CardNews src={require("../../assets/imges/pic1.jpg")} title="in this hospital there are special surgeon"/>
          <CardNews src={require("../../assets/imges/pic2.jpg")} title="in this hospital there are special surgeon"/>
          <CardNews src={require("../../assets/imges/pic3.jpg")} title="in this hospital there are special surgeon"/>
        </div>
      </Container>
    </div>
  );
};

export default LatestNews;
