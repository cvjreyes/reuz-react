import React, { useState } from 'react';
import ProductDetails from "../../components/forms/productDetails"
import ProductImages from "../../components/forms/productImages"
import "./uploadProduct.css";
import ListBody from 'antd/lib/transfer/ListBody';

const UpLoadProduct = () => {

    /* Controls the form to be rendered */
    const [visibleForm, setVisibleForm] = useState("first")
    const handlevisibleForm = () => {


        setVisibleForm("second")
    }

    /* Controls the fetch heading towards MongoDB at API endpoint */
    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        name: undefined,
        price: undefined,
        discount: undefined,
        address: undefined,
        description: undefined
    });

    //Body: conforms the key/values to be send to MongoDB
    const body = {
        name: formData.name,
        price: formData.price,
        discount: formData.discount,
        address: formData.address,
        description: formData.description
    };

    console.log(body);

    //Executes the fetch function at the end of the form process
    const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        };
        fetch('http://localhost:5000/api/products', options);
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
                    action={handleCreate} />
            }
        </div>
    )
}
export default UpLoadProduct;