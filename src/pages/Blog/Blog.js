import { Container } from "react-bootstrap";
import HeadingComponents from "../Heading-Components/HeadingComponents";
import CardNews from "../../Components/Latest-News/CardNews";
import { useEffect } from "react";
import { sr } from "../..";
const Blog = () => {
  useEffect(() => {
    sr.reveal(".blog-page .container .cards-box .cards" , {interval: 400})
  })
  return (
    <>
      <HeadingComponents title="Blog Grid 3" />
      <div className="blog-page" style={{ padding: "100px 0" }}>
        <Container>
          <div className="cards-box">
            <CardNews
              src={require("../../assets/imges/pic1.jpg")}
              title="Why Is Skin Surgeon Considered Underrated"
            />
            <CardNews
              src={require("../../assets/imges/pic2.jpg")}
              title="in this hospital there are special surgeon"
            />
            <CardNews
              src={require("../../assets/imges/pic3.jpg")}
              title="Dental Care for Women is very important"
            />
            <CardNews
              src={require("../../assets/imges/pic4.jpg")}
              title="Understand Health Before You Regret"
            />
            <CardNews
              src={require("../../assets/imges/pic5.jpg")}
              title="Health Will Be A Thing Of The Past And Here"
            />
            <CardNews
              src={require("../../assets/imges/pic6.jpg")}
              title="Can you get a diflucan prescription online?"
            />
            <CardNews
              src={require("../../assets/imges/pic7.jpg")}
              title="Ten Gigantic Influences Of Health"
            />
            <CardNews
              src={require("../../assets/imges/pic8.jpg")}
              title="Why Is Skin Surgeon Considered Underrated"
            />
            <CardNews
              src={require("../../assets/imges/pic9.jpg")}
              title="Everyone need to go Dentist regularly"
            />
          </div>
        </Container>
      </div>
    </>
  );
};
export default Blog;
