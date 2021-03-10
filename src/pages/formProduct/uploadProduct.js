import React, { useState } from 'react';
import ProductDetails from "../../components/forms/productDetails"
import ProductImages from "../../components/forms/productImages"
import pablo from "../../assets/pablo.png";
import "./uploadProduct.css";

const UpLoadProduct = () => {


    const [visibleForm, setVisibleForm] = useState("first")
    const handlevisibleForm = () => {
        console.log(formData)

        setVisibleForm("second")
    }

    const [formData, setFormData] = useState({
        name: undefined,
        price: undefined,
        discount: undefined,
        direction: undefined,
        description: undefined,
        photos: []
     
        
    });
    
    const [products, setProducts] = useState([]);
       
    const handleCreate = () => {
        const body = {
            name: formData.name,
            price: formData.price,
            discount: formData.discount,
            direction: formData.direction,        
            description: formData.description,
            photos: formData.photos,   
            
        }
        console.log(formData)

    
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
                <ProductDetails formData={formData} setFormData={setFormData} action={handlevisibleForm} />
            }
            {visibleForm === "second" &&
                <ProductImages  formData={formData} setFormData={setFormData} action={ handleCreate}/>
            }
            <div className="box_pablito">
                <img src={pablo} alt="pablo" className="pablito" />
            </div>
        </div>
    )
}
export default UpLoadProduct;