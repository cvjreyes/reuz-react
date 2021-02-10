import "./navBar.css";
import Logo from "../../assets/navBar/logo.png";
//import desplegable from "../../assets/navBar/Line.svg";
import vector from "../../assets/navBar/Vector.svg";
import Ellipse from "../../assets/navBar/ellipse.svg";
import userAvatar from "../../assets/navBar/ellipse2.svg";
import Dropdown from "../../components/dropDown/dropDown";
//import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom"
//import Dropdown from "../../components/dropDown/dropDown";



const NavBar = () => {  
  
  const history = useHistory ()


return (<div className="navBar">

  <div className="navBar__left">
    <img className="logo" src={Logo} alt="Reuz logo" onClick={() => history.push("/")} />
  </div>

  <div className="navBar__dropDown">
    <span className="dropDown__title" onClick={() => history.push("/products")}>Products</span>
    <Dropdown />
  </div>    

    <div className="navBar__searchBox">
      <div className="searchBox_ellipse">
        <img alt="" src={Ellipse} />
      </div>

      <input type="text" className="searchBox__input"></input>
    </div>      
  
  <div className="navBar__right">
    <img className="right__heartIcon" alt=":corazones:" src={vector} />
    <img className="right__userAvatar" alt="immagine" src={userAvatar} />
  </div>
</div>
);
}; 


export default NavBar;
