/*import "./carousel.css"
//import {useHistory} from "react-router-dom";
import { Carousel} from 'antd';
import React, { useRef } from "react";
import carousel from "../../assets/carousel/car.svg";
import patinete from "../../assets/patinete.jpg";
//import ButtonAtraz from "../../components/buttonAtraz/buttonAtraz";
//import Header from "../../components/header/header";
import ellipse4 from "../../assets/Ellipse4.jpeg";
import ellipse5 from "../../assets/Ellipse5.jpeg";
import bugatti from "../../assets/bugatti.svg";
import cocheantiguo from "../../assets/cocheantiguo.webp";
//import fixie from "../../assets/fixie.jpg";
//import ferrari from "../../assets/ferrari.svg";
import flecha from "../../assets/flecha2.svg";
import {useHistory} from "react-router-dom";

import 'antd/dist/antd.css';
//import { useHistory } from "react-router-dom";



const Carrousel = () => {
  const history = useHistory ();
  const ref = useRef();

  return (
    <>
 
      <div className="button__container1">
        <button onClick={e => {ref.current.next()}}>
          <img alt="adelante" src={ellipse5}></img>
        </button>
      </div>
      <div className="button__container2">
        <button onClick={e => {ref.current.prev()}}>
          <img alt="atras" src={ellipse4}></img>
        </button>
      </div>
      <Carousel className="carousel__container" ref={ref} autoPlay dotPosition={"top"}>
        <div>
          <div style={{'backgroundColor': '', 'width': '100%', 'height': '500px'}}>
            <h3>Esto es el titulo de la slide</h3>
            <img alt="bella2" src={carousel}></img>
          </div>
        </div>
        <div>
          <div style={{'backgroundColor': '', 'width': '100%', 'height': '500px'}}>
            <h3>hola</h3>
            <img alt="bella" src={patinete}></img>
          </div>
        </div>
        <div>  
          <div style={{'backgroundColor': '', 'width': '100%', 'height': '500px'}}>
            <h3>Esta es la tercera slide</h3>
            <img alt="buga" src={cocheantiguo}></img>
          </div>
        </div>  
        <div style={{'backgroundColor': 'brown', 'width': '100%', 'height': '800px'}}>
          <h3>esta es la cuarta slide</h3>
          <img alt="ferra" src={bugatti}></img>
        </div>
      </Carousel>
      <section className="carousel">
        <div className="pequeño_contenedor">
          <span className="kangoo">Kangoo</span>
          <span className="caracteristicas">2008 - 5 seats</span>
          <span className="precio">3500 euros</span>
          <img className="flecha" alt="flechita" src={flecha} onClick={()=> history.push("/products")}/> 
        </div>
      </section>
    </>
  );
};
export default Carrousel; */