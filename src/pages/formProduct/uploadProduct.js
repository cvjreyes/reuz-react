import React, { useState } from 'react';
import ProductDetails from "../../components/forms/productDetails"
import ProductImages from "../../components/forms/productImages"
import pablo from "../../assets/pablo.png";
import "./uploadProduct.css";
import ListBody from 'antd/lib/transfer/ListBody';

const UpLoadProduct = () => {


    const [visibleForm, setVisibleForm] = useState("first")
    const handlevisibleForm = () => {


        setVisibleForm("second")
    }

    const [formData, setFormData] = useState({
        name: undefined,
        price: undefined,
        discount: undefined,
        address: undefined,
        description: undefined,
       
     
        
    });
    
    const [products, setProducts] = useState([]);
       
    
        const body = {
            name: formData.name,
            price: formData.price,
            discount: formData.discount,
            address: formData.direction,        
            description: formData.description,
               
            
        }
        console.log(ListBody)

        const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        };
        fetch('http://localhost:5000/api/products',options);
          console.log("Product created");
            }
  
    return (
        <div>
            {visibleForm === "first" &&
                <ProductDetails 
                formData={formData} 
                setFormData={setFormData} 
                action={handlevisibleForm} />
            }
            {visibleForm === "second" &&
                <ProductImages
                  formData={formData} 
                  setFormData={setFormData}
                   action={ handleCreate}/>
            }
            <div className="box_pablito">
                <img src={pablo} alt="pablo" className="pablito" />
            </div>
        </div>
    )
}
export default UpLoadProduct;