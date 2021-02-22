import { useState } from "react";
import "./productCard.css";
import vectorShare from "../../assets/hover/vectorShare.svg";
import vectorLike from "../../assets/hover/vectorLike.svg";
import ellipseNew from "../../assets/productCard/ellipseNew.svg";
import { Link, useHistory } from "react-router-dom";

const ProductCard = ({ urlImage, name, description, price  }) => {
  const [isOver,setIsOver]=useState(false);
    return (
      <div className="container1" onMouseEnter = {()=>{setIsOver(true)}} onMouseLeave = {()=>{setIsOver(false)}}> 
       <div className="productCard_image__container" style={{ backgroundImage:  `url(${urlImage})` }}></div>
       <div> 
            <img className="productCard_topRight__container" alt="New" src={ellipseNew}/><span className="topRight__text">New</span></div>
       <div className="productCard_container">
            <div className="productCard_info_container">
              <span className="productCard_title">{name}</span>
              <span className="productCard_description">{description}</span>
              <div className="prices">
                <span className="productCard_price">{price}</span> 
              </div>
              </div>     
        </div> 
       {isOver && 
       <div className="productCard_container-overlay"> 
        <Link>
          <img className="vector__share" alt="Share" src={vectorShare}/>
           <span className="vector__share__text">Share</span>
           </Link>

          <img className="vector__like" alt="Like" src={vectorLike} />
          <span className="vector__like__text">Like</span>        
        </div>  
        }
      </div>
    );
  };
  export default ProductCard;