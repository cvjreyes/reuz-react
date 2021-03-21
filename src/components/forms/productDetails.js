
import React from 'react';
import DropDowns2 from "../../components/dropDowns/dropsDowns2";
import pablo from "../../assets/pablo.png";

const ProductDetails = ({ formData, setFormData, action }) => {
    return (
        <div className="main_form_container">
            <div className="form_container">
                <div className="form_title1">
                    <h1><b>Sell your product with Reuz</b></h1>
                </div>
                <div className="form_title2">
                    <h2>Basic information</h2>
                </div>
                <form>
                    <div className="form_body">
                        <input
                            placeholder="Name"
                            className="form_full_input1"
                            type="text"
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        ></input>
                        <input
                            placeholder="Price €"
                            className="form_half_input1"
                            type="number"
                            onChange={(e) =>
                                setFormData({ ...formData, price: e.target.value })
                            }
                        ></input>
                        <input
                            placeholder="Discount €"
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
                            placeholder="Address"
                            className="form_full_input1"
                            type="text"
                            onChange={(e) =>
                                setFormData({ ...formData, address: e.target.value })
                            }
                        ></input>
                        <div className="form_title2">
                            <h2>Category</h2>
                        </div>
                        <DropDowns2 onChangeCategory={(category) => setFormData({...formData, category_id: category})} onChangeSubcategory={(subcategory) => setFormData({...formData, subcategories_id: subcategory})} />
                        <button className="button_a" type="submit" onClick={action}>
                            <h1 className="button_content">Next</h1>
                        </button>
                    </div>
                </form>
            </div>
            <div className="box_pablito">
                <img src={pablo} alt="pablo"/>
            </div>
        </div >
    )
}
export default ProductDetails;