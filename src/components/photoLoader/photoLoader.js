import React, {useState} from 'react';
import uploadPicture from "../../assets/uploadPicture/uploadPicture.svg";
import vectorAdd from "../../assets/uploadPicture/vectorAdd.svg";
import "./photoLoader.css";
const PhotoLoader = ({ productId }) => {
  const [photoArray, setPhotoArray] = useState([]);
  console.log(photoArray)

  const MAX_ALLOWED = 6;
  const photosAllowed = MAX_ALLOWED - photoArray.length;
  const content = [];
  console.log(content)


  const handleImageUpload = (e) => {
    debugger;
    console.log(e.target.files[0])

    let form_data = new FormData(); // https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData
    form_data.append("photo_product_id",productId);
    form_data.append("photo", e.target.files[0]);
    
    const options = {
      method: "POST",
      body: form_data,
    };
   fetch(`http://localhost:5000/api/photos/${productId}/photos`, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((response) => {
        setPhotoArray(response)
      })
      .catch((error) => {
        console.log("Error when retrieving images:", error);
      });
  };
  const handleDeleteImage = (photo_id) => {
    const optionsToDelete = {
      method: "DELETE",
    }
    fetch(`http://localhost:5000/api/photos/${productId._id}/photos/ + ${photo_id}`, optionsToDelete)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((res) => setPhotoArray(res))
  }
  const MAX_ALLOWED = 5;
  const photosAllowed = MAX_ALLOWED - photoArray.length;
  const content = [];
  console.log(photoArray)
  // const photo = `data:${photo.mimeType};base64,${photo.image}`;
  for (var i = 0; i < photosAllowed; i++) {
    content.push(
      <div className="photoloader__container">
        <img src={uploadPicture} alt="" className="" />
        <img className= "vector_Add" src={vectorAdd} alt="icon_add" />
        <form
          id="photo"
          encType="multipart/form-data"
          className="form__container_of_photoloader"
          onSubmit={(e) => {
            debugger;
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
                  // eslint-disable-next-line no-undef
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