
import { useState } from "react";
import "./productCard.css";

const ProductCard = ({ urlImage, name, description, startingPrice, lastPrice }) => {
  const [isOver,setIsOver]=useState(false);
    return (
      <div className="product_board" onMouseEnter = {()=>{setIsOver(true)}} onMouseLeave = {()=>{setIsOver(false)}}> 
       { isOver && <div className="product_board_overlay"></div>}
        <div className="productCard_container">
        <div className="productCard_image__container" style={{ backgroundImage:  `url(${urlImage})` }}></div>
        <div className="productCard_info_container">
          <span className="productCard_title">{name}</span>
          <span className="productCard_description">{description}</span>
          <span className="productCard_price">{startingPrice}</span> 
          <span className="productCard_lastPrice">{lastPrice}</span>
        </div>
      </div>
    </div>
    );
  };
  
  export default ProductCard;
  