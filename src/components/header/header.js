import "./header.css";
import logo from '../../assets/image10.svg';
import desplegable from '../../assets/Line.svg';
import vector from '../../assets/Vector.svg';
import userimagen from '../../assets/Ellipse2.svg';


const Header = () => {
  const handleClick = () =>{
      console.log('Login')
  } 
  return (
    <div className="header__container">
      <img className="logito" alt="el logo" src={logo} onClick={handleClick}/>
      <span classeName="productos">Products</span>
      <img className="flecha" alt="flechita" src={desplegable} onClick={handleClick}/>
      <img className="vector" alt="♥" src={vector}/>
      <img className="userimagen" alt="immagine" src={userimagen}/>
    </div>
  );
};

export default Header;