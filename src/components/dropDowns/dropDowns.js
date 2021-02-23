import React from "react";
import { useEffect, useState } from "react";
import "./dropDowns.css";
import "./rangeSlider.js";


const DropDowns = () => {

    const [selcategory, setSelcategory] = useState([]);

    const handlerLoadSubcategories = function (e) {

        const category = e.target.value;
        console.log(e.target.value)
        setSelcategory(category);

    }

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/categories")
            .then((response) => response.json())
            .then((json) => setCategories(json));
    }, []);

    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/categories/${selcategory}/subcategories`)
            .then((response) => response.json())
            .then((json) => setSubcategories(json));
    }, [selcategory]);



    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((response) => response.json())
            .then((json) => setProducts(json));
    }, []);

    console.log(selcategory, categories, subcategories)

    return (
        <div className="dropDowns-container">
            <div className="dropdown">
                <select name="categories" id="selCategories" onChange={handlerLoadSubcategories}>
                    <option>Categories</option>
                    {categories.map((category) => (
                        <option value={category._id}>{category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="dropdown">
                <select name="subcategories" id="selSubcategories">
                    <option>Subcategories</option>
                    {subcategories.map(subcategory => (
                        <option>{subcategory.name}
                        </option>
                    ))}
                </select>
            </div>



        </div>
    );
};


export default DropDowns;

