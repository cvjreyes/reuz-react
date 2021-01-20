import "./productCard.css";

const ProductCard = ({ urlImage, name, description, price }) => {
  //console.log(product);
    return (
        <div className="productCard_container">
        <img src={urlImage} className="productCard_image" alt={name}/>
        <div className="productCard_info_container">
          <span className="productCard_title">{name}</span>
          <span className="productCard_description">{description}</span>
          <span className="productCard_price">{price}</span> 
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  