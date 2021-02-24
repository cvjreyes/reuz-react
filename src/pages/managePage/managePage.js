import "./managePage.css";
import SideBar from "../../components/sideBar/sideBar";
import NavBar2 from "../../components/navBar2/navBar2";
import ProductSelection from "../../components/productSelection/productSelection";
import ShowMore from "../../components/showMore/showMore";
import Footer from "../../components/footer/footer";
import {useEffect, useState } from "react";
import ProductCard from "../../components/productCard/productCard";
import ProductList from "../../components/productList/productList";
import { Button } from "antd";
import { Link } from "react-router-dom";

const ManagePage = () => {
    return (
        <div>
            <div>
            <NavBar2 />
            <Button className= "button_createListing">Create listing</Button>
            <Link className= "create">Edit and create listings</Link>
            <ProductList className= "productList_container" />
            <Link className= "review">Review your listings</Link>
            </div>
            <div>
            <SideBar className="sidebar__container"></SideBar> ></div>
            <div>
            <ShowMore />
            <Footer />
            </div>
            </div>
            
    )
};
 export default ManagePage;