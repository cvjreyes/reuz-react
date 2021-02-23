import React from 'react';
import "./products.css";
import ProductSelection from "../../components/productSelection/productSelection";
import ShowMore from "../../components/showMore/showMore";
import DropDowns from "../../components/dropDowns/dropDowns";


export const Products = () => {

    return (
        <>
            <DropDowns />
            <ProductSelection className="productos__container" />
            <ShowMore />
        </>
    )
}
export default Products;