import { useEffect, useState } from "react";
//import { Button } from "antd";
import "./productList.css";
import ProductCard from "../productCard/productCard"

const ProductList = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
      fetch("http://localhost:5000/api/users/5fda64ec381302d9f3a7438a/products", {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
          }
      })
      .then ((response) => response.json())
      .then ((json) => {
          console.log(json);
          setProducts(json);
      });
  }, []);
    return (
        <div>
      <div className="productCard">
        {products && products.map((product) => (
          <ProductCard className="productCard"
                    products={products}
                    urlImage={product.urlImage} 
                    name={product.name} 
                    description={product.description}
                    price={product.price}/>
         ))}
      </div>
    </div>
  ); 
};
export default ProductList;