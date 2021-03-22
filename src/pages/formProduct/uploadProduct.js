import React, { useState } from 'react';
import ProductDetails from "../../components/forms/productDetails";
import ProductImages from "../../components/forms/productImages";
import "./uploadProduct.css";


const UpLoadProduct = ({user}) => {
    /* Controls the form to be rendered */
    /* Controls the fetch heading towards MongoDB at API endpoint */
    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        name: undefined,
        price: undefined,
        discount: undefined,
        address: undefined,
        subcategories_id: undefined,
        category_id: undefined,
        description: undefined,
    });
    //Body: conforms the key/values to be send to MongoDB
    const body = {
        users_id: user._id,
        name: formData.name,
        price: formData.price,
        discount: formData.discount,
        address: formData.address,
        product_subcategory_id: formData.subcategories_id,
        product_category_id: formData.category_id,
        description: formData.description,
    };
    console.log(body);

    //Executes the fetch function at the end of the form process
    const [productId, setProductId] = useState();

    const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch('http://localhost:5000/api/products', options)
            .then(response => response.json())
            .then(json => {
                console.log("Producto creado!", json);
                const productId = json._id;
                setProductId(productId);
            });
    }
    const [visibleForm, setVisibleForm] = useState("first")
    const handlevisibleForm = () => {
        setVisibleForm("second")
    }
    const handleCreateNext = () => {
        handleCreate()
        handlevisibleForm()
    }


    return (
        <div >
            {
                visibleForm === "first" &&
                <ProductDetails
                    formData={formData}
                    setFormData={setFormData}
                    action={handleCreateNext}
                />
            }
            {
                visibleForm === "second" &&
                <ProductImages
                    productId={productId}
                />
            }
        </div>
    )
}
export default UpLoadProduct;