import React, {useState} from 'react';
import uploadPicture from "../../assets/uploadPicture/uploadPicture.svg";
import deletePicture from "../../assets/delete.svg";
import "./photoLoader.css";
const PhotoLoader = ({ productId, currentStep }) => {
  const [photoArray, setPhotoArray] = useState([]);
  const handleImageUpload = (e) => {
    /* TODO: DEFINE PUT/POST ACTION AGAINST MONGODB */
    let form_data = new FormData(); // https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData
    form_data.append("updated", new Date());
    form_data.append("photo", e.target.files[0]);
    form_data.append("signup_step", currentStep + 1);
    form_data.append("signup_completed", true);
;

    const options = {
      method: "POST",
      body: form_data,
    };
    fetch(`http://localhost:5000/api/photo/${productId._id}`, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((response) => {
        setPhotoArray(response)
        console.log(response)
      })
      .catch((error) => {
        console.log("Error when retrieving images:", error);
      });
    //fetch de les imatges del user
    // .then(respobse => setPhotoArray([respose]))
  };
  const handleDeleteImage = (photo_id) => {
    const optionsToDelete = {
      method: "DELETE",
    }
    fetch(`http://localhost:5000/api/photo/${productId._id} + photo_id`, optionsToDelete)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((res) => setPhotoArray(res))
  }
  const MAX_ALLOWED = 6;
  const photosAllowed = MAX_ALLOWED - photoArray.length;
  const content = [];
  console.log(photoArray)
  // const photo = `data:${photo.mimeType};base64,${photo.image}`;
  for (var i = 0; i < photosAllowed; i++) {
    content.push(
      <div className="photoloader__container">
        <img src={uploadPicture} alt="" className="" />
        <form
          id="photo"
          encType="multipart/form-data"
          className="form__container_of_photoloader"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label
            id="labelPhotos-input"
            className="labelPhotos-input"
            for="photos-input">
            Click here to upload an image </label>
          <input
            type="file"
            name="photos"
            id="photos-input"
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
            <div className="photoloader__photouploaded__container">
              <img
                src={src}
                alt="uploaded_image"
                className="photoloader__photouploaded" />
              <div className="deleteButton" onClick={() => handleDeleteImage(photo.id)}>
                <img
                  id="photo_aleady_uploaded"
                  src={deletePicture}
                  alt="delete_icon"
                  className="deleteIcon2" />
              </div>
            </div>
          );
        })}
      {content}
    </>
  );
};
export default PhotoLoader;