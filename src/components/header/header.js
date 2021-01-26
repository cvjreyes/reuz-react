import "./header.css";
import logo from '../../assets/image10.svg';
import desplegable from '../../assets/navBar/Line.svg';
import vector from '../../assets/navBar/Vector.svg';
import userimagen from '../../assets/navBar/ellipse2.svg';
import carousel from '../../assets/carousel/car.svg';
import carousel2 from '../../assets/carousel/bici.svg';
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
    
    <section className="carousel">

      <div className="carousel__images">        
        <img className="image" alt="car" src={carousel}/>
        <img className="image" alt="bicicleta" src={carousel2}/>
      </div>

  




    </section>



    

  );
};


export default Header;

{/*
    <div>

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
*/ }