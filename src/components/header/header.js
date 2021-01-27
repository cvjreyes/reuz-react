import "./header.css";
import carousel from "../../assets/carousel/car.svg";
import carousel2 from "../../assets/carousel/bici.svg";

import ellipse4 from "../../assets/Ellipse4.svg";
import ellipse5 from "../../assets/Ellipse5.svg";
import line1 from "../../assets/line1.svg";
import line2 from "../../assets/line2.svg";

const Header = () => {
  const handleClick = () => {
    console.log("Login");
  };
  return (
    <section className="carousel">
      <div className="arrows-container">
        <div className="arrows-container__left">
          <img className="line2" alt="adelante" src={line2} />
          <img className="ellipse4" alt="adelante" src={ellipse4} />
        </div>

        <div className="arrows-container__right">
          <img className="line1" alt="adelante" src={line1} />
          <img className="ellipse5" alt="adelante" src={ellipse5} />
        </div>
      </div>

      <div className="carousel__images">
        <img alt="bicicleta" src={carousel2} />
        <img alt="car" src={carousel} />
        <div className="pequeño_contenedor">
          <span className="kangoo">Kangoo</span>
          <span className="caracteristicas">2008 - 5 seats</span>
          <span className="precio">3500eur</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
