import React, {
    useState
} from 'react';
import ProductDetails from "../../components/forms/productDetails";
import ProductImages from "../../components/forms/productImages";
import "./uploadProduct.css";
import ListBody from 'antd/lib/transfer/ListBody';
import PhotoLoader from "../../components/photoLoader/photoLoader";
const UpLoadProduct = () => {
    /* Controls the form to be rendered */
    /* Controls the fetch heading towards MongoDB at API endpoint */
    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        name: undefined,
        price: undefined,
        discount: undefined,
        address: undefined,
        subcategories_id: undefined,
        category_id: undefined,
        description: undefined,
    });
    //Body: conforms the key/values to be send to MongoDB
    const body = {
        name: formData.name,
        price: formData.price,
        discount: formData.discount,
        address: formData.address,
        product_subcategory_id: formData.subcategories_id,
        product_category_id: formData.category_id,
        description: formData.description,
    };
    //Executes the fetch function at the end of the form process
    const [productCreated, setProductCreated] = useState();
    const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch('http://localhost:5000/api/products', options)
            .then(response => response.json())
            .then(json => {
                console.log("Producto creado!", json);
                setProductCreated(json);
            });
    }
    const [visibleForm, setVisibleForm] = useState("first")
    const handlevisibleForm = () => {
        setVisibleForm("second")
    }
    const handleCreateNext = () => {
        handleCreate()
        handlevisibleForm()
    }
   
    
    return (
        <div >
            {
                visibleForm === "first" &&
                <ProductDetails
                    formData={formData}
                    setFormData={setFormData}
                    action={handleCreateNext}
                />
            }
            {
                visibleForm === "second" && productCreated &&
                <ProductImages
                    productCreated={productCreated}
                />
            }
        </div>
    )
}
export default UpLoadProduct;
