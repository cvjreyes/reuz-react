import "./icon.css";
import icon1 from "../../assets/icon/cup.svg";
import icon2 from "../../assets/icon/check.svg";
import icon3 from "../../assets/icon/shipping.svg";
import icon4 from "../../assets/icon/support.svg";

const Icon = () => {
  const handleClick = () => {
    console.log("hola");
  };

  return (
    <div className="icons-container">
      <div className="icons-container__section">
        <img
          className="icons-container__section-icon"
          src={icon1}
          alt={icon1}
          onClick={handleClick}
        />
        <div>
          <span className="icons-container__section-text1">
            <b>Champions in variety</b>
          </span>
          <span className="icons-container__section-text2">
            Thousands of products
          </span>
        </div>
      </div>

      <div className="icons-container__section">
        <img
          className="icons-container__section-icon"
          src={icon2}
          alt={icon2}
        />
        <div>
          <span className="icons-container__section-text1">
            <b>Verified vendors</b>
          </span>
          <span className="icons-container__section-text2">
            You can trust them
          </span>
        </div>
      </div>

      <div className="icons-container__section">
        <img
          className="icons-container__section-icon"
          src={icon3}
          alt={icon3}
        />
        <div>
          <span className="icons-container__section-text1">
            <b>Free Shipping</b>
          </span>
          <span className="icons-container__section-text2">
            Order over 150€
          </span>
        </div>
      </div>

      <div className="icons-container__section">
        <img
          className="icons-container__section-icon"
          src={icon4}
          alt={icon4}
        />
        <div>
          <span className="icons-container__section-text1">
            <b>24 / 7 Support</b>
          </span>
          <span className="icons-container__section-text2">
            Dedicated Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default Icon;
