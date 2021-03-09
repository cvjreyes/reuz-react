import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";
import "./dropDowns.css";

import Slider from "../../components/slider/slider";


const DropDowns = () => {

  const [selcategory, setSelcategory] = useState([]);

  const handlerLoadSubcategories = function (e) {
    const category = e.target.value;
    setSelcategory(category);
    let resetDropDown = document.getElementById("selSubcategories");
    resetDropDown.selectedIndex = 0;
  }

  const [selsubcategory, setSelsubcategory] = useState([]);

  const handlerLoadProducts = function (e) {
    const subcategory = e.target.value;
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


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products`)
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [selcategory]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/categories/${selcategory}/products`)
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [selcategory]);

  useEffect(() => {
    console.log(`http://localhost:5000/api/categories/${selcategory}/subcategories/${selsubcategory}/products`);
    fetch(`http://localhost:5000/api/categories/${selcategory}/subcategories/${selsubcategory}/products`)
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [selsubcategory]);

  return (
    <>
      <div className="dropDowns-container">
        <div className="dropdown">
          <select name="categories" id="selCategories" onClick={handlerLoadSubcategories}>
            <option>Categories...</option>
            {categories.map((category) => (
              <option value={category._id}>{category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown">
          <select name="subcategories" id="selSubcategories" onClick={handlerLoadProducts}>
            <option>Subcategories...</option>
            {subcategories.map(subcategory => (
              <option value={subcategory._id}>{subcategory.name}
              </option>
            ))}
          </select>
        </div>

        <div className="dropDowns-container">
          <div className="dropdown">
            <Slider className="slider__container" />
          </div>
        </div>
      </div>


      <div className="productSelection_container">

        {products.map(product => (
          <ProductCard
            urlImage={product.urlImage}
            name={product.name}
            description={product.description}
            price={product.price} />
        ))}
      </div>

    </>
  );
};


export default DropDowns;

