import "./dropDowns.css";
import "./rangeSlider.js";



const DropDowns = () => {

  return (
    <div className="dropDowns-container">
        <div className="dropdown">
            <select>
                    <option value="Choose">Categories</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 3</option>
                    <option value="Category 4">Category 4</option>
            </select>
        </div>      

        <div className="dropdown">
            <select>
                    <option value="Choose">Subcategories</option>
                    <option value="Subcategories 1">Subcategories 1</option>
                    <option value="Subcategories 2">Subcategories 2</option>
                    <option value="Subcategories 3">Subcategories 3</option>
                    <option value="Subcategories 4">Subcategories 4</option>
            </select>
        </div>   

        

    </div>
  );
};
