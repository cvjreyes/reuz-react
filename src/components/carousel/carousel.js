import "./carousel.css"
import { Carousel } from 'antd';
import React, { useRef } from "react";
import carousel from "../../assets/carousel/car.jpg";
import patinete from "../../assets/patinete.jpg";
import ellipse4 from "../../assets/Ellipse4.png";
import ellipse5 from "../../assets/Ellipse5.png";
import bugatti from "../../assets/bugatti.jpg";
import cocheantiguo from "../../assets/cocheantiguo.jpg";
import flecha from "../../assets/flecha2.svg";
import { useHistory } from "react-router-dom";

import 'antd/dist/antd.css';



const Carrousel = () => {
  const history = useHistory();
  const ref = useRef();

  return (
    <>

      <div className="arrowButtons">
        <div>
          <button onClick={e => { ref.current.prev() }} className="button__container2">
            <img alt="atras" src={ellipse4} className="button_img_container"></img>
          </button>
        </div>
        <div>
          <button onClick={e => { ref.current.next() }} className="button__container1">
            <img alt="adelante" src={ellipse5} className="button_img_container"></img>
          </button>
        </div>
      </div>

      <Carousel className="carousel__container" ref={ref} autoPlay dotPosition={"top"}>
        <div>
          <div style={{ 'backgroundColor': '', 'width': '100%', 'height': '500px' }}>

            <img alt="bella2" src={carousel}></img>
          </div>
        </div>

        <div>
          <div style={{ 'backgroundColor': '', 'width': '100%', 'height': '500px' }}>

            <img alt="bella" src={patinete}></img>
          </div>
        </div>
        <div>
          <div style={{ 'backgroundColor': '', 'width': '100%', 'height': '500px' }}>

            <img alt="buga" src={cocheantiguo}></img>
          </div>
        </div>
        <div style={{ 'backgroundColor': 'brown', 'width': '100%', 'height': '500px' }}>

          <img alt="ferra" src={bugatti}></img>
        </div>
      </Carousel>

      <section className="carousel">
        <div className="pequeño_contenedor">
          <span className="kangoo">Kangoo</span>
          <span className="caracteristicas">2008 - 5 seats</span>
          <span className="precio">3500 euros</span>
          <img className="flecha" alt="flechita" src={flecha} onClick={() => history.push("/products")} />
        </div>
      </section>


    </>
  );
};
export default Carrousel;
