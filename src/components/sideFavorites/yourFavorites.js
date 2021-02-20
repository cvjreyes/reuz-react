

import favoritesLogo from "../../assets/sideBar/Vector1.png";

const yourFavorites = () => {

    return (
            <div className="div__sections">
                <img className="sections__container" src={favoritesLogo} alt="favorites Logo" />
                <span className="sections__container">Your Favourites</span>
            </div>
    )
};

export default yourFavorites;