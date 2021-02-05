import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//import ProductSelection from "./components/productSelection/productSelection";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
//import Compra from "./pages/compra/compra";
//import LoginForm from "./pages/loginForm/loginForm";
//import Header from "./components/header/header";
//import Footer from "./components/footer/footer";
//import NavBar from "./components/navBar/navBar";

function App() {
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
         
         
         </Switch>
        
      </Router>
    </div>
  );
}

export default App;





  //return (
    //<div>
      //<Router>
       //<Home/>
         //<Switch>
        //<Route>
        //</Route>
        //<Route>
         //<Products exact path="/products"/>
        //</Route>
        //</Switch>
      //</Router>

    //</div>
  //);
//}

//export default App;
