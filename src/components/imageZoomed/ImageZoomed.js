import { React } from "react";
import './ImageZoomed.css';
import CloseButton from "../../assets/close.svg";
import ellipse4 from "../../assets/Ellipse4.png";
import ellipse5 from "../../assets/Ellipse5.png";


const ImageZoomed = ({ visibility, setVisibility, content }) => {

  const showHideClassName = visibility ? "imageZoom display-block" : "imageZoom display-none";

  const handleClose = () => {
    setVisibility(false)
  }

  return (
    <div className={showHideClassName}>
      <section className="imageZoom__main">
        <div className="actions_container">
          <div className="arrow_button_container">
            <div>
              <button /* onClick={} */ className="button__container2">
                <img alt="atras" src={ellipse4} className="button_img_container"></img>
              </button>
            </div>
            <div>
              <button /* onClick={} */ className="button__container1">
                <img alt="adelante" src={ellipse5} className="button_img_container"></img>
              </button>
            </div>
          </div>
          <div className="close_button_container">
            <img src={CloseButton} onClick={handleClose} />
          </div>
        </div>
        {content}
      </section>
    </div>
  );
}

export default ImageZoomed;