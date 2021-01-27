import "./footer.css";
import logo from '../../assets/image10.svg';
import socialLogo1 from '../../assets/Instagram.svg';
import socialLogo2 from '../../assets/Twitter.svg';
import socialLogo3 from '../../assets/Youtube.svg';

const Footer = () => {
    const handleClick = () =>{
        console.log('social')
    }

return (
    <div className="footer__container">
        <img className="logoreuz" src={logo} alt="name1"/>
        <span className="derechosReuz">Reuz rights 2020</span>
        <img className="twitter__container" src={socialLogo1} onClick={handleClick} alt="name2"/>
        <img className="instagramLogo" src={socialLogo2} onClick={handleClick} alt="name3"/>
        <img className="youtubeLogo" src={socialLogo3} onClick={handleClick} alt="name4"/>
        <button className="MyButton1" onClick={handleClick}><h1 className="realButton1">Show more</h1></button>
         
    </div>
);
}
export default Footer;