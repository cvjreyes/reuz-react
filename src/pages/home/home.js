import React, { useState } from 'react';
import "./home.css";
import NavBar from "../../components/navBar/navBar";
import Postit from "../../components/postit/postit";
import Icon from "../../components/icon/icon";
import ProductSelection from "../../components/productSelection/productSelection";
import ShowMore from "../../components/showMore/showMore";
import Footer from "../../components/footer/footer";
import Carrousel from "../../components/carousel/carousel";
//import { Carousel } from "antd";

import Modal from "../../components/modal/Modal"
import SignupForm from "../../components/forms/SignupForm"
import LoginForm from "../../components/forms/LoginForm"


export const Home = () => {

  const [knownUser, setKnownUser] = useState(false);

  const [signupVisibility, setSignupVisibility] = useState(false);
  const [loginVisibility, setLoginVisibility] = useState(false)

  const handleSignupModal = () => {
    setSignupVisibility(!signupVisibility)
  }

  const handleLoginModal = () => {
    setLoginVisibility(!loginVisibility)
  }

  const changeModal = () => {
    handleLoginModal();
    handleSignupModal();
  }

  return (
    <div>
      <NavBar
        knownUser={knownUser}
        handleSignupModal={handleSignupModal}
        handleLoginModal={handleLoginModal}
      />
      <Carrousel />
      <Postit
        title="The best second hand items"
        description="Our forniture is made from selected and best 
        quality materials that are suitable for your dream home"
        button="Buy now!"
      />
      <Icon />
      <ProductSelection />
      <ShowMore />
      <Footer />
      <>
        <Modal
          visibility={signupVisibility}
          setVisibility={setSignupVisibility}
          content={
            <SignupForm changeModal={changeModal}/>
          }
        />
        <Modal
          visibility={loginVisibility}
          setVisibility={setLoginVisibility}
          content={
            <LoginForm changeModal={changeModal}/>
          }
        />
      </>
    </div>
  );
};

export default Home;
