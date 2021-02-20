

import messagingLogo from "../../assets/sideBar/Vector2.png";

const yourMessaging = () => {

    return (
        <div className="div__sections">           
            <img className="sections__container" src={messagingLogo} alt="messaging Logo" />
            <span className="sections__container" cursor="pointer" >Messaging</span>
        </div>
    )
};

export default yourMessaging;