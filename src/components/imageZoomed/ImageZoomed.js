import { React } from "react";
import './ImageZoomed.css';
import CloseButton from "../../assets/close.svg";


const ImageZoomed = ({ visibility, setVisibility, content }) => {

  const showHideClassName = visibility ? "imageZoom display-block" : "imageZoom display-none";

  const handleClose = () => {
    setVisibility(false)
  }

  return (
    <div className={showHideClassName}>
      <section className="imageZoom__main">
        <div className="close_button_container">
          <img src={CloseButton} onClick={handleClose} />
        </div>
        {content}
      </section>
    </div>
  );
}

export default ImageZoomed;