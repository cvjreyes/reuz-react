import "./products.css";
import NavBar from "../../components/navBar/navBar";
import ProductSelection from "../../components/productSelection/productSelection";
import ShowMore from "../../components/showMore/showMore";
import Footer from "../../components/footer/footer";
import DropDowns from "../../components/dropDowns/dropDowns";
//import Demo from "../../components/dropDonws/rangeSlider"



export const Products = () => {
    return (
        <div>
            <div className="navbar__container">
            <NavBar />
                <div className="dropDowns-container">
                    <DropDowns /> 
                    
                </div>
            </div>

            {/* <ProductSelection className="productos__container"/> */}
            <ShowMore />
            <Footer />
        </div>
    )
}
 export default Products;