import React, { useState } from 'react';
import "./products.css";
import NavBar from "../../components/navBar/navBar";
import ProductSelection from "../../components/productSelection/productSelection";
import ShowMore from "../../components/showMore/showMore";
import Footer from "../../components/footer/footer";
import DropDowns from "../../components/dropDowns/dropDowns";
//import Demo from "../../components/dropDonws/rangeSlider"

import Modal from "../../components/modal/Modal"
import SignupForm from "../../components/forms/SignupForm"
import LoginForm from "../../components/forms/LoginForm"


export const Products = () => {

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
            <div className="navbar__container">
                <NavBar
                    knownUser={knownUser}
                    handleSignupModal={handleSignupModal}
                    handleLoginModal={handleLoginModal}
                />
                <div className="dropDowns-container">
                    <DropDowns />

                </div>
            </div>

            <ProductSelection className="productos__container" />
            <ShowMore />
            <Footer />
            <>
                <Modal
                    visibility={signupVisibility}
                    setVisibility={setSignupVisibility}
                    content={
                        <SignupForm changeModal={changeModal} />
                    }
                />
                <Modal
                    visibility={loginVisibility}
                    setVisibility={setLoginVisibility}
                    content={
                        <LoginForm changeModal={changeModal} />
                    }
                />
            </>
        </div>
    )
}
export default Products;