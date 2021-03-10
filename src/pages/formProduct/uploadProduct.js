import React, { useState, useEffect } from 'react';
import ProductDetails from "../../components/forms/productDetails"
import ProductImages from "../../components/forms/productImages"
import pablo from "../../assets/uploadPicture/pablo.svg";
import "./uploadProduct.css";

const UpLoadProduct = () => {


    const [visibleForm, setVisibleForm] = useState("first")
    const handlevisibleForm = () => {
        setVisibleForm("second")
    }

    const [products, setProducts] = useState([]);
       
    const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch('http://localhost:5000/api/products', {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json"
            }
          })
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              setProducts(json);
            });
    }    
   
    return (
        <div>
            {visibleForm === "first" &&
                <ProductDetails action={handlevisibleForm} />
            }
            {visibleForm === "second" &&
                <ProductImages  action={ handleCreate}/>
            }
            <div className="box_pablito">
                <img src={pablo} alt="pablo" className="pablito" />
            </div>
        </div>
    )
}
export default UpLoadProduct;