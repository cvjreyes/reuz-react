import React, { useEffect, useState } from 'react';
import "./navBar.css";
import Logo from "../../assets/navBar/logo.png";
import vector from "../../assets/navBar/Vector.svg";
import Ellipse from "../../assets/navBar/ellipse.svg";
import userAvatar from "../../assets/navBar/ellipse2.svg";
import Dropdown from "../../components/dropDown/dropDown";
import Button from "../button/Button";
import { Link } from 'react-router-dom';

const NavBar = ({ knownUser, handleSignupModal, handleLoginModal, handleLogout, products, setProducts }) => {

  /* Search by name and description for products */

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const body = {
      name: searchInput,
      description: searchInput
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    if (searchInput.length > 4) {
      /* If input is longer than four characters proceed with search */
      fetch("http://localhost:5000/api/products/search", options)
        .then((response) => response.json())
        .then((json) => setProducts(json))
    } else {
      /* Else, if less than four characters get all products and render them */
      fetch("http://localhost:5000/api/products")
        .then((response) => response.json())
        .then((json) => setProducts(json));
    }
  }, [searchInput])

  return (
    <div className="navBar">
      <div className="navBar__left">
        <Link to="/">
          <img
            className="logo"
            src={Logo}
            alt="Reuz logo"
          />
        </Link>
        {knownUser === false &&
          <div className="navBar__dropDown">
            <Link to="/products">
              <span
                className="dropDown__title"
              >Products</span>
            </Link>
            <Dropdown />
          </div>
        }
      </div>

      <div className="navBar__searchBox">
        <div className="searchBox_ellipse">
          <img alt="" src={Ellipse} />
        </div>
        <input
          type="text"
          className="searchBox__input"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for anything!">
        </input>
      </div>

      {knownUser === true &&
        <div className="navBar__right">
          <Link to="/yourListings">
            <img className="right__heartIcon" alt=":corazones:" src={vector} />
          </Link>
          <Link to="/yourListings">
            <img className="right__userAvatar" alt="immagine" src={userAvatar} />
          </Link>
          <Link to="/">
            <Button name="Log out" onClick={handleLogout} />
          </Link>
        </div>
      }
      {knownUser === false &&
        <div className="navBar__right">
          <p className="navbar_text_link" onClick={handleSignupModal}>Sign Up</p>
          <Button name="Log in" onClick={handleLoginModal} />
        </div>
      }
    </div>
  );
};


export default NavBar;
