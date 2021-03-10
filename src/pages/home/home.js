import React from 'react';
import "./home.css";
import Postit from "../../components/postit/postit";
import Icon from "../../components/icon/icon";
import ProductSelection from "../../components/productSelection/productSelection";
import ShowMore from "../../components/showMore/showMore";
import Carrousel from "../../components/carousel/carousel";


export const Home = () => {
  
  return (
    <div>
      <Carrousel />
      <Postit
        title="The Best Second hand items"
        description="Our forniture is made from selected and best 
        quality materials that are suitable for your dream home"
        button="Shop now"
      />
      <Icon />
      <ProductSelection />
      <ShowMore />
    </div>
  );
};

export default Home;
