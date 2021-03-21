import React, { useState } from 'react';
import { useHistory } from 'react-router';
import pablo from "../../assets/pablo.png";
import PhotoLoader from '../photoLoader/photoLoader';

const ProductImages = ({ productId }) => {

    const history = useHistory();

    //Body: conforms the key/values to be send to MongoDB
    const [body, setBody] = useState({
        description: "no description provided for the product",
    });

    console.log(productId);
    console.log(body)

    //añadir fetch de imagenes y de descripcion
    const updateDescription = () => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch(`http://localhost:5000/api/products/${productId}`, options)
            .then(response => response.json())
            .then(json => console.log(json));

        history.push('/yourListings')
    }

    return (
        <div className="main_form_container">
            <div className="form_container">
                <div className="form_title1">
                    <h1><b>Sell your product with Reuz</b></h1>
                </div>
                <div className="form_title2">
                    <h2>Description</h2>
                </div>
                <form >
                    <div className="form_body">
                        <textarea
                            placeholder="Short description of your product"
                            className="form_full_input1"
                            rows="8"
                            type="text"
                            onChange={(e) =>
                                setBody({ ...body, description: e.target.value })
                            }
                        />
                        <div className="form_title2">
                            <h2>Pictures</h2>
                        </div>
                        <div className="photoLoader">
                            <PhotoLoader
                                productId={productId}
                            />
                        </div>
                        <button className="button_a" onClick={updateDescription}>
                            <h1 className="button_content">Create Listing</h1>
                        </button>
                    </div>
                </form>
            </div>
            <div className="box_pablito">
                <img src={pablo} alt="pablo" className="pablito" />
            </div>
        </div>
    )
}
export default ProductImages;