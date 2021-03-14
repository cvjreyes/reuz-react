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

    });
    //Body: conforms the key/values to be send to MongoDB
    const firstbody = {
        name: formData.name,
        price: formData.price,
        discount: formData.discount,
        address: formData.address,

    };
    console.log(firstbody);
    //Executes the fetch function at the end of the form process
    const [productId, setProductId]= useState();

    const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            firstbody: JSON.stringify(firstbody),
        };
        fetch('http://localhost:5000/api/products', options)
        .then (response => response.json())
        .then (json => console.log(json))
        //.then (json => setProductId(json))
        console.log("Product created");
    
    }
    const [visibleForm, setVisibleForm] = useState("first")
    const handlevisibleForm = () => {
        setVisibleForm("second")
    }
    const handleCreateNext = () => {
        handleCreate()
        handlevisibleForm()
    }
    /*//////////////////////////////////*/
    const [descData, setDescData] = useState({
        description: undefined
    });
    //Body: conforms the key/values to be send to MongoDB
    const secondbody = {
        description: descData.description
    };
    const updateDescription = () => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(secondbody),
        };
        fetch(`http://localhost:5000/api/categories/products/${productId}`, options);
        console.log("Product created");
    }
    const [photoArray, setPhotoArray] = useState([]);
    //Body: conforms the key/values to be send to MongoDB
    const photoLoad = {
        photoArray: photoArray
    };
    const uploadPhotos= () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(photoLoad)
        };
        fetch(`http://localhost:5000/api/photos/${productId}`, options);
        console.log("Photo uploaded");

    };
    return ( <div> {visibleForm === "first" &&
            <ProductDetails
            formData = {formData}
            setFormData = {setFormData}
            action = {handleCreateNext}/>
        } {visibleForm === "second" &&
        <ProductImages
            photoArray = {photoArray}
            setPhotoArray = {setPhotoArray}
            secondAction = {uploadPhotos}/>
        } </div>
    )
}
export default UpLoadProduct;