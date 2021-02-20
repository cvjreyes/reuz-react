

import purchasesLogo from "../../assets/sideBar/Vector3.png";

const yourPurchases = () => {

    return (
        <div className="div__sections">
            <img className="sections__container" src={purchasesLogo} alt="purchases Logo" />
            <span className="sections__container">Purchases</span>
        </div>
    )
};

export default yourPurchases;