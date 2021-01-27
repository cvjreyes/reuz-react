import "./footer.css";
import logo from "../../assets/image10.svg";
import socialLogo1 from "../../assets/footer/Instagram.svg";
import socialLogo2 from "../../assets/footer/Twitter.svg";
import socialLogo3 from "../../assets/footer/Youtube.svg";

const Footer = () => {
  const handleClick = () => {
    console.log("social");
  };

  return (
    <div className="footer-container">
      <img className="footer-container__logoreuz" src={logo} alt="name1" />

      <span className="footer-container__copyright">
        © 2020 Reuz All rights reserved
      </span>

      <div className="social-icons">
        <img
          className="twitter__container"
          src={socialLogo1}
          onClick={handleClick}
          alt="name2"
        />
        <img
          className="instagramLogo"
          src={socialLogo2}
          onClick={handleClick}
          alt="name3"
        />
        <img className="youtubeLogo" src={socialLogo3} alt="youtube logo" />
      </div>
    </div>
  );
};

export default Footer;

{
  /*
<button className="MyButton1" onClick={handleClick}><h1 className="realButton1">Show more</h1></button>
*/
}
