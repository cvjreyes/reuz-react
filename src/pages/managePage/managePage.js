import "./managePage.css";
import SideBar from "../../components/sideBar/sideBar";
import ShowMore from "../../components/showMore/showMore";
import ProductList from "../../components/productList/productList";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const ManagePage = ({ user }) => {
    return (
        <>
            <SideBar className="sidebar__container"/>
            <div className="managerMain__container">
                <Button name="Create listing" />
                <Link className="create">Edit and create listings</Link>
                <ProductList className="productList_container" user={user} />
                <Link className="review">Review your listings</Link>
                <Button name="Show more" />
            </div>
            
        </>

    )
};
export default ManagePage;