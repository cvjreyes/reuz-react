import "./managePage.css";
import SideBar from "../../components/sideBar/sideBar";
//import NavBar2 from "../../components/navBar2/navBar2";
import ProductSelection from "../../components/productSelection/productSelection";
import ShowMore from "../../components/showMore/showMore";
import Footer from "../../components/footer/footer";
import {useEffect, useState } from "react";
import ProductCard from "../../components/productCard/productCard";
import ProductList from "../../components/productList/productList";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
//import Footer from "../../components/footer/footer";
import { Components } from "antd/lib/date-picker/generatePicker";

const ManagePage = ({ user }) => {
    return (
        <div className="manager__container">
            <SideBar className="sidebar__container" />
            <div className="elementsArea__container">
                <div className="topArea__container">
                    <div className="elementsArea__text">
                        <Link className="review">Review your listings</Link>
                        <Link className="create">Edit and create listings</Link>
                    </div>
                    <div className="elementsArea__button">
                        <Button name="Create listing" />
                    </div>
                </div>
                <div className="products__container">
                    <ProductList className="productList_container" user={user} />
                </div>
                <Button name="Show more" />
            </div>
            <div>
            <SideBar className="sidebar__container"></SideBar> </div>
            <div>
            <ShowMore />
            <Footer />
            </div>
            </div>
            
    )
};
export default ManagePage;