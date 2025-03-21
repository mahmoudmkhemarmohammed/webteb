import { Accordion, Container } from "react-bootstrap";
import HeadingComponents from "../Heading-Components/HeadingComponents";
import Sticker from "../../Components/Sticker/Sticker";
import According from "../Faqs.js/According";
import "./ServicesDetails.css"
import { useEffect } from "react";
import { sr } from "../..";
const ServicesDetails = () => {
    useEffect(() => {
        sr.reveal(".services-details .container .liststickey , .services-details .container .details" , {origin: "bottom"})
    })
    return(
        <>
        <HeadingComponents title="Serv Details" />
        <section className="services-details">
        <Container>
            <div className="details">
                <div className="img">
                <Sticker sticker={require("../../assets/imges/servdetails.jpg")} alt="servLogo"/>
                </div>
                <div className="title" >
                    <h2>Why Medical Had Been So Popular Till</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div className="info">
                    <div className="ulchecked">
                        <ul>
                            <li>Then along come two they</li>
                            <li>That’s just a little bit more than</li>
                            <li>Standard dummy text ever since</li>
                            <li>Simply dummy text of the printing</li>
                            <li>Make a type specimen book</li>
                        </ul>
                    </div>
                    <div className="bar">
                        <div>
                            <span>Advenced Techonolgy</span>
                            <div className="progress"> <span></span></div>
                        </div>
                        <div>
                            <span>Certified Engineers</span>
                            <div className="progress"> <span></span></div>
                        </div>
                        <div>
                            <span>6 years Experience</span>
                            <div className="progress"> <span></span></div>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <h2>Popular Questions</h2>
                    <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div className="acc">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <According num="0" title="How Doctor Can Ease Your Pain?" />
              <According num="1" title="How do I Withdraw from a subject?"/>
              <According num="2" title="Understand Doctor Before You Regret?"/>
              <According num="3" title="What types of systems do you support?"/>
              <According num="4" title="We Teach You How To Feel Better?"/>
              <According num="5" title="How Can I Contact You"/>
            </Accordion>
                </div>
            </div>
            <div className="liststickey">
                <div className="buttons">
                    <button className="cssbuttons-io-button">
                    Engine Diagnostic
                    <div className="icon">
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    </div>
                    </button>
                    <button className="cssbuttons-io-button">
                    Lube Oil And Filters
                    <div className="icon">
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    </div>
                    </button>
                    <button className="cssbuttons-io-button">
                    Belets And Hoses
                    <div className="icon">
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    </div>
                    </button>
                    <button className="cssbuttons-io-button">
                    Air Conditioning
                    <div className="icon">
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    </div>
                    </button>
                    <button className="cssbuttons-io-button">
                    Break Repair
                    <div className="icon">
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    </div>
                    </button>
                </div>
                <div className="download">
                    <h4>Download</h4>
                    <div className="files">
                        <Sticker sticker={require("../../assets/imges/pdf.png")} alt="pdf" />
                        <div className="title">
                            <h5>Download Our Brochures</h5>
                            <span>Download</span>
                        </div>
                    </div>
                    <div className="files">
                        <Sticker sticker={require("../../assets/imges/pdf.png")} alt="pdf" />
                        <div className="title">
                            <h5>Download Our Brochures</h5>
                            <span>Download</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </section>
        </>
    )
}
export default ServicesDetails;