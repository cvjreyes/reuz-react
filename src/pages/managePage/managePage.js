import "./managePage.css";
import SideBar from "../../components/sideBar/sideBar";
import ShowMore from "../../components/showMore/showMore";
import ProductList from "../../components/productList/productList";
import Button from "../../components/button/Button";
import { Link, useHistory } from "react-router-dom";

const ManagePage = ({ user }) => {

    const history = useHistory();

    const goToUploadProduct = () => {
        history.push('/uploadProduct')
    }

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
                        <Button name="Create listing" onClick={goToUploadProduct} />
                    </div>
                </div>
                <div className="products__container">
                    <ProductList className="productList_container" user={user} />
                </div>
                <Button name="Show more" />
            </div>
        </div>

    )
};
export default ManagePage;