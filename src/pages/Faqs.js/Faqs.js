import { Accordion, Container } from "react-bootstrap";
import LatestNews from "../../Components/Latest-News/LatestNews";
import HeadingComponents from "../Heading-Components/HeadingComponents";
import "./Faqs.css";
import According from "./According";
import { useEffect } from "react";
import { sr } from "../..";
const Faqs = () => {
  useEffect(() => {
    sr.reveal(".faqs .container .box-acc .accordion , .services-details .container .acc .accordion" , {origin: "bottom"})
  })
  return (
    <>
      <HeadingComponents title="Faq's" />
      <div className="faqs">
        <Container>
          <div className="box-acc">
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <According num="0" title="How Doctor Can Ease Your Pain?" />
              <According num="1" title="How do I Withdraw from a subject?"/>
              <According num="2" title="Understand Doctor Before You Regret?"/>
              <According num="3" title="What types of systems do you support?"/>
              <According num="4" title="We Teach You How To Feel Better?"/>
              <According num="5" title="How Can I Contact You"/>
            </Accordion>
          </div>
          <div className="box-acc">
            <Accordion defaultActiveKey={["4"]} alwaysOpen>
              <According num="1" title="How do I Withdraw from a subject?"/>
              <According num="3" title="What types of systems do you support?"/>
              <According num="4" title="We Teach You How To Feel Better?"/>
              <According num="0" title="How Doctor Can Ease Your Pain?" />
              <According num="5" title="How Can I Contact You"/>
              <According num="2" title="Understand Doctor Before You Regret?"/>
            </Accordion>
          </div>
        </Container>
      </div>
      <LatestNews />
    </>
  );
};

export default Faqs;
