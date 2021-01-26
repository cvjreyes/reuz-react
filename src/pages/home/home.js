import "./home.css";
import NavBar from "../../components/navBar/navBar";
import Header from "../../components/header/header";
import Postit from "../../components/postit/postit";
import Icon from "../../components/icon/icon";
import ProductSelection from "../../components/productSelection/productSelection";
import ShowMore from "../../components/showMore/showMore";
import Footer from "../../components/footer/footer";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Postit
        title="The best second hand items"
        description="Our forniture is made from selected and best quality materials that are suitable for your dream home"
        button="Compra ya!"
      />
      <Icon />
      <ProductSelection />
      <ShowMore />
      <Footer />
    </div>
  );
};
export default Home;
