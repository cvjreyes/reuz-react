import ProductSelection from "../../components/productSelection/productSelection";
import Postit from "../../components/postit/postit";
import Icon from "../../components/icon/icon";
import Footer from "../../components/footer/footer";
import "./home.css";
//import Buscador from "../../components/buscador/buscador";
import { Input } from 'antd';
//import { Carousel } from 'antd';
//import 'antd/dist/antd.css';
//import { image } from "./assets
import Header from "../../components/header/header"

export const Home = () => {
  return (
    <div>
        <Input placeholder="Search for anything!" className="buscador__container" />
        <Header />
        <Postit 
        title="The best second hand items"
        description="Our forniture is made from selected and best quality materials that are suitable for your dream home"
        button="Compra ya!"/>
        <Icon 
            urlImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png" 
            title="Champions in variety" 
            description="Thousands of products"
            icon1="imagen iconica"/>
            <Footer />
        <ProductSelection />
    </div>  
  )
};
export default Home;

