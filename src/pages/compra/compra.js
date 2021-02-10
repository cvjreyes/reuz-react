import "./compra.css";
import NavBar from "../../components/navBar/navBar";
import ShowMore from "../../components/showMore/showMore";
import Footer from "../../components/footer/footer";
import ProductSelection from "../../components/productSelection/productSelection";

export const Compra = () => {
    return (
        <div>
            <NavBar />
            <ProductSelection />
            <ShowMore />
            <Footer />
        </div>
    )
}
 export default Compra;