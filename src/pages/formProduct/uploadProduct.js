import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductDetails from "../../components/forms/productDetails"
import ProductImages from "../../components/forms/productImages"
import pablo from "../../assets/uploadPicture/pablo.svg";
import "./uploadProduct.css";

const UpLoadProduct = () => {
    const history = useHistory();
    const [visibleForm, setVisibleForm] = useState("first")
    const handlevisibleForm = () => {
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
    console.log(formData)
    const body = {
        name: formData.name,
        price: formData.price,
        discount: formData.discount,
        direction: formData.direction,
        description: formData.description,
        photos: formData.photos,
    }
    console.log(body);
    const [products, setProducts] = useState([]);
    //Fetch function
    useEffect(() => {
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
      }, []);
    const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }
    }
    return (
        <div>
            {visibleForm === "first" &&
                <ProductDetails onClick={handlevisibleForm} />
            }
            {visibleForm === "second" &&
                <ProductImages onClick={handleCreate} />
            }
            <div className="box_pablito">
                <img src={pablo} alt="pablo" className="pablito" />
            </div>
        </div>
    )
}
export default UpLoadProduct;