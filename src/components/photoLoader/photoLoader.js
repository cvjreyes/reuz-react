import { React, useState } from "react";
import uploadPicture from "../../assets/uploadPicture/uploadPicture.svg";
import "./photoLoader.css";

const PhotoLoader = ({ userId, currentStep }) => {
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
  }
  return (
    <>
      {photoArray &&
        photoArray.map((photo) => {
          const src = `data:${photo.mim};base64,${photo.image}`;
          return (
            <img
              src={src}
              alt="uploaded_image"
              className="photoloader__photouploaded"
            />
          );
        })}
      {content}
    </>
  );
};

export default PhotoLoader;