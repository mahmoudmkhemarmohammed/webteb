import About from "./Components/About-Us/About";
import Booking from "./Components/Book_Appointment/Booking";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import LatestNews from "./Components/Latest-News/LatestNews";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import WorkingProcess from "./Components/Working_Process/WorkingProcess";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About-Us/AboutUs";
import { useEffect, useRef } from "react";
import OurTeam from "./pages/OurTeam/OurTeam";
import Faqs from "./pages/Faqs.js/Faqs";
import BookingPage from "./pages/Booking/Booking";
import ServicesPage from "./pages/ServicesPage/Services";
import Blog from "./pages/Blog/Blog";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ContactUs from "./pages/Contact-Us/ContactUs";
import Search from "./Components/Search/Search";
function App() {
  const myRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 900) {
        myRef.current.style.display = "block";
      } else {
        myRef.current.style.display = "none";
      }
    });
  }, []);
  const handelClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <Search />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <WorkingProcess />
              <Booking />
              <Services />
              <Testimonial />
              <LatestNews />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <AboutUs />
            </>
          }
        />
        <Route
          path="our-team"
          element={
            <>
              <OurTeam />
            </>
          }
        />
        <Route
          path="faqs"
          element={
            <>
              <Faqs />
            </>
          }
        />
        <Route
          path="booking"
          element={
            <>
              <BookingPage />
            </>
          }
        />
        <Route
          path="services"
          element={
            <>
              <ServicesPage />
            </>
          }
        />
        <Route
          path="blog"
          element={
            <>
              <Blog />
            </>
          }
        />
        <Route
          path="services-details"
          element={
            <>
              <ServicesDetails />
            </>
          }
        />
        <Route
          path="login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="contact-us"
          element={
            <>
              <ContactUs />
            </>
          }
        />
      </Routes>
      <Footer />
      <div className="btn-scroller" ref={myRef} onClick={handelClick}>
        <button className="button">
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
