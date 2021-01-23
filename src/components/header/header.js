import "./header.css";
import logo from '../../assets/image10.svg';
import desplegable from '../../assets/Line.svg';
import vector from '../../assets/Vector.svg';
import userimagen from '../../assets/Ellipse2.svg';
import carousel from '../../assets/car.svg';
import carousel2 from '../../assets/bici.svg';


const Header = () => {
  const handleClick = () =>{
      console.log('Login')
  } 
  return (
    <div className="header__container">
       <span classeName="productos">Products</span>
      <img className="logito" alt="el logo" src={logo} onClick={handleClick}/>
      <img className="flecha" alt="flechita" src={desplegable} onClick={handleClick}/>
      <img className="vector" alt="♥" src={vector}/>
      <img className="userimagen" alt="immagine" src={userimagen}/>
      <img className="carousel" alt="car" src={carousel}/>
      <img className="carousel2" alt="bicicleta" src={carousel2}/>

    </div>
  );
};

export default Header;