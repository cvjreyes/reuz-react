import './navBar.css';
import Logo from '../../assets/navBar/logo.png';
import desplegable from '../../assets/navBar/Line.svg';
import vector from '../../assets/navBar/Vector.svg';
import Ellipse from '../../assets/navBar/ellipse.svg';
import userAvatar from '../../assets/navBar/ellipse2.svg';



const NavBar = () => { 
     return (
        <div className="navBar">
            <div className="navBar__left">
                <img className="logo" src={Logo} alt="Reuz logo" />
                
                <div className="navBar__dropDown">
                    <span className="dropDown__title">Products</span>
                    <img className="dropDown__arrow" alt="Drop down arrow" src={desplegable}/>
                </div>
            </div>     


            <div className="navBar__searchBox">
                <div className="searchBox_ellipse">
                <img alt="" src={Ellipse}/>
                </div> 
                <input type="text" className="searchBox__input"></input>
            </div>
            


            <div className="navBar__right">
                <img className="right__heartIcon" alt="♥" src={vector}/>
                <img className="right__userAvatar" alt="immagine" src={userAvatar}/>
            </div>
        </div>




 /*



        <span classeName="productos">Products</span>
      <img className="logito" alt="el logo" src={logo} onClick={handleClick}/>
      <img className="flecha1" alt="flechita" src={desplegable} onClick={handleClick}/>
      <img className="vector" alt="♥" src={vector}/>
      <img className="userimagen" alt="immagine" src={userimagen}/>




        <div className="navBar">
            <div className="navBarLeft">
                <img className="logo" src={Logo} alt="Logo Reuz" />
                <span className="dropMenu">Products</span>
            </div>


            <div className="navBarRight">
                <div className="heartIcon">Icon</div>

                <div className="userAvatar"></div>
            </div>
        </div>
*/




        
    );
};




export default NavBar;