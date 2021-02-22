import logo from "../../assets/navBar/logo.png";
import "./sideBar.css";
import { Link, useHistory } from "react-router-dom"
import { useState } from "react";
import listingsLogo from "../../assets/sideBar/Vector0.png";
import favoritesLogo from "../../assets/sideBar/Vector1.png";
import messagingLogo from "../../assets/sideBar/Vector2.png";
import purchasesLogo from "../../assets/sideBar/Vector3.png";



const SideBar = () => {
    const [yourListings, setYourListings] = useState();
    const [yourFavorites, setYourFavorites] = useState();
    const [messaging, setMessaging] = useState();
    const [purchases, setPurchases] = useState();

const history = useHistory ();

return (
    <div className="sideBar__container">
                <div className="logo__container"> 
                <Link to='/' >
                <img className="sections__container" src={logo} alt="logo" className="logo_Reuz"/>
                </Link>
                </div>
                <div className="div__sections">
                <Link to='/yourListings' style={{ textDecoration: 'none' }}>
                <img className="sections__container" src={listingsLogo} alt="listings Logo" />
                    <span className="sections__container"><b>Your Listings</b></span>
                </Link>
                </div>
                <div className="div__sections">
                <Link to='/yourFavorites' style={{ textDecoration: 'none' }}>
                <img className="sections__container" src={favoritesLogo} alt="favorites Logo" />
                    <span className="sections__container">Your Favourites</span>
                </Link>
                </div>
                <div className="div__sections">
                <Link to='/messaging' style={{ textDecoration: 'none' }}>
                <img className="sections__container" src={messagingLogo} alt="messaging Logo" />
                    <span className="sections__container">Messaging</span>
                </Link>
                </div>
                <div className="div__sections">
                <Link to='/purchases' style={{ textDecoration: 'none' }}>
                <img className="sections__container" src={purchasesLogo} alt="purchases Logo" />
                    <span className="sections__container">Purchases</span>
                </Link>
                </div>
                <div className="button__sections">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <button className="logOutButton"> Log out </button>
                </Link>
                </div>
        </div>

)
};

export default SideBar;