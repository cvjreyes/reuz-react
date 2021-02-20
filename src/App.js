import React, { useState } from "react";
import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom"
import Products from "./pages/products/products";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Modal from "./components/modal/Modal"
import SignupForm from "./components/forms/SignupForm"
import LoginForm from "./components/forms/LoginForm"



function App() {

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
    <div className="app__body">
      <Router>
        <NavBar
          knownUser={knownUser}
          handleSignupModal={handleSignupModal}
          handleLoginModal={handleLoginModal}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {/* Modals */}
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
    </div>
  );
}

export default App;
