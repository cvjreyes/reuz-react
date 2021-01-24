import ProductSelection from "../../components/productSelection/productSelection";
import Postit from "../../components/postit/postit";
import Icon from "../../components/icon/icon";
//import "home.css";

export const Home = () => {
    return (
    <div>
        <Postit 
        title="The best second hand items"
        description="Our forniture is made from selected and best quality materials that are suitable for your dream home"
        button="Compra ya!"/>
        <Icon 
            urlImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png" 
            title="Champions in variety" 
            description="Thousands of products"/>
        <ProductSelection 
        />
        </div>
        )
        };

export default Home;