import "./header.css";
import logo from '../../assets/image10.svg';
import desplegable from '../../assets/Line.svg';
import vector from '../../assets/Vector.svg';
import userimagen from '../../assets/Ellipse2.svg';
import carousel from '../../assets/car.svg';
import carousel2 from '../../assets/bici.svg';
import flecha from '../../assets/flecha.svg';
import ellipse4 from '../../assets/Ellipse4.svg';
import ellipse5 from '../../assets/Ellipse5.svg';
import line1 from '../../assets/line1.svg';
import line2 from '../../assets/line2.svg';


const Header = () => {
  const handleClick = () =>{
      console.log('Login')
  } 
  return (
    <div className="header__container">
       <span classeName="productos">Products</span>
      <img className="logito" alt="el logo" src={logo} onClick={handleClick}/>
      <img className="flecha1" alt="flechita" src={desplegable} onClick={handleClick}/>
      <img className="vector" alt="♥" src={vector}/>
      <img className="userimagen" alt="immagine" src={userimagen}/>
      <img className="carousel" alt="car" src={carousel}/>
      <img className="carousel2" alt="bicicleta" src={carousel2}/>
      <div className="pequeño_contenedor">
        <span className="kangoo">Kangoo</span>
        <span className="añocoche"></span>
        <span className="precio">3500 $ </span>
        <span className="caracteristicas">2009 - 5 seats</span>
        <img className="flecha" alt="adelante" src={flecha}/>
        <img className="ellipse4" alt="adelante" src={ellipse4}/>
        <img className="ellipse5" alt="adelante" src={ellipse5}/>
        <img className="line1" alt="adelante" src={line1}/>
        <img className="line2" alt="adelante" src={line2}/>
      </div>

    </div>
  );
};

export default Header;