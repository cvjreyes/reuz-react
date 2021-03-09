import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './productImages.css'
import PhotoLoader from "../photoLoader/photoLoader"
const ProductImages = ({ description, photos }) => {
    const history = useHistory();
    const [visibleForm, setVisibleForm] = useState("first")
    const handlevisibleForm = () => {
        setVisibleForm("second")
    }
    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        description: undefined,
        photos: []
    });
    console.log(formData)
    const body = {
        description: formData.description,
        photos: formData.photos
    }
    console.log(body);
    //Fetch function
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
                                placeholder="Message"
                                className="form_full_input1"
                                type="text"
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            ></textarea>
                            <div className="form_title2">
                                <h2>Pictures</h2>
                            </div>
                            <PhotoLoader/>
                            <button className="button_a" onClick={handleCreate} >
                                <h1 className="button_content">Create Listing</h1>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ProductImages;