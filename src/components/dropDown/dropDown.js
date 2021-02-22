//import { Dropdown } from "antd";
import { useState } from "react";
import "./dropDown.css";
//import DropLine from "../../assets/navBar/Line.svg";

const Dropdown = () => {
    const [showDropDown, setshowDropDown] = useState(false);
    return(
        <div className="productsDropdown__container">
            <div className="productsDropdown__anchor" onClick={()=> setshowDropDown(!showDropDown)}>
               
            </div>
            { showDropDown && (
            <div className="productDropdown__dropdown">
                <div className="dropdown__item">Coches</div>
                <div className="dropdown__item">Motos</div>
                <div className="dropdown__item">Hogar</div>
                <div className="dropdown__item">Mòviles</div>
                <div className="dropdown__item">Informatica y electrònica</div>
                <div className="dropdown__item">Deporte</div>
            </div>
     )}
        </div>
    )
} 

export default Dropdown;