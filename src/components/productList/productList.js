import { useEffect, useState } from "react";
//import { Button } from "antd";
import "./productList.css";
import ProductCard from "../productCard/productCard"

const ProductList = ({ user }) => {
  const [products, setProducts] = useState(null);
  console.log(products);
  const userId = user._id;
  useEffect(() => {
    fetch('http://localhost:5000/api/users/' + userId + '/products', {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, [userId]);

  return (
    <div>
      <div className="productCard">
        {products != null &&
          products.map((product) => (
            <ProductCard className="productCard"
              /* products={products[products.indexOf(product)]} */
              urlImage={product.urlImage}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
      </div>
    </div>
  );
};
export default ProductList;