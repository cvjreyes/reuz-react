

import listingsLogo from "../../assets/sideBar/Vector0.png";

const yourListings = () => {

    return (
        <div className="div__sections">
            <img className="sections__container" src={listingsLogo} alt="listings Logo" />
            <span className="sections__container">Your Listings</span>
        </div>
    )
}


export default yourListings;