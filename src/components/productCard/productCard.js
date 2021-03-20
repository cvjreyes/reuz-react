import { useState } from "react";
import "./productCard.css";
import vectorShare from "../../assets/hover/vectorShare.svg";
import vectorLike from "../../assets/hover/vectorLike.svg";
import ellipseNew from "../../assets/productCard/ellipseNew.svg";
import ellipseDiscount from "../../assets/productCard/ellipseDiscount.svg";
import { Link, useHistory } from "react-router-dom";

const ProductCard = ({ productId, urlImage, name, description, price, discount }) => {

  const percentageDiscount = Math.round((discount/price)*100)

  // Fetch pictures of the product

  // fetch(`http://localhost:5000/api/photos/${productId}/photos`, options)


  
  const [isOver, setIsOver] = useState(false);

  const history = useHistory();

  const goToProduct = () => {
    history.push(`/products/${productId}`)
  }

  return (
    <div className="container1" onMouseEnter={() => { setIsOver(true) }} onMouseLeave={() => { setIsOver(false) }}>
      <div className="productCard_image__container"
        style={{ backgroundImage: `url(${urlImage})` }}>
      </div>
      {discount > 0 &&
        <div>
          <img className="productCard_topRight__container_discount" alt="New" src={ellipseDiscount} />
          <span className="topRight__text_discount">-{percentageDiscount}%</span>
        </div>
      }
        <div>
          <img className="productCard_topRight__container_new" alt="New" src={ellipseNew} />
          <span className="topRight__text_new">New</span>
        </div>
      <div className="productCard_container">
        <div className="productCard_info_container">
          <span className="productCard_title">{name}</span>
          <span className="productCard_description">{description}</span>
          <div className="prices">
            <span className="productCard_price">{price}€</span>
          </div>
        </div>
      </div>
      {isOver &&
        <div className="productCard_container-overlay" onClick={goToProduct}>
          <Link>
            <img className="vector__share" alt="Share" src={vectorShare} />
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