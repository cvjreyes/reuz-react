
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


/* Pages */
import Home from "./pages/home/home";
import Products from "./pages/products/products";
//import Manager from "./pages/manager/manager";
import ManagePage from "./pages/managePage/managePage";

/* Components */
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Modal from "./components/modal/Modal"
import SignupForm from "./components/forms/SignupForm"
import LoginForm from "./components/forms/LoginForm"
import Slider from "./components/slider/slider";

function App() {

  const [knownUser, setKnownUser] = useState(false);
  const [loggedUser, setLoggedUser] = useState('User not logged in');

  const [signupVisibility, setSignupVisibility] = useState(false);
  const [loginVisibility, setLoginVisibility] = useState(false)

  const handleSignupModal = () => {
    setSignupVisibility(!signupVisibility)
  }

  const handleLoginModal = () => {
    setLoginVisibility(!loginVisibility)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    checkUserLoggedIn();
  }

  const changeModal = () => {
    handleLoginModal();
    handleSignupModal();
  }

  const checkUserLoggedIn = () => {
    const userLoggedIn = localStorage.getItem('user');
    if (userLoggedIn) {
      setKnownUser(true);
      const userId = JSON.parse(userLoggedIn).id;
      fetch("http://localhost:5000/api/users/" + userId)
        .then((response) => response.json())
        .then((json) => setLoggedUser(json));
    } else {
      setKnownUser(false)
    }
  }

  useEffect(() => {
    checkUserLoggedIn();
  }, [])

  return (
    <div className="app__body">
      <Router>
        <NavBar
          knownUser={knownUser}
          handleSignupModal={handleSignupModal}
          handleLoginModal={handleLoginModal}
          handleLogout={handleLogout}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
            </Route>
          <Route exact path="/yourListings">
            <ManagePage user={loggedUser}/>
          </Route>
        </Switch>
        <Footer />
        {/* Modals */}
        <Modal
          visibility={signupVisibility}
          setVisibility={setSignupVisibility}
          content={
            <SignupForm changeModal={changeModal} action={checkUserLoggedIn} />
          }
        />
        <Modal
          visibility={loginVisibility}
          setVisibility={setLoginVisibility}
          content={
            <LoginForm changeModal={changeModal} action={checkUserLoggedIn} />
          }
        />
      </Router>
    </div>
  );
}
export default App;