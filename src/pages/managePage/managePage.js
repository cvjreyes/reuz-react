import "./managePage.css";
import SideBar from "../../components/navBar/navBar";
import ProductSelection from "../../components/productSelection/productSelection";
import ShowMore from "../../components/showMore/showMore";
import Footer from "../../components/footer/footer";
import {useEffect, useState } from "react";
//import ProductCard from "../../components/productCard/productCard";
import ProductList from "../../components/productList/productList";

const ManagePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/users/5fda64ec381302d9f3a7438a/products")
        .then ((response) => response.json())
        .then ((json) => setProducts(json));
    },[]);

    return (
        <div>
        
            <div className="sidebar__container">
            <SideBar />
            </div>
            <ProductList products={products} className="productslist__container" />
            <ShowMore />
            <Footer />
        </div>
    )
};
 export default ManagePage;