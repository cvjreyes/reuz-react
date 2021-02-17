import React, { useState } from 'react';
import Modal from "../../components/modal/Modal"
import SignupForm from "../../components/forms/SignupForm"
import LoginForm from "../../components/forms/LoginForm"

const loginPage = () => {

    return (
        <>
            <Modal visible="true" content={<SignupForm />} />
            {/* <Modal visible="true" content={<LoginForm />} /> */}
        </>
    )
}


export default loginPage;