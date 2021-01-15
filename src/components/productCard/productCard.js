import "./productCard.css";

const ProductCard = ({ product }) => {
    return (
        <div className="productCard__container">
        <img src={product.urlImage} className="productCard__image" alt={product.name} />
        <div className="productCard_info__container">
          <span className="productCard_info_product__title">{product.name}</span>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  