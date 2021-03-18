import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";
import "./dropDowns.css";



const DropDowns2 = ({onChangeCategory, onChangeSubcategory}) => {

  const [selcategory, setSelcategory] = useState([]);

  const handlerSelectCategory= function (e) {
    const category = e.target.value;
    setSelcategory(category);
    onChangeCategory(category);
    let resetDropDown = document.getElementById("selSubcategories");
    resetDropDown.selectedIndex = 0;
  }

  const [selsubcategory, setSelsubcategory] = useState([]);

  const handlerSelectSubcateogry = function (e) {
    const subcategory = e.target.value;
    onChangeSubcategory(subcategory);
    setSelsubcategory(subcategory);
  }

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("categoria");
    fetch("http://localhost:5000/api/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, [selcategory]);

  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    console.log(`http://localhost:5000/api/categories/${selcategory}/subcategories`);
    fetch(`http://localhost:5000/api/categories/${selcategory}/subcategories`)
      .then((response) => response.json())
      .then((json) => setSubcategories(json));
  }, [selcategory]);


  return (
    <>
      <div className="dropDowns-container">
        <div className="dropdown">
          <select name="categories" id="selCategories" onChange={handlerSelectCategory}>
            <option>Categories...</option>
            {categories.map((category) => (
              <option value={category._id}>{category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown">
          <select name="subcategories" id="selSubcategories" onChange={handlerSelectSubcateogry}>
            <option>Subcategories...</option>
            {subcategories.map(subcategory => (
              <option value={subcategory._id}>{subcategory.name}
              </option>
            ))}
          </select>
        </div>

        <div className="dropDowns-container">
          <div className="dropdown">
            
          </div>
        </div>
      </div>

    </>
  );
};


export default DropDowns2;