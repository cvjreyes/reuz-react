import React, {useState} from 'react';
import ProductDetails from "../../components/forms/productDetails";
import ProductImages from "../../components/forms/productImages";
import "./uploadProduct.css";
import ListBody from 'antd/lib/transfer/ListBody';
import PhotoLoader from "../../components/photoLoader/photoLoader";
import uploadPicture from "../../assets/uploadPicture/uploadPicture.svg";
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
        subcategories_id: formData.subcategories_id,
        category_id: formData.category_id,
        description: formData.description,
    };
    console.log(body);
    //Executes the fetch function at the end of the form process
    const [productId, setProductId] = useState();
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
                setProductId(json);
            });
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
        description: descData.description,
      //  id: productId
    };
    const updateDescription = () => {
        const options = {
              method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(secondbody),
        };
        fetch(`http://localhost:5000/api/products/${productId._id}`, options)
            .then(response => response.json())
            .then(json => console.log(json))
            .then(json => setDescData(json.productId))
    }
    const UploadPhotos = ({ userId, currentStep }) => {
        const [photoArray, setPhotoArray] = useState([]);
        const handleImageUpload = (e) => {
          /* TODO: DEFINE PUT/POST ACTION AGAINST MONGODB */
          let form_data = new FormData(); // https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData
          form_data.append("updated", new Date());
          form_data.append("photo", e.target.files[0]);
          form_data.append("signup_step", currentStep + 1);
          form_data.append("signup_completed", true);
          const options = {
            method: "POST",
            body: form_data,
          };
        }; 
        console.log(photoArray);
        
        const MAX_ALLOWED = 6;
        const photosAllowed = MAX_ALLOWED - photoArray.length;
        const content = [];
        // const photo = `data:${photo.mimeType};base64,${photo.image}`;
        for (var i = 0; i < photosAllowed; i++) {
          content.push(
            <div className="photoloader__container">
              <div className= "photoCard__container"  src={uploadPicture} alt="upload_Picture" />
              <form
                id="photo"
                encType="multipart/form-data"
                className="form__container"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="file"
                  name="photos"
                  id="photos"
                  onChange={handleImageUpload}
                />
              </form>
            </div>
          );
        }}
    const handleUpLoad = () => {
        updateDescription()
        UploadPhotos()
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
                visibleForm === "second" &&
                <ProductImages
                    descData={descData}
                    setDescData={setDescData}
                    secondAction={handleUpLoad}
                />
            }
        </div>
    )
}
export default UpLoadProduct;