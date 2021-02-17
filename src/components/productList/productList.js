import { useEffect, useState } from "react";
import { Button } from "antd";
import "./productList.css";
import ProductCard from "../productCard/productCard"

const ProductList = (products) => {
    
  console.log (products);
    return (
        <div>
            <span className="productList__title">Listing</span>
      <div className="productList__container">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
      <div> <Button className="create_listing_button" alt="Create_listing"/><span>Create listing</span>
      </div>
    </div>
  ); 
        /*className="productList_container">
            {products.map((product) => (
                <ProductList
                urlImage={product.urlImage} 
                name={product.name} 
                description={product.description}
                price={product.price}/>
            ))}

        
        </div>
    ); */
};

export default ProductList;