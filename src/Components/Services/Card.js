import { Link } from "react-router-dom";
const CardFc = (props) => {
  return (
    <div
      className="card"
      style={{
        width: "350px",
        backgroundImage: `url(${require("../../assets/imges/line-bg2.cfded2fdf8e1798442e4.png")})`,
        backgroundPosition: "bottom",
        border: "none",
        outline: "none",
        backgroundColor: "#FFF",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 0 10px #d8d8d8",
      }}
    >
      {props.foawe}
      <h2
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          padding: "20px",
          color: "#565acf",
          marginTop: "10px",
        }}
      >
        {props.title}
      </h2>
      <p style={{ lineHeight: "2" , padding: "16px 0 0"}}>{props.desc}</p>
      <Link className="btn btn-primary" to={"/services-details"} style={{background: "#565acf" , border: "none" , outline: "none" , padding: "10px"}}>View More</Link>
    </div>
  );
};

export default CardFc;
