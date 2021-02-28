import React, { useState, useEffect } from 'react';
import './ProductPage.css'
import { useParams } from 'react-router';


const ProductPage = () => {

    const params = useParams();
    const productId = params.id

    const [productInfo, setProductInfo] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/api/products/' + productId, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setProductInfo(json);
            });
    }, []);

    console.log(productInfo)


    return (
        <div className="productPage__container">
            <h2>ProductID : {productId}</h2>
        </div>
    )

};

export default ProductPage