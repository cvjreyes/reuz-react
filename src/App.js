import React from "react";
import "./App.css";
import Home from "./pages/home/home";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import ProductSelection from "./components/productSelection/productSelection";
import Products from "./pages/products/products";
import Compra from "./pages/compra/compra";
import LoginForm from "./pages/loginForm/loginForm";
import SideBar from "../src/components/sideBar/sideBar.js"
import SideListings from "../src/components/sideListings/yourListings.js"
import SideFavorites from "../src/components/sideFavorites/yourFavorites.js"
import Messaging from "../src/components/sideMessaging/messaging.js"
import Purchases from "../src/components/sidePurchases/purchases.js"

//import Header from "./components/header/header";
//import Footer from "./components/footer/footer";
//import NavBar from "./components/navBar/navBar";

function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <div className="app__body__sideBar">
         
        <Router>
         <SideBar/>
  
         <Switch>
          <Route exact path="/yourListings">
          <SideListings />
          </Route>
  
          <Route exact path="/yourFavorites">
            <SideFavorites />
          </Route>
  
          <Route exaxt path="/Messaging">
             <Messaging />
          </Route>
  
          <Route exaxt path="/Purchases">
             <Purchases />
          </Route>
          </Switch>
          
        </Router>
      </div>
    );
  }

  return (
    <div className="app__body">
      <Router>
        
        <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/compra">
            <Compra />
          </Route>
          <Route exact path="/sidebar">
            <SideBar/>
          </Route>
          <Route exact path="/loginForm">
           <LoginForm/> 
          </Route>
         </Switch>
        
      </Router>
    </div>
  );
}

export default App;
