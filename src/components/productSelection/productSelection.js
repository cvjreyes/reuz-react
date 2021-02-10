import { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";
import "./productSelection.css";




const ProductSelection = () => {
    
    const [selcategory, setSelcategory] = useState([]);



    const handlerLoadSubcategories = function (e) {
        
        const category = e.target.value;
        setSelcategory(category);
      
    }

    console.log();
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
    
    return (
      

                    
            <div className="productSelection_container">
            
                {products.map(product => (
                    <ProductCard  
                    urlImage={product.urlImage} 
                    name={product.name} 
                    description={product.description}
                    price={product.price}/>
                ))}
            </div>

    );
};

export default ProductSelection;