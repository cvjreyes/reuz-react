import './navBar.css';
import Logo from '../../assets/logo.png';



const NavBar = ( {Logo} ) => {
    return (
 
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





        
    );
};




export default NavBar;