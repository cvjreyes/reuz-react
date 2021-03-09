import React, { useEffect, useState } from 'react';
import DropDowns from "../../components/dropDowns/dropDowns";
import { useHistory} from 'react-router-dom';
import ProductCard from "../../components/productCard/productCard";
import pablo from "../../assets/uploadPicture/pablo.svg";
import './productImages.css'
import PhotoLoader from '../photoLoader/photoLoader';

const ProductImages = ({ name,price,discoun,direction,description,photo }) => {

    
    const [products, setProducts] = useState([]);       
   
  
    //formData : combo for the inputs
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
        };
    }
    return (
        <div className="form_container">
            <div>
                <div className="form_title1">
                <h1><b>Sell your product with Reuz</b></h1>
                </div>
                <div className="form_title2">
                <h2>Description</h2>
                </div>
                <form >
                    <div className="form_body">
                        <textarea
                            name="undefined"
                            placeholder="Short description of your product"
                            className="form_full_input1"
                            type="text"
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                          
                        ></textarea>
                       
                            <div className="form_title2">
                        <h2>Pictures</h2>
                        </div>
                        <div>
                        <div >
                        {products != null &&
                        products.map(product => (
                <ProductCard  
                discount={product.discount} 
                name={product.name} 
                direction={product.direction}
                price={product.price}/>
            ))}
                </div>
                        </div>      
                        <PhotoLoader />                  
                        <button className="button_a" onClick={handleCreate}>
                            <h1 className="button_content">Create Listing</h1>
                        </button> 
                       
                    </div>
                    <div className="box_pablito">
                    <img src={pablo} alt="pablo" className="pablito" />
            </div>
                </form> 
            </div>
        </div>
    )
}
export default ProductImages;