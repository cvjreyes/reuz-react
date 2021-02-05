import "./products.css";
import NavBar from "../../components/navBar/navBar";
import ProductSelecction from "../../components/productSelection/productSelection";
import ShowMore from "../../components/showMore/showMore";
import Footer from "../../components/footer/footer";
import ProductSelection from "../../components/productSelection/productSelection";

export const Products = () => {
    return (
        <div>
            <div className="navbar__container">
                <NavBar />
            </div>
    

        <ProductSelection/>
        <ShowMore/>
        <Footer/>
        </div>
    )
}
export default Products;

