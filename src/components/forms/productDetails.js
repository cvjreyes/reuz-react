import React, { useState } from 'react';
import DropDowns from "../../components/dropDowns/dropDowns";
import pablo from "../../assets/pablo.png";
import './productDetails.css'

const ProductDetails = ({formData, setFormData, action}) => {

   
    //formData : combo for the inputs
    
    //Fetch function
  
    return (
        <div>
           
                <div className="form_container">
                    <div>
                        <div className="form_title1">
                            <h1><b>Sell your product with Reuz</b></h1>
                        </div>
                        <div className="form_title2">
                            <h2>Basic information</h2>
                        </div>
                        <form>
                            <div className="form_body">
                                <input
                                    name="undefined"
                                    placeholder="Name"
                                    className="form_full_input1"
                                    type="text"
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                ></input>
                                <input
                                    name="undefined"
                                    placeholder="Price"
                                    className="form_half_input1"
                                    type="number"
                                    onChange={(e) =>
                                        setFormData({ ...formData, price: e.target.value })
                                    }
                                ></input>
                                <input
                                    name="undefined"
                                    placeholder="% Dicount"
                                    className="form_half_input1"
                                    type="number"
                                    onChange={(e) =>
                                        setFormData({ ...formData, discount: e.target.value })
                                    }
                                ></input>
                                <div className="form_title2">
                                    <h2>Location</h2>
                                </div>
                                <input
                                    name="titulo"
                                    placeholder="Direction"
                                    className="form_full_input1"
                                    type="text"
                                    onChange={(e) =>
                                        setFormData({ ...formData, direction: e.target.value })
                                    }
                                ></input>
                                <div className="form_title2">
                                    <h2>Category</h2>
                                </div>
                                <DropDowns />
                                <button className="button_a" type="submit" onClick={action}>
                                    <h1 className="button_content">Next</h1>
                                </button>
                                <div className="box_pablito">
                                    <img src={pablo} alt="pablo" className="pablito" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            
        
        </div >
    )
}
export default ProductDetails;