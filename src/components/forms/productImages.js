import React, { useEffect, useState } from 'react';
import DropDowns from "../../components/dropDowns/dropDowns";
import { useHistory} from 'react-router-dom';
import ProductCard from "../../components/productCard/productCard";
import {useForm} from 'react-hook-form';
import pablo from "../../assets/uploadPicture/pablo.svg";
import './productImages.css'
import PhotoLoader from '../photoLoader/photoLoader';

const ProductImages = ({ userId }) => {
    const history = useHistory();
    const [products, setProducts] = useState([]);       
    const {register,errors,handleSubmit} = useForm ();
    const [Entradas,setEntradas] = useState ([])
    const onSubmit = (data,e) => {
    console.log(data)
    setEntradas([
    ...Entradas,
    data  
])
e.target.reset();
}
    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        description: undefined
       
    });
    const body = {
        description: formData.name
       
    }
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
      }, [userId]);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form_body">
                        <textarea
                            name="undefined"
                            placeholder="Short description of your product"
                            className="form_full_input1"
                            type="text"
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            ref={
                                register({
                                    required: { value: true, message: 'Campo obligatorio' },
                                    minLength: { value: 2, message: 'Minimo 2 letras' }
                                })
                            }
                        ></textarea>
                        <span className="alert">
                            {errors?.titulo?.message}
                        </span>
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
                        <button className="button_a" /*onClick={()=>history.push("")}/*/>
                            <h1 className="button_content">Create Listing</h1>
                        </button> 
                       {/* ´pagina de fernando */}
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