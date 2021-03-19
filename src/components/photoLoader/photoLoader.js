import React, { useEffect, useState } from 'react';
import uploadPicture from "../../assets/uploadPicture/uploadPicture.svg";
import deletePicture from "../../assets/vector.svg";
import "./photoLoader.css";
const PhotoLoader = ({ productId }) => {

  const [photoArray, setPhotoArray] = useState([]);
  console.log(photoArray)

  const MAX_ALLOWED = 6;
  const photosAllowed = MAX_ALLOWED - photoArray.length;
  const content = [];
  console.log(content)


  const handleImageUpload = (e) => {
    console.log(e.target.files[0])

    const options = {
      method: "POST",
      body: {
        created: new Date(),
        updated: new Date(),
        mimeType: "image/jpeg",
        photo_product_id: productId,
        photo: e.target.file[0]
      },
    };

    fetch(`http://localhost:5000/api/photos`, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((response) => {
        setPhotoArray(...photoArray, response)
      })
      .catch((error) => {
        console.log("Error when retrieving images:", error);
      });
  };


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
            </div>
          );
        })}
      {content}
    </>
  );
};


export default PhotoLoader;