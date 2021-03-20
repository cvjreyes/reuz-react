
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


/* Pages */
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import ProductPage from "./pages/productPage/ProductPage";
import ManagePage from "./pages/managePage/managePage";
import ChatRoom from "./pages/messaging/chatRoom.js";
import { UserProvider } from "./contexts/userContext/userContext";

/* Components */
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Modal from "./components/modal/Modal"
import SignupForm from "./components/forms/SignupForm"
import LoginForm from "./components/forms/LoginForm"


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
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <UserProvider>
    <div className="app__body">
      <Router>
        <NavBar
          knownUser={knownUser}
          handleSignupModal={handleSignupModal}
          handleLoginModal={handleLoginModal}
          handleLogout={handleLogout}
          products={products}
          setProducts={setProducts}
        />
        <Switch>
          <Route exact path="/">
            <Home
              products={products}
            />
          </Route>
          <Route exact path="/products">
            <Products
              products={products}
              setProducts={setProducts} />
          </Route>
          <Route exact path="/messaging/:id">
              <ChatRoom user={loggedUser}/>
          </Route>
          <Route exact path="/products/:id">
            <ProductPage user={loggedUser} />
          </Route>
          <Route exact path="/yourListings">
            <ManagePage user={loggedUser} />
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
    </UserProvider>
  );
}
export default App;