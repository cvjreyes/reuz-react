import React from "react";
import "./App.css";
import Home from "./pages/home/home";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import ProductSelection from "./components/productSelection/productSelection";
import Products from "./pages/products/products";
import Compra from "./pages/compra/compra";
import LoginPage from "./pages/loginPage/loginPage";
//import Header from "./components/header/header";
//import Footer from "./components/footer/footer";
//import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div className="app__body">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/compra">
            <Compra />
          </Route>
          <Route exact path="/loginForm">
            <LoginPage />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
