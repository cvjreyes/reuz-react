import { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";
import "./productSelection.css";

const ProductSelection = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/products")
          .then((response) => response.json())
          .then((json) => setProducts(json));
      }, []);
    return (
        <div className="productSelection_container">
            {products.map(product => (
                <ProductCard  
                urlImage={product.urlImage} 
                name={product.name} 
                description={product.description}
                price={product.price}/>
            ))}
        </div>

    );
};
export default ProductSelection;