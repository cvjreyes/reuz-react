import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";
import "./dropDowns.css";
import "./rangeSlider.js";


const DropDowns = () => {

  const [selcategory, setSelcategory] = useState([]);
  const handlerLoadSubcategories = function (e) {
      
      const category = e.target.value;
      setSelcategory(category);
    
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
    }, []);
  
  const [subcategories, setSubcategories] = useState([]);
  
  useEffect(() => {
    console.log(`http://localhost:5000/api/categories/${selcategory}/subcategories`);
      fetch(`http://localhost:5000/api/categories/${selcategory}/subcategories`)
        .then((response) => response.json())
        .then((json) => setSubcategories(json));
    }, [selcategory]);



    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      console.log(`http://localhost:5000/api/categories/${selcategory}/subcategories/${selsubcategory}/products`);
        fetch(`http://localhost:5000/api/categories/${selcategory}/subcategories/${selsubcategory}/products`)
          .then((response) => response.json())
          .then((json) => setProducts(json));
      }, [selsubcategory]);

  return (
    <div className="dropDowns-container">
        <div className="dropdown">
        <select name="categories" id="selCategories" onClick={handlerLoadSubcategories}>
                <option>Seleccione...</option>
                {categories.map((category) => (
                    <option value={category._id}>{category.name} 
                    </option>
                ))}
            </select>
        </div>      

        <div className="dropdown">
        <select name="subcategories" id="selSubcategories" onClick={handlerLoadProducts}>
                <option>Seleccione...</option>
                {subcategories.map(subcategory => (
                    <option value={subcategory._id}>{subcategory.name} 
                    </option>
                ))}
            </select>
        </div>   

        <div className="productSelection_container">
            
            {products.map(product => (
                <ProductCard  
                urlImage={product.urlImage} 
                name={product.name} 
                description={product.description}
                price={product.price}/>
            ))}
        </div>

    </div>
  );
};


export default DropDowns;

